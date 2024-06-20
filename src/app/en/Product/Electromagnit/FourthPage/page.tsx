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

    title: "EMG 117-32/A, EMG 117-32/M",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "EMG 117-32/А, EMG 117-32/М",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/Electromagnit/FourthPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Electromagnet</Link> {'>'} EMG 117-32/A, EMG 117-32/M</span>
            <h1 className={styles.title}>Medium Series Lifting Electromagnets EMG 117-32/A, EMG 117-32/M</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Read Time: 2 min</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 4.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Application Area of Electromagnets</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    Heavy-duty lifting electromagnets are designed for cranes to handle cold (ambient) loads of ferromagnetic materials: metal scrap, scrap metal, metal chips, metal products, pig iron, ingots, etc.
                </li>
                <li className={styles.list}>
                    These lifting electromagnets can be used on traverses (customized to specific customer needs).
                </li>
                <li className={styles.list}>
                    Electromagnets are recommended for installation on mobile excavators such as FUCHS, LIEBHERR, ATLAS, SENNEBOGEN, CAT, ZEPPELIN, etc. High lifting capacity with a generator control system and a special traverse allows the electromagnet to operate without removing the grapple.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Distinctive Features of Electromagnets</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    The lifting capacity of the electromagnet is 30% higher compared to typical electromagnets like M62, etc.
                </li>
                <li className={styles.list}>
                    The large heat dissipation surface of the electromagnet's SOLID BODY, original technology for collecting and applying new insulation materials and compounds provide:
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                            Increased strength and durability of the body;
                        </li>
                        <li className={styles.list}>
                            Reduced heating of the electromagnet saving electricity per ton of transported cargo;
                        </li>
                        <li className={styles.list}>
                            High duration of continuous operation;
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
                    Ability to operate the lifting electromagnets at 100% duty cycle as an iron separator or separator when equipped with a special control system.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Technical Specifications of Electromagnets</h3>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>PARAMETERS</th>
                            <th className={styles.tableActiveSubmain}>EMG 117-32/A</th>
                            <th className={styles.tableActiveSubmain}>EMG 117-32/M</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Direct current voltage, B</th>
                            <td className={styles.tableunactive}>220±5%</td>
                            <td className={styles.tableunactive}>220±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Nominal current, A</th>
                            <td className={styles.tableunactive}>45±5%</td>
                            <td className={styles.tableunactive}>45±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Nominal power, W</th>
                            <td className={styles.tableunactive}>9,900</td>
                            <td className={styles.tableunactive}>9,900</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Power at winding temperature, W.</th>
                            <td className={styles.tableunactive}>6,600</td>
                            <td className={styles.tableunactive}>6,600</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting force, kg, not less than</th>
                            <td className={styles.tableunactive}>25,000</td>
                            <td className={styles.tableunactive}>25,000</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting capacity on scrap ZA, GOST-2787-75, kg</th>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>400</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Lifting capacity on shavings 15A, according to GOST-2787-75, kg</th>
                            <td className={styles.tableunactive}>350</td>
                            <td className={styles.tableunactive}>350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Recommended crane lifting capacity, tons</th>
                            <td className={styles.tableunactive}>3.2; 5</td>
                            <td className={styles.tableunactive}>3.2; 5</td>
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
                            <th className={styles.tableActiveSubmain}>Weight with chains, kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>EMG 117-32/A</th>
                            <td className={styles.tableunactive}>1170</td>
                            <td className={styles.tableunactive}>320</td>
                            <td className={styles.tableunactive}>1300</td>
                            <td className={styles.tableunactive}>1350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>EMG 117-32/M</th>
                            <td className={styles.tableunactive}>1170</td>
                            <td className={styles.tableunactive}>320</td>
                            <td className={styles.tableunactive}>1300</td>
                            <td className={styles.tableunactive}>1500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}