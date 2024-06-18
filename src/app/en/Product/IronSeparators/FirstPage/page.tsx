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

    title: "EMZhS",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "EMZhS",
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../IronSeparators">Iron Separators</Link> {'>'} Self-Cleaning Electromagnetic Iron Separators (SEIS)</span>
            <h2 className={styles.title}>Self-Cleaning Electromagnetic Iron Separators (SEIS)</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Reading Time: 1 min</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Iron Separators 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h3 className={styles.subtitle}>Application Area</h3>
            <p className={styles.text}><b>Self-Cleaning Electromagnetic Iron Separators (SEIS)</b> are designed for the extraction and automatic removal of ferromagnetic impurities and objects from bulk materials transported by belt conveyors with belt widths ranging from 600 to 1600 mm. Extracted ferromagnetic objects are removed from the conveyor belt by a belt conveyor outside the accumulation conveyor.</p>
            <p className={styles.text}>The fundamentally new design of these <b>iron separators</b> achieves high detection depths without additional power increase due to the original distribution of magnetic fluxes. These <b>iron separators</b> are also not susceptible to overheating and do not require additional coil cooling.</p>
            <h3 className={styles.subtitle}>Technical Data of Self-Cleaning Electromagnetic Iron Separators:</h3>
            <div className="overflow-x-auto">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Model</th>
                            <th className={styles.tableActiveSubmain}>Dimensions, mm</th>
                            <th className={styles.tableActiveSubmain}>Supply Voltage, V</th>
                            <th className={styles.tableActiveSubmain}>Nominal Coil Current at 20°C, A</th>
                            <th className={styles.tableActiveSubmain}>Power at Set Temperature, kW</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 080</th>
                            <td className={styles.tableunactive}>1900x1420x350</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>19</td>
                            <td className={styles.tableunactive}>2.8</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 100</th>
                            <td className={styles.tableunactive}>2140x1420x350</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>22</td>
                            <td className={styles.tableunactive}>3.3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 120</th>
                            <td className={styles.tableunactive}>2320x1420x350</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>22</td>
                            <td className={styles.tableunactive}>3.3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 140</th>
                            <td className={styles.tableunactive}>2520x1420x440</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>4.5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 160</th>
                            <td className={styles.tableunactive}>2760x1420x440</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>30</td>
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
                            <th className={styles.tableActiveSubmain}>Mass of Extracted Inclusions, kg</th>
                            <th className={styles.tableActiveSubmain}>Extraction Zone Depth, mm</th>
                            <th className={styles.tableActiveSubmain}>Mass, kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 080</th>
                            <td className={styles.tableunactive}>600-800</td>
                            <td className={styles.tableunactive}>15</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1100</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 100</th>
                            <td className={styles.tableunactive}>1000</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1500</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 120</th>
                            <td className={styles.tableunactive}>1200</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1680</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 140</th>
                            <td className={styles.tableunactive}>1400</td>
                            <td className={styles.tableunactive}>35</td>
                            <td className={styles.tableunactive}>450</td>
                            <td className={styles.tableunactive}>2150</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>SEIS 160</th>
                            <td className={styles.tableunactive}>1600</td>
                            <td className={styles.tableunactive}>35</td>
                            <td className={styles.tableunactive}>450</td>
                            <td className={styles.tableunactive}>2700</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}