import { getProjects } from "@/services/projectService";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await getProjects();
        return NextResponse.json({
            success: true,
            message: 'Berhasil mendapatkan projects',
            data: result
        }, {status: 200});
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, {status: 500})
    }
}