import Image from "next/image";
import Link from "next/link";
import style from "./styles.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Контакти'
}

export default async function Contacts() {

    return (
        <div className={style.container}>
            <h1 className={style.title}>Контакти</h1>
            <h2>“Electro Magnit”</h2>
            <h3>Наші контакти:</h3>
            <ul className={style.menu}>
                <li className={style.box}>
                    <Image className={style.image} src="/alternativePhone.svg" alt="telephone" width={30} height={30} />
                    <Link className={style.contacts} href="tel:+380964215130">+38 (096) 421-51-30</Link>
                </li>
                <li className={style.box}>
                    <Image className={style.image} src="/envelope.png" alt="envelope" width={30} height={25} />
                    <Link className={style.contacts} href='mailto:europlastic2018@gmail.com'>europlastic2018@gmail.com</Link>
                </li>
            </ul>
            <p className={style.text}>А також ви можете написати нам у <Link className={style.viber} href="viber://chat?number=%2b380964215130" >Viber</Link> або <Link className={style.telegram} href="https://t.me/%2b380964215130" >Telegram</Link></p>
        </div>
    );
}