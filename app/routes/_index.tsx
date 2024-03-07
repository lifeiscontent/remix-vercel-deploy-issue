import type { MetaFunction } from "@remix-run/node";
import collaborationUrl from "~/assets/homepage/collaboration.png?url";
import { imageUrl } from "~/utils/image";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Route() {
  return (
    <img
      alt="Collaboration"
      src={imageUrl(collaborationUrl, 606)}
      width={606}
    />
  );
}
