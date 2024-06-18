import type { Metadata } from "next";
import Link from "next/link";
import style from "./styles.module.scss";
import Head from "next/head";
import './globals.css'
import { montserrat } from "./utils/fonts";

export const metadata: Metadata = {
  title: 'Electromagnit',
  description: "Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="uk">
      <Head>
        <link
            rel="icon"
            href="/icon.png"
            type="image/<generated>"
            sizes="32x32"
        />
      </Head>
      <body className={`${montserrat} ${style.container}`}>
        <header className={style.box}>
                <h2 className={style.title}>Оберіть мову | Выберете язык | Choose the language</h2>
                <div className={style.flex}>
                    <Link href="../../../../ua/Main" className={style.language}>Українська</Link>
                    <Link href="../../../../ru/Main" className={style.language}>Русский</Link>
                    <Link href="../../../../en/Main" className={style.language}>English</Link>
                </div>
            </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
