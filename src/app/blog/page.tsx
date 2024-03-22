import Banner from "@/components/banner";
import getPostMetadata from "@/components/markdown/GetPostMetadata";
import PostPreview from "@/components/markdown/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="h-screen w-screen">
      <div className="">
        <Banner title="BLOG" subtitle="Welcome to my blog! Here you will find some of my thoughts and projects. Enjoy!"/>        
        <div className="pt-6 pb-20">
          {postPreviews}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
