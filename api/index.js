require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pg = require("pg");
const app = express();
const PORT = 5001;
const { Pool } = pg;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api-user/skills/", async (req, res) => {
    try {
        const { id } = req.query;
        let text = "select s_id, judul, logo, deskripsi from main_skills where s_id = $1";
        const result = await pool.query(text, [id]);
        let dataJson = result.rows[0];

        return res.status(200).json({ success: true, message: `berhasil mengambil skill ${JSON.stringify(result.rows[0])}`, data: dataJson });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
})

app.get("/api-user/skills-tools/", async (req, res) => {
    try {
        const { id } = req.query;
        let text = "select id, s_judul, s_logo from tools where s_id = $1 order by id"
        const result = await pool.query(text, [id]);
        let dataJson = [];

        for (let row of result.rows) {
            dataJson.push(row);
        }

        return res.status(200).json({ success: true, message: `berhasil mengambil tools ${JSON.stringify(result.rows[0])}`, data: dataJson });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
})

app.get("/api-user/links/", async (req, res) => {
    try {
        const { id } = req.query;
        let text = "select id, tujuan, l_logo, l_judul, keterangan from links where s_id = $1 order by id";
        const result = await pool.query(text, [id]);
        let dataJson = [];

        for (let row of result.rows) {
            dataJson.push(row);
        }

        return res.status(200).json({ success: true, message: `berhasil mengambil link ${JSON.stringify(result.rows[0])}`, data: dataJson });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
})

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

async function testDB() {
    const result = await pool.query('SELECT NOW()');
    console.log(result.rows[0]);
}

testDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});