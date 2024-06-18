import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Электромагнит', 'Системы управления', 'Железоотделители', 'Ремонт и изготовление запасных частей электромагнитов', 'Electromagnit', 'Грузоподъемные электромагниты'],
    authors: [{ name: 'Сергій', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: "Ремонт електромагнітів",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/Product/IronSeparators/SecondPage'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: "Ремонт електромагнітів",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ua/Product/IronSeparators/SecondPage',
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
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
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

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../RepairAndManufacture">Ремонт и изготовление</Link> {'>'} Ремонт электромагнитов</span>
            <h2 className={styles.title}>Ремонт электромагнитов</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 1 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Repair and manufacture 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}>Наша компания выполняет <b>ремонт электромагнитов</b> разной мощности.</p>
            <p className={styles.text}>Ремонт электромагнитов может включать следующие виды работ:</p>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Ремонт катушки возбуждения электромагнита.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Замена клеммной коробки.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Заливка сложным электроизоляционным компаундом.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Наращивание и усиление стального корпуса электромагнита (магнитопровода).</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Замена брони при большом износе броневых листов.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Модернизация электромагнитов.</p>
                </li>
            </ol>
        </section>
    );
}