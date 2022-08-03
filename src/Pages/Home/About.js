import React from "react";
import "./About.css";
import computer from "../../assets/images/Computer.png";
import AnimatedText from "react-animated-text-content";
export default function About() {
  return (
    <div class="hero justify-center align-middle shadow-2xl ">
      <div class="hero-content flex-col lg:flex-row justify-center ml-22">
        <img src={computer} class="image-about mt-12 pt-12 " />

        <div className="heading ">
          <h1 class="text-5xl font-bold justify-start text-teal-400">
          <AnimatedText
              type="world" 
              animation={{
                x: "200px",
                y: "-80px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={1}
              duration={2}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.6}
              rootMargin="20%"
            >
            Know More!
            </AnimatedText>
          </h1>

          <h2 className="text-2xl font-semibold ">
           
              We are committed to providing best services to our client.
         
            
          </h2>
          <p class="py-6 ">
            Resume builder is one of the best website for create your unique and
            favoulous cv.Resume builder is one of the best website for create
            your unique and favoulous cv. Resume builder is one of the best
            website for create your unique and favoulous cv.You can create and customize your resume.
          </p>
          <button class="btn button get">Get Started</button>
        </div>
      </div>
    </div>
  );
}
