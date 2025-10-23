"use client";

import { data } from "./data";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const scrollable = useRef<HTMLDivElement>(null);

  return (
    <>
      <section>
        <motion.section
          className="md:flex md:flex-row-reverse xl:justify-center xl:items-center"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="photo flex justify-center items-center">
            <Image
              className="w-[234px] h-[306px] mt-10 xl:ml-20"
              src="/me.png"
              alt="Mariam Titvinidze photo"
              width={234}
              height={306}
            />
          </div>

          <div className="middle">
            <h1 className="text-[50px] medium mt-[-80px] md:w-[445px] xl:w-[800px] leading-snug">
              Hello, I&apos;m <span>Mariam Titvinidze</span>
              <br />
              <span> Full-Stack Developer</span>
            </h1>
          </div>
        </motion.section>

        <motion.div
          className="flex justify-center items-center flex-col mt-10 mb-5"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <h1>Experience</h1>
          <div className="linee w-[343px] mt-6 md:w-[706px] xl:w-[1110px]"></div>
        </motion.div>

        <motion.section
          className="flex justify-center items-center flex-col md:grid md:grid-cols-2 md:ml-[40px] xl:ml-[165px] xl:grid-cols-2"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div></div>
          <div></div>

          <motion.div className="xl:w-[345px]" whileHover={{ scale: 1.1 }}>
            <h2 className="lang xl:w-[125px]">Node.JS</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>

          <motion.div className="xl:w-[345px]" whileHover={{ scale: 1.1 }}>
            <h2 className="lang mt-6 xl:w-[185px]">React</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>

          <motion.div className="xl:w-[345px]" whileHover={{ scale: 1.1 }}>
            <h2 className="lang mt-6 xl:w-[125px]">JavaScript</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>

          <motion.div className="xl:w-[345px]" whileHover={{ scale: 1.1 }}>
            <h2 className="lang mt-6 xl:w-[125px]">Express</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>

          <motion.div className="xl:w-[345px]" whileHover={{ scale: 1.1 }}>
            <h2 className="lang mt-6 xl:w-[125px]">TypeScript</h2>
            <p className="exp xl:w-[345px]">1 Year Experience</p>
          </motion.div>

          <motion.div className="xl:w-[345px]" whileHover={{ scale: 1.1 }}>
            <h2 className="lang mt-6 xl:w-[125px]">Next.js</h2>
            <p className="exp mb-10 xl:w-[345px]">1 Year Experience</p>
          </motion.div>

          <div></div>
        </motion.section>

        <section className="flex gap-[71px] justify-center items-center mt-20 mb-10">
          <div>
            <h1 className="projects">Projects</h1>
          </div>
        </section>

        <section className="projectss md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {data.map((el) => (
            <motion.div
              key={el.name}
              className="mb-10"
              whileInView={{
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              initial={{
                opacity: 0,
              }}
            >
              <Image
                src={el.photo}
                alt={el.name}
                width={400}
                height={250}
                className="w-full h-auto"
              />
              <h4 className="mt-5 name">{el.name}</h4>
              <h6 className="mt-[7px] langs">{el.languages}</h6>

              <section className="flex gap-[32px] mt-5">
                <div className="flex flex-col">
                  <a href={el.live} target="_blank" rel="noopener noreferrer">
                    <h2 className="buttons">VIEW PROJECT</h2>
                  </a>
                </div>

                <div className="flex flex-col">
                  <a href={el.git} target="_blank" rel="noopener noreferrer">
                    <h2 className="buttons">VIEW CODE</h2>
                  </a>
                </div>
              </section>
            </motion.div>
          ))}
        </section>
      </section>
    </>
  );
}
