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

    title: "PN-500-Zh",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "PN-500-Zh",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/ControlSystems/FirstPage',
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
            <span className={styles.span}>
                <Link className={styles.link} href="../../Product">Product</Link> {'>'} 
                <Link className={styles.link} href="../ControlSystems">Control Systems</Link> {'>'} 
                PN-500-ZH
            </span>
            <h1 className={styles.title}>Control System for Iron Separators PN-500-ZH</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Read Time: 2 mins</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Control System 1.jpg" alt="Something" width={1200} height={575} priority />
            <p className={styles.text}>
                <b>Voltage Converter Series (PN-500-ZH)</b> is designed for <b>powering and controlling iron separators</b> with currents within permissible limits.
            </p>
            <p className={styles.text}>
                <b>Applicable types of iron separators powered: EMZ065, EMZ080, EMZ100, EMZ120, EMZ140, EMZ160, EMZC080, EMZC100, EMZC120, EMZC140, EMZC160, and others</b>
            </p>
            <h3 className={styles.subtitle}>Main Iron Separator Protection Types</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Precise limitation of maximum output voltage to 110-230 V.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Protection against short circuits in the load.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Protection against live cable shorts and ground faults.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Power cable breakage indication.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Leakage current exceeding indication in the iron separator circuit (due to magnet overheating).</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Indication of short interturn shorts in the iron separator electromagnet.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Indication of exceeding maximum permissible current.</p>
                </li>
            </ol>
            <h3 className={styles.subtitle}>PN-500-40Z, PN-500-80Z. Control System Features (PN-500-40Z, PN-500-80Z)</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p><b>Increased iron separator service life</b> due to fast electronic protections and alarm signaling during operation.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p><b>Versatility</b> - designed for <b>iron separators with 110V and 220V power supply.</b></p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Smooth voltage regulation, capability of separating conveyed cargoes.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Alphanumeric indication of current parameters, operating modes, and alarm messages.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Compact dimensions enable convenient installation of <b>PN-500-ZH series converters</b> for operators.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Alarm signaling for emergency situations.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>High reliability ensured by a new component base and original technical solutions protected by Russian patent law.</p>
                </li>
            </ol>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>PARAMETERS</th>
                            <th className={styles.tableActiveSubmain}>PN-500-40Z</th>
                            <th className={styles.tableActiveSubmain}>PN-500-80Z</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Power Supply</th>
                            <td className={styles.tableunactive}>Three-phase</td>
                            <td className={styles.tableunactive}>Three-phase</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Supply Voltage, V</th>
                            <td className={styles.tableunactive}>380 +/- 60</td>
                            <td className={styles.tableunactive}>380 +/- 60</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Frequency, Hz</th>
                            <td className={styles.tableunactive}>50</td>
                            <td className={styles.tableunactive}>50</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Output Voltage Range, V</th>
                            <td className={styles.tableunactive}>10-230</td>
                            <td className={styles.tableunactive}>10-230</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Demagnetization Time, sec, max</th>
                            <td className={styles.tableunactive}>3</td>
                            <td className={styles.tableunactive}>3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Operating Mode PV, %</th>
                            <td className={styles.tableunactive}>100</td>
                            <td className={styles.tableunactive}>100</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Maximum Permissible Current, PV-100%, A</th>
                            <td className={styles.tableunactive}><b>40</b></td>
                            <td className={styles.tableunactive}><b>80</b></td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Dimensions, mm, max</th>
                            <td className={styles.tableunactive}>360x150x375</td>
                            <td className={styles.tableunactive}>360x150x375</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Mounting Dimensions, mm</th>
                            <td className={styles.tableunactive}>255x350</td>
                            <td className={styles.tableunactive}>255x350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Weight, kg, max</th>
                            <td className={styles.tableunactive}>12.2</td>
                            <td className={styles.tableunactive}>12.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}