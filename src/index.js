var _ = require("lodash");

class ntz2html {
  constructor() {
    this.producer = "ntz2html";
    this.doc = "";
  }

  className(name) {
    return name.replace(" ", "-").replace(/[^a-zA-Z0-9_-]/g, "");
  }

  _preprocess(ast) {
    if (_.isUndefined(ast)) {
      return;
    }

    if (_.isArray(ast)) {
      let result = "";
      _.forEach(ast, item => {
        result += this._preprocess(item);
      });
      return result;
    }

    if (_.isObject(ast)) {
      let type = ast.processor.type;

      switch (type) {
        case "root":
          if (ast.children) {
            let bodyclass = this.className(ast.processor.title);
            this.doc = `<!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <title></title>
                          </head>
                          <body class="${bodyclass ||
                            "root"}">${this._preprocess(ast.children)}</body>
                        </html>
                      `;
            return;
          }
          return;
          break;

        case "paragraph":
          let pclass = this.className(ast.processor.title);
          let pName = ast.processor.node;

          if (ast.children) {
            return `<${pName} class="${pclass}">${this._preprocess(
              ast.children
            )}</${pName}>
                      `;
          }

          return "";
          break;
        case "inline":
          let spanclass = this.className(ast.processor.title);
          let inlineName = "span";

          if (ast.children) {
            return `<${inlineName} class="${spanclass}">${this._preprocess(
              ast.children
            )}</${inlineName}>`;
          }
          return "";

        case "text":
          let text = ast.value;

          if (ast.children) {
            return text + this._preprocess(ast.children, ast);
          }

          return text;
          break;
        // case "table":
        //   return this.generalTagHandler(element, nodeStyle);
        //   break;
        // case "tr":
        //   return this.generalTagHandler(element, nodeStyle);
        //   break;
        // case "td":
        //   return this.generalTagHandler(element, nodeStyle);
        //   break;
        // case "th":
        //   return this.generalTagHandler(element, nodeStyle);
        //   break;
        default:
          console.log("!!!!! error! type: " + type);
        // if we have no special handler we just parse the text
        // return this.childerenHandler(element);
      }
    }
  }

  convert(ast) {
    this.doc = this._preprocess(ast);
    return this.doc;
  }
}

module.exports = ntz2html;
