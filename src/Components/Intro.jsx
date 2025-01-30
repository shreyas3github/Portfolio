import React from "react";
import Me from "../assets/displayPicture/main.png";
import Resume from "../assets/resume/OmkarHundre.pdf";

function Intro() {
  return (
    <div className="flex justify-center my-32 px-5" id="intro">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1200px] w-[100%] gap-8">
        <div className="hidden justify-center order-2 md:flex">
          <img
            src={Me}
            alt="Omkar Hundre"
            className="main-img max-w-[500px] w-[100%] md:max-w-[350px]"
          />
        </div>

        <div className="flex text-center justify-center flex-col order-1 md:text-left">
          <h1 className="text-[clamp(30px,8vw,45px)] font-[var(--max-weight)] text-[var(--dark-txt)]">
            <span className="text-[var(--dark-txt)]">
              Full Stack Developer.
            </span>
            <br />
            <span className="text-[var(--dark-txt)]">AIML Enthusiast.</span>
          </h1>
          <p className="text-[var(--light-txt)] mb-8 text-[clamp(16px,1.5vw,20px)] font-[var(--min-weight)] pr-5">
            Hello, I'm Shreyas Dugani. I am a passionate and dedicated full stack
            developer 💻 <br /> and AIML enthusiast 🤖.
          </p>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button font-[var(--min-weight)] mx-[auto] bg-[var(--theme-color)] 
                    text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 shadow-[0_3px_8px_rgba(0,0,0,0.6)] w-[130px] md:mx-0 text-center"
          >
            <span className="pr-[5px]">Resume</span>
            <svg
              fill="#fff"
              className="inline font-[var(--mid-weight)] mb-1"
              width="18px"
              height="19px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
        <div className="flex justify-center md:justify-center md:hidden">
          <img
            src={Me}
            alt="Shreyas Dugani"
            className="max-w-[300px] w-[100%] md:max-w-[350px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
