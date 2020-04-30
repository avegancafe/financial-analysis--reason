// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Express = require("bs-express/src/Express.js");
var Process = require("process");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

var app = Express.express(/* () */0);

var router = Express.router(undefined, undefined, undefined, /* () */0);

Express.App.use(app, Express.Middleware.json(undefined, undefined, undefined, /* () */0));

Express.App.post(app, "/calculate", Express.Middleware.from((function (_next, req) {
            console.log(Express.$$Request.query(req));
            console.log(Express.$$Request.bodyJSON(req));
            var json = { };
            json["test"] = "hello";
            return (function (param) {
                return Express.$$Response.sendJson(json, param);
              });
          })));

function onListen(e) {
  var val;
  try {
    val = e;
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Js_exn.$$Error) {
      console.log(exn[1]);
      return Process.exit(1);
    } else {
      throw exn;
    }
  }
  console.log("Listening at http://127.0.0.1:3000");
  return /* () */0;
}

var server = Express.App.listen(app, 3000, undefined, onListen, /* () */0);

var App = /* alias */0;

var Middleware = /* alias */0;

var $$Response = /* alias */0;

var $$Request = /* alias */0;

exports.App = App;
exports.Middleware = Middleware;
exports.$$Response = $$Response;
exports.$$Request = $$Request;
exports.app = app;
exports.router = router;
exports.onListen = onListen;
exports.server = server;
/* app Not a pure module */
