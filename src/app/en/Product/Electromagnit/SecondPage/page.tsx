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

    title: "EMG 165-42/А, EMG 165-42/М",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "EMG 165-42/А, EMG 165-42/М",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/Electromagnit/SecondPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Electromagnet</Link> {'>'} EMG 165-42/A, EMG 165-42/M</span>
            <h2 className={styles.title}>Heavy-Duty Electromagnets EMG 165-42/A, EMG 165-42/M</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Read time: 2 min</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Application Area of Electromagnets</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                Heavy-duty electromagnets are designed to handle and transport cold (ambient) loads of ferromagnetic materials such as scrap metal, scrap, metallic charge, shavings, rolled metal, pig iron, ingots, and others using crane mechanisms.
                </li>
                <li className={styles.list}>
                These heavy-duty electromagnets can be used on traverse beams (customized to specific customer needs).
                </li>
                <li className={styles.list}>
                Recommended for installation on mobile excavators like FUCHS, LIEBHERR, ATLAS, SENNEBOGEN, CAT, ZEPPELIN, etc., with high load capacity combined with a generator control system and special traverse, allowing the electromagnet to work without removing the grab.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Distinctive Features of Electromagnets</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                Electromagnet lifting capacity is 30% higher compared to typical M62 electromagnets, and similar models.
                </li>
                <li className={styles.list}>
                The large heat dissipation surface of the electromagnet's SOLID HOUSING, original technology for assembling and using new insulation materials and compounds, ensures:
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                        Increased strength and durability of the housing;
                        </li>
                        <li className={styles.list}>
                        Reduced heating of the electromagnet, saving electricity per ton of transported load;
                        </li>
                        <li className={styles.list}>
                        High durability for continuous operation;
                        </li>
                        <li className={styles.list}>
                        Stability of lifting parameters during operation;
                        </li>
                        <li className={styles.list}>
                        High reliability and durability of the winding.
                        </li>
                    </ul>
                </li>
                <li className={styles.list}>
                Ability to operate electromagnets at 100% duty cycle as an iron separator or separator when equipped with a special control system.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Technical Data of Electromagnets</h3>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>PARAMETERS</th>
                            <th className={styles.tableActiveSubmain}>EMG 165-42/A</th>
                            <th className={styles.tableActiveSubmain}>EMG 165-42/M</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>DC Voltage, V</th>
                            <td className={styles.tableunactive}>220±5%</td>
                            <td className={styles.tableunactive}>220±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Nominal Current, A</th>
                            <td className={styles.tableunactive}>85±5%</td>
                            <td className={styles.tableunactive}>85±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Nominal Power, W</th>
                            <td className={styles.tableunactive}>18,700</td>
                            <td className={styles.tableunactive}>18,700</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Power at Coil Temperature, W</th>
                            <td className={styles.tableunactive}>13,400</td>
                            <td className={styles.tableunactive}>13,400</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Breakaway Force, kg, minimum</th>
                            <td className={styles.tableunactive}>50,000</td>
                            <td className={styles.tableunactive}>50,000</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Capacity on Scrap ZA, GOST-2787-75, kg</th>
                            <td className={styles.tableunactive}>950</td>
                            <td className={styles.tableunactive}>950</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Capacity on 15A Shavings, according to GOST-2787-75, kg</th>
                            <td className={styles.tableunactive}>850</td>
                            <td className={styles.tableunactive}>850</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Dimensions, mm, AxBxC</th>
                            <td className={styles.tableunactive}>1650x420x1500</td>
                            <td className={styles.tableunactive}>1650x420x1500</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Recommended Crane Lifting Capacity, tons</th>
                            <td className={styles.tableunactive}>10.16</td>
                            <td className={styles.tableunactive}>10.16</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Weight, kg</th>
                            <td className={styles.tableunactive}>3200</td>
                            <td className={styles.tableunactive}>3900</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}