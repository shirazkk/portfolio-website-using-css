import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import Button from "./button";
export default function Contact() {
  return (
    <section className="contact-section" id="section-five">
      {/* section5-container */}
      <div className="section5-container">
        {/* top-heading */}
        <div className="underline">
          <h1 className="heading">Contact</h1>
        </div>

        {/* contact-info */}
        <div className="contact-info">
          {/* left-text+icons */}
          <div className="left-text-icons">
            {/* icons */}
            <div className="phone">
              <LuPhoneCall className="icon" />
              <p>
                +8801863-931220 <br />
                +8801567-953483
              </p>
            </div>
            <div className="email">
              <MdOutlineMail className="icon" />
              <p>mdriead.bd@gmail.com</p>
            </div>
            <div className="address">
              <CiLocationArrow1 className="icon" />
              <p>Zirabo, Ashulia, Savar, Dhaka</p>
            </div>
          </div>

          {/* right-contact-form */}
          <div className="right-contact-form">
            <form action="">
              <input  id="inputs" type="text" placeholder="Full Name" required />
              <input  id="inputs" type="email" placeholder="Email Address" required />
              <div className="phone-subject">
                <input type="tel"  placeholder="Phone" />
                <input type="text" placeholder="Subject"/>
              </div>
              <input type="text" name="" id="message" placeholder="Your Message" />
              <div className="send-button">

              <Button text="Send"  bgColor=" #43366A" color="white" border="none" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
