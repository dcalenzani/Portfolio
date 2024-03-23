import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "./ProjectMetadata";

const getProjectMetadata = (): ProjectMetadata[] => {
  const folder = "./public/projects";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`./public/projects/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getProjectMetadata;