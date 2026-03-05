# StudySync AI - Educational Learning Platform

A modern, interactive educational platform for sharing study materials, notes, PDFs, and learning resources with seamless database integration.

## Features

- ✅ **User Registration & Authentication**
- ✅ **Study Materials Management** - Upload and share PDFs, notes, and resources
- ✅ **Adaptive Learning Modules** - Structured lessons with video links and quizzes
- ✅ **Multiple Courses** - School and College level courses (Mathematics, Science, English, History, CSE, IT, etc.)
- ✅ **Skill Levels** - Beginner and Advanced course options
- ✅ **Multi-Language Support** - English, Hindi, Telugu, Tamil
- ✅ **Interactive Quizzes** - With immediate scoring and feedback
- ✅ **Wellness Tracking** - Student wellness tips and reminders
- ✅ **AI Mentor Chat** - Ask questions and get guidance
- ✅ **Database Integration** - Netlify Neon PostgreSQL database
- ✅ **Deployed on Netlify** - Serverless functions for backend

## Quick Start

### 1. Setup Environment Variables

Create a `.env` file or set environment variables in Netlify Dashboard:

```bash
NETLIFY_DATABASE_URL=your_neon_database_url
NETLIFY_DATABASE_URL_UNPOOLED=your_neon_database_url_unpooled
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Local Development

```bash
npm run dev
# or
netlify dev
```

This will:
- Start a local dev server at http://localhost:8888
- Automatically sync environment variables
- Enable serverless function testing

### 4. Deploy to Netlify

```bash
git push origin main
```

Netlify will automatically:
- Detect the repository
- Set up Neon database connection
- Deploy serverless functions in `netlify/functions/`
- Create environment variables automatically

## File Structure

```
StudySync/
├── index.html              # Main HTML page
├── style.css               # Styling
├── script.js               # Core JavaScript logic
├── db.js                   # Database query helper
├── package.json            # Dependencies
├── .env.example            # Environment variables template
├── netlify/
│   └── functions/
│       ├── saveUser.js     # Save user to database
│       └── getUser.js      # Retrieve user from database
└── README.md               # This file
```

## How to Use

### Registration Flow

1. Enter username and school/college name
2. Select student type (School or College)
3. Choose course/subject and skill level
4. Select preferred language
5. Account data is saved to Neon database

### Upload Study Materials

1. Go to "Study Materials" section
2. Select file (PDF, DOC, PPT, TXT)
3. Enter title for the material
4. Click "Upload" or "Skip"
5. Materials are stored in browser and can be downloaded

### Learning

1. Select a course from dashboard
2. View lessons with video links
3. Read theory and explanations
4. Take interactive quizzes
5. Track progress

## Database Schema

### Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  school_name VARCHAR(255),
  student_type VARCHAR(50),
  course VARCHAR(255),
  skill_level VARCHAR(50),
  language VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Save User (POST)

```bash
POST /.netlify/functions/saveUser
Content-Type: application/json

{
  "username": "student123",
  "schoolName": "ABC School",
  "studentType": "school",
  "course": "Mathematics",
  "skillLevel": "beginner",
  "language": "english"
}
```

### Get User (GET)

```bash
GET /.netlify/functions/getUser?username=student123
# or
GET /.netlify/functions/getUser?id=1
```

## Keyboard Shortcuts

- None yet (can be added as feature)

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Issues & Limitations

- Local file uploads are stored in browser memory (not persistent across sessions)
- Database queries require Netlify environment
- Offline mode not yet supported

## Future Enhancements

- 🔜 Student progress tracking to database
- 🔜 Social features (teacher collaboration)
- 🔜 Mobile app version
- 🔜 Advanced analytics
- 🔜 Payment integration for premium courses
- 🔜 Real-time notifications
- 🔜 Live tutoring sessions

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or feedback:
- GitHub Issues: [StudySync-AI](https://github.com/chandana-builds/StudySync-AI)
- Email: support@studysync.local

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

Created with ❤️ by Chandana Gurrapu
Built with Netlify, Neon, and modern web technologies.
