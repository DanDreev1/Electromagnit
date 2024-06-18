'use client'

import { url } from 'inspector';
import style from './Footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [isClick, setisClick] = useState (true)
    const [isSecondClick, setisSecondClick] = useState(true)

    const toggleClick = ():void => {
        setisClick(!isClick)
    }
    const toggleSecondClick = (): void => {
        setisSecondClick(!isSecondClick)
    }

    return (
        <footer className={style.background}>
            <div className={style.container}>
                <div className={style.margin}>
                    <Image src="/Logo.png" alt="Logo ElectroMagnit" width={200} height={500} className={style.footerLogo}  />
                    <p className={style.copyright}>©2024 рік усі права захищені <br /><Link href="mailto:daniilandrieiev788@gmail.com">Створив сайт: Данііл Андрєєв</Link></p>
                </div>
                <div className={style.margin}>
                    <div className='flex justify-between'>
                        <h2 className={style.title}>Контакти</h2>
                        <button type="button" className="inline-flex items-center justify-center px-2 py-0 ml-7 mb-2 rounded-md text-white md:text-white hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={toggleClick}>
                            {isClick ? 
                            (<Image className={style.icon} src="/up.png" alt='Розвернути' width={20} height={15}></Image>)
                            : 
                            (<Image className={style.icon} src="/down.png" alt='Звернути' width={20} height={15}></Image>)}
                        </button>
                    </div>
                    <ul className={isClick ? style.footerMenu : "hidden"}>
                        <li className={style.box}>
                            <Image src="/telephone.png" alt="telephone" width={20} height={20} className={style.image}  />
                            <Link className={style.contacts} href="tel:+380964215130">+38 (096) 421-51-30</Link>
                        </li>
                        <li className={style.box}>
                            <Image src="/envelope.png" alt="envelope" width={20} height={15} className={style.image}  />
                            <Link className={style.contacts} href='mailto:europlastic2018@gmail.com'>europlastic2018@gmail.com</Link>
                        </li>
                    </ul>
                    <p className={isClick ? style.text : "hidden"}>А також ви можете написати нам у <Link className={style.viber} href="viber://chat?number=%2b380964215130" >Viber</Link> або <Link className={style.telegram} href="https://t.me/%2b380964215130" >Telegram</Link></p>
                </div>
                <div className={style.margin}>
                    <div className='flex justify-between'>
                        <h2 className={style.title}>Навігація</h2>
                        <button className="inline-flex items-center justify-center px-2 py-0 ml-7 mb-2 rounded-md text-white md:text-white hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" id="alb" aria-labelledby="labeldiv"
                        onClick={toggleSecondClick}>
                            {isSecondClick ? 
                            (<Image className={style.icon} src="/up.png" alt='Розвернути' width={20} height={15}></Image>)
                            : 
                            (<Image className={style.icon} src="/down.png" alt='Звернути' width={20} height={15}></Image>)}
                        </button>
                    </div>
                    <div className={isSecondClick ? "visible" : "hidden"}>
                        <Link className={style.footerLink} href="../../../ua">Головна</Link>
                        <Link className={style.footerLink} href="../../../ua/Product">Продукт</Link>
                        <Link className={style.footerLink} href="../../../ua/About">Про нас</Link>
                        <Link className={style.footerLink} href="../../../ua/Contacts">Контакти</Link>
                    </div>
                </div>
                <div className={style.margin}>
                    <h2 className={style.title}>Наші проекти:</h2>
                    <Link className={style.color} href='/'><span className={style.grey}>Euro</span><span className={style.orange}>Plastic</span></Link>
                </div>
            </div>
        </footer> 
    );
}