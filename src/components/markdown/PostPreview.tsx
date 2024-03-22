import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  const dateString = new Date(props.date).toLocaleDateString();

  return (
    <div className="h-full grid rounded-lg border w-1/2 text-center items-center justify-center border-neutral-900 space-y-2 my-2 px-5 py-2 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 mx-auto">
      <a href={`/blog/${props.slug}`}>
        <h2 className="font-bold">{props.title}</h2>
        <p className="text-sm text-red-500 dark:text-yellow-300">{dateString}</p>
        <p className="italic">{props.excerpt}</p>
      </a>
    </div>
  );
};

export default PostPreview;