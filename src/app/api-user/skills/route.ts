import { getSkills } from '@/services/skillService';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") as string;

    const result = await getSkills(id);

    return Response.json({
      success: true,
      message: `berhasil mengambil skill`,
      data: result,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}