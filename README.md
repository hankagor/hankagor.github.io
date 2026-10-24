# Hanka Goralija

Personal academic website built with [al-folio](https://github.com/alshedivat/al-folio), using the pinned v1 runtime gems. Template source: `f2a2765c8a9413f6ec703fc02070fbe6becf1572`.

## Preview

Use Ruby 3.3 and Bundler:

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open http://localhost:4000. On this Mac, Homebrew Ruby is at `/opt/homebrew/opt/ruby@3.3/bin`; add that directory to PATH if the system Ruby is selected.

## Edit

- Bio and contact links: `_pages/about.md`
- Education, experience, teaching and awards: `_pages/background.md`
- Publications page: `_pages/publications.md`
- Publication entries: `_bibliography/papers.bib`
- Name, metadata and feature switches: `_config.yml`
- Social link data: `_data/socials.yml`
- Portrait: `photo.jpg` (replace this file to update your picture)
- CV download: `CV.pdf`

## Deploy to GitHub Pages

In the repository's **Settings → Pages**, select **GitHub Actions** as the source. Push the reviewed changes to your repository's default branch. The workflow builds pull requests without deploying and deploys pushes to main/master. No Sites hosting is used.

The reference-inspired academic layout is in `_layouts/academic.html`, with styling in `assets/css/academic.css` and publication formatting in `_layouts/bib.liquid`. It uses a white background, purple links, a portrait beside the bio and a recent-publications section. Optional blog, search, chart, analytics and demo plugins are omitted. The pre-migration site remains available in Git history.

Dark mode is the default. The navigation theme toggle switches between light and dark and remembers the selection in the browser.
