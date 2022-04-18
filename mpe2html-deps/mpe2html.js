//node.js
const path = require("path");
const mume = require("@shd101wyy/mume");

const config = {
  // Default config directory; `null` means "~/.config/mume"
  configPath: null,

  //Enable this option will render markdown by pandoc instead of markdown-it.
  usePandocParser: false,

  // In Markdown, a single newline character doesn't cause a line break in the generated HTML. In GitHub Flavored Markdown, that is not true. Enable this config option to insert line breaks in rendered HTML for single newlines in Markdown source.
  breakOnSingleNewLine: true, // I modify it to false

  //Enable smartypants and other sweet transforms.
  enableTypographer: false,

  //Enable conversion of URL-like text to links in the markdown preview.
  enableLinkify: true,

  //Math
  mathRenderingOption: "MathJax", //"KaTeX" | "MathJax" | "None"
  mathInlineDelimiters: [
    ["$", "$"],
    ["\\(", "\\)"],
  ],
  mathBlockDelimiters: [
    ["$$", "$$"],
    ["\\[", "\\]"],
  ],

  mathRenderingOnLineService: "https://latex.codecogs.com/gif.latex", //"https://latex.codecogs.com/svg.latex", "https://latex.codecogs.com/png.latex"

  // Enable Wiki Link syntax support. More information can be found a  https://help.github.com/articles/adding-links-to-wikis/
  enableWikiLinkSyntax: true,

  // If checked, we use GitHub style piped wiki links, i.e. [[linkText|wikiLink]]. Otherwise, we use [[wikiLink|linkText]] as the original Wikipedia style.
  useGitHubStylePipedLink: true,

  //By default, the extension for wikilink is `.md`. For example: [[test]] will direct to file path `test.md`.
  wikiLinkFileExtension: ".md",

  //Enable emoji & font-awesome plugin. This only works for markdown-it parser, but not pandoc parser.
  enableEmojiSyntax: true,

  //Enable extended table syntax to support merging table cells.
  enableExtendedTableSyntax: true, // I modify it to true

  //Enable CriticMarkup syntax. Only works with markdown-it parser.

  //Please check http://criticmarkup.com/users-guide.php for more information.
  enableCriticMarkupSyntax: true, // I modify it to true

  //Front matter rendering option
  frontMatterRenderingOption: "none", //'none' | 'table' | 'code block'

  //Mermaid theme
  mermaidTheme: "mermaid.css", //'mermaid.css' | 'mermaid.dark.css' | 'mermaid.forest.css'

  //Code Block theme

  //If `auto.css` is chosen, then the code block theme that best matches the current preview theme will be picked.
  codeBlockTheme: "solarized-light.css", // "auto.css", "default.css", "atom-dark.css", "atom-light.css", "atom-material.css", "coy.css", "darcula.css", "dark.css", "funky.css", "github.css", "hopscotch.css", "monokai.css", "okaidia.css", "one-dark.css", "one-light.css", "pen-paper-coffee.css", "pojoaque.css", "solarized-dark.css", "solarized-light.css", "twilight.css", "vue.css", "vs.css", "xonokai.css"

  //Preview theme
  previewTheme: "none.css",

  //Revealjs presentation theme
  revealjsTheme: "none.css",

  //Accepted protocols for links.
  protocolsWhiteList: "http://, https://, atom://, file://, mailto:, tel:",

  //When using Image Helper to copy images, by default images will be copied to root image folder path '/assets'
  imageFolderPath: "/assets",

  //Whether to print background for file export or not. If set to `false`, then `github-light` preview theme will b  used. You can also set `print_background` in front-matter for individual files.
  printBackground: true, // I modify it to true

  //Chrome executable path, which is used for Puppeteer export. Leaving it empty means the path will be found automatically.
  chromePath: "",

  //ImageMagick command line path. Should be either `magick` or `convert`. Leaving it empty means the path will be found automatically.
  imageMagickPath: "",

  //Pandoc executable path
  pandocPath: "pandoc",

  //Pandoc markdown flavor
  pandocMarkdownFlavor: "markdown-raw_tex+tex_math_single_backslash",

  //Pandoc arguments e.g. ['--smart', '--filter=/bin/exe']. Please use long argument names.
  pandocArguments: [],

  //Default latex engine for Pandoc export and latex code chunk.
  latexEngine: "pdflatex",

  //Enables executing code chunks and importing javascript files.

  //⚠ ️ Please Use This Feature With Caution Because It May Put Your Security At Risk!

  //   Your machine can get hacked if someone makes you open a markdown with malicious code while script execution is enabled.
  enableScriptExecution: true, // I modify it to true

  //Enables transform audio video link to to html5 embed audio video tags.

  //Internally it enables markdown-it-html5-embed plugins.
  enableHTML5Embed: false,

  //Enables video/audio embed with ![]() syntax (default).
  HTML5EmbedUseImageSyntax: true,

  //Enables video/audio embed with []() syntax.
  HTML5EmbedUseLinkSyntax: false,

  //When true embed media with http://schema in URLs. When false ignore and don't embed them.
  HTML5EmbedIsAllowedHttp: false,

  //HTML attributes to pass to audio tags.
  HTML5EmbedAudioAttributes: 'controls preload="metadata" width="320"',

  //HTML attributes to pass to video tags.
  HTML5EmbedVideoAttributes:
    'controls preload="metadata" width="320" height="240"',

  //Puppeteer waits for a certain timeout in milliseconds before the document export.
  puppeteerWaitForTimeout: 0,

  //If set to true, then locally installed puppeteer-core will be required. Otherwise, the puppeteer globally installed by `npm install -g puppeteer` will be required.
  usePuppeteerCore: true,

  // Args passed to puppeteer.launch({args: $puppeteerArgs})
  puppeteerArgs: [],

  // Render using PlantUML server instead of binary. Leave it empty to use the builtin plantuml.jar binary (`java` is required in system path). Eg: "http://localhost:8080/svg/".
  plantumlServer: "",
};

async function main() {
  await mume.init();

  const engine = new mume.MarkdownEngine({
    filePath: process.argv[2],
    config: config,
  });

  //html export
  await engine.htmlExport({ offline: true, runAllCodeChunks: true });

  return process.exit();
}

main();
