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

    const text = "SELECT s_id, judul, logo, deskripsi FROM main_skills WHERE s_id = $1";
    const result = await pool.query(text, [id]);
    const dataJson = result.rows[0];

    return Response.json({
      success: true,
      message: `berhasil mengambil skill ${JSON.stringify(result.rows[0])}`,
      data: dataJson,
    });
  } catch (error: any) {
    return Response.json({ success: false, message: error.message });
  }
}