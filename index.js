var postcss = require("postcss");

module.exports = postcss.plugin("postcss-enintl", function(opts) {
  return function(css) {
		css.walkDecls(function(decl) {
      decl.prop = decl.prop.replace(/colour/g, "color");
        if (decl.prop === "text-transform" && decl.value === "capitalise") {
          decl.value = "capitalize";
        }
        if (decl.prop !== "content") {
          decl.value = decl.value.split(" ").map(function(i) {
            if (i === "centre") {
              return "center";
            }

            if (i === "grey") {
             return "gray";
            }

            return i;
          }).join(" ");
        }

        decl.value = decl.value.replace(/(var\(--[^\)]*)colour([^\)]*\))/g, "$1color$2");
      });
    }
});
