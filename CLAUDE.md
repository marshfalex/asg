# Alexander Sales Group website

Live at https://alexandersalesgroup.com — a static HTML/CSS site served by GitHub Pages
from the `main` branch of `marshfalex/asg` (custom domain set in `CNAME`).
Pushing to `main` deploys to the live site within a minute or two.

## Stack
- Plain hand-written HTML pages + one shared `styles.css`. No build step, no framework, no npm.
- The header, nav and footer are duplicated in every page. A nav/footer/contact-detail change
  must be made in **every** `.html` file (including `404.html` and `privacy.html`).
- Fonts: IBM Plex Sans / Sans Condensed / Mono (Google Fonts). Colors are CSS variables at the top of
  `styles.css` (`--ink` navy, `--steel` teal, `--signal` orange). Use the variables, not raw hex.
- Clean URLs: link to `/medical-tubing`, never `medical-tubing.html` (canonicals and sitemap too).
- `_config.yml` keeps repo-only files (this file, etc.) off the live site. Add new non-site files there.

## Business facts
- Alexander Sales Group: manufacturers' rep agency for medical device OEMs, led by Bill Alexander.
  Always write "Alexander Sales Group" in full (never "ASG").
- Phone 612-501-0415 · bill@alexandersalesgroup.com · 2145 University Ave. W, Suite #203, St. Paul, MN 55114
- No fax number anywhere.
- Parker Hannifin and Little Falls Alloys are no longer represented. Do not mention them.
- Partners: Keystone Medical Technologies, Proto Lase, Medical Component Specialists,
  Thermetic Products, United Wire Company, Thor Medical Automation.

## Pages
Product pages: catheter-liners, medical-tubing, catheter-manufacturing-equipment, laser-machining,
medical-balloons, polyimide-tubing, mandrels, micro-coils-assemblies, flat-wire-custom-shaped-wire.
Other: index, privacy, 404 (also forwards old WordPress URLs).
`catheter-tip-forming-and-rf-welding.html` is only a redirect stub. `protective-caps-and-plugs.html`
is not in the sitemap.

When adding, renaming or removing a page, also update: every page's nav/footer, `sitemap.xml`,
`llms.txt`, `404.html` redirects, and the JSON-LD in `index.html` if relevant.

## Integrations
- Contact/quote form posts to FormSubmit (`formsubmit.co/bill@alexandersalesgroup.com`) and
  redirects back with `?sent=1`.
- Analytics: GoatCounter (code `marshfalex`) loaded by `analytics.js`. Cookieless, no consent banner.
- `9e78da1a780148ddada4e7fb166b879b.txt` is the IndexNow key. Keep it.

## Previewing
Open the HTML files directly or serve the folder (`python -m http.server`). Analytics is off on localhost.
