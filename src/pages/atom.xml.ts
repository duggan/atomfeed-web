import type { APIContext } from "astro";
import { BlogFeed } from "atomfeed";
import { getPaginatedBlogPosts } from "../lib/paginate";

type FeedFormat = "raw" | "styled";

export async function GET(context: APIContext) {
  // Get page from query params or default to 1
  const pageNum = parseInt(context.url.searchParams.get("page") || "1");
  const pageSize = 10;

  const format: FeedFormat =
    (context.url.searchParams.get("format") as FeedFormat) || "styled";

  const page = getPaginatedBlogPosts(pageNum, pageSize);
  const baseUrl = context.site?.toString();

  if (!baseUrl) {
    throw new Error("Site URL is required");
  }

  const author = {
    name: "Ross Duggan",
    email: "ross@duggan.ie",
    website: new URL("/", baseUrl).toString(),
  };

  const feed = new BlogFeed({
    title: "Example",
    subtitle: "Example blog.",
    stylesheet: format === "styled" ? "/atom.xsl" : undefined,
    id: new URL("/", baseUrl).toString(),
    pagination: {
      current: new URL("atom.xml", baseUrl).toString(),
      first: new URL("atom.xml", baseUrl).toString(),
      last: new URL(
        `atom.xml?page=${page.pagination.totalPages}`,
        baseUrl
      ).toString(),
      previous: page.pagination.hasPreviousPage
        ? new URL(`atom.xml?page=${pageNum - 1}`, baseUrl).toString()
        : undefined,
      next: page.pagination.hasNextPage
        ? new URL(`atom.xml?page=${pageNum + 1}`, baseUrl).toString()
        : undefined,
    },
    language: "en",
    icon: new URL("favicon.ico", baseUrl).toString(),
    logo: new URL("og-image.png", baseUrl).toString(),
    author,
    rights: `All rights reserved ${new Date().getFullYear()}, Ross Duggan`,
    updated: page.data[0]?.published
      ? new Date(page.data[0].published)
      : new Date(),
  });

  if (page.data) {
    for await (const post of page.data) {
      const url = new URL(`posts/${post.id}`, baseUrl).toString();

      feed.addPost({
        title: post.title,
        id: url,
        links: url,
        content: post.content || "<p>Missing data</p>",
        published: post.published,
        author: post.author,
        updated: post.published,
      });
    }
  }

  // Generate Atom feed
  const atomFeed = feed.generate();

  const headers = new Headers({
    "Content-Type": "text/xml",
    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
  });

  return new Response(atomFeed, { headers });
}
