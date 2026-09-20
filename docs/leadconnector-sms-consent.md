# Hosted contact form SMS consent

The website embeds the LeadConnector form `PhEe9M2XrqJ3BzNnPe7S` from
`https://links.timemacoriginals.com/widget/form/PhEe9M2XrqJ3BzNnPe7S`.
Its fields and submission settings must be edited in LeadConnector. A checkbox
outside the iframe would not be included in that form's submission.

The repository update includes the supplied Privacy Policy and Terms & Conditions,
dated September 21, 2026, and visible links beneath the embedded form. The following
hosted form changes are still pending.

## Checkbox settings

- Label: **I agree to receive SMS messages from Timemac Digital**
- Default: **unchecked**
- Required: **off**; the form must accept submissions without SMS consent.
- Store the explicit checkbox choice with the submission. Do not infer consent
  from providing a phone number or submitting the contact form.
- Ensure SMS workflows send messages only when the applicable consent is present.

Use this disclosure with the checkbox:

> By checking this box, I agree to receive marketing and informational text messages from Timemac Digital, including service updates, appointment reminders, follow-ups, offers, and promotional messages. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time or HELP for help. Consent is not a condition of purchase.

Immediately below or within the consent area, add:

> View our Privacy Policy and Terms & Conditions.

Link **Privacy Policy** to `/privacy` and **Terms & Conditions** to `/terms` on the
public Timemac Digital website. In LeadConnector, use the full production URLs:
relative links inside the iframe would resolve against the form provider's domain.

Support details already configured in `lib/business.ts`:

- Email: **manthan@timemacoriginals.com**
- Phone: **+91 7619371435**

## Verify after saving in LeadConnector

1. Open the contact page in a fresh session and confirm the checkbox is unchecked.
2. Confirm the full disclosure and both policy links appear beside the checkbox.
3. Submit an authorized test enquiry without selecting it; confirm submission works
   and SMS consent is not recorded as granted.
4. Submit an authorized test enquiry with it selected; confirm the consent choice
   reaches the contact record and the applicable messaging workflow.
5. Verify both policy links open the public website pages without signing in.

These hosted form behaviors cannot be verified by the website's build or type check.
