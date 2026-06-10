import { NextResponse } from 'next/server';
import { getSkillTools } from "@/services/skillService";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ success: false, message: "id tidak ada" }, { status: 400 });
    }

    const result = await getSkillTools(id);

    return Response.json({
      success: true,
      message: `berhasil mengambil tools`,
      data: result,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}