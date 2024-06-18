import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
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

    title: "Ремонт електромагнітів",
    description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',

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
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
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

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../RepairAndManufacture">Ремонт та виготовлення</Link> {'>'} Ремонт електромагнітів</span>
            <h2 className={styles.title}>Ремонт електромагнітів</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На читання: 1 хв</span>
                <span className="text-gray-600 text-sm">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Repair and manufacture 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}>Наша компанія виконує <b>ремонт електромагнітів</b> різної потужності.</p>
            <p className={styles.text}>Послуги з ремонту електромагнітів можуть включати такі види робіт:</p>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Ремонт котушки збудження електромагніту.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Заміна клемної коробки.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Заливка складним електроізоляційним компаундом.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Нарощування та посилення сталевого корпусу електромагніту (магнітопроводу).</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Заміна броні у разі великого зношування броньових листів.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Модернізація електромагнітів.</p>
                </li>
            </ol>
        </section>
    );
}