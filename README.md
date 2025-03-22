# Twitter Clone

Twitter Clone: A Next.js 14 project with TypeScript, MongoDB, and Shadcn UI
## Features
- Google / Github (NextAuth) Authentication 
- Edit profile with profile / banner images and other details
- Create tweet with upto 4 images and support emojis
- Follow / Unfollow user functionality
- Likes / Comments / Replies / Bookmark tweet functionality
- Discover trending hashtags
- Fully responsive
### How to built

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [Mongodb](https://www.mongodb.com/atlas/database)
- [Supabase](https://supabase.com/docs)
- [Upstash Redis](https://upstash.com/)
- [Zustand](https://zustand.surge.sh/)
- [zod](https://github.com/colinhacks/zod)
- [SWR](https://swr.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/)

### Installation

```bash
 git clone https://github.com/Helios9284/twitter-clone
 cd twitter-clone
 npm i
 npm run dev
 ```
### Environment Variables
Before running the development server, make sure to create `.env` file in the root directory of the project and add the required environment variables. You can use the example provided in the repository as a starting point.

```bash
 cp .env.example .env
 ```
 ### Prisma
 
 This project leverages the power of Prisma ORM for seamless database interaction. Prisma provides a modern database toolkit that simplifies database access, allowing for efficient querying, migrations, and schema management.
 
 Run the following command to generate the Prisma client:
 
 ```bash
 cp npx prisma generate
 ```
 
 This command generates TypeScript typings for Prisma Client based on your database schema.
 
 After generating the Prisma client, ensure that any changes made to the database schema are synchronized with the actual database. Run the following command:
 
 ```bash
 cp npx prisma db push
 ```
 
 This command applies any pending migrations to the database, ensuring that the local database reflects the latest schema changes made in the codebase.
 
 🔗 Useful Links:
 - [Prisma Documentation](https://www.prisma.io/docs)
 - [Prisma GitHub Repository](https://github.com/prisma/prisma)
 
 ### Contributing
 Welcome to contribute to our repository! We value your input and appreciate any contributions you make

