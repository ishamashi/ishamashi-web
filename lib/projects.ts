import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Tipe data khusus Project
export type ProjectMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
  techstack?: string[]; // Tambahan buat list teknologi
  link?: string;
  impact?: string[]; // Tambah ini: List hasil nyata (angka/business value)
  tags?: string[]; // Misal: ["personal", "professional"]
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

export function getProjects() {
  const dir = path.join(process.cwd(), "content", "projects");
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: {
        ...data,
        slug,
      } as ProjectMetadata,
      content,
    };
  });
}
