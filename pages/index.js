import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import imageIcon from "@/public/icon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full h-52 bg-white flex items-center justify-center gap-3">
        <Image
          src={imageIcon}
          width={500}
          height={500}
          className="w-32 h-32"
          alt="img icon mongoDB"
        />
        <h1 className="text-6xl text-green-800 font-bold">
          MangoDB Database Practice
        </h1>
      </div>
    </div>
  );
}
