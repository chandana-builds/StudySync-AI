import { neon } from '@netlify/neon';

const sql = neon();

export default async (req, context) => {
  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const userData = JSON.parse(req.body);
    const { username, schoolName, studentType, course, skillLevel, language } = userData;

    // Create users table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE,
        school_name VARCHAR(255),
        student_type VARCHAR(50),
        course VARCHAR(255),
        skill_level VARCHAR(50),
        language VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert user data
    const result = await sql`
      INSERT INTO users (username, school_name, student_type, course, skill_level, language)
      VALUES (${username}, ${schoolName}, ${studentType}, ${course}, ${skillLevel}, ${language})
      ON CONFLICT (username) DO UPDATE SET
        school_name = ${schoolName},
        student_type = ${studentType},
        course = ${course},
        skill_level = ${skillLevel},
        language = ${language},
        updated_at = CURRENT_TIMESTAMP
      RETURNING id, username, school_name, course
    `;

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'User saved successfully',
        data: result[0]
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error saving user:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
