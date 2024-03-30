import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

export const getListOfPosts = () => {
  const folder = path.join(process.cwd(), '/public/posts')
  const files = fs.readdirSync(folder)
  return files.filter(file => file.endsWith('.md'))
}

export const getPostContent = (slug: string) => {
  // Ensure the slug doesn't already contain the `.md` extension
  if (!slug.endsWith('.md')) {
      slug += '.md';
  }
  const file = path.join(process.cwd(), '/public/posts', slug);
  const content = fs.readFileSync(file, 'utf8');
  return matter(content);
}