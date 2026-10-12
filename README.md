# fcraighero.github.io

Personal academic website, built with [Jekyll](https://jekyllrb.com/) and
[jekyll-scholar](https://github.com/inukshuk/jekyll-scholar). The layout is inspired by
[al-folio](https://github.com/alshedivat/al-folio), stripped down to the bare minimum.

## Privacy by design

- No cookies, analytics, embeds or CDNs. Fonts are self-hosted in `assets/fonts/`:
  [Inter](https://rsms.me/inter/) for text and [Fraunces](https://github.com/undercasetype/Fraunces)
  for the name and page titles (variable weight + optical size, latin subsets).
- The only JavaScript is `assets/js/theme.js` (optional light/dark button). It stores a
  preference in `localStorage` only after a click, and only when it differs from the OS
  setting. Without JS the button is hidden and the site follows the OS.
- Every asset (CSS, icons, image) is served from this domain; icons are inlined SVG.
- Each page sets a Content-Security-Policy (`default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'`)
  and `referrer: no-referrer`, so the browser itself refuses to load anything else.
- Images are resized and stripped of EXIF metadata.
- Abstract/BibTeX/author toggles are pure CSS (hidden checkboxes).

## Editing content

| What                    | Where                          |
| ----------------------- | ------------------------------ |
| Bio                     | `index.md`                     |
| Name, position, etc.    | `_config.yml`                  |
| Publications            | `_bibliography/papers.bib`     |
| News                    | `_news/*.md` (see below)       |
| CV / career             | `_data/career.yml`             |
| Social links            | `_data/socials.yml`            |
| Privacy notice          | `_pages/privacy.md`            |
| Styles                  | `assets/css/main.css`          |

Extra BibTeX fields understood by the site (hidden from the public BibTeX):
`abbr` (venue badge), `selected = {true}` (show on home page), `html`, `pdf`
(URL or file name in `assets/pdf/`), `award`, `abstract`.

News items are files in `_news/` with a `date`. Short ones use `inline: true` and appear in
full in the news table; longer ones use `inline: false` plus a `title` and get their own page
under `/news/`. The latest `news_limit` items (set in `_config.yml`) are "recent"; older ones
move to an "Archived news" section, collapsed on the home page and grouped by year on `/news/`.

To replace the photo while stripping metadata:

```sh
magick my_photo.jpg -auto-orient -strip -resize 560x560 -quality 82 assets/img/prof_pic.jpg
```

## Build & deploy

```sh
bundle install
bundle exec jekyll serve      # preview at http://localhost:4000
rake commit_deploy            # build, commit, and publish _site/ to the master branch
```

Before deploying, check that nothing external sneaked in:

```sh
grep -rEn '<iframe|src="https?://|url\(https?:' _site || echo "clean"
```

## Licenses

Code: MIT (see `LICENSE`). Font: [Inter](https://rsms.me/inter/) by Rasmus Andersson
(SIL OFL 1.1, `assets/fonts/LICENSE-Inter.txt`) and Fraunces by Undercase Type (SIL OFL 1.1,
`assets/fonts/LICENSE-Fraunces.txt`). Icons: [Font Awesome Free](https://fontawesome.com/license/free)
(CC BY 4.0) and [Academicons](https://github.com/jpswalsh/academicons) (SIL OFL 1.1);
attribution is kept inside each SVG in `_includes/icons/`.
