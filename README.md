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

The website uses the owner-supplied, full-resolution JPEG photographs provided on 17 September 2026. The original files are copied without resizing or recompression; image dimensions are declared in the pages and gallery photos load lazily. Photo-gallery images use the supplied originals; the restored “One more song” film uses its original social cover. Additional supplied photographs remain available in assets for future use.

Photo sources:
- wedding-smiles.jpg: IMG_2193.jpeg
- wedding-embrace.jpg: IMG_2188.jpeg
- wedding-portrait.jpg: IMG_2191.jpeg
- wedding-together.jpg: IMG_2187.jpeg
- wedding-glance.jpg: IMG_2189.jpeg
- traditional-couple.jpg: IMG_4487.jpeg
- traditional-portrait.jpg: IMG_4488.jpeg
- traditional-bride.jpg: IMG_4489.jpeg
- traditional-moment.jpg: IMG_4497.jpeg
- adedayo-deborah-cover.jpg: The Vows.png.jpeg (duplicate supplied once)

The homepage gallery has six cards in two desktop rows. “All the joy, unfiltered” uses the owner-supplied cover (codex-clipboard-8b306248-3cd9-413a-85c9-19eef27190ef.jpg) and the Instagram reel https://www.instagram.com/reel/DdHha7pMp6d/. “One more song” is restored to the third card with its original cover and TikTok player (7684363914225732886). “The beginning of forever” uses https://www.instagram.com/reel/DRDBR7rDGBU/ and its public still cover.

Film covers and “Watch the film” buttons open official embeds inside the existing site dialog; no website film button navigates to an external page. Embedded platforms control their own playback and may show sign-in or external watch controls. No videos are downloaded or self-hosted. Closing the dialog unloads its player. Google Fonts provides typography, with local system fallbacks.

The homepage reviews section includes a short excerpt from Sam-Michelle Olaniran (Mishhy)’s five-star Google review, verified on the public business profile on 17 September 2026. This is a manually maintained testimonial, not an automatically refreshed review feed. The section links to the business profile and the owner-supplied review form at https://g.page/r/CcggZTtOlpyZECE/review. No review was submitted.

Services, pricing, coverage limits, Reel counts, delivery times, add-ons, location, and booking terms now follow the owner-supplied Beyond the Vows Wedding Content Guide.pdf (pages 2–6). The Civil Edit includes 2 highlight Reels, while The Prelude includes 1, exactly as shown in the guide. The guide PDF is not included in the public website. Review the privacy wording for your business before launch.

## Editing

Edit the HTML files for page content, `assets/style.css` for appearance, and `assets/site.js` for gallery/menu behavior. Change the form action in `contact.html` to update the receiving inbox. The `service` URL parameter preselects the enquiry interest, using a fixed list of supported values. No personal enquiry data is saved in browser storage or URLs.
