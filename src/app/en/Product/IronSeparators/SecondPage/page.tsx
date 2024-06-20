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

    title: "EMP",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "EMP",
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../IronSeparators">Iron Separators</Link> {'>'} SEIS</span>
            <h1 className={styles.title}>Suspension Electromagnetic Iron Separators (SEIS)</h>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Reading Time: 1 min</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Iron Separators 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h3 className={styles.subtitle}>SEIS – Application Area</h3>
            <p className={styles.text}>SEIS - Suspension electromagnetic iron separators are designed to extract ferromagnetic impurities and objects from bulk materials transported by belt conveyors with belt widths ranging from 600 mm to 1600 mm.</p>
            <h3 className={styles.subtitle}>Technical Specifications:</h3>
            <div className="overflow-x-auto">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Model</th>
                            <th className={styles.tableActiveSubmain}>Dimensions, mm</th>
                            <th className={styles.tableActiveSubmain}>Supply Voltage, V</th>
                            <th className={styles.tableActiveSubmain}>Rated Coil Current at 20°C, A</th>
                            <th className={styles.tableActiveSubmain}>Power at Operating Temperature, kW</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 065</th>
                            <td className={styles.tableunactive}>800x500x665</td>
                            <td className={styles.tableunactive}>220/110</td>
                            <td className={styles.tableunactive}>44866</td>
                            <td className={styles.tableunactive}>1.8</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 080</th>
                            <td className={styles.tableunactive}>920x500x720</td>
                            <td className={styles.tableunactive}>220/110</td>
                            <td className={styles.tableunactive}>15/30</td>
                            <td className={styles.tableunactive}>2.3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 100</th>
                            <td className={styles.tableunactive}>1080x550x860</td>
                            <td className={styles.tableunactive}>220/110</td>
                            <td className={styles.tableunactive}>19/38</td>
                            <td className={styles.tableunactive}>2.8</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 120</th>
                            <td className={styles.tableunactive}>1200x600x900</td>
                            <td className={styles.tableunactive}>220</td>
                            <td className={styles.tableunactive}>22</td>
                            <td className={styles.tableunactive}>3.2</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 140</th>
                            <td className={styles.tableunactive}>1400x700x950</td>
                            <td className={styles.tableunactive}>220</td>
                            <td className={styles.tableunactive}>25</td>
                            <td className={styles.tableunactive}>4</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 160</th>
                            <td className={styles.tableunactive}>1550x750x980</td>
                            <td className={styles.tableunactive}>220</td>
                            <td className={styles.tableunactive}>28</td>
                            <td className={styles.tableunactive}>4.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Model</th>
                            <th className={styles.tableActiveSubmain}>Conveyor Belt Width, mm</th>
                            <th className={styles.tableActiveSubmain}>Extracted Inclusion Mass, kg</th>
                            <th className={styles.tableActiveSubmain}>Extraction Depth Zone, mm</th>
                            <th className={styles.tableActiveSubmain}>Weight, kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 065</th>
                            <td className={styles.tableunactive}>600</td>
                            <td className={styles.tableunactive}>10</td>
                            <td className={styles.tableunactive}>300</td>
                            <td className={styles.tableunactive}>600</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 080</th>
                            <td className={styles.tableunactive}>800</td>
                            <td className={styles.tableunactive}>15</td>
                            <td className={styles.tableunactive}>300</td>
                            <td className={styles.tableunactive}>870</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 100</th>
                            <td className={styles.tableunactive}>1000</td>
                            <td className={styles.tableunactive}>20</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1200</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 120</th>
                            <td className={styles.tableunactive}>1200</td>
                            <td className={styles.tableunactive}>25</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1450</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 140</th>
                            <td className={styles.tableunactive}>1400</td>
                            <td className={styles.tableunactive}>25</td>
                            <td className={styles.tableunactive}>500</td>
                            <td className={styles.tableunactive}>1700</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 160</th>
                            <td className={styles.tableunactive}>1600</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>500</td>
                            <td className={styles.tableunactive}>2100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}