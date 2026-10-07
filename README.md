# Roma Fu — personal portfolio

A responsive, English-language portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4 and custom CSS. Morandi mist-blue, oatmeal ivory and warm taupe editorial design with an illustrative data pipeline and conservation contour artwork. No external fonts, tracking, stock images, or backend required.

## Run locally

Use Node.js 22 LTS or newer and npm.

```sh
cd portfolio
npm ci
npm run dev
```

Open http://127.0.0.1:3000. If you opened the `portfolio` folder directly, skip `cd portfolio`.

```sh
npm run typecheck
npm run build
npm start
```

## Personalise before publishing

Edit `lib/profile.ts` for your email, GitHub, LinkedIn, CV, project demo and repository. Empty links are deliberately hidden; the CV and contact sections display an honest availability message until configured. There is no contact form or message storage. A configured email link opens the visitor's email application.

For a downloadable CV:

1. Place your actual PDF at `public/roma-fu-cv.pdf`.
2. Set `cvUrl: '/roma-fu-cv.pdf'` in `lib/profile.ts`.
3. Rebuild and verify the download.

Use full `https://` URLs for external links. Enter the email address without `mailto:`.

Page copy is in `app/page.tsx`; colours, typography and responsive styles are in `app/globals.css`. Metadata is in `app/layout.tsx`. Skills are in `lib/profile.ts`.

### Content verification

This is a first draft based on the supplied conversation, not a verified CV or dissertation. No source attachments were available. Review your name, degree completion, role descriptions, skill list, and actual project technologies before public release. Exact employment dates, employer names, years of experience, device counts, quantified improvements and production deployment claims were intentionally omitted pending verification. The Wildlife Trusts material is described as research/prototype work, not a production client endorsement. The lakehouse diagram is conceptual. No dissertation text, organisation logos or private banking information are included.

## Deploy to Vercel

1. Put the project in a GitHub repository and push the source files, including `package-lock.json`. Do not commit `node_modules` or `.next`.
2. In Vercel, choose **Add New → Project**, then import the repository.
3. If the repository contains the enclosing project directory, choose **Root Directory: portfolio**. If this folder is the repository root, leave the root directory unchanged.
4. Select the **Next.js** framework preset. Use `npm run build` and the default output directory. No environment variables are needed.
5. Deploy. Review the preview on desktop and phone before assigning a custom domain.

Alternatively, from this directory run `npx vercel` after signing into your own Vercel account. Use a preview deployment first; promote it when your content is verified.

This task prepares the project locally; it does not create a GitHub repository, publish a public website, or configure a domain.

## Design and accessibility

- Semantic landmarks, one H1, skip link, labelled navigation and visible keyboard focus.
- Responsive single-column layouts, no remote asset dependencies, reduced-motion support.
- Native anchor navigation and server-rendered content; no client-side JavaScript is needed for the page's interactions.
- Original composition inspired by the clarity of engineering portfolios, with no copied template or source code.

References considered: [Brittany Chiang](https://brittanychiang.com/) and the supplied description of [Anish Shah's portfolio](https://anishshahportfolio.co.uk/). The latter could not be retrieved during implementation.
