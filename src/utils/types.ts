export interface ProjectRaw {
    project_id: number,
    s_id: number,
    judul: string,
    link_code: string,
    deskripsi: string,
    tanggal: string,
    link_production: string,
    kontribusi: string, // pemisah -
    judul_category: string,
    relevance_rate: number,
    image_url: string, // pemisah ,
    tool_logo: string // pemisah ,
}

export interface Project {
    project_id: number,
    s_id: number,
    judul: string,
    link_code: string,
    deskripsi: string,
    tanggal: string,
    tanggalNum: Date,
    link_production: string,
    kontribusi: string[],
    relevance_rate: number,
    image_url: string[], 
    tool_logo_url: string[] 
}