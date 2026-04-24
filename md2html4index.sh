#!/usr/bin/env bash
# script $1 $2
# $1: path of .md file to be converted
# $2: 1 for clear notes

input_prefix=${1%.*}

cp "$1" "$input_prefix-backup.md"

if [ $2 == "1" ]; then # clear notes
    sed -i 's/data-notes="\(.*\)"/data-notes=""/g' "$1"
fi

# convert md to html according to the config file mpe2html.js
dir=$(
    cd $(dirname ${BASH_SOURCE[0]})
    pwd
)

node "$dir/md2html-deps/md2html.js" "$1"


# local js files version:
# cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js
# https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.2.1/reveal.js
# https://cdnjs.cloudflare.com/ajax/libs/mathjax/4.0.0/tex-chtml.js
# cdnjs.cloudflare.com/ajax/libs/mermaid/9.0.0/mermaid.min.js
# cdnjs.cloudflare.com/ajax/libs/mermaid/9.0.0/mermaid.core.js

# use local js files
# sed -i 's/src="\(.*\)head.min.js"/src="..\/js\/head.min.js"/g' "$input_prefix.html"
# sed -i 's/src="\(.*\)tex-chtml-full.js"/src="..\/js\/tex-chtml-full.js"/g' "$input_prefix.html"
# sed -i 's/src="\(.*\)mermaid.min.js"/src="..\/plugin\/mermaid\/mermaid.min.js"/g' "$input_prefix.html"

# add id="theme" to the link of theme css
sed -i 's/<link rel="stylesheet" href="..\/css\/theme\/solarized.css">/<link rel="stylesheet" href="..\/css\/theme\/solarized.css" id="theme">/g' "$input_prefix.html"

sed -i "s/,\"dependencies\"\(.*\)async\":true}]//g" "$input_prefix.html"

# mpe parser adds empty <p></p> above and below the math equation wrapped by $$, thus enlarge the margin
sed -i 's/<p><\/p>//g' "$input_prefix.html"
sed -i 's/<\/p><p>//g' "$input_prefix.html"

sed -i 's/<code>//g' "$input_prefix.html"
sed -i 's/<\/code>//g' "$input_prefix.html"

# delete the line which imports none.css
sed -i '/none.css/d' "$input_prefix.html"

sed -i '/vega.min.js/d' "$input_prefix.html"

mv "$input_prefix-backup.md" "$1"
