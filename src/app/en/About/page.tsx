import Image from "next/image";
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

    title: 'About Us',
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: 'About Us',
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/About',
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

export default async function About() {

    return (
        <div className={style.container}>
            <h1 className={style.title}>About Us</h1>
            <div className={style.box}>
                <Image className={style.image} src='/about.svg' alt='electromagnets for sheet steel' width={100} height={100}></Image>
                <div>
                    <h2 className={style.subtitle}>"The bitterness of poor quality remains long after the sweetness of low price is forgotten."</h2>
                    <p className={style.text}>"Electromagnit" specializes in manufacturing and servicing lifting electromagnets, control systems, iron separators, as well as providing repair and spare parts manufacturing services for electromagnets.</p>
                </div>
            </div>
            <div className={style.textBox}>
                <p className={style.textList}><b>Our Mission</b>: To provide our customers with reliable and innovative solutions in electromagnetic technology that help improve production efficiency and ensure equipment safety. We take pride in our professionalism, high-quality products, and excellent service, constantly striving for development and improvement to remain a leader in the market. With us, you get more than just products and services - you get a partner you can rely on in any situation.</p>
                <p className={style.textList}><b>Our Clients</b>: We manufacture various parts and components for all sectors of industry. Our products successfully operate in dozens of enterprises in the food, metallurgical, engineering, chemical, construction, and other industries.</p>
                <p className={style.textList}><b>Our Capabilities</b>: We accept orders for manufacturing parts according to drawings (sketches) or samples, as well as for manufacturing non-standard and unique equipment (we offer CNC machines, turning and milling workshops, thermoforming machines (TPA) for casting parts using molds, injection molding machines, rotational molding, vacuum molding, designer services, etc.).</p>
            </div>
            <h3 className={style.about}>Key Directions of Our Activity:</h3>
            <ol className={style.menu}>
                <li className={style.list}>
                    <span>1</span>
                    <p>We manufacture parts according to customer drawings (sketches) or samples, with specified technical requirements and characteristics, using various European plastics (polyamide (kaprolon) PA-6 and others; polyacetal (polyoxymethylene) (POM); polyethylene PE-500, PE-1000; polypropylene (PP); fluoroplastic (100% primary) and others;</p>
                </li>
                <li className={style.list}>
                    <span>2</span>
                    <p>Manufacture of rubber products (RTI) (rubber) according to customer drawings (sketches) or samples, with specified technical requirements and characteristics; supply of various plastics in sheets and rods;</p>
                </li>
                <li className={style.list}>
                    <span>3</span>
                    <p>Supply and repair of lifting equipment (electromagnets M22, M42, M62, etc.), non-standard and auxiliary equipment, and control systems for them;</p>
                </li>
            </ol>
        </div>
    );
}