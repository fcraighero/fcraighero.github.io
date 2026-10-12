# fcraighero.github.io

Personal academic website, built with [Jekyll](https://jekyllrb.com/) and
[jekyll-scholar](https://github.com/inukshuk/jekyll-scholar). The layout is inspired by
[al-folio](https://github.com/alshedivat/al-folio), stripped down to the bare minimum.

## Privacy by design

- No JavaScript, cookies, analytics, embeds, web fonts or CDNs.
- Every asset (CSS, icons, image) is served from this domain; icons are inlined SVG.
- Each page sets a Content-Security-Policy (`default-src 'none'; style-src 'self'; img-src 'self'`)
  and `referrer: no-referrer`, so the browser itself refuses to load anything else.
- Images are resized and stripped of EXIF metadata.
- Abstract/BibTeX/author toggles are pure CSS (hidden checkboxes).

## Editing content

| What                    | Where                          |
| ----------------------- | ------------------------------ |
| Bio                     | `index.md`                     |
| Name, position, etc.    | `_config.yml`                  |
| Publications            | `_bibliography/papers.bib`     |
| News                    | `_data/news.yml`               |
| CV / career             | `_data/career.yml`             |
| Social links            | `_data/socials.yml`            |
| Privacy notice          | `_pages/privacy.md`            |
| Styles                  | `assets/css/main.css`          |

Extra BibTeX fields understood by the site (hidden from the public BibTeX):
`abbr` (venue badge), `selected = {true}` (show on home page), `html`, `pdf`
(URL or file name in `assets/pdf/`), `award`, `abstract`.

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
grep -rEn '<script|<iframe|src="https?://|url\(https?:' _site || echo "clean"
```

## Licenses

Code: MIT (see `LICENSE`). Icons: [Font Awesome Free](https://fontawesome.com/license/free)
(CC BY 4.0) and [Academicons](https://github.com/jpswalsh/academicons) (SIL OFL 1.1);
attribution is kept inside each SVG in `_includes/icons/`.
