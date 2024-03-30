import { getListOfPosts, getPostContent } from "@/lib/postHelpers"
import BlogPage from '@/components/markdown/BlogPage'
import TableOfContentsBlog from "@/components/TableOfContentsBlog"

export const generateStaticParams = async () => {
  const posts = getListOfPosts()
  return posts.map(post => ({ slug: post }))}
  
function Post({ params }: { params: any }) {
  const { content, data } = getPostContent(params.slug)

  return (
    <div className="h-screen">
      <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900">
        <BlogPage markdownContent={content} />
        <TableOfContentsBlog/>
        </div>
    </div>
  )
}

export default Post