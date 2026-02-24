import matter from "gray-matter"
import path from "path"
import fs from "fs"

export function getDocBySlug(slug: string[]) {
  const filePath = path.join(
    process.cwd(),
    "content/docs",
    `${slug.join("/")}.mdx`
  )

  const source = fs.readFileSync(filePath, "utf-8")

  const { content, data } = matter(source)

  return { content, frontmatter: data }
}