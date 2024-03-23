import Banner from "@/components/banner";
import getProjectMetadata from "@/components/markdown/GetProjectMetadata";
import ProjectPreview from "@/components/markdown/ProjectPreview";

const HomePage = () => {
  const projectMetadata = getProjectMetadata();
  const projectPreviews = projectMetadata.map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));

  return (
    <main className="h-screen w-screen">
      <div className="">
        <Banner title="PROJECTS" subtitle="Welcome to my blog! Here you will find some of my thoughts and projects. Enjoy!"/>        
        <div className="pt-6 pb-20">
          {projectPreviews}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
