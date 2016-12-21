console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...args) {
  let replacedS = args[2].replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");

//console.log(replacedS)
    return args[0][0]+args[1]+args[0][1]+replacedS+args[0][2];
}


// ' | &apos;
// " | &quot;
// < | &lt;
// > | &gt;
// & | &amp;


// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
//
//  function html(pieces, ...substitutions) {
//      var result = pieces[0];
//      for (var i = 0; i < substitutions.length; ++i) {
//          result += escape(substitutions[i]) + pieces[i + 1];
//      }
//
//      return result;
//  }
//
//  function escape(s) {
//      return s.replace(/&/g, "&amp;")
//              .replace(/</g, "&lt;")
//              .replace(/>/g, "&gt;")
//              .replace(/'/g, "&apos;")
//              .replace(/"/g, "&quot;");
//  }
