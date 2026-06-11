import { Pool } from "pg";
import { ProjectRaw, Project } from "@/utils/types";

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

function separateAndClean(str: string, splitter: string | RegExp): string[] {
    let strArr: string[] = str.split(splitter);
    strArr = strArr.map((x: string) => x.replace(/^\s+|\s+$/gm, ''));
    strArr = strArr.filter((x: string) => x.length > 0);
    return strArr;
}

function removeRN(str: string): string {
    return str.replace(/\r\n/g, '').replace(/^\s+|\s+$/gm, '');;
}

function cleanDate(rawDate: Date): string {
    const month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNum: number = rawDate.getMonth();
    const date: string = month[monthNum] + " " + rawDate.getFullYear();
    return date;
}

export async function getProjects(category: string = '') {
    try {
        let text = `
            select * from semua_project
        `

        let queryList = [];
        text += ' where judul_category ILIKE $1'
        queryList.push(`%${category}%`);

        const result = await pool.query(text, queryList);
        let dataRaw: ProjectRaw[] = result.rows;
        let dataClean: Project[] = [];
        for (let x = 0; x < dataRaw.length; x++) {
            const kontribusiCleanStr: string = removeRN(dataRaw[x].kontribusi);
            let kontribusiArr: string[] = separateAndClean(kontribusiCleanStr, / -|- /g);
            let imageUrlArr: string[] = separateAndClean(dataRaw[x].image_url, ',');
            let toolUrlArr: string[] = separateAndClean(dataRaw[x].tool_logo, ',');
            dataClean.push({
                project_id: dataRaw[x].project_id,
                s_id: dataRaw[x].s_id,
                judul: dataRaw[x].judul,
                link_code: dataRaw[x].link_code,
                deskripsi: dataRaw[x].deskripsi,
                tanggalNum: dataRaw[x].tanggal as unknown as Date,
                tanggal: cleanDate(dataRaw[x].tanggal as unknown as Date),
                link_production: dataRaw[x].link_production,
                kontribusi: kontribusiArr,
                relevance_rate: dataRaw[x].relevance_rate,
                image_url: imageUrlArr,
                tool_logo_url: toolUrlArr
            });
        }

        return dataClean;
    } catch (error: any) {
        throw error;
    }
}