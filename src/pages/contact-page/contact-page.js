import { TextArea } from "../../components/textarea/textarea";
import { Button } from "../../components/button/button";
import { CustomCheckbox } from "../../components/custom-checkbox/custom-checkbox";
import { TextInput } from "../../components/text-input/text-input";
import DefaultLayout from "../../layouts/default-layout/default-layout";
import "./contact-page.css";
import { getErrMsg, useContactPageLogic } from "./contact-page-hooks";

function ContactPage() {
  const {
    consented,
    values,
    touched,
    hasError,
    toggleConsent,
    handleBlur,
    handleChange,
  } = useContactPageLogic();

  return (
    <DefaultLayout>
      <div className="contact-page display-grid" style={{ "--gap": "48px" }}>
        <div className="display-grid" style={{ "--gap": "20px" }}>
          <h1 className="contact-page__title">Contact Me</h1>

          <p className="contact-page__sub-text">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>

        <form className="display-grid" action="#" style={{ "--gap": "32px" }}>
          <div className="display-grid" style={{ "--gap": "24px" }}>
            <div className="display-grid display-flex-tab">
              <TextInput
                className="contact-page__input"
                label="First name"
                name="firstName"
                value={values.firstName}
                error={getErrMsg({
                  name: "firstName",
                  touched,
                  values,
                  message: "Please enter your first name",
                })}
                onChange={handleChange}
                onBlur={handleBlur}
                id="first_name"
                placeholder="Enter your first name"
              />

              <TextInput
                className="contact-page__input"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Last name"
                id="last_name"
                error={getErrMsg({
                  name: "lastName",
                  touched,
                  values,
                  message: "Please enter your last name",
                })}
                placeholder="Enter your last name"
              />
            </div>

            <TextInput
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              error={getErrMsg({
                name: "email",
                touched,
                values,
              })}
              id="email"
              label="Email"
              placeholder="yourname@email.com"
            />

            <TextArea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getErrMsg({
                name: "message",
                touched,
                values,
                message: "Please enter a message",
              })}
              id="message"
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />

            <CustomCheckbox
              checked={consented}
              onChange={toggleConsent}
              disabled={hasError}
            >
              You agree to providing your data to ojaykaris who may contact you.
            </CustomCheckbox>
          </div>

          <Button
            id="btn__submit"
            disabled={hasError || !consented}
            type="submit"
          >
            Send message
          </Button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default ContactPage;
