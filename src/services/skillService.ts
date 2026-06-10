import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

export async function getSkills(id: string) {
    try {
        if (!id) {
            const text = 'select judul from main_skills';
            const result = await pool.query(text);
            const data: { judul: string }[] = result.rows;
            for (let x = 0; x < data.length; x++) {
                data[x].judul = data[x].judul.trim().replace(' ', '-').toLowerCase();
            }

            const dataToSend: { skill_id: string }[] = [];
            for (let x = 0; x < data.length; x++) {
                dataToSend.push({
                    skill_id: data[x].judul
                });
            }

            return dataToSend;
        }

        const text = "SELECT s_id, judul, logo, deskripsi FROM main_skills WHERE s_id = $1";
        const result = await pool.query(text, [id]);
        const dataJson = result.rows[0];
        return dataJson;
    } catch (error: any) {
        throw error;
    }
}

export async function getSkillTools(id: string) {
    try {
        const text = "SELECT id, s_judul, s_logo FROM tools WHERE s_id = $1 ORDER BY id";
        const result = await pool.query(text, [id]);
        return result.rows;
    } catch (error: any) {
        throw error;
    }
}