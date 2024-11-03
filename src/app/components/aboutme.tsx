import Button from "./button";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="section1" id="section-one">
      {/* heading */}

      <div className="underline">
            <h1>About <span>Me</span></h1>
            </div>

      <div className="section1-container">
        {/* left-picture */}
        <div className="profilepic">
          <Image
            className="image"
            src="/profilepic.jpg"
            alt="About Me"
            width={550}
            height={550}
            layout="responsive"
          />
        </div>
        {/* right-text */}
        <div className="right-text">
          <h1>
            Frontend Developer & <br />
            Graphic Designer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor
            provident aspernatur unde, suscipit illum, velit similique animi
            iste corporis repellendus veritatis minus voluptas. Sunt, eligendi.
            Praesentium explicabo facere quo ad earum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor
            provident.
          </p>
          <div className="readmore">
            <Button text="Read More..." />
          </div>
        </div>
      </div>
    </section>
  );
}
