// Configure these before activating the waitlist. Use a public RESPONDENT URL.
const GOOGLE_FORM_URL = "";
const CONTACT_EMAIL = "";
const key = "miseryinc_cookie_choice_v1";
document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 const enabled=/^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/.test(GOOGLE_FORM_URL);
 document.querySelectorAll("[data-form-link]").forEach(a=>{if(enabled){a.href=GOOGLE_FORM_URL;a.target="_blank";a.rel="noopener noreferrer";a.removeAttribute("aria-disabled");a.textContent="OPEN SIGNUP FORM"}else{a.removeAttribute("href");a.setAttribute("aria-disabled","true");a.textContent="SIGNUP COMING SOON"}});
 if(enabled){const s=document.getElementById("form-status");if(s)s.innerHTML="<strong>Registration is open.</strong><p>You will be directed to a Google Form. Read the privacy notice before submitting.</p>"}
 document.querySelectorAll("[data-contact]").forEach(a=>{if(CONTACT_EMAIL){a.textContent=CONTACT_EMAIL;a.href="mailto:"+CONTACT_EMAIL}else{a.textContent="Contact details pending";a.removeAttribute("href")}});
 const banner=document.getElementById("cookie-banner");if(banner&&!localStorage.getItem(key))banner.hidden=false;
 document.querySelectorAll("[data-consent]").forEach(btn=>btn.addEventListener("click",()=>{localStorage.setItem(key,btn.dataset.consent);banner.hidden=true}));
 document.querySelectorAll("[data-open-preferences]").forEach(btn=>btn.addEventListener("click",()=>{if(banner)banner.hidden=false}));
 // No optional tracking scripts are present. If added later, gate behind explicit acceptance.
});
