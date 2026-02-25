import { getDocBySlug } from "@/lib/getDocBySlug"
import { docsSidebarList } from "@/utils/docs-sidebar-list"
import { compileMDX } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import rehypePrettyCode from "rehype-pretty-code"
import DocsClientComponent from "./docs-client-component"

export async function generateStaticParams() {
  const routes: { slug: string[] }[] = []

  docsSidebarList.forEach(section => {
    section.items.forEach(item => {
      routes.push({
        slug: [section.id, item.id],
      })
    })
  })

  return routes
}

export default async function DocsPage(props: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await props.params

  const source = await getDocBySlug(slug)

  if (!source) {
    notFound()
  }

  const { content } = await compileMDX({
    source: source.content,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
            }
          ]
        ]
      }
    }
  })

  return <DocsClientComponent content={content} />
}