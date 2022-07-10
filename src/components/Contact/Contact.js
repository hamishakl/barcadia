import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input placeholder="Your name..." type="text" name="name" />
        <input placeholder="Your email..." type="email" name="emails" />
        <textarea
          placeholder="Your message..."
          name="message"
          rows="5"
        ></textarea>
        <input type="hidden" name="form-name" value="contact" />
      <Button text="Send Message" />
      </form>
    </ContactStyles>
  )
}

export default Contact
