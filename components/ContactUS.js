import React, { useRef } from "react";
import { sendContactForm } from "../services";
import { Input, Card, message } from "antd";
const { TextArea } = Input;

const ContactS = () => {
  const formRef = useRef();

  const handleReset = () => {
    formRef.current.reset();
  };

  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    e.target.reset();
    e.target[0].value='';
    formRef.current.value = '';
    handleReset();
    if (res == 0) {
      message.success("Thank you for your message!");
    } else {
      message.error("Something went wrong! Please try again");
    }
  };

  return (
    <Card title="CONTACT US" style={{ textAlign: "center" }}>
      <form ref={formRef} onSubmit={submitContact}>
        <Input
          size="large"
          required
          placeholder="Name*"
          type={"text"}
          minLength={3}
          maxLength={25}
          allowClear
          className="textboxStyle"
        />
        <br />
        <br />
        <Input
          allowClear
          size="large"
          required
          placeholder="Email Address*"
          type={"email"}
          className="textboxStyle"
        />
        <br />
        <br />
        <TextArea
          allowClear
          required
          placeholder="Comment*"
          rows={5}
          maxLength={500}
          className="textboxStyle"
          style={{ justifyContent: "center" }}
        />
        <br />
        <br />
        <button type="submit" className="btn textboxStyle" size="large">
          Send
        </button>
      </form>
    </Card>
  );
};

export default ContactS;
