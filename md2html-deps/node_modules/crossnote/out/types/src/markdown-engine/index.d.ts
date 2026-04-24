import { JsonObject } from 'type-fest';
import * as vscode from 'vscode';
import { Notebook, WebviewConfig } from '../notebook';
interface MarkdownEngineConstructorArgs {
    notebook: Notebook;
    filePath: string;
}
export interface MarkdownEngineRenderOption {
    useRelativeFilePath: boolean;
    isForPreview: boolean;
    hideFrontMatter: boolean;
    triggeredBySave?: boolean;
    runAllCodeChunks?: boolean;
    emojiToSvg?: boolean;
    vscodePreviewPanel?: vscode.WebviewPanel | null;
    fileDirectoryPath?: string;
}
export interface MarkdownEngineOutput {
    html: string;
    markdown: string;
    tocHTML: string;
    yamlConfig: JsonObject;
    JSAndCssFiles: string[];
}
export interface HTMLTemplateOption {
    isForPrint: boolean;
    isForPrince: boolean;
    offline: boolean;
    embedLocalImages: boolean;
    embedSVG?: boolean;
}
export declare class MarkdownEngine {
    private readonly filePath;
    private readonly fileDirectoryPath;
    private readonly projectDirectoryPath;
    private readonly notebook;
    private readonly fs;
    private headings;
    private tocHTML;
    private vscodePreviewPanel;
    private graphsCache;
    private codeChunksData;
    private filesCache;
    isPreviewInPresentationMode: boolean;
    constructor({ filePath, notebook }: MarkdownEngineConstructorArgs);
    private get protocolsWhiteListRegExp();
    cacheCodeChunkResult(id: string, result: string): void;
    private generateScriptsForPreview;
    private static AutoPrismThemeMap;
    private static AutoPrismThemeMapForPresentation;
    private getPrismTheme;
    private generateStylesForPreview;
    private generateJSAndCssFilesForPreview;
    generateHTMLTemplateForPreview({ inputString, body, webviewScript, scripts, styles, head, config, vscodePreviewPanel, contentSecurityPolicy, isVSCodeWebExtension, }: {
        inputString?: string;
        body?: string;
        webviewScript?: string;
        scripts?: string;
        styles?: string;
        head?: string;
        config: WebviewConfig;
        vscodePreviewPanel: vscode.WebviewPanel | null | undefined;
        contentSecurityPolicy?: string;
        isVSCodeWebExtension?: boolean;
    }): Promise<string>;
    generateHTMLTemplateForExport(html: string, yamlConfig: {} | undefined, options: HTMLTemplateOption): Promise<string>;
    openInBrowser({ runAllCodeChunks }: {
        runAllCodeChunks?: boolean | undefined;
    }): Promise<void>;
    htmlExport({ offline, runAllCodeChunks, }: {
        offline?: boolean | undefined;
        runAllCodeChunks?: boolean | undefined;
    }): Promise<string>;
    chromeExport({ fileType, runAllCodeChunks, openFileAfterGeneration, }: {
        fileType?: string | undefined;
        runAllCodeChunks?: boolean | undefined;
        openFileAfterGeneration?: boolean | undefined;
    }): Promise<string>;
    princeExport({ runAllCodeChunks, openFileAfterGeneration, }: {
        runAllCodeChunks?: boolean | undefined;
        openFileAfterGeneration?: boolean | undefined;
    }): Promise<string>;
    private eBookDownloadImages;
    eBookExport({ fileType, runAllCodeChunks, }: {
        fileType: string;
        runAllCodeChunks?: boolean;
    }): Promise<string>;
    pandocExport({ runAllCodeChunks, openFileAfterGeneration, }: {
        runAllCodeChunks?: boolean | undefined;
        openFileAfterGeneration?: boolean | undefined;
    }): Promise<string>;
    markdownExport({ runAllCodeChunks }: {
        runAllCodeChunks?: boolean | undefined;
    }): Promise<string>;
    private exportOnSave;
    private resolveFilePath;
    private resolvePathsInHeader;
    clearCaches(): void;
    private frontMatterToTable;
    private processFrontMatter;
    private parseSlides;
    private pandocRender;
    parseMD(inputString: string, options: MarkdownEngineRenderOption): Promise<MarkdownEngineOutput>;
    runCodeChunks(): Promise<string[]>;
    runCodeChunk(id: string): Promise<string>;
    private modifySource;
    private generateRunOptions;
}
export {};
