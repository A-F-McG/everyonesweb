import React from "react";
import { useState } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import {
  emailAndBtn,
  emailInput,
  form,
  honeyPotInput,
  honeyPotLabel,
  label,
  messageP,
} from "./mailchimpForm.styles";

export default function MailChimpForm() {
  const url =
    "https://everyonesweb.us21.list-manage.com/subscribe/post?u=9f26f1fb0bb8e03369d15451e&amp;id=dfdefec4e3&amp;f_id=0042afe1f0";

  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  const [honeyPot, setHonetPot] = useState("honing");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (honeyPot === "honing") {
            handleSubmit(fields);
          }
        }}
        css={form}
        action={url}
        method="post"
      >
        <label htmlFor="EMAIL" css={label}>
          Add your email to be notified when new activities are added
        </label>
        <div css={emailAndBtn}>
          <input
            id="EMAIL"
            type="email"
            value={fields.EMAIL}
            onChange={handleFieldChange}
            name="EMAIL"
            css={emailInput}
          />

          <label htmlFor="theName" css={honeyPotLabel}>
            What's your name?
          </label>
          <input
            id="theName"
            value={honeyPot}
            onChange={(e) => setHonetPot(e.target.value)}
            aria-hidden={true}
            css={honeyPotInput}
          />
          <button type="submit">Subscribe</button>
        </div>
        <p aria-live="polite" css={messageP}>
          {loading && "Submitting..."}
          {error && message}
          {success && message}
        </p>
      </form>
    </>
  );
}
