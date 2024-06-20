import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Електромагніт', 'Системи керування', 'Залізовідділювачі', 'Ремонт та виготовлення запасних частин електромагнітів', 'Electromagnit', 'Вантажопідйомні електромагніти'],
    authors: [{ name: 'Сергій', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: "ПН-500-Ж",
    description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/Product/ControlSystems/FirstPage'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: "ПН-500-Ж",
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
        url: 'https://electromagnit.vercel.app/ua/Product/ControlSystems/FirstPage',
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
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../ControlSystems">Системи керування</Link> {'>'} ПН-500-Ж</span>
            <h1 className={styles.title}>Система керування залізовідділювачем ПН-500-Ж</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На читання: 2 хв</span>
                <span className="text-gray-600 text-sm">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Control System 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}><b>Перетворювач напруги серії (ПН-500-Ж)</b> - призначений для <b>живлення та керування залізовідділювачем,</b> струм якого не перевищує допустимих значень.</p>
            <p className={styles.text}><b>Прикладні типи залізовідділників, що живляться: ЕМЖ065, ЕМЖ080, ЕМЖ100, ЕМЖ120, ЕМЖ140, ЕМЖ160, ЕМЖС080, ЕМЖС100, ЕМЖС120, ЕМЖС140, ЕМЖС160 та інші</b></p>
            <h3 className={styles.subtitle}>Основні види захисту залізовідділювача</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Точне обмеження максимальної вихідної напруги на рівні 110-230 В.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Захист від короткого замикання у навантаженні.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Захист від замикання жив кабелю між собою та на «землю».</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Сигналізація обриву кабелю живлення.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Сигналізація про перевищення струму витоку в ланцюзі залізовідділювача (при перегріванні електромагніту).</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Сигналізація про появу коротких міжвиткових замикань в ел.магніті залізовідділювача.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Сигналізація про перевищення максимально допустимого струму.</p>
                </li>
            </ol>
            <h3 className={styles.subtitle}>ПН-500-40Ж, ПН-500-80Ж. Відмінні риси систем управління (ПН-500-40Ж, ПН-500-80Ж)</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p><b>Збільшення терміну служби залізовідділювача</b> за рахунок швидкодіючих електронних захистів, сигналізації аварійних ситуацій у процесі роботи.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p><b>Універсальність</b> - призначені для <b>залізовідділювачів з напругою живлення 110 та 220 В.</b></p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Плавне регулювання напруги, можливість сепарування вантажів, що переміщуються по конвеєру.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Алфавітно-цифрова індикація поточних параметрів, режимів роботи та аварійних повідомлень.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Малі масогабаритні показники дозволяють встановити <b>перетворювачі серії ПН-500-Ж</b> у зручному для оператора місці.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Звукова сигналізація аварійних ситуацій.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Висока надійність, одержувана за рахунок нової елементної бази та оригінальних технічних рішень, захищених патентним законом РФ.</p>
                </li>
            </ol>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>ПАРАМЕТРИ</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-40Ж</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-80Ж</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Живлення</th>
                            <td className={styles.tableunactive}>Трифазне</td>
                            <td className={styles.tableunactive}>Трифазне</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Напруга живлення, В</th>
                            <td className={styles.tableunactive}>380 +/- 60</td>
                            <td className={styles.tableunactive}>380 +/- 60</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Частота, Гц</th>
                            <td className={styles.tableunactive}>50</td>
                            <td className={styles.tableunactive}>50</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Діапазон регулювання вихідної напруги, B</th>
                            <td className={styles.tableunactive}>10-230</td>
                            <td className={styles.tableunactive}>10-230</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Час розмагнічування, сек, не більше</th>
                            <td className={styles.tableunactive}>3</td>
                            <td className={styles.tableunactive}>3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Режим роботи ПВ, %</th>
                            <td className={styles.tableunactive}>100</td>
                            <td className={styles.tableunactive}>100</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Максимально допустимий струм, ПВ-100%, А</th>
                            <td className={styles.tableunactive}><b>40</b></td>
                            <td className={styles.tableunactive}><b>80</b></td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Габаритні розміри, мм, не більше</th>
                            <td className={styles.tableunactive}>360х150х375</td>
                            <td className={styles.tableunactive}>360х150х375</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Посадочні розміри, мм</th>
                            <td className={styles.tableunactive}>255х350</td>
                            <td className={styles.tableunactive}>255х350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Маса, кг, не більше</th>
                            <td className={styles.tableunactive}>12,2</td>
                            <td className={styles.tableunactive}>12,5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}