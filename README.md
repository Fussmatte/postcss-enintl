postcss-enintl
---
Write CSS using International English spellings anywhere with `postcss-enintl`.

### Example
```css
body {
  background-colour: grey;
  text-align: centre;
  text-transform: capitalise;
  border: 1px solid grey;
}
```

will go to:

```css
body {
  background-color: gray;
  text-align: center;
  text-transform: capitalize;
  border: 1px solid gray;
}
```

### Use
```js
var postcss = require("postcss");
var enintl = require("postcss-enintl");
var fs = require("fs");

var css = fs.readFileSync("random.css");

console.log(postcss(spiffing()).process(css).css);
```

To use this with `gulp`, use [gulp-postcss](https://github.com/w0rm/gulp-postcss).

### Changes Applied
1. `colour` goes to `color`
2. `capitalise` goes to `capitalize`
3. `centre` goes to `center`
4. `grey` goes to `gray`
