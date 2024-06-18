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

    title: "М22, М42, М62, М63",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "М22, М42, М62, М63",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/Electromagnit/FirstPage',
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
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Electromagnet</Link> {'>'} M22, M42, M62, M63</span>
            <h2 className={styles.title}>M22, M42, M62, M63 — Upgraded Electromagnets with Increased Lifting Capacity</h2>
            <div className="flex my-8">
                <span className="mr-10 text-gray-600 text-sm">Read time: 2 min</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Application Area of Electromagnets</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    <b>M22, M42, M62, M63 — Upgraded electromagnets with increased lifting capacity</b> are designed for capturing and transporting cold (ambient) loads of ferromagnetic materials using crane mechanisms: metal scrap, metal shavings, metal billets, chips, rolled metal, ingots, slabs, etc.
                </li>
                <li className={styles.list}>
                    These <b>lifting electromagnets</b> can be used on traverse (customized according to specific customer needs).
                </li>
            </ul>
            <h3 className={styles.subtitle}>Distinctive Features of Electromagnets</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    These lifting electromagnets are produced by modifying and improving previously released <b>M22, M42, M62, M63 series electromagnets and others, increasing their lifting capacity by 20%, 30%, 40%, 50%, 70%, or more!</b>
                </li>
                <li className={styles.list}>
                    The lifting capacity of standard series electromagnets corresponds to M22, M42, M62, M63 electromagnets.
                </li>
                <li className={styles.list}>
                    The lifting capacity of heavy and super-heavy series electromagnets is increased by increasing the cross-section of the magnet core and the power of the coil.
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                            High lifting capacity of the electromagnet;
                        </li>
                        <li className={styles.list}>
                            Reduced heating of the electromagnet coil;
                        </li>
                        <li className={styles.list}>
                            Energy savings per ton of transported load;
                        </li>
                        <li className={styles.list}>
                            High continuous operation duration;
                        </li>
                        <li className={styles.list}>
                            Stability of lifting parameters during operation;
                        </li>
                        <li className={styles.list}>
                            High reliability and durability of the winding.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className={styles.subtitle}>Technical Data of Electromagnets</h3>
            <div className="overflow-x-auto" aria-hidden="true">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th rowSpan={2} className={styles.tableActiveMain}>Name</th>
                            <th rowSpan={2} className={styles.tableActiveSubmain}>Pulling Force, kg, minimum</th>
                            <th colSpan={2} className={styles.tableActiveSubmain}>Lifting Capacity, kg</th>
                            <th rowSpan={2} className={styles.tableActiveSubmain}>Magnet Weight, kg</th>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveSubmain}>Scrap 3A</th>
                            <th className={styles.tableActiveSubmain}>Shavings 15A</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>M-22/Standard</th>
                            <td className={styles.tableunactive}>7500</td>
                            <td className={styles.tableunactive}>160</td>
                            <td className={styles.tableunactive}>120</td>
                            <td className={styles.tableunactive}>470</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-22/Heavy</th>
                            <td className={styles.tableunactive}>9000</td>
                            <td className={styles.tableunactive}>200</td>
                            <td className={styles.tableunactive}>150</td>
                            <td className={styles.tableunactive}>620</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-22/Super-Heavy</th>
                            <td className={styles.tableunactive}>11000</td>
                            <td className={styles.tableunactive}>250</td>
                            <td className={styles.tableunactive}>190</td>
                            <td className={styles.tableunactive}>710</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-42/Standard</th>
                            <td className={styles.tableunactive}>16000</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>350</td>
                            <td className={styles.tableunactive}>1350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-42/Heavy</th>
                            <td className={styles.tableunactive}>27000</td>
                            <td className={styles.tableunactive}>450</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1510</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-42/Super-Heavy</th>
                            <td className={styles.tableunactive}>33000</td>
                            <td className={styles.tableunactive}>570</td>
                            <td className={styles.tableunactive}>500</td>
                            <td className={styles.tableunactive}>1800</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-62/Standard</th>
                            <td className={styles.tableunactive}>25000</td>
                            <td className={styles.tableunactive}>600</td>
                            <td className={styles.tableunactive}>550</td>
                            <td className={styles.tableunactive}>2750</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-62/Heavy</th>
                            <td className={styles.tableunactive}>50000</td>
                            <td className={styles.tableunactive}>900</td>
                            <td className={styles.tableunactive}>800</td>
                            <td className={styles.tableunactive}>3450</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-62/Super-Heavy</th>
                            <td className={styles.tableunactive}>62500</td>
                            <td className={styles.tableunactive}>1150</td>
                            <td className={styles.tableunactive}>1000</td>
                            <td className={styles.tableunactive}>5050</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 className={styles.subtitle}>Dimensions</h3>
            <div className="overflow-x-auto" aria-hidden="true">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Name</th>
                            <th className={styles.tableActiveSubmain}>Nominal Current, A</th>
                            <th className={styles.tableActiveSubmain}>Nominal Power, W</th>
                            <th className={styles.tableActiveSubmain}>Power with Heated Coil, W</th>
                            <th className={styles.tableActiveSubmain}>Recommended Crane Capacity, tons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>M-22/Standard</th>
                            <td className={styles.tableunactive}>16±8%</td>
                            <td className={styles.tableunactive}>3600</td>
                            <td className={styles.tableunactive}>2300</td>
                            <td className={styles.tableunactive}>3.2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-22/Heavy</th>
                            <td className={styles.tableunactive}>23±8%</td>
                            <td className={styles.tableunactive}>5300</td>
                            <td className={styles.tableunactive}>3700</td>
                            <td className={styles.tableunactive}>3.2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-22/Super Heavy</th>
                            <td className={styles.tableunactive}>30±8%</td>
                            <td className={styles.tableunactive}>6600</td>
                            <td className={styles.tableunactive}>4650</td>
                            <td className={styles.tableunactive}>3.2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-42/Standard</th>
                            <td className={styles.tableunactive}>42±8%</td>
                            <td className={styles.tableunactive}>9300</td>
                            <td className={styles.tableunactive}>6500</td>
                            <td className={styles.tableunactive}>5; 10</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-42/Heavy</th>
                            <td className={styles.tableunactive}>51±8%</td>
                            <td className={styles.tableunactive}>11250</td>
                            <td className={styles.tableunactive}>7900</td>
                            <td className={styles.tableunactive}>5; 10</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-42/Super Heavy</th>
                            <td className={styles.tableunactive}>60±8%</td>
                            <td className={styles.tableunactive}>13200</td>
                            <td className={styles.tableunactive}>9300</td>
                            <td className={styles.tableunactive}>5; 10</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-62/Standard</th>
                            <td className={styles.tableunactive}>80±8%</td>
                            <td className={styles.tableunactive}>17600</td>
                            <td className={styles.tableunactive}>12500</td>
                            <td className={styles.tableunactive}>5; 10; 16</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-62/Heavy</th>
                            <td className={styles.tableunactive}>93±8%</td>
                            <td className={styles.tableunactive}>20200</td>
                            <td className={styles.tableunactive}>14400</td>
                            <td className={styles.tableunactive}>10; 16</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>M-62/Super Heavy</th>
                            <td className={styles.tableunactive}>108±8%</td>
                            <td className={styles.tableunactive}>23800</td>
                            <td className={styles.tableunactive}>16700</td>
                            <td className={styles.tableunactive}>10; 16; 25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 className={styles.subtitle}>Dimensions</h3>
            <table className={styles.secondtable}>
                <thead>
                    <tr>
                        <th className={styles.tableActiveMain}>Name</th>
                        <th className={styles.tableActiveSubmain}>A</th>
                        <th className={styles.tableActiveSubmain}>B</th>
                        <th className={styles.tableActiveSubmain}>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={styles.tableActiveMain}>M-22/Standard</th>
                        <td className={styles.tableunactive}>780</td>
                        <td className={styles.tableunactive}>300</td>
                        <td className={styles.tableunactive}>910</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-22/Heavy</th>
                        <td className={styles.tableunactive}>780</td>
                        <td className={styles.tableunactive}>360</td>
                        <td className={styles.tableunactive}>970</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-22/Super Heavy</th>
                        <td className={styles.tableunactive}>780</td>
                        <td className={styles.tableunactive}>402</td>
                        <td className={styles.tableunactive}>1012</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-42/Standard</th>
                        <td className={styles.tableunactive}>1170</td>
                        <td className={styles.tableunactive}>320</td>
                        <td className={styles.tableunactive}>1270</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-42/Heavy</th>
                        <td className={styles.tableunactive}>1170</td>
                        <td className={styles.tableunactive}>363</td>
                        <td className={styles.tableunactive}>1313</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-42/Super Heavy</th>
                        <td className={styles.tableunactive}>1170</td>
                        <td className={styles.tableunactive}>426</td>
                        <td className={styles.tableunactive}>1376</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-62/Standard</th>
                        <td className={styles.tableunactive}>1650</td>
                        <td className={styles.tableunactive}>420</td>
                        <td className={styles.tableunactive}>1500</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-62/Heavy</th>
                        <td className={styles.tableunactive}>1650</td>
                        <td className={styles.tableunactive}>479</td>
                        <td className={styles.tableunactive}>1559</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>M-62/Super Heavy</th>
                        <td className={styles.tableunactive}>1650</td>
                        <td className={styles.tableunactive}>502</td>
                        <td className={styles.tableunactive}>1582</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}