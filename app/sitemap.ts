import { getBlogPosts } from "@/lib/blog";
import { getProjects } from "@/lib/projects";

export const baseUrl = "https://ishamashi.com"; // Ganti URL domain lu

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.metadata.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  const routes = ["", "/blog", "/projects", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projects];
}
