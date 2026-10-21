# JOIN THE CLUB — Google Forms copy and setup

**Form title:** Misery Incorporated — Join the Club

**Form description (suggested):**

> Welcome to Misery Incorporated, an unnecessarily negative media project. Join the Club to receive occasional company announcements, original content updates, and news about potential future offerings. The list is free and voluntary. This is not a product reservation, purchase, or preorder, and nothing is guaranteed to launch. Read our Privacy Policy before signing up: https://miseryinc.club/privacy.html

**Suggested questions:**

1. **Email address** — required; use Google's email validation or an email field.
2. **First name** — optional; short answer.
3. **Permission to email me** — required checkbox with a single option (not pre-selected):

> Yes, I want Misery Inc. to email me company announcements, new content, and information about potential future offerings. I understand I can unsubscribe at any time. I have read the Privacy Policy.

**Confirmation text:**

> Your application has been received. Expectations will be managed accordingly. If communications begin, you'll be able to unsubscribe at any time.

**Before collecting:**

- Make sure the consent is genuinely optional by making the entire signup optional; do not hide permission in unrelated terms. The checkbox itself should be affirmative, required to submit, and not preselected.
- Decide how you will honor unsubscribe requests and deletion requests. Google Forms is a collector, not a mailing-list platform; use a reputable mailing tool when emailing a list.
- Make sure your form settings don't unintentionally require a Google account sign-in, record extra information, or expose responses to respondents.
- Secure the Google account and limit who can access responses.
- Review the legal pages after verifying your actual Google Form settings and intended marketing service.

## Enable the signup link

Open `config.js`, then edit:

```js
window.MISERY_CONFIG = Object.freeze({
  googleFormUrl: "https://forms.gle/YOUR-PUBLIC-FORM-ID",
  contactEmail: "YOUR-REAL-CONTACT-EMAIL",
  operatorName: "YOUR-TRUE-OPERATOR-NAME"
});
```

Do not publish with dummy placeholders. A functional link requires all three fields to be valid, and an operator name greater than one character. The visitor leaves this site to complete the form on Google's page, where Google may use its own cookies and data processing.
