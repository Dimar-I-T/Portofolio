export function optimizeUrl(url: string): string {
    if (url.includes('/upload')){
        url = url.replace('/upload', '/upload/f_auto,q_auto');
    } else {
        console.log('not cloudinary');
    }
    
    return url;
}
