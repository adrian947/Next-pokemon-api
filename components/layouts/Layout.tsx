import { FC, ReactChild } from "react";
import Head from "next/head";
import { NavBar } from "../ui";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "pokemon app"}</title>
        <meta name='author' content='Adrian Adducchio' />
        <meta name='description' content='pokemon api' />
        <meta name='keywords' content={`pokemon, pokedex, api, ${title}`} />
        <meta property='og:title' content={`Info about pokemon ${title}`} />
        <meta property='og:description' content={`This page about ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <NavBar />

      <main className='container'>{children}</main>
    </>
  );
};
