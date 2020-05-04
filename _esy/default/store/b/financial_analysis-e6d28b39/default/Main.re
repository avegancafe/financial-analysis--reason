module Res = ReWeb.Response
module Server = ReWeb.Server

/* Define a service (i.e. function) to handle a "hello" GET request */
let hello = _ => "Hello, World!" |> Res.of_text |> Lwt.return;

/* Define a service to handle requests that do not have a specified route */
let notFound = _ => `Not_found |> Res.of_status |> Lwt.return;

/* Define routes via pattern matching; Note that we must be exhaustive */
let routes =
  fun
  | (`GET, ["hello"]) => hello
  | _ => notFound;

/* Run the server */
let () = Server.serve(routes);

