import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "remix";

import type { MetaFunction } from "remix";
import { LinksFunction } from "@remix-run/react/routeModules";
import { Header } from "./components/Header";

import styles from "./styles/app.css";
import helpers from "./styles/helpers.css";

export const meta: MetaFunction = () => {
    return { title: "Co jeść?" };
};

export const links: LinksFunction = () => {
    return [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Kite+One&family=Square+Peg&display=swap",
        },
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "stylesheet",
            href: helpers,
        },
    ];
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
