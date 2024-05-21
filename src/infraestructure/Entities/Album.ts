export interface Album {
    id:          number;
    title:       string;
    age:         string;
    releaseDate: Date;
    gender:      string;
    deleted:     boolean;
    artist:      any;
    tracks:      any;
    imageAlbum:  ImageAlbum;
}

export interface ImageAlbum {
    id:        number;
    imageName: string;
    idAlbum:   number;
    album:     any;
}