import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { SignedOut } from '@clerk/nextjs';
import { SignedIn } from '@clerk/nextjs';
import { ThemeToggler } from './ui/ThemeToggler';

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space gap-x-2">
        <div className="bg-blue-500 w-fit">
          <Image
            src="https://www.shareicon.net/download/128x128//2017/07/08/888138_network_512x512.png"
            alt="logo"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>

      <div className='px-5 flex space-x-2 items-center'>
        <ThemeToggler />
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
