import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Tipe data untuk Metadata Blog
export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
  tags?: string[];
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: {
        ...data,
        slug,
      } as Metadata,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content", "posts"));
}
