import { getEnv } from "~/utils/env.server";

export async function loader() {
    return new Response(`window.ENV = ${JSON.stringify(getEnv())};`, {
        headers: {
            "content-type": "application/javascript",
            "cache-control": "public, max-age=0, must-revalidate",
        },
    });
}