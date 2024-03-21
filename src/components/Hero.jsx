import React from "react";
import mancung from "../assets/mancung.png";
import CV from '../data/reihanwiyanda.pdf'
import { TypeAnimation } from 'react-type-animation';
import { LuDownload } from "react-icons/lu";

function Hero() {
  return (
    <section id="hero" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-6 lg:w-1/2">
            <h1 className="text-base font-semibold text-teal-500 md:text-lg lg:text-2xl">
              Hello, I'm{" "}
              <span className="block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl">
                Reihan Wiyanda 🙌
              </span>
            </h1>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
                'Web Developer',
                1000,
                'Programmer',
                1000
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
            With great enthusiasm, I am pleased to present my portfolio as a web developer, which reflects my dedication in creating innovative and responsive web solutions
            </p>
            <a
              href={CV}
              className="text-base font-semibold bg-teal-500 rounded-full text-white py-3 px-8 hover:shadow-lg hover:bg-teal-300 hover:opacity-90 transition duration-300 ease-in-out"
            >
              Download CV 
            </a>
          </div>
          <div className="w-full self-end px-7 lg:w-1/2">
            <div className="mt-5 relative lg:mt-9 lg:right-0">
              <img
                src={mancung}
                alt="mancung"
                className="max-w-full mx-auto object-cover"
              />
              <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14B8A6"
                    d="M70.3,-22.1C77.4,-1.1,59.9,28.6,34.6,46.7C9.4,64.8,-23.6,71.3,-43.1,57.6C-62.6,43.8,-68.7,9.7,-59.3,-14.5C-49.9,-38.8,-24.9,-53.2,3.3,-54.3C31.6,-55.4,63.3,-43.1,70.3,-22.1Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
