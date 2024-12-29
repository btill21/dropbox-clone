"use client";
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react'
import DropzoneComponent from 'react-dropzone'

function Dropzone() {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  const onDrop = async (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      // Handle file read abort
      reader.onabort = () => console.log('File reading was aborted');
      
      // Handle file read errors
      reader.onerror = () => console.log('File reading has failed');
      
      // Handle successful file read
      reader.onload = async () => {
        try {
          // Assuming uploadPost is an async function
          await uploadPost(file);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

      // Read the file as an ArrayBuffer
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = async (selectedFile: File) => {
    if (loading) return;
 
    setLoading(true);

    setLoading(false);
  }



    const maxSize = 20971520;

  return (
    <DropzoneComponent 
    minSize={0} 
    maxSize={maxSize} 
    onDrop={(acceptedFiles, fileRejections) => console.log(acceptedFiles)}
    >
    {({getRootProps, getInputProps, 
      isDragActive, isDragAccept, isDragReject, fileRejections
    }) => {
      const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
      return (
      <section className="m-4">
        <div {...getRootProps()}
        // ? if isDragActive is true, : then bg-[#035FFE] text-white animate-pulse else bg-slate-100/50 dark:bg-slate-800/80 text-slate-400
        className={cn(
          "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
          isDragActive ? 
          "bg-[#035FFE] text-white animate-pulse" : 
          "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"

        )}
        >
          
          <input {...getInputProps()} />
         {!isDragActive && 'Click here or drop a file to upload!'}
         {isDragAccept && !isDragReject && "Drop to upload this file!"}
          {isDragReject && "File type not accepted, sorry!"}
          {isFileTooLarge && (
            <div className="text-danger mt-2"> File is too large.</div>
          )}
        </div>
      </section>
      
    )}
  }
    </DropzoneComponent>
  )
}

export default Dropzone