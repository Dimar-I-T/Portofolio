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
      return Response.json({ success: false, message: "id tidak ada" }, { status: 400 });
    }

    const text = "SELECT id, s_judul, s_logo FROM tools WHERE s_id = $1 ORDER BY id";
    const result = await pool.query(text, [id]);

    return Response.json({
      success: true,
      message: `berhasil mengambil tools ${JSON.stringify(result.rows[0])}`,
      data: result.rows,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}