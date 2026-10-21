# MISERY INC. / WEBSITE

A minimalist, responsive, text-only website for **miseryinc.club**, built from the approved dark editorial mockup. Plain HTML + CSS + vanilla JavaScript; no build tools, frameworks, stock images, webfonts, or paid dependencies.

## Quick deploy to GitHub Pages (about 5 minutes)

1. Extract `miseryinc-github-site.zip` on your computer.
2. Go to https://github.com/new and create a **public** repository, for example `miseryinc-site`.
3. Open your repository, choose **Add file → Upload files**, and upload **the files inside this folder**. `index.html` must be at the root, not in another subfolder. Commit the files.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**; choose **main** and **/(root)**, and save.
5. After GitHub publishes it, open `https://YOUR-USERNAME.github.io/miseryinc-site/` (use your actual username and repo name).
6. For your domain: In **Settings → Pages**, set the custom domain to `miseryinc.club` and save. **Before adjusting DNS**, follow GitHub's custom-domain instructions and preferably verify ownership. Configure the apex `A` records at your domain registrar as instructed by GitHub, then enable **Enforce HTTPS** after the certificate is ready. GitHub may create a `CNAME` file for you.

GitHub Pages guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Custom domain guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

### What to edit

- **`config.js`**: Enter a public Google Forms link, truthful operator name, and monitored contact email **before activating signup**. All three are required. Do not put secrets or private keys in this file because GitHub serves it publicly.
- **`index.html`**: Edit hero, descriptions, and sections.
- **`about.html`**: Edit company copy.
- **`content.html`**: Replace clearly labeled content concepts with actual published content and links when ready.
- **`styles.css`**: Color palette, typography and spacing.
- **`privacy.html`, `cookies.html`, `accessibility.html`, `returns.html`**: Review policies so they match your actual operations and services. These are drafted starting points, not legal certifications.
- **`site.js`**: Global interactions; usually no need to edit.

## Google Forms setup (important)

The static website **does not collect email addresses or send submissions itself**. The Join page displays disabled, illustrative form-like rows while setup is incomplete; they are **not functional fields**.

Before enabling the Google Forms link:

1. Create a Google Form, e.g. **Misery Inc. — Join the Club**. Collect **Email address (required)** and **First name (optional)**. Avoid requesting home addresses, phone numbers, birthdates, sensitive details, or payment information.
2. Add a **required, unchecked consent checkbox** with clearly worded permission for promotional email and a link to your published Privacy Policy. Suggested wording is in `GOOGLE_FORM_SETUP.md`.
3. Explain in the form that this is a **free, optional email list**, **not a preorder**, and that there is **no guaranteed release date**. Make sure the form is accessible to intended visitors without unnecessary sign-in barriers.
4. Check how Google Forms stores responses, who can see them, and how you'll honor deletion requests. Secure the Google account (e.g. multifactor authentication).
5. Configure a real mailing service when you actually send bulk updates, and include an unsubscribe facility, honest sender information, and a valid postal address in commercial emails, consistent with applicable law. Google Forms by itself does not manage a compliant bulk email subscription lifecycle.
6. Edit `config.js`, test on the published site, and verify that the Google Form works, that the checkbox cannot be skipped, that responses arrive in the intended account, and that the Privacy Policy is accurate.

If any of `googleFormUrl`, `contactEmail`, or `operatorName` is blank or invalid, the Join page remains in a closed state.

## Privacy and accessibility design

- No optional analytics, advertising scripts, embedded third-party frames, or trackers are installed.
- Visitors can save cookie preferences. Choices are stored in browser `localStorage` where permitted. Optional tracking **never** runs merely because a visitor selects “Accept Optional”; there is no optional tracking code at all.
- The site uses a semantic navigation, skip link, focus states, responsive CSS, reduced motion, keyboard-accessible menus and preferences, and a native dialog.
- Targets WCAG 2.2 AA accessibility best practices but **is not certified or guaranteed legally compliant**. Conduct keyboard and screen-reader checks using actual devices before claiming conformance.
- GitHub Pages still receives normal hosting traffic; Google Forms and social platforms are separate services and may process personal information when visited.

## Before public waitlist launch: checklist

- [ ] Verify brand/trademark and any applicable business-name obligations.
- [ ] Fill in **truthful** project operator and monitored email in `config.js`.
- [ ] Check all legal drafts against how the website and Google Forms really operate.
- [ ] Add the Privacy Policy link and consent wording to Google Form **before** collection.
- [ ] Confirm whether applicable laws in your intended regions (including California and elsewhere) require further notices or rights processes; seek qualified legal review as appropriate.
- [ ] Ensure promotional emails meet the FTC's CAN-SPAM requirements, including unsubscribe and physical mailing address requirements: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- [ ] Avoid marketing it as a guaranteed product launch, paid membership, or preorder.
- [ ] Test form, links, mobile navigation, keyboard access, zoom up to 200%, text reflow, and screen readers.
- [ ] Test cookie preferences and links on the live HTTPS domain.

**Note:** GitHub Pages is static hosting, not a backend; don't add a local `<form>` that appears to accept customer information without configuring a real submission provider.

## Included files

```text
index.html          Homepage
about.html          Company/about
content.html        Content concepts, with working category filter
join.html           Google Forms link, initially closed
privacy.html        Privacy Policy draft
cookies.html        Cookie Policy draft
accessibility.html  Accessibility Statement draft
returns.html        Returns & Refunds draft
404.html            Missing-page experience
styles.css          Entire visual system; responsive
config.js           Change only three values to activate signup
site.js             Navigation, preference dialog, filters, join link
.nojekyll           GitHub Pages compatibility
robots.txt          Basic crawler rules
GOOGLE_FORM_SETUP.md  Copy suggestions and configuration details
```
