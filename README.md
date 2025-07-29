# AI Career Coach

An intelligent platform built with Next.js to help you build a winning resume, craft compelling cover letters, and ace your interviews using the power of AI.

![Banner](public/banner.jpeg)

## ✨ Features

-   **🤖 AI-Powered Resume Builder**: Create professional, ATS-friendly resumes tailored to your experience and the job you're applying for.
-   **✍️ Dynamic Cover Letter Generator**: Generate compelling cover letters that highlight your strengths and align with the company's needs.
-   **🎙️ Personalized Interview Prep**: Practice with mock interviews and receive AI-driven feedback to improve your skills.
-   **📈 Industry Insights & Progress Tracking**: Stay updated with market trends and track your performance over time.
-   **🔐 Secure & Private**: Built with security in mind, using [Clerk](https://clerk.com/) for authentication to keep your data safe.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Authentication**: [Clerk](https://clerk.com/)
-   **Database**: PostgreSQL (via [Prisma ORM](https://www.prisma.io/))
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
-   **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm
-   A PostgreSQL database

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai-career-coach.git
    cd ai-career-coach
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add the necessary environment variables. You will need to get credentials from [Clerk](https://clerk.com/) and set up your database connection string.

    ```env
    # Prisma
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

    # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

    # Add other environment variables if needed
    ```

4.  **Run database migrations:**
    This will sync your Prisma schema with your database.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## (Deployment)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.