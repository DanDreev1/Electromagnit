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

    title: "Repair of lifting electromagnets of imported and domestic production",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "Repair of lifting electromagnets of imported and domestic production",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/IronSeparators/FirstPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../RepairAndManufacture">Repair and Manufacture</Link> {'>'} Repair of Overhead Electromagnets</span>
            <h1 className={styles.title}>Repair of Overhead Electromagnets of Foreign and Domestic Production</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Read time: 1 min</span>
                <span className="text-gray-600 text-sm">Published: 06/07/2024</span>
            </div>
            <Image className="mb-10" src="/Repair and manufacture 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}>Our company specializes in comprehensive repair of various types of overhead electromagnets, both imported and domestically produced. The quality of electromagnet repair is ensured through meticulous control at each stage of repair work and the use of new materials and technologies.</p>
            <h3 className={styles.subtitle}>Main causes of overhead electromagnet failure:</h3>
            <p className={styles.text}>The main reasons for the failure of overhead electromagnets include coil breakdown on the casing, conductor breakage, inter-turn short circuits in the coil, as well as voltage surges during operation. While the latter cause can be mitigated by using voltage converters that limit overvoltage, combating factors such as moisture and overheating is more challenging.</p>
            <p className={styles.text}>Moisture entering the electromagnet is prevented by the filling mass that seals the electromagnet coil inside the casing, as well as the cover of the terminal box and cable glands. Over time, microcracks may develop in the filling mass, allowing moisture to penetrate inside the electromagnet, potentially leading to coil breakdown on the casing.</p>
            <p className={styles.text}>Another factor reducing the service life of overhead electromagnets and necessitating repair is overheating. Overheating leads to a decrease in electrical insulation resistance. Operating the electromagnet with critically low insulation resistance can lead to coil breakdown on the casing. The operational capability of the electromagnet can be preserved by using heat-resistant varnishes and potting compounds, improving heat dissipation from the coil, and increasing the heat dissipation area of the electromagnet casing ribs. In some cases, temporary disconnection of the electromagnet at critical temperatures remains the only solution.</p>
            <p className={styles.text}>Our enterprise provides services for testing and modernizing overhead electromagnets, technical maintenance, and performing repair work up to comprehensive repair of overhead electromagnets.</p>
            <p className={styles.text}>If you do not have an electromagnet for repair, we can offer you to purchase an electromagnet from us after comprehensive repair. Specifically: PM25, M22, M42, M43, M62, M63, EMG078, EMG117, EMG165, PM15, PM25, EMG117-39/A, EMG 117-39/M. Electromagnet PM25, electromagnet M62, electromagnet M63, electromagnet EMG078, electromagnet EMG117, electromagnet EMG165, electromagnet PM15.</p>
        </section>
    );
}