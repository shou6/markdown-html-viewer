"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _Promise = typeof Promise === 'undefined' ? require('es6-promise').Promise : Promise;

const showdown = require("showdown");
const converter = new showdown.Converter();

module.exports = {
  convert(path, type = null) {
    return _asyncToGenerator(function* () {
      return new _Promise((() => {
        var _ref = _asyncToGenerator(function* (resolve, reject) {
          try {
            const xmlhttp = new XMLHttpRequest();
            yield xmlhttp.open("get", path, false);
            yield xmlhttp.send();
            if (type === "html") {
              const markdown = converter.makeHtml(xmlhttp.responseText);
              resolve(markdown);
            } else {
              resolve(xmlhttp.responseText);
            }
          } catch (error) {
            reject(error);
          }
        });

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      })());
    })();
  }
};

//# sourceMappingURL=index.js.map