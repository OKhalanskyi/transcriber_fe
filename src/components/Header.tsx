'use client';
import Link from "next/link";
import {getMainPage, getRecordsPage, getSignInPage} from "@/config/routes";
import {useState} from "react";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <header className="flex justify-between items-center p-4">
      <Link href={getMainPage()}>Transcriber</Link>

      <nav className="flex gap-4">
        {isAuth ? (
          <>
            <Link href={getRecordsPage()}>Records</Link>
            <button onClick={() => setIsAuth(false)}>Sign Out</button>
          </>
        ) : (
          <>
            <Link href={getSignInPage()}>Link</Link>
          </>
        )}
      </nav>
    </header>
  )
}