import { Metadata } from "next"
import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link"
import { montserrat_alternate } from "@/app/utils/fonts";

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

    title: 'Home',
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: 'Home',
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Main',
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

export default async function Home() {

    return (
        <div>
            <section className={styles.gradient}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Lifting<br /><span className={styles.color}>electro</span>magnets</h1>
                    <div className={styles.flex}>
                        <div className={styles.box}>
                            <h2 className={`${montserrat_alternate}`}>We are glad to welcome you to our company's website!</h2>
                            <p>Electromagnit specializes in the development of lifting electromagnets and actively operates in the CIS and European markets.</p>
                            <Link className={styles.button} href="../en/Contacts">Contact Us</Link>
                        </div>
                        <Image className={styles.image} src='/HeroImg.jpg' alt='Electromagnets for sheet steel' width={500} height={200} priority />
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.subtitle}>Working with us, you get</h2>
                    <ul className={styles.boxList}>
                        <li>Each lifting electromagnet can be promptly manufactured in both cast and welded versions and equipped with a special control system.</li>
                        <li>We provide complete information on all stages of work and costs, giving you full control over the process and the ability to make informed decisions.</li>
                        <li>We are always available to answer all your questions promptly and provide the necessary support. Our specialists ensure continuous exchange of information and regularly update you on the progress of your order.</li>
                    </ul>
                    <h2 className={styles.subtitle}>Company Offering</h2>
                </div>
            </section>
            <section className={styles.offer}>
                <div className={styles.container}>
                    <ul className={styles.offerFlex}>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/electromagnet.jpg' alt="Image of an electromagnet" width={275} height={205} loading="eager" />
                                <h3>Electromagnets</h3>
                                <p>Supply of lifting electromagnets of various configurations</p>
                                <Link className={styles.learn} href="../../../en/Product/Electromagnit">Learn More</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/control-system.jpg' alt="Image of a control system" width={275} height={205} loading="eager" />
                                <h3>Control Systems</h3>
                                <p>Control systems for electromagnets: generator-based, based on PN-500 converters</p>
                                <Link className={styles.learn} href="../../../en/Product/ControlSystems">Learn More</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Iron-separators.jpg' alt="Image of iron separators" width={275} height={205} loading="eager" />
                                <h3>Iron Separators</h3>
                                <p>Magnetic iron separators of various series with detailed characteristics and descriptions</p>
                                <Link className={styles.learn} href="../../../en/Product/IronSeparators">Learn More</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Repair.jpg' alt="Image of repair and manufacturing" width={275} height={205} loading="eager" />
                                <h3>Repair and Manufacturing</h3>
                                <p>Service maintenance of electromagnets and their components. Custom manufacturing of gears, etc.</p>
                                <Link className={styles.learn} href="../../../en/Product/RepairAndManufacture">Learn More</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.gradient}>
                <div className={styles.container}>
                    <div className={styles.gradientFlex}>
                        <div className={styles.gradientBox}>
                            <h3 className={`${montserrat_alternate}`}>Are you already interested?</h3>
                            <p className={styles.boxParagraph}>We are ready to process your order today</p>
                        </div>
                        <div className={styles.box}>
                            <h3 className={`${montserrat_alternate}`}>Contact us and we will manufacture a custom part for you</h3>
                            <Link className={styles.button} href="../en/Contacts">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.subtitle}>Reviews from Our Clients</h2>
                    <span className={styles.experience}>What do those who have already tried our product say?</span>
                    <ul className={styles.experienceFlex}>
                        <li>
                            <h3>Review from Production Company Director</h3>
                            <p>'We purchased the EMG-117-32/A lifting electromagnet for our factory, and I must say it has exceeded our expectations. This electromagnet provides a reliable lifting mechanism for heavy billets. Thank you for the high-quality product and excellent service!'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person1.png" alt="First Client" width={125} height={125} loading="eager" />
                                <span>Alexey Belov</span>
                            </div>
                        </li>
                        <li>
                            <h3>Chief Engineer at Automotive Plant</h3>
                            <p>'We purchased self-unloading electromagnetic iron separators for our automotive plant, and I must note that they have significantly exceeded our expectations. These devices provide efficient and reliable separation of desired materials, greatly enhancing the quality of our products.'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person2.png" alt="Second Client" width={125} height={125} loading="eager" />
                                <span>Denis Smirnov</span>
                            </div>
                        </li>
                        <li>
                            <h3>Review from Director of 'METALOPROM' Company</h3>
                            <p>'We purchased the PN-500-Ж iron separator control system for our production, and I want to express my complete satisfaction with this equipment. The system has proven to be extremely efficient and reliable, allowing us to optimize the process of separating.'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person3.png" alt="Third Client" width={125} height={125} loading="eager" />
                                <span>Andrey Kuznetsov</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div> 
    )
}