import { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import style from "./style.css?url";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <script src="/resources/env" />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Link to="/">Index</Link>{' '}
      <Link to="/providers/example">Example</Link>
      <Outlet />
    </>
  );
}
