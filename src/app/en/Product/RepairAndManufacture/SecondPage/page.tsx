import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
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

    title: "Electromagnet repair",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "Electromagnet repair",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/IronSeparators/SecondPage',
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

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../RepairAndManufacture">Repair and Manufacture</Link> {'>'} Repair of Electromagnets</span>
            <h1 className={styles.title}>Repair of Electromagnets</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Read time: 1 min</span>
                <span className="text-gray-600 text-sm">Published: 06/07/2024</span>
            </div>
            <Image className="mb-10" src="/Repair and manufacture 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}>Our company specializes in <b>repairing electromagnets</b> of various capacities.</p>
            <p className={styles.text}>The repair of electromagnets may include the following types of work:</p>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Repair of the excitation coil of the electromagnet.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Replacement of the terminal box.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Filling with complex electro-insulating compound.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Building up and strengthening the steel casing of the electromagnet (magnetic circuit).</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Replacement of armor when the armor sheets are heavily worn.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Modernization of electromagnets.</p>
                </li>
            </ol>
        </section>
    );
}