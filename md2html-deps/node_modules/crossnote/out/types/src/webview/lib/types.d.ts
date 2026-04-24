export type WebviewMessageEvent = {
    command: 'updateHtml';
    totalLineCount: number;
    sidebarTOCHTML: string;
    sourceUri: string;
    sourceScheme: string;
    html: string;
    id: string;
    class: string;
};
export type WebviewMessageType = WebviewMessageEvent['command'];
export declare enum BacklinksOrderRecord {
    CreatedAt = "createdAt",
    ModifiedAt = "modifiedAt"
}
export declare enum BacklinksOrderDirection {
    Asc = "asc",
    Desc = "desc"
}
