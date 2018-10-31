# markdown-html-viewer

Get `markdown(.md)` from path / url , Display as `HTML / TEXT`

## Installation

To install, use `npm`

    npm i markdown-html-viewer

## Usage

```javascript
import markdown from "markdown-html-viewer";

const url = `markdown-file url/path`;

// display TEXT
markdown.convert(url).then(data => {
  console.log(data);
});

// display HTML
markdown.convert(url, "html").then(data => {
  console.log(data); // convert to html
});
```

## License

Released under the MIT license.
