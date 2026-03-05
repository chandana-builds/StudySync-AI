import { neon } from '@netlify/neon';
const sql = neon(); // uses env NETLIFY_DATABASE_URL

export async function getPosts(postId) {
  const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;
  return post;
}
