module App = Express.App;
module Middleware = Express.Middleware;
module Response = Express.Response;
module Request = Express.Request;

let app = Express.express();
let router = Express.router();

App.use(app, Middleware.json());
App.post(app, ~path="/calculate") @@
Middleware.from((_next, req) => {
  Js.log(Request.query(req));
  Js.log(Request.bodyJSON(req));
  let json = Js.Dict.empty();
  Js.Dict.set(json, "test", Js.Json.string("hello"));
  Response.sendJson(Js.Json.object_(json));
});

let onListen = e =>
  switch (e) {
  | exception (Js.Exn.Error(e)) =>
    Js.log(e);
    Node.Process.exit(1);
  | _ => Js.log @@ "Listening at http://127.0.0.1:3000"
  };

let server = App.listen(app, ~port=3000, ~onListen, ());
