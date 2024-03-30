import { getListOfProjects, getProjectContent } from "@/lib/projectHelpers"
import ProjectPage from '@/components/markdown/ProjectPage'
import TableOfContents from "@/components/TableOfContents"

export const generateStaticParams = async () => {
  const projects = getListOfProjects()
  return projects.map(project => ({ slug: project }))}
  
function Project({ params }: { params: any }) {
  const { content, data } = getProjectContent(params.slug)

  return (
    <div className="h-screen">
      <div className="w-full h-full">
        <ProjectPage markdownContent={content} />
        <TableOfContents/>
      </div>
    </div>
  )
}

export default Project