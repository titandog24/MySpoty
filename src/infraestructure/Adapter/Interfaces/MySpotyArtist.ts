export interface MySpotyArtist {
    id:          number;
    name:        string;
    age:         string;
    artistName:  string;
    biography:   string;
    isActive:    boolean;
    deleted:     boolean;
    albums:      MySpotyAlbum[];
    imageArtist: ImageArtist;
}

export interface ImageArtist {
    id:        number;
    imageName: string;
}


export interface MySpotyAlbum {
    id:          number;
    title:       string;
    age:         string;
    releaseDate: Date;
    gender:      string;
    deleted:     boolean;
    artist:      null;
    tracks:      null;
    imageAlbum:  ImageAlbum;
}

export interface ImageAlbum {
    id:        number;
    imageName: string;
    idAlbum:   number;
    album:     null;
}

export interface MySpotyUser {
    id:        number;
    name:      string;
    email:     string;
    password:  string;
    photo:     string;
    isDeleted: boolean;
}


export interface MySpotyTrack {
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


export interface MySpotyLibrary {
    id:          number;
    name:        string;
    picture:     string;
    counterSong: number;
    user:        null;
}
