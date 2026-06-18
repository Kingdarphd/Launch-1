# LaunchPrep Academy King Thrive MVP

This is a fuller MVP scaffold for a subscription-based AI-integrated learning platform.

## What is included

- Student-facing landing page
- Stripe-ready subscription tiers
- Login prototype using local browser storage
- 10 King Thrive competency modules
- Module completion tracking
- Digital badge tracking
- Evidence portfolio
- AI coaching interface
- OpenAI backend endpoint scaffold
- Admin dashboard mockup
- Analytics API mock endpoint

## How to run locally

1. Install Node.js.
2. Open this folder in VS Code.
3. Run:

```bash
npm install
cp .env.example .env
npm start
```

4. Open:

```text
http://localhost:3000
```

## To activate paid subscriptions

1. Create a Stripe account.
2. Create products/prices for:
   - Student monthly
   - Family monthly
   - School cohort
3. Add your keys and price IDs to `.env`.

## To activate real AI coaching

1. Add an OpenAI API key to `.env`.
2. Update the model if needed in `server/server.js`.
3. Add safety rules, age-appropriate controls, logging, and school data policies before going live.

## Recommended production stack

- Frontend: Next.js
- Backend: Node.js/Express or Next.js API routes
- Database: Supabase/PostgreSQL
- Auth: Clerk, Auth0, Firebase Auth, or Supabase Auth
- Payments: Stripe Billing
- AI: OpenAI API
- File storage: Supabase Storage, AWS S3, or Google Cloud Storage
- Admin analytics: Metabase, Supabase dashboards, or custom React dashboard
- Hosting: Vercel, Render, Railway, or AWS

## Important launch considerations

- FERPA compliance for school partnerships
- COPPA compliance if serving students under 13
- Parent consent workflows
- Data privacy policy
- AI safety and content moderation
- Accessibility testing
- Clear competency rubrics
- Human coach review for high-stakes feedback
