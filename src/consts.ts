import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "I'm Knight Dev",
  EMAIL: "knight@productizehq.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_PRODUCTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "My",
  DESCRIPTION: "A Dev Log of the Maker Life.",
};

export const LOGS: Metadata = {
  TITLE: "Logs",
  DESCRIPTION: "What I have done.",
};

export const PRODUCTS: Metadata = {
  TITLE: "Products",
  DESCRIPTION:
    "A collection of my products, with links to repositories and demos.",
};
export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/imknight",
  },
  {
    NAME: "blueksy",
    HREF: "https://imknight.bsky.social",
  },
];
