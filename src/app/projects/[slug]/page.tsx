import { getListOfProjects, getProjectsContent } from '@/lib/projectHelpers';
import ProjectPage from '@/components/markdown/ProjectPage'

export const generateStaticParams = async () => {
  const Project = getListOfProjects()
  return Project.map(projects => ({ slug: projects }))}
  
function Project({ params }: { params: any }) {
  const { content, data } = getProjectsContent(params.slug)

  return (
    <div className="h-screen">
      <div className="w-full h-full bg-zinc-100">
        <ProjectPage markdownContent={content} />
        </div>
    </div>
  )
}

export default Project