import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox Clone. <br />
            <br />
            Upload and store your files securely.
          </h1>
          <p className="text-xl">
            Get started by uploading your files. You can also create folders and
            share files with your friends.
          </p>

          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit" >
          Try it now!
          <ArrowRight className="ml-10" />
          </Link>

        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10"> ">
        <video autoPlay muted loop className="rounded-lg">
          <source
           src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/dash-websearch-transparent-ui-1080x1080.webm"
           type="video/webm"
           />
        </video>
        </div>
      </div>
  
        <p className="text-center font-bold text-xl pt-5"> Not affiliated with dropbox</p>
      </main>
  );
}

