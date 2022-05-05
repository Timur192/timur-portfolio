import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/location.png";
import Git from "../../img/git.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wk12j7s",
        "template_rj39akm",
        formRef.current,
        "JqlkY_09vLEaZbTYn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">There was a question?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +998-91 153-20-70
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              ttimerbaev4@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Uzbekistan
            </div>
            <div className="ico-git">
              <img src={Git} alt="github" className="c-icon" />
              <a className="link" href="https://github.com/Timur192" target="blank" rel="contact">Timur192</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <h4>Field to contact me.</h4>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
