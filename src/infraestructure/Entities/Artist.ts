import { Album } from "./Album";

export interface Artist {
    id:          number;
    name:        string;
    age:         string;
    artistName:  string;
    biography:   string;
    isActive:    boolean;
    deleted:     boolean;
    albums: Album[];
    imageArtist: ImageArtist;
}

export interface ImageArtist {
    id:        number;
    imageName: string;
}


