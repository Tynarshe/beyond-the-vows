# Beyond The Vows

A static, responsive website with Home, Services, Contact, a photo lightbox, and wedding film players. No build, API key, or package installation is required.

## Local preview

From this folder, run `python3 -m http.server 4173 --bind 127.0.0.1` and open http://127.0.0.1:4173. The server must remain running to view it.

## GitHub Pages publishing

1. Create or select the GitHub repository intended for this business. Put this folder's contents (including `.github`) at its root, on the `main` branch.
2. In repository Settings → Pages, choose **GitHub Actions** as the source.
3. Run the **Publish to GitHub Pages** workflow (or push a change to `main`). The workflow returns the live URL.

Relative paths work both at an account's root and under a project URL. No custom domain is configured. The public repository is https://github.com/Tynarshe/beyond-the-vows. GitHub Pages publishes the website at https://tynarshe.github.io/beyond-the-vows/. Updates to `main` are deployed by the included workflow.

## Activate enquiries — required before launch

The native form posts to https://formsubmit.co/info@beyondthevows.co.uk. It retains FormSubmit's spam check and includes a honeypot. FormSubmit emails submissions to **info@beyondthevows.co.uk** after that inbox has been verified.

1. Submit a clearly labelled test enquiry through the website.
2. Open FormSubmit's activation email in info@beyondthevows.co.uk and confirm the address.
3. Submit another test and verify delivery to that inbox, the Reply-To address, all enquiry fields, and the return to the thank-you page. Repeat from the published domain if FormSubmit requests activation there.

No activation/test email was sent during this build. Browser validation and field configuration were checked locally; inbox delivery requires the steps above. A local preview is not a backend and does not save enquiries. The existing live Typeform linked from the business's Linktree remains available as an alternative on the Contact page: https://form.typeform.com/to/bVqyOdQH. That form's destination inbox was not changed or verified.

FormSubmit documentation: https://formsubmit.co/

## Content and media

Public brand bio and imagery were taken from the two social profiles supplied for this website. The original Instagram thumbnails are saved locally, so expiring CDN links are not used by the website. Images remain the property of their respective rights holders. Replace the compressed social thumbnails with original files for best quality before publication.

- Instagram: https://www.instagram.com/beyondthevows.co/
- TikTok: https://www.tiktok.com/@beyondthevows.co
- Linktree (existing enquiry form): https://linktr.ee/beyondthevows.co

Portfolio image sources:
- couple.jpg: Instagram reel DblmMres69L
- ceremony.jpg: Instagram reel DboEMxysHEf
- celebration.jpg: Instagram reel DdHha7pMp6d
- details.jpg: Instagram reel DdE4Rm6s_l-
- bride.jpg: Instagram reel DSImw-ajHt1
- tradition.jpg: Instagram reel DRP3JW9jHAO
- venue.jpg: Instagram reel Dbh68yPMcJh
- party.jpg: Instagram reel DdJ_j_yoCJ4

Films load official TikTok players only when a visitor opens one, with links to the original post as a fallback. Third-party playback depends on TikTok availability and visitor browser restrictions. The player stops/unloads when the dialog closes. Photos open without contacting the social networks. Google Fonts provides typography, with local system fallbacks.

Services, pricing, coverage limits, Reel counts, delivery times, add-ons, location, and booking terms now follow the owner-supplied Beyond the Vows Wedding Content Guide.pdf (pages 2–6). The Civil Edit includes 2 highlight Reels, while The Prelude includes 1, exactly as shown in the guide. The guide PDF is not included in the public website. Review the privacy wording for your business before launch.

## Editing

Edit the HTML files for page content, `assets/style.css` for appearance, and `assets/site.js` for gallery/menu behavior. Change the form action in `contact.html` to update the receiving inbox. The `service` URL parameter preselects the enquiry interest, using a fixed list of supported values. No personal enquiry data is saved in browser storage or URLs.
