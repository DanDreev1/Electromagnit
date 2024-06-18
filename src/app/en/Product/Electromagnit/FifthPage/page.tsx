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

    title: "EMG 078-30/A, EMG 078-30/M",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "EMG 078-30/A, EMG 078-30/M",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/Electromagnit/FifthPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Electromagnet</Link> {'>'} EMG 078-30/A, EMG 078-30/M</span>
            <h2 className={styles.title}>EMG 078-30/A, EMG 078-30/M Light Series Electromagnetic Lifters</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Reading Time: 2 min</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnet 5.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Application Area of Electromagnets</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    Heavy-duty electromagnetic lifters are designed for the capture and movement of cold (ambient) loads of ferromagnetic materials by crane mechanisms: scrap metal, slag, metal shavings, rolled metal, dross, ingots, etc.
                </li>
                <li className={styles.list}>
                    These heavy-duty electromagnetic lifters can be used on a traverse (custom-made to specific customer requirements).
                </li>
                <li className={styles.list}>
                    Electromagnets are recommended for installation on mobile excavators such as FUCHS, LIEBHERR, ATLAS, SENNEBOGEN, CAT, ZEPPELIN, and others. The high lifting capacity combined with a generator control system and special traverse allows operation without removing the load.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Distinctive Features of Electromagnets</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    The lifting capacity of the electromagnet is 30% higher compared to typical electromagnets like M62, etc.
                </li>
                <li className={styles.list}>
                    The large heat-dissipating surface of the electromagnet's solid body, original assembly technology, and the use of new insulation materials and compounds provide:
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                            Increased strength and durability of the body;
                        </li>
                        <li className={styles.list}>
                            Reduced heating of the electromagnet, energy savings per ton of moved cargo;
                        </li>
                        <li className={styles.list}>
                            High durability of continuous operation;
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
                    Ability to operate the electromagnetic lifters at 100% duty cycle as an iron separator or separator when equipped with a special control system.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Technical Data of Electromagnets</h3>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>PARAMETERS</th>
                            <th className={styles.tableActiveSubmain}>EMG 078-30/A</th>
                            <th className={styles.tableActiveSubmain}>EMG 078-30/M</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>DC Voltage, V</th>
                            <td className={styles.tableunactive}>220±5%</td>
                            <td className={styles.tableunactive}>220±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Rated Current, A</th>
                            <td className={styles.tableunactive}>16±8%</td>
                            <td className={styles.tableunactive}>16±8%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Nominal Power, W</th>
                            <td className={styles.tableunactive}>3,600</td>
                            <td className={styles.tableunactive}>3,600</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Power at Winding Temperature, W</th>
                            <td className={styles.tableunactive}>2,400</td>
                            <td className={styles.tableunactive}>2,400</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Force, kg, min</th>
                            <td className={styles.tableunactive}>9,000</td>
                            <td className={styles.tableunactive}>9,000</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Capacity for Scrap Iron, GOST-2787-75, kg</th>
                            <td className={styles.tableunactive}>200</td>
                            <td className={styles.tableunactive}>200</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Capacity for Shavings 15A, according to GOST-2787-75, kg</th>
                            <td className={styles.tableunactive}>150</td>
                            <td className={styles.tableunactive}>150</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Dimensions, mm, AxBxC</th>
                            <td className={styles.tableunactive}>785x300x910</td>
                            <td className={styles.tableunactive}>785x300x910</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Recommended Crane Capacity, tons</th>
                            <td className={styles.tableunactive}>3.2; 5</td>
                            <td className={styles.tableunactive}>3.2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Weight, kg</th>
                            <td className={styles.tableunactive}>550</td>
                            <td className={styles.tableunactive}>600</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}