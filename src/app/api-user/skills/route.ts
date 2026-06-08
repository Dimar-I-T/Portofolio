import { Pool } from "pg";
import { NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      const text = 'select judul from main_skills';
      const result = await pool.query(text);
      const data: {judul: string}[] = result.rows; 
      for (let x = 0; x < data.length; x++) {
        data[x].judul = data[x].judul.trim().replace(' ', '-').toLowerCase();
      }

      const dataToSend: {skill_id: string}[] = [];
      for (let x = 0; x < data.length; x++) {
        dataToSend.push({
          skill_id: data[x].judul
        });
      }

      return Response.json({
        success: true,
        message: 'berhasil mendapatkan semua main skill',
        data: dataToSend
      })
    }

    const text = "SELECT s_id, judul, logo, deskripsi FROM main_skills WHERE s_id = $1";
    const result = await pool.query(text, [id]);
    const dataJson = result.rows[0];

    return Response.json({
      success: true,
      message: `berhasil mengambil skill ${JSON.stringify(result.rows[0])}`,
      data: dataJson,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}