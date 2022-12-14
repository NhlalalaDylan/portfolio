import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { MdDarkMode } from "react-icons/md"; 
import { useState } from "react";
import deved from "../public/dev-ed-wave.jpg";
import Image from "next/image";
import useDownloader from "react-use-downloader";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const {download} = useDownloader();
  const fileUrl = "/Resume.pdf";
  const filename = "Resume.pdf";
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">PORTFOLIO</h1>
            <ul className="flex items-center">
              <li>
                <MdDarkMode
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" onClick={() => download(fileUrl, filename)}>
                   Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Dylan Maluleke
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I’ve always had a knack for solving problems and I feel that software does just that. I chose a career in software development because I find satisfaction in helping consumers, companies, and organizations find the solutions they need—from creating spreadsheets to designing skyscrapers. Additionally, I have experience with a variety of programming languages and enjoy working with them. I am a graduate at the University Of Witwatersrand with a degree in Computer Science, I currently work as an Integration Developer at Striata in Johannesburg.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer"><AiFillYoutube /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
