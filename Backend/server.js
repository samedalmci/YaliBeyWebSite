const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // ✅ EKLE

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test endpoint
app.get('/', (req, res) => {
  res.json({ ok: true });
});

// ---------- LOGIN ENDPOINT ----------
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Gelen username:', username);
  console.log('Gelen password:', password);

  if (!username || !password) {
    return res.status(400).json({ message: 'username ve password zorunlu' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM admins WHERE username = $1',
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Kullanıcı bulunamadı' });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Şifre hatalı' });
    }

    // ✅ TOKEN OLUŞTUR
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || 'gizli-anahtar-buraya', // .env'e ekle
      { expiresIn: '24h' }
    );

    // ✅ TOKEN'I DÖNDÜR
    res.json({ 
      message: 'Giriş başarılı', 
      token,
      userId: user.id, 
      username: user.username 
    });
  } catch (err) {
    console.error('Login sırasında hata:', err);
    res.status(500).json({ message: 'Server hatası' });
  }
});

// ---------- EVENTS CRUD ----------
app.post('/events', async (req, res) => {
  const { title, name, phone, startTime, endTime, icon, date, personId } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Calendar (PersonID, PersonName, PersonNumber, EventName, EventIcon, EventDate, StartTime, EndTime)
       VALUES ($1,$2,$3,$4,$5,$6::date,$7,$8)
       RETURNING EventID`,
      [personId, name, phone, title, icon, date, startTime, endTime]
    );
    res.json({ message: 'Etkinlik kaydedildi', eventId: result.rows[0].eventid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server hatası' });
  }
});

app.get('/events', async (req, res) => {
  const { month } = req.query;
  try {
    const result = await pool.query(
      `SELECT EventID, PersonID, PersonName, PersonNumber, EventName, EventIcon, 
              to_char(EventDate, 'YYYY-MM-DD') as EventDate, 
              StartTime, EndTime
       FROM Calendar
       WHERE to_char(EventDate,'YYYY-MM') = $1
       ORDER BY EventDate, StartTime`,
      [month]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server hatası' });
  }
});

app.put('/events/:id', async (req, res) => {
  const { id } = req.params;
  const { title, name, phone, startTime, endTime, icon, date } = req.body;
  try {
    const result = await pool.query(
      `UPDATE Calendar 
       SET PersonName = $1, PersonNumber = $2, EventName = $3, EventIcon = $4, 
           EventDate = $5::date, StartTime = $6, EndTime = $7
       WHERE EventID = $8
       RETURNING EventID`,
      [name, phone, title, icon, date, startTime, endTime, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Etkinlik bulunamadı' });
    }

    res.json({ message: 'Etkinlik güncellendi', eventId: result.rows[0].eventid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server hatası' });
  }
});

app.delete('/events/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `DELETE FROM Calendar WHERE EventID = $1 RETURNING EventID`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Etkinlik bulunamadı' });
    }

    res.json({ message: 'Etkinlik silindi', eventId: result.rows[0].eventid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server hatası' });
  }
});

// ---------- SERVER ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server ${PORT} portunda çalışıyor...`));