import { KatexOptions } from 'katex';
import { MathRenderingOption } from '../notebook';
export default function enhance($: any, renderingOption: MathRenderingOption, mathBlockDelimiters: string[][], katexConfig: KatexOptions): Promise<void>;
