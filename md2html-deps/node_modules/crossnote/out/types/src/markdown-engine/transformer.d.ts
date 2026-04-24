import { BlockAttributes } from '../lib/block-attributes';
import { Notebook } from '../notebook';
import HeadingIdGenerator from './heading-id-generator';
import { HeadingData } from './toc';
export interface TransformMarkdownOutput {
    outputString: string;
    slideConfigs: BlockAttributes[];
    tocBracketEnabled: boolean;
    JSAndCssFiles: string[];
    headings: HeadingData[];
    frontMatterString: string;
}
export interface TransformMarkdownOptions {
    fileDirectoryPath: string;
    projectDirectoryPath: string;
    filesCache: {
        [key: string]: string;
    };
    useRelativeFilePath: boolean;
    forPreview: boolean;
    usePandocParser?: boolean;
    forMarkdownExport?: boolean;
    protocolsWhiteListRegExp: RegExp | null;
    notSourceFile?: boolean;
    fileHash?: string;
    imageDirectoryPath?: string;
    headingIdGenerator?: HeadingIdGenerator;
    notebook: Notebook;
    forJest?: boolean;
    timestamp?: number;
}
export declare function transformMarkdown(inputString: string, { fileDirectoryPath, projectDirectoryPath, filesCache, useRelativeFilePath, forPreview, forMarkdownExport, usePandocParser, protocolsWhiteListRegExp, notSourceFile, imageDirectoryPath, headingIdGenerator, notebook, forJest, fileHash, timestamp, }: TransformMarkdownOptions): Promise<TransformMarkdownOutput>;
