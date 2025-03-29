# Interactive Quiz Platform

A modern, responsive quiz application built with Next.js, TypeScript, and Tailwind CSS. This platform allows users to create, take, and share interactive quizzes with a beautiful user interface.

## Features

- 🎯 Dynamic quiz creation and management
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 🔒 Secure authentication
- 📊 Real-time quiz results
- 🎮 Interactive quiz experience

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Prisma with PostgreSQL
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS, Headless UI

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   ```bash
   cp .env.example .env
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file with the following variables:

```env
DATABASE_URL="your_database_url"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
