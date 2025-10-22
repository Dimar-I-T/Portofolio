import { Pool } from "pg";

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

    const text = "SELECT id, tujuan, l_logo, l_judul, keterangan FROM links WHERE s_id = $1 ORDER BY id";
    const result = await pool.query(text, [id]);

    return Response.json({
      success: true,
      message: `berhasil mengambil link ${JSON.stringify(result.rows[0])}`,
      data: result.rows,
    });
  } catch (error: any) {
    return Response.json({ success: false, message: error.message });
  }
}