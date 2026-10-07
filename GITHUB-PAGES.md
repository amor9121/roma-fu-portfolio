# GitHub Pages

In GitHub, open Settings → Pages and set Source to GitHub Actions.
Push the repository to the main branch. The Deploy portfolio to GitHub Pages
workflow builds and publishes the out directory. The deploy job reports the final URL.

The workflow obtains the URL prefix from configure-pages. This supports both
project repositories and account-root sites without hardcoded asset paths.

Local development: npm run dev (no prefix).
Test project-path export: NEXT_PUBLIC_BASE_PATH=/roma-fu-portfolio npm run build.
Static files are in out/. Do not commit out/ or node_modules/.
After enabling static export, npm run start is not a production preview;
serve out/ with a static web server instead.
