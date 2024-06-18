import Image from "next/image";
import Link from "next/link";
import style from "./styles.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Electromagnet', 'Control systems', 'Iron separators', 'Repair and production of spare parts for electromagnets', 'Electromagnit', 'Lifting electromagnets'],
    authors: [{ name: 'Sergey', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: 'Contacts',
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: 'Contacts',
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Contacts',
        siteName: 'Electromanit',
        
        images: [
        {
            url: 'https://electromagnit.vercel.app/Logo.png',
            width: 250,
            height: 100,
            alt: 'Logo'
        },
        {
            url: 'https://electromagnit.vercel.app/Electromagnit 2.jpg',
            width: 1800,
            height: 1600,
            alt: 'Electromagnit',
        },
        ],
        locale: 'uk_UA',
        type: 'website',
    },

    icons: {
        icon: '../icon.png',
        shortcut: '../icon.png',
        apple: '../icon.png',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Electomagnit',
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        // creator: '@nextjs',
        // creatorId: '1467726470533754880',
        images: ['https://electromagnit.vercel.app/Electromagnit 2.jpg'], // Must be an absolute URL
    },

    verification: {
        google: 'google-site-verification-code',
        yandex: 'yandex-verification-code',
        yahoo: 'yahoo-verification-code',
        other: {
          me: ['mailto:europlastic2018@gmail.com', 'my-link'],
        },
    },

    appleWebApp: {
        title: 'Electromagnit',
        statusBarStyle: 'black-translucent',
    },

    category: 'electromagnit',
};

export default async function Contacts() {

    return (
        <div className={style.container}>
            <h1 className={style.title}>Contacts</h1>
            <h2>“ElectroMagnit”</h2>
            <h3>Our Contacts:</h3>
            <ul className={style.menu}>
                <li className={style.box}>
                    <Image className={style.image} src="/alternativePhone.svg" alt="phone" width={30} height={30} />
                    <Link className={style.contacts} href="tel:+380964215130">+38 (096) 421-51-30</Link>
                </li>
                <li className={style.box}>
                    <Image className={style.image} src="/envelope.png" alt="email" width={30} height={25} />
                    <Link className={style.contacts} href='mailto:europlastic2018@gmail.com'>europlastic2018@gmail.com</Link>
                </li>
            </ul>
            <p className={style.text}>You can also reach us on <Link className={style.viber} href="viber://chat?number=%2b380964215130">Viber</Link> or <Link className={style.telegram} href="https://t.me/%2b380964215130">Telegram</Link></p>
        </div>
    );
}