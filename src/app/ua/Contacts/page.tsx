import Image from "next/image";
import Link from "next/link";
import style from "./styles.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Електромагніт', 'Системи керування', 'Залізовідділювачі', 'Залізовідділювачі', 'Ремонт та виготовлення запасних частин електромагнітів', 'Electromagnit', 'Вантажопідйомні електромагніти'],
    authors: [{ name: 'Сергій', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: 'Контакти',
    description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/Contacts'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: 'Контакти',
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
        url: 'https://electromagnit.vercel.app/ua/Contacts',
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
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
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