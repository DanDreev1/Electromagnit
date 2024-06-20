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

    title: "PN-500-G",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "PN-500-G",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/ControlSystems/SecondPage',
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
                    <Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../ControlSystems">Control Systems</Link> {'>'} PN-500-G
                </span>
                <h1 className={styles.title}>Generator Control Systems for Electromagnets (PN-500-G)</h1>
                <div className="flex my-10">
                    <span className="mr-10 text-gray-600 text-sm">Read Time: 2 mins</span>
                    <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
                </div>
                <Image className="mb-10" src="/Control System 2.jpg" alt="Something" width={1200} height={575} priority />
                <p className={styles.text}>
                    <b>PN-500-G – Voltage Converters Series (PN-500-G)</b> – specially designed for operation with generators installed on mobile cranes and excavators where there is no stationary grid. They are intended for <b>powering and controlling DC lifting electromagnets</b> of any power and for joint operation with 220 or 380 V generators.
                </p>
                <p className={styles.text}>
                    Types of electromagnets used: <b>ЕМГ078, ЕМГ117, ЕМГ-140, ЕМГ165, ЕМГ-200, ЕМГ-230, ЕМГ110, ЕМГ170, М22, М42, М43, М62, М63, М67, ПМ15, ПМ25, WALKER, FELEMANG, WOKO and others</b>
                </p>
                <h3 className={styles.subtitle}>Main Types of Electromagnet Protection</h3>
                <ol className={styles.olmenu}>
                    <li className={styles.ollist}>
                        <span>1</span>
                        <p>Limiting the maximum output voltage to 220-230 V.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>2</span>
                        <p>Protection against short circuit in the load.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>3</span>
                        <p>Protection against live cable short circuit to each other and to "earth".</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>4</span>
                        <p>Signaling cable breakage.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>5</span>
                        <p>Signaling of leakage current exceeding in the iron separator circuit (during electromagnet overheating).</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>6</span>
                        <p>Signaling the appearance of short inter-turn faults in the iron magnet separator.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>7</span>
                        <p>Signaling exceeding the maximum permissible current.</p>
                    </li>
                </ol>
                <h3 className={styles.subtitle}>PN-500-40Ж, PN-500-80Ж. Features of Control Systems (PN-500-40Ж, PN-500-80Ж)</h3>
                <ol className={styles.olmenu}>
                    <li className={styles.ollist}>
                        <span>1</span>
                        <p><b>Increased iron separator service life</b> due to fast-acting electronic protections and emergency situation signaling during operation.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>2</span>
                        <p>Ability to operate with 220 or 380 V generators depending on the installed generator.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>3</span>
                        <p>Smooth voltage regulation of the electromagnet, ability to separate moving loads.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>4</span>
                        <p>Increased performance due to increased speed of current rise and fall in the electromagnet.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>5</span>
                        <p>Maximum allowable surge current of 4500 A, ensuring reliable system operation during short circuits.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>6</span>
                        <p>Alphanumeric indication of current parameters, operating modes, and emergency messages.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>7</span>
                        <p>Audible signaling of emergency situations.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>8</span>
                        <p>Connection to a standard crane control panel, additional output for connecting a voltage regulator (selsyn).</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>9</span>
                        <p>Compact dimensions allow installation of <b>PN-500-G series converters</b> directly in the crane cabin in a convenient location for the operator.</p>
                    </li>
                    <li className={styles.ollist}>
                        <span>10</span>
                        <p>High reliability achieved through a new component base and original technical solutions protected by Russian patent law.</p>
                    </li>
                </ol>
                <div className="overflow-x-auto">
                    <table className={styles.secondtable}>
                        <thead>
                            <tr>
                                <th className={styles.tableActiveMain}>PARAMETERS</th>
                                <th className={styles.tableActiveSubmain}>PN-500-G-50</th>
                                <th className={styles.tableActiveSubmain}>PN-500-G-100</th>
                                <th className={styles.tableActiveSubmain}>PN-500-G-150</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className={styles.tableActiveMain}>Supply Voltage, V</th>
                                <td className={styles.tableunactive}>220 or 380</td>
                                <td className={styles.tableunactive}>220 or 380</td>
                                <td className={styles.tableunactive}>220 or 380</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Frequency, Hz</th>
                                <td className={styles.tableunactive}>50</td>
                                <td className={styles.tableunactive}>50</td>
                                <td className={styles.tableunactive}>50</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Output Voltage Range, V</th>
                                <td className={styles.tableunactive}>10-230</td>
                                <td className={styles.tableunactive}>10-230</td>
                                <td className={styles.tableunactive}>10-230</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Demagnetization Time, sec, max</th>
                                <td className={styles.tableunactive}>3</td>
                                <td className={styles.tableunactive}>3</td>
                                <td className={styles.tableunactive}>3</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Maximum Permissible Current, PV-75%, A</th>
                                <td className={styles.tableunactive}>50</td>
                                <td className={styles.tableunactive}>100</td>
                                <td className={styles.tableunactive}>150</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Dimensions, mm, max</th>
                                <td className={styles.tableunactive}>360x150x375</td>
                                <td className={styles.tableunactive}>360x150x375</td>
                                <td className={styles.tableunactive}>360x150x375</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Mounting Dimensions, mm</th>
                                <td className={styles.tableunactive}>255x350</td>
                                <td className={styles.tableunactive}>255x350</td>
                                <td className={styles.tableunactive}>255x350</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Weight, kg, max</th>
                                <td className={styles.tableunactive}>12.0</td>
                                <td className={styles.tableunactive}>12.2</td>
                                <td className={styles.tableunactive}>12.5</td>
                            </tr>
                            <tr>
                                <th className={styles.tableActiveMain}>Recommended Generator Power, kW</th>
                                <td className={styles.tableunactive}>10-15</td>
                                <td className={styles.tableunactive}>20-25</td>
                                <td className={styles.tableunactive}>30-40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className={styles.exclamacion}>ATTENTION! CONSIDER THE POWER CONSUMPTION OF OTHER ENERGY CONSUMERS WHEN CHOOSING GENERATOR SUPPLY!</span>
        </section>
    );
}