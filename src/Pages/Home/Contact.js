import React, { useRef } from "react";
import "./contact.css";
import leaves from "../../assets/icons/Leaves_object.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Roll from 'react-reveal/Roll';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r5elzm9",
        "template_fcgfy2c",
        form.current,
        "1NZeW9SAwUpK04-h_"
      )
      .then(
        (result) => {
          toast("Message Received");
        },
        (error) => {
          toast.warn(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-form " id="contact">
      <div className="w-left">
        <div className="awesome">
        <Roll left>
            <span>Get in Touch</span>
            </Roll>

          <br />
          <span>Contact Us</span>
          <img src={leaves} alt="" />
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="useri"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="useri"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="useri"
            placeholder="Message"
            required
          />
          <input type="submit" value="Submit" class="btn button" />
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
