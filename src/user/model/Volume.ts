export type Volume ={
    volumeId: string,
    volumeName: string,
    isViewed?: boolean,
}
export type Colection ={
    colectionId: string, 
    colectionName: string, 
    vote: Vote,
    volumes: Volume[];
}
export type Vote ={
    star: number, 
    quantity: number
}