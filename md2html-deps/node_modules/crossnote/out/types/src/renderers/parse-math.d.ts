import katex from 'katex';
import 'katex/contrib/mhchem';
import { MathRenderingOption } from '../notebook';
export type ParseMathArgs = {
    content: string;
    openTag: string;
    closeTag: string;
    displayMode?: boolean;
    renderingOption: MathRenderingOption;
    katexConfig: katex.KatexOptions;
};
declare const _default: ({ content, openTag, closeTag, displayMode, renderingOption, katexConfig, }: ParseMathArgs) => string;
export default _default;
