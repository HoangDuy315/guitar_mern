import "./Contact.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [isSuccess, setIsSuccess] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l2eap1s",
        "template_mwxqsjq",
        form.current,
        "JGEI8C-AOmEuV8bQu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setShowMessage(true);
  },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setShowMessage(true);
      }
      );
    setTimeout(() => {
    e.target.reset();
    setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="ctact">
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p className="ctact-content-p">
          Any problems, please contact us, with a staff of 24/24 ready to assist you in the most enthusiastic way.
          </p>
        </div>
        <div className="ctact-container">
          <div className="contact-info">
            <div className="box">
              <div className="icon">
                <GoLocation />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>UIT, HCM City</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <AiOutlinePhone />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p> 0827772001</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <AiOutlineMail />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p> 1951425@gm.uit.edu.vn</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action="" ref={form} onSubmit={sendEmail}>
              <h2>Send Messages</h2>
              <div className="inputBox">
                <input type="text" name="name" required="required" />
                <span className="span">Full name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="email" required="required"/>
                <span className="span">Email </span>
              </div>
              <div className="inputBox">
                <textarea name="message" required="required"></textarea>
                <span className="span"> Type your Message...</span>
              </div>
              <div className="inputBox inputBox-footer">
                <input type="submit" value="Send" />
                {showMessage ? (
                  isSuccess ? (
                    <p className="inputBox-success">Send Successfully !</p>
                  ) : (
                    <p className="inputBox-fail">Send Fail !</p>
                  )
                ) : (
                  <></>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
