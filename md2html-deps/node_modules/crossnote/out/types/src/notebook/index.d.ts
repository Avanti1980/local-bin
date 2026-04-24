import MarkdownIt from 'markdown-it';
import { URI } from 'vscode-uri';
import { MarkdownEngine } from '../markdown-engine';
import { Note, Notes } from './note';
import { Reference, ReferenceMap } from './reference';
import { Backlink, ExtendedMarkdownItOptions, FileSystemApi, NotebookConfig } from './types';
export * from './types';
interface NotebookConstructorArgs {
    notebookPath: string;
    config: Partial<NotebookConfig>;
    fs?: FileSystemApi;
}
interface RefreshNotesIfNotLoaded {
    dir: string;
    includeSubdirectories?: boolean;
}
interface RefreshNotesArgs extends RefreshNotesIfNotLoaded {
    refreshRelations?: boolean;
}
export declare class Notebook {
    notebookPath: URI;
    config: NotebookConfig;
    fs: FileSystemApi;
    notes: Notes;
    hasLoadedNotes: boolean;
    referenceMap: ReferenceMap;
    private refreshNotesIfNotLoadedMutex;
    private search;
    md: MarkdownIt;
    private markdownEngines;
    private constructor();
    private init;
    static init(args: NotebookConstructorArgs): Promise<Notebook>;
    private initConfig;
    initMarkdownIt(options?: ExtendedMarkdownItOptions): MarkdownIt;
    initFs(_fs?: FileSystemApi): void;
    updateConfig(config: Partial<NotebookConfig>): void;
    private interpolateConfig;
    getBacklinkedNotes(filePath: string): Promise<Notes>;
    getNoteBacklinks(filePath: string): Promise<Backlink[]>;
    getReferences(noteFilePath: string, backlinkedNoteFilePath: string): Promise<Reference[]>;
    processNoteMentionsAndMentionedBy(filePath: string): Promise<void>;
    getNote(filePath: string, refreshNoteRelations?: boolean): Promise<Note | null>;
    refreshNotesIfNotLoaded({ dir, includeSubdirectories, }: RefreshNotesIfNotLoaded): Promise<Notes>;
    refreshNotes({ dir, includeSubdirectories, refreshRelations, }: RefreshNotesArgs): Promise<Notes>;
    removeNoteRelations(filePath: string): Promise<void>;
    deleteNote(filePath: string, alreadyDeleted?: boolean): Promise<void>;
    resolveNoteAbsolutePath(filePath: string): string;
    resolveNoteRelativePath(filePath: string): string;
    getNoteMarkdownEngine(filePath: string): MarkdownEngine;
    getNoteMarkdownEngines(): {
        [key: string]: MarkdownEngine;
    };
    clearAllNoteMarkdownEngineCaches(): void;
    processWikilink(content: string): {
        text: string;
        link: string;
    };
}
