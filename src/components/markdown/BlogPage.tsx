import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import matter from 'gray-matter'
import gfm from 'remark-gfm'

interface BlogPageProps {
  markdownContent: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ markdownContent }) => {
  const { data, content } = matter(markdownContent);
  const { title, date } = data;

  return (
    <div className='fixed h-screen w-full overflow-y-auto'>
      <div className=''>
        <h1 className=''>{title}</h1>
        <h1 className=''>{date}</h1>
        <div className="">
          <ReactMarkdown 
            className=""
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
            components={{
              table: ({node, ...props}) => <table {...props} className="border-collapse w-full" />,
              th: ({node, children, ...props}) => <th {...props} className="border-2 border-black p-4 dark:text-zinc-200 text-zinc-950">{children}</th>,
              td: ({node, children, ...props}) => <td {...props} className="border-2 border-black p-4">{children}</td>,
              blockquote: ({node, children, ...props}) => <blockquote {...props} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 text-zinc-950 dark:text-zinc-200 py-2 my-4">{children}</blockquote>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default BlogPage