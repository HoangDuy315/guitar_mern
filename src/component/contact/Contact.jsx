import "./Contact.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="ctact">
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            laboriosam minima adipisci error voluptatum voluptatem nulla ad.
            Minima laudantium cum, in minus animi voluptatum provident repellat
            cupiditate nesciunt accusantium aut?
          </p>
        </div>
        <div className="container">
          <div className="contact-info">
            <div className="box">
              <div className="icon">
                <GoLocation />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>6 Linh Trung Ward, Thu Duc City</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <AiOutlinePhone />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p> 0123JQK</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <AiOutlineMail />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p> JQK@gmail.com</p>
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
                <input type="text" name="email" required="required" />
                <span className="span">Email </span>
              </div>
              <div className="inputBox">
                <textarea required="required" name="message"></textarea>
                <span className="span"> Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
