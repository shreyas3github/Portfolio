import React from "react";
import Me from "../assets/displayPicture/color_stripe_me.jpg";

function Intro() {
  return (
    <div
      className="flex justify-center relative mt-[5rem] mb-[10rem] px-5"
      id="about"
    >
      <div className="flex flex-col-reverse md:flex-row max-w-[1200px] w-full gap-8">
        <div className="flex justify-center md:justify-start w-[100%]">
          <img
            className="rounded-md w-full h-auto md:w-[500px] object-cover"
            src={Me}
            alt="Shreyas Dugani"
          />
        </div>

        {/* Right Side (Text Section) */}
        <div className="flex flex-col justify-center">
          <h1 className="text-[clamp(30px,8vw,40px)] font-[var(--max-weight)] text-[var(--dark-txt)] mb-4">
            About Me🤷‍♂️
          </h1>
          <p className="text-[var(--light-txt)] mb-0 text-[clamp(16px,1.5vw,20px)] leading-relaxed">
            Hi, I'm Shreyas Dugani, a Fullstack Developer with a strong
            passion for Artificial Intelligence & Machine Learning.
            <br />
            <br />
            I'm a second-year Computer Engineering student in Belagavi, Karnataka, passionate about programming and developing modern, efficient solutions for complex ideas and products. <br /> With a strong foundation in web development, Python, and AI, I excel at solving complex problems creatively while staying aware of modern business trends. <br /> I also have experience in logo design and a keen interest in cutting-edge technologies. <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
