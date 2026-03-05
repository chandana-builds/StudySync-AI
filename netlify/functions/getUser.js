import { neon } from '@netlify/neon';

const sql = neon();

export default async (req, context) => {
  try {
    if (req.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(req.url);
    const userId = url.searchParams.get('id');
    const username = url.searchParams.get('username');

    let result;

    if (userId) {
      result = await sql`
        SELECT id, username, school_name, student_type, course, skill_level, language, created_at
        FROM users
        WHERE id = ${userId}
      `;
    } else if (username) {
      result = await sql`
        SELECT id, username, school_name, student_type, course, skill_level, language, created_at
        FROM users
        WHERE username = ${username}
      `;
    } else {
      return new Response(
        JSON.stringify({ error: 'Please provide either id or username' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (result.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: 'User not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        data: result[0]
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error retrieving user:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
