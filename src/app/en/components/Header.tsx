"use client"

import Image from "next/image";
import Link from "next/link";
import style from "./header.module.scss"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { montserrat } from "../../utils/fonts";

const navLinks = [
    { name: "Главная", href: "/en/Main" },
    { name: "Продукт", href: "/en/Product" },
    { name: "О нас", href: "/en/About" },
    { name: "Контакты", href: "/en/Contacts" },
];

export default function Header() {
    const pathName = usePathname()
    const [isClick, setisClick] = useState(false)
    
    const toggleNavbar = (): void => {
        setisClick(!isClick)
    }
    return (
        <header className={style.background}>
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.main}>
                        <Image className={style.logo} src="/Logo.png" alt="Logo Electromagnit" width={250} height={100} loading="eager" priority/>
                        <ul className={style.menu}>
                            {navLinks.map((link) => {
                                const isActive = pathName.startsWith(link.href)
                                
                                return (
                                    <li className={style.list} key={link.name}>
                                        <Link 
                                            href={link.href}
                                            className={isActive ? `${montserrat} ${style.activeLink}` : `${montserrat} ${style.link}` }
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}   
                        </ul>
                    </div>
                    <div className={style.main}>
                        <div className="xl:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white 
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" type="button" id="burger" aria-label="Button"
                            onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg  className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor" >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                ) : (
                                    <svg  className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <span className={`${montserrat} ${style.questions}`}>Call with questions:<br />+4471234567890</span>
                        <span className={`${montserrat} ${style.language}`}><Link className={style.languageLink} href="../ua/Main">Українська</Link> / <Link className={style.languageLink} href="../ru/Main">Русский</Link></span>
                    </div>
                </div>
                {isClick && (
                    <div className="xl:hidden">
                        <div className="xl:block xl:justify-center">
                            <ul className={style.menuBurger}>
                                {navLinks.map((link) => {
                                    const isActive = pathName.startsWith(link.href)
                                    
                                    return (
                                        <li className={style.listBurger} key={link.name}>
                                            <Link 
                                                href={link.href}
                                                className={isActive ? `${montserrat} ${style.activeLink}` : `${montserrat} ${style.link}`}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}   
                            </ul>
                            <div className="flex flex-col content-center flex-wrap items-center pb-10">
                                <span className={`${montserrat} ${style.questionsBurger}`}>Call with questions:<br />+4471234567890</span>
                                <span className={`${montserrat} ${style.languageBurger}`}><Link className={style.languageLink} href="../ua/Main">Українська</Link> / <Link className={style.languageLink} href="../ru/Main">Русский</Link></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}