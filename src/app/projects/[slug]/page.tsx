import { getListOfProjects, getProjectsContent } from "@/lib/projectHelpers"
import ProjectPage from '@/components/markdown/ProjectPage'
import { getListOfPosts } from "@/lib/postHelpers"
import TableOfContents from "@/components/TableOfContents"

export const generateStaticParams = async () => {
  const posts = getListOfPosts()
  return posts.map(post => ({ slug: post }))}
  
function Post({ params }: { params: any }) {
  const { content, data } = getProjectsContent(params.slug)

  return (
    <div className="h-screen">
      <div className="w-full h-full">
        <ProjectPage markdownContent={content} />
        <TableOfContents/>
      </div>
    </div>
  )
}

export default Post