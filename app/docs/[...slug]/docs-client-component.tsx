'use client'

interface DocsClientComponentProps {
  content: React.ReactNode
}

function DocsClientComponent({ content }: DocsClientComponentProps) {

  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 mx-auto max-w-4xl">
      <article className="w-full prose dark:prose-invert ">
        {content}
      </article>
    </div>
  )
}

export default DocsClientComponent