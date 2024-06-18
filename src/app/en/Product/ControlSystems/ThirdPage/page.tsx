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

    title: "PN-500",
    description: 'The best truck magnets for every need. Find out more about our products and services.',
    
    openGraph: {
        title: "PN-500",
        description: 'The best truck magnets for every need. Find out more about our products and services.',
        url: 'https://electromagnit.vercel.app/en/Product/ControlSystems/ThirdPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Product</Link> {'>'} <Link className={styles.link} href="../ControlSystems">Control Systems</Link> {'>'} PN-500</span>
            <h2 className={styles.title}>Voltage Converter PN-500</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">Read time: 3 min</span>
                <span className="text-gray-600 text-sm">Published: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Product2.jpg" alt="Something" width={1200} height={575} priority />
            <p className={styles.text}><b>Voltage Converter PN-500</b> - designed to power and control DC electromagnets of any power rating and simultaneously power multiple electromagnets, provided that their combined current does not exceed allowable limits.</p>
            <p className={styles.text}><b>Voltage Converter PN-500</b> is intended for powering and controlling the following types of electromagnets: EMG078, EMG117, EMG165, EMG-200, EMG-230, EMG110, EMG170, M22, M42, M43, M62, M63, PM15, PM25, WALKER, FELEMANG, WOKO, and others.</p>
            <span className={styles.statement}>Almost always in stock. Delivery time in case of absence in stock is 10-20 days.</span>
            <h3 className={styles.subtitle}>Main Protection Features of PN-500 Voltage Converter for Electromagnets</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Limitation of maximum output voltage only at the level of 220-230 V.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Protection against short circuit in the load.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Protection against live cable short-circuiting between each other and to "ground".</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Power cable break alarm.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Alarm on exceeding leakage current in the iron separator circuit (during electromagnet overheating).</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Alarm on occurrence of inter-turn short-circuit in the iron separator electromagnet.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Alarm on exceeding maximum allowable current.</p>
                </li>
            </ol>
            <span className={styles.question}>Voltage converters are available in types: PN-500-100A, PN-500-150A, PN-500-200A, PN-500-250A</span>
            <h3 className={styles.subtitle}>PN-500-40ZH, PN-500-80ZH. Distinctive Features of Control Systems (PN-500-40ZH, PN-500-80ZH)</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p><b>Increased service life of the iron separator</b> due to fast-acting electronic protection and emergency signaling during operation.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Absence of overvoltages during recuperation and demagnetization.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>30-40% energy savings due to elimination of crane ballast resistors from the circuit, energy return to the network during demagnetization.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Smooth voltage regulation of the electromagnet, possibility of separating moved loads.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Increased productivity due to faster current rise and fall in the electromagnet.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Maximum permissible peak current of 4500 A, ensuring reliable operation of the system during short circuits.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Universality - can operate with iron separators at 100% duty cycle.</p>
                </li>
                <li className={styles.ollist}>
                    <span>8</span>
                    <p>Alphanumeric indication of current parameters, operating modes, and emergency messages.</p>
                </li>
                <li className={styles.ollist}>
                    <span>9</span>
                    <p>Audible alarms for emergency situations.</p>
                </li>
                <li className={styles.ollist}>
                    <span>10</span>
                    <p>Connection to standard crane control panel, additional output for connecting voltage regulator selsinu.</p>
                </li>
                <li className={styles.ollist}>
                    <span>11</span>
                    <p>Compact dimensions allow installation of <b>PN-500-G series converters</b> directly in the crane cabin at a convenient location for the operator.</p>
                </li>
                <li className={styles.ollist}>
                    <span>12</span>
                    <p>High reliability ensured by new component base and original technical solutions protected by Russian patent law.</p>
                </li>
            </ol>
            <h3 className={styles.subtitle}>Technical Specifications of PN-500 Converters</h3>
            <div className="overflow-x-auto">
                <table className={styles.secondtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Parameters</th>
                            <th className={styles.tableActiveSubmain}>PN-500-100</th>
                            <th className={styles.tableActiveSubmain}>PN-500-150</th>
                            <th className={styles.tableActiveSubmain}>PN-500-200</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Power Supply</th>
                            <td className={styles.tableunactive}>Three-phase</td>
                            <td className={styles.tableunactive}>Three-phase</td>
                            <td className={styles.tableunactive}>Three-phase</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Supply Voltage, V</th>
                            <td className={styles.tableunactive}>380±60</td>
                            <td className={styles.tableunactive}>380±60</td>
                            <td className={styles.tableunactive}>380±60</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Frequency, Hz</th>
                            <td className={styles.tableunactive}>50</td>
                            <td className={styles.tableunactive}>50</td>
                            <td className={styles.tableunactive}>50</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Output Voltage Adjustment Range, V</th>
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
                            <th className={styles.tableActiveMain}>Duty Cycle, %</th>
                            <td className={styles.tableunactive}>60, 100</td>
                            <td className={styles.tableunactive}>60, 100</td>
                            <td className={styles.tableunactive}>60, 100</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Maximum Allowable Current, PV-75%, A</th>
                            <td className={styles.tableunactive}><b>100</b></td>
                            <td className={styles.tableunactive}><b>150</b></td>
                            <td className={styles.tableunactive}><b>200</b></td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Maximum Allowable Current, PV-100%, A</th>
                            <td className={styles.tableunactive}><b>50</b></td>
                            <td className={styles.tableunactive}><b>80</b></td>
                            <td className={styles.tableunactive}><b>110</b></td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Dimensions, mm, max</th>
                            <td className={styles.tableunactive}>360х150х375</td>
                            <td className={styles.tableunactive}>360х150х375</td>
                            <td className={styles.tableunactive}>450х200х375</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Mounting Dimensions, mm</th>
                            <td className={styles.tableunactive}>255х350</td>
                            <td className={styles.tableunactive}>255х350</td>
                            <td className={styles.tableunactive}>255х350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Weight, kg, max</th>
                            <td className={styles.tableunactive}>12.2</td>
                            <td className={styles.tableunactive}>12.5</td>
                            <td className={styles.tableunactive}>15.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}