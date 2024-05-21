export interface Track {
    id:         number;
    title:      string;
    gender:     string;
    deleted:    boolean;
    album:      null;
    imageTrack: ImageTrack;
}

export interface ImageTrack {
    id:        number;
    imageName: string;
}
