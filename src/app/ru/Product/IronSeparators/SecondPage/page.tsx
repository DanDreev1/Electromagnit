import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Электромагнит', 'Системы управления', 'Железоотделители', 'Ремонт и изготовление запасных частей электромагнитов', 'Electromagnit', 'Грузоподъемные электромагниты'],
    authors: [{ name: 'Сергій', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: "ЕМП",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/Product/IronSeparators/SecondPage'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: "ЕМЖС",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ua/Product/IronSeparators/SecondPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../IronSeparators">Железоотделители</Link> {'>'} ЭМП</span>
            <h2 className={styles.title}>Железоотделители электромагнитные подвесные (ЭМП)</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 1 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Iron Separators 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h3 className={styles.subtitle}>ЭМЖ – Сфера применения</h3>
            <p className={styles.text}>ЭМЖ – железоотделители электромагнитные подвесные предназначены для извлечения ферромагнитных примесей и ферромагнитных предметов из сыпучих материалов, транспортируемых ленточными конвейерами с шириной ленты от 600 до 1600мм.</p>
            <h3 className={styles.subtitle}>Технические данные:</h3>
            <div className="overflow-x-auto">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Наименование</th>
                            <th className={styles.tableActiveSubmain}>Габариты, мм</th>
                            <th className={styles.tableActiveSubmain}>Напряжение питания, B</th>
                            <th className={styles.tableActiveSubmain}>Номинальный ток обмотки при 20 С,А</th>
                            <th className={styles.tableActiveSubmain}>Мощность при уч. температуре, кВт</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 065</th>
                            <td className={styles.tableunactive}>800х500х665</td>
                            <td className={styles.tableunactive}>220/110</td>
                            <td className={styles.tableunactive}>44866</td>
                            <td className={styles.tableunactive}>1,8</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 080</th>
                            <td className={styles.tableunactive}>920х500х720</td>
                            <td className={styles.tableunactive}>220/110</td>
                            <td className={styles.tableunactive}>15/30</td>
                            <td className={styles.tableunactive}>2,3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 100</th>
                            <td className={styles.tableunactive}>1080х550х860</td>
                            <td className={styles.tableunactive}>220/110</td>
                            <td className={styles.tableunactive}>19/38</td>
                            <td className={styles.tableunactive}>2,8</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 120</th>
                            <td className={styles.tableunactive}>1200х600х900</td>
                            <td className={styles.tableunactive}>220</td>
                            <td className={styles.tableunactive}>22</td>
                            <td className={styles.tableunactive}>3,2</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 140</th>
                            <td className={styles.tableunactive}>1400х700х950</td>
                            <td className={styles.tableunactive}>220</td>
                            <td className={styles.tableunactive}>25</td>
                            <td className={styles.tableunactive}>4</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 160</th>
                            <td className={styles.tableunactive}>1550х750х980</td>
                            <td className={styles.tableunactive}>220</td>
                            <td className={styles.tableunactive}>28</td>
                            <td className={styles.tableunactive}>4,5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Наименование</th>
                            <th className={styles.tableActiveSubmain}>Ширина ленты конвейера, мм.</th>
                            <th className={styles.tableActiveSubmain}>Масса изъятых включений, кг</th>
                            <th className={styles.tableActiveSubmain}>Глубина зоны извлечения, мм</th>
                            <th className={styles.tableActiveSubmain}>Масса, кг</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 065</th>
                            <td className={styles.tableunactive}>600</td>
                            <td className={styles.tableunactive}>10</td>
                            <td className={styles.tableunactive}>300</td>
                            <td className={styles.tableunactive}>600</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 080</th>
                            <td className={styles.tableunactive}>800</td>
                            <td className={styles.tableunactive}>15</td>
                            <td className={styles.tableunactive}>300</td>
                            <td className={styles.tableunactive}>870</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 100</th>
                            <td className={styles.tableunactive}>1000</td>
                            <td className={styles.tableunactive}>20</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1200</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 120</th>
                            <td className={styles.tableunactive}>1200</td>
                            <td className={styles.tableunactive}>25</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1450</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 140</th>
                            <td className={styles.tableunactive}>1400</td>
                            <td className={styles.tableunactive}>25</td>
                            <td className={styles.tableunactive}>500</td>
                            <td className={styles.tableunactive}>1700</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖ 160</th>
                            <td className={styles.tableunactive}>1600</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>500</td>
                            <td className={styles.tableunactive}>2100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}