import { URI } from 'vscode-uri';
export type FilePath = string;
export interface NoteConfigEncryption {
    title: string;
}
export interface NoteConfig {
    createdAt: Date;
    modifiedAt: Date;
    pinned?: boolean;
    favorited?: boolean;
    icon?: string;
    aliases?: string[];
}
export type Mentions = Set<FilePath>;
export interface Note {
    notebookPath: URI;
    filePath: FilePath;
    title: string;
    markdown: string;
    config: NoteConfig;
    mentions: Mentions;
}
export interface Notes {
    [key: string]: Note;
}
export declare function getNoteIcon(note: Note): string;
