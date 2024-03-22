import { getListOfPosts, getPostContent } from "@/lib/postHelpers"
import BlogPage from '@/components/markdown/BlogPage'

export const generateStaticParams = async () => {
  const posts = getListOfPosts()
  return posts.map(post => ({ slug: post }))}
  
function Post({ params }: { params: any }) {
  const { content, data } = getPostContent(params.slug)

  return (
    <div className="h-screen">
      <div className="w-full h-full bg-zinc-100">
        <BlogPage markdownContent={content} />
        </div>
    </div>
  )
}

export default Post