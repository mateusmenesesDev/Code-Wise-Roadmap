# Learning Roadmap Generator

A modern web application that helps developers create personalized learning roadmaps based on their current skill levels in different technologies.

## Features

- **Skill Rating System**

  - Drag and drop interface for rating technologies
  - Four proficiency levels: Beginner (25%), Intermediate (50%), Advanced (75%), Expert (100%)
  - Visual feedback with star ratings

- **Smart Priority System**

  - Technology priority levels (1-10, where 1 is highest priority)
  - Automatic sorting based on priority and skill level
  - Visual indicators for high, medium, and low priority technologies

- **Category-based Organization**

  - Technologies grouped by categories (Frontend, Backend, etc.)
  - Color-coded categories for better visual organization
  - Detailed technology descriptions and learning paths

- **Progress Tracking**
  - Clear visualization of current skill levels
  - Proficient status indicators
  - Priority-based recommendations for learning

## Tech Stack

- **Frontend**

  - Next.js 14 with App Router
  - React with TypeScript
  - Tailwind CSS for styling
  - Shadcn/ui for UI components
  - React DnD for drag and drop functionality

- **Backend**
  - tRPC for type-safe API
  - Drizzle ORM for database operations
  - PostgreSQL database

## Getting Started

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   ```bash
   cp .env.example .env
   ```

   Fill in the required environment variables in `.env`

4. Run database migrations:

   ```bash
   npm run db:migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         # React components
│   ├── admin/         # Admin interface components
│   ├── roadmap/       # Roadmap-related components
│   └── ui/            # Reusable UI components
├── server/            # Backend code
│   ├── api/          # tRPC routers
│   └── db/           # Database schema and migrations
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
