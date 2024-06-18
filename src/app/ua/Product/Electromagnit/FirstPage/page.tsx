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

    title: "М22, М42, М62, М63",
    description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/Product/Electromagnit/FirstPage'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: "М22, М42, М62, М63",
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
        url: 'https://electromagnit.vercel.app/ua/Product/Electromagnit/FirstPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Електромагніт</Link> {'>'} M22, M42, M62, M63</span>
            <h2 className={styles.title}>М22, М42, М62, М63 — Модернізовані електромагніти зі збільшеною вантажопідйомністю</h2>
            <div className="flex my-8">
                <span className="mr-10 text-gray-600 text-sm">На читання: 2 хв</span>
                <span className="text-gray-600 text-sm">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Сфера застосування електромагнітів</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    <b>М22, М42, М62, М63 — Модернізовані електромагніти зі збільшеною вантажопідйомністю</b> призначені для захоплення та перенесення крановими механізмами холодного (довкілля) вантажу з феромагнітних матеріалів: металобрухт, скрап, металева шихта, стружка, металопрокат, чушки, сляби тощо.
                </li>
                <li className={styles.list}>
                    Дані <b>вантажопідйомні електромагніти</b> можна використовувати на траверсі (виготовляється під конкретні потреби замовника).
                </li>
            </ul>
            <h3 className={styles.subtitle}>Відмінні риси електромагнітів</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    Дані вантажопідйомні електромагніти виробляються шляхом доопрацювання та удосконалення випущених раніше <b>вантажопідйомних електромагнітів серії М22, М42, М62, М63 тощо. зі збільшенням їхньої вантажопідйомності на 20%, 30%, 40%, 50%, 70%, у 2 рази і більше!</b>
                </li>
                <li className={styles.list}>
                    Вантажопідйомність електромагнітів серії «стандарт» відповідає електромагнітам М22, М42, М62, М63.
                </li>
                <li className={styles.list}>
                    Вантажопідйомність електромагнітів «важкої» та «суперважкої» серії підвищена за рахунок збільшення перерізу магнітопроводу електромагніту та потужності котушки.
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                            Високу вантажопідйомність електромагніту;
                        </li>
                        <li className={styles.list}>
                            Зниження нагріву котушки електромагніту;
                        </li>
                        <li className={styles.list}>
                            Економію електроенергії на тонну вантажу, що переноситься;
                        </li>
                        <li className={styles.list}>
                            Високу тривалість безперервної роботи;
                        </li>
                        <li className={styles.list}>
                            Стабільність вантажопідйомних параметрів у процесі роботи;
                        </li>
                        <li className={styles.list}>
                            Високу надійність та довговічність обмотки.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className={styles.subtitle}>Технічні дані електромагнітів</h3>
            <div className="overflow-x-auto" aria-hidden="true">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th rowSpan={2} className={styles.tableActiveMain}>Найменування</th>
                            <th rowSpan={2} className={styles.tableActiveSubmain}>Відривне зусилля, кг, не менше</th>
                            <th colSpan={2} className={styles.tableActiveSubmain}>Вантажопідйомність, кг</th>
                            <th rowSpan={2} className={styles.tableActiveSubmain}>Маса магніту, кг</th>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveSubmain}>Скрап 3A</th>
                            <th className={styles.tableActiveSubmain}>Стружка 15А</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>М-22/Стандарт</th>
                            <td className={styles.tableunactive}>7500</td>
                            <td className={styles.tableunactive}>160</td>
                            <td className={styles.tableunactive}>120</td>
                            <td className={styles.tableunactive}>470</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-22/Важка</th>
                            <td className={styles.tableunactive}>9000</td>
                            <td className={styles.tableunactive}>200</td>
                            <td className={styles.tableunactive}>150</td>
                            <td className={styles.tableunactive}>620</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-22/Суперважка</th>
                            <td className={styles.tableunactive}>11000</td>
                            <td className={styles.tableunactive}>250</td>
                            <td className={styles.tableunactive}>190</td>
                            <td className={styles.tableunactive}>710</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-42/Стандарт</th>
                            <td className={styles.tableunactive}>16000</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>350</td>
                            <td className={styles.tableunactive}>1350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-42/Важка</th>
                            <td className={styles.tableunactive}>27000</td>
                            <td className={styles.tableunactive}>450</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1510</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-42/Суперважка</th>
                            <td className={styles.tableunactive}>33000</td>
                            <td className={styles.tableunactive}>570</td>
                            <td className={styles.tableunactive}>500</td>
                            <td className={styles.tableunactive}>1800</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-62/Стандарт</th>
                            <td className={styles.tableunactive}>25000</td>
                            <td className={styles.tableunactive}>600</td>
                            <td className={styles.tableunactive}>550</td>
                            <td className={styles.tableunactive}>2750</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-62/Важка</th>
                            <td className={styles.tableunactive}>50000</td>
                            <td className={styles.tableunactive}>900</td>
                            <td className={styles.tableunactive}>800</td>
                            <td className={styles.tableunactive}>3450</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-62/Суперважка</th>
                            <td className={styles.tableunactive}>62500</td>
                            <td className={styles.tableunactive}>1150</td>
                            <td className={styles.tableunactive}>1000</td>
                            <td className={styles.tableunactive}>5050</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto" aria-hidden="true">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Найменування</th>
                            <th className={styles.tableActiveSubmain}>Номінальний струм, A</th>
                            <th className={styles.tableActiveSubmain}>Потужність номінальна, Вт</th>
                            <th className={styles.tableActiveSubmain}>Потужність при нагрітій котушці, Вт</th>
                            <th className={styles.tableActiveSubmain}>Рекомендована вантажопідйомність крана, тн</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>М-22/Стандарт</th>
                            <td className={styles.tableunactive}>16±8%</td>
                            <td className={styles.tableunactive}>3600</td>
                            <td className={styles.tableunactive}>2300</td>
                            <td className={styles.tableunactive}>3,2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-22/Важка</th>
                            <td className={styles.tableunactive}>23±8%</td>
                            <td className={styles.tableunactive}>5300</td>
                            <td className={styles.tableunactive}>3700</td>
                            <td className={styles.tableunactive}>3,2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-22/Суперважка</th>
                            <td className={styles.tableunactive}>30±8%</td>
                            <td className={styles.tableunactive}>6600</td>
                            <td className={styles.tableunactive}>4650</td>
                            <td className={styles.tableunactive}>3,2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-42/Стандарт</th>
                            <td className={styles.tableunactive}>42±8%</td>
                            <td className={styles.tableunactive}>9300</td>
                            <td className={styles.tableunactive}>6500</td>
                            <td className={styles.tableunactive}>5; 10</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-42/Важка</th>
                            <td className={styles.tableunactive}>51±8%</td>
                            <td className={styles.tableunactive}>11250</td>
                            <td className={styles.tableunactive}>7900</td>
                            <td className={styles.tableunactive}>5; 10</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-42/Суперважка</th>
                            <td className={styles.tableunactive}>60±8%</td>
                            <td className={styles.tableunactive}>13200</td>
                            <td className={styles.tableunactive}>9300</td>
                            <td className={styles.tableunactive}>5; 10</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-62/Стандарт</th>
                            <td className={styles.tableunactive}>80±8%</td>
                            <td className={styles.tableunactive}>17600</td>
                            <td className={styles.tableunactive}>12500</td>
                            <td className={styles.tableunactive}>5; 10; 16</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-62/Важка</th>
                            <td className={styles.tableunactive}>93±8%</td>
                            <td className={styles.tableunactive}>20200</td>
                            <td className={styles.tableunactive}>14400</td>
                            <td className={styles.tableunactive}>10; 16</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>М-62/Суперважка</th>
                            <td className={styles.tableunactive}>108±8%</td>
                            <td className={styles.tableunactive}>23800</td>
                            <td className={styles.tableunactive}>16700</td>
                            <td className={styles.tableunactive}>10; 16; 25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 className={styles.subtitle}>Габаритні розміри</h3>
            <table className={styles.secondtable}>
                <thead>
                    <tr>
                        <th className={styles.tableActiveMain}>Найменування</th>
                        <th className={styles.tableActiveSubmain}>A</th>
                        <th className={styles.tableActiveSubmain}>B</th>
                        <th className={styles.tableActiveSubmain}>C</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={styles.tableActiveMain}>М-22/Стандарт</th>
                        <td className={styles.tableunactive}>780</td>
                        <td className={styles.tableunactive}>300</td>
                        <td className={styles.tableunactive}>910</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-22/Важка</th>
                        <td className={styles.tableunactive}>780</td>
                        <td className={styles.tableunactive}>360</td>
                        <td className={styles.tableunactive}>970</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-22/Суперважка</th>
                        <td className={styles.tableunactive}>780</td>
                        <td className={styles.tableunactive}>402</td>
                        <td className={styles.tableunactive}>1012</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-42/Стандарт</th>
                        <td className={styles.tableunactive}>1170</td>
                        <td className={styles.tableunactive}>320</td>
                        <td className={styles.tableunactive}>1270</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-42/Важка</th>
                        <td className={styles.tableunactive}>1170</td>
                        <td className={styles.tableunactive}>363</td>
                        <td className={styles.tableunactive}>1313</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-42/Суперважка</th>
                        <td className={styles.tableunactive}>1170</td>
                        <td className={styles.tableunactive}>426</td>
                        <td className={styles.tableunactive}>1376</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-62/Стандарт</th>
                        <td className={styles.tableunactive}>1650</td>
                        <td className={styles.tableunactive}>420</td>
                        <td className={styles.tableunactive}>1500</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-62/Важка</th>
                        <td className={styles.tableunactive}>1650</td>
                        <td className={styles.tableunactive}>479</td>
                        <td className={styles.tableunactive}>1559</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>М-62/Суперважка</th>
                        <td className={styles.tableunactive}>1650</td>
                        <td className={styles.tableunactive}>502</td>
                        <td className={styles.tableunactive}>1582</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}