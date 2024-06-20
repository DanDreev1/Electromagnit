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

    title: "EMG 117-39/А, EMG 117-39/М",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "EMG 117-39/А, EMG 117-39/М",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/Electromagnit/ThirdPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Electromagnet</Link> {'>'} EMG 117-39/A, EMG 117-39/M</span>
            <h1 className={styles.title}>Medium Series Lifting Electromagnets EMG 117-39/A, EMG 117-39/M</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Reading Time: 2 mins</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 3.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Application Area of Electromagnets</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                Heavy-duty lifting electromagnets are designed for capturing and transporting cold (ambient) loads of ferromagnetic materials: scrap metal, scrap, metal charge, shavings, rolled metal, ingots, etc.
                </li>
                <li className={styles.list}>
                These heavy-duty electromagnets can be used on a traverse (custom-made according to customer needs).
                </li>
                <li className={styles.list}>
                Electromagnets are recommended for installation on mobile excavators such as FUCHS, LIEBHERR, ATLAS, SENNEBOGEN, CAT, ZEPPELIN, etc. High lifting capacity combined with a generator control system and a special traverse allows the electromagnet to operate without removing the grab.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Distinctive Features of Electromagnets</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                Electromagnet lifting capacity is 30% higher compared to typical electromagnets like M62, etc.
                </li>
                <li className={styles.list}>
                The large heat dissipation surface of the <b>CAST BODY</b> of the electromagnet, original technology for gathering and applying new insulation materials and compounds, ensure:
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                        Increased strength and durability of the body;
                        </li>
                        <li className={styles.list}>
                        Reduced heating of the electromagnet, saving electricity per ton of transported load;
                        </li>
                        <li className={styles.list}>
                        High continuous operation durability;
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
                Ability to operate the lifting electromagnets at 100% duty cycle as iron separators or separators when equipped with a special control system.
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
                            <td className={styles.tableunactive}>52±5%</td>
                            <td className={styles.tableunactive}>52±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Nominal Power, W</th>
                            <td className={styles.tableunactive}>11,500</td>
                            <td className={styles.tableunactive}>11,500</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Power at Coil Temperature, W</th>
                            <td className={styles.tableunactive}>7,700</td>
                            <td className={styles.tableunactive}>7,700</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Force, kg, min</th>
                            <td className={styles.tableunactive}>27,000</td>
                            <td className={styles.tableunactive}>27,000</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Capacity on Scrap, kg</th>
                            <td className={styles.tableunactive}>450</td>
                            <td className={styles.tableunactive}>450</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting Capacity on Shavings 15A, kg</th>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>400</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Recommended Crane Lifting Capacity, tons</th>
                            <td className={styles.tableunactive}>5</td>
                            <td className={styles.tableunactive}>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>DESIGNATION</th>
                            <th className={styles.tableActiveSubmain}>A</th>
                            <th className={styles.tableActiveSubmain}>B</th>
                            <th className={styles.tableActiveSubmain}>C</th>
                            <th className={styles.tableActiveSubmain}>Weight with Chains, kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>EMG 117-39/A</th>
                            <td className={styles.tableunactive}>1170</td>
                            <td className={styles.tableunactive}>390</td>
                            <td className={styles.tableunactive}>1300</td>
                            <td className={styles.tableunactive}>1550</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>EMG 117-39/M</th>
                            <td className={styles.tableunactive}>1170</td>
                            <td className={styles.tableunactive}>390</td>
                            <td className={styles.tableunactive}>1300</td>
                            <td className={styles.tableunactive}>1950</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}