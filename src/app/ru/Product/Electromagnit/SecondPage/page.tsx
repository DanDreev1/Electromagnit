import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Электромагнит', 'Системы управления', 'Железоотделители', 'Ремонт и изготовление запасных частей электромагнитов', 'Electromagnit', 'Грузоподъемные электромагниты'],
    authors: [{ name: 'Сергей', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: "ЭМГ 165-42/А, ЭМГ 165-42/М",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: "ЭМГ 165-42/А, ЭМГ 165-42/М",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Product/Electromagnit/SecondPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Электромагнит</Link> {'>'} ЭМГ 165-42/А, ЭМГ 165-42/М</span>
            <h1 className={styles.title}>Электромагниты грузоподъемные тяжелой серии ЭМГ 165-42/А, ЭМГ 165-42/М</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 2 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Область применения электромагнитов</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                Электромагниты грузоподъемные тяжелой серии предназначены для захвата и переноса крановыми механизмами холодной (окружающей среды) груза из ферромагнитных материалов: металлолом, скрап, металлическая шихта, стружка, металлопрокат, чушки, слябы и т.д.
                </li>
                <li className={styles.list}>
                Данные грузоподъемные электромагниты можно использовать на траверсе (производится под конкретные потребности заказчика).
                </li>
                <li className={styles.list}>
                Электромагниты рекомендованы для установки на мобильные экскаваторы типа FUCHS, LIEBHERR, ATLAS, SENNEBOGEN, CAT, ZEPPELIN и т.д. Большой грузоподъемность в комплекте с генераторной системой управления и специальной траверсой, позволяющей не снимая грейфер работать электромагнитом.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Отличительные черты электромагнитов</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                Грузоподъемность электромагнита на 30% выше по сравнению с типовыми электромагнитами М62 и т.п.
                </li>
                <li className={styles.list}>
                Большая теплоотводная поверхность <b>ЛИТОГО КОРПУСА</b> электромагнита, оригинальная технология сбора и применения новых изоляционных материалов и компаундов обеспечивают:
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                        Повышенная прочность и долговечность корпуса;
                        </li>
                        <li className={styles.list}>
                        Снижение нагрева электромагнита экономию электроэнергии на тонну переносимого груза;
                        </li>
                        <li className={styles.list}>
                        Высокую продолжительность непрерывной работы;
                        </li>
                        <li className={styles.list}>
                        Стабильность грузоподъемных параметров в процессе работы;
                        </li>
                        <li className={styles.list}>
                        Высокая надежность и долговечность обмотки.
                        </li>
                    </ul>
                </li>
                <li className={styles.list}>
                Возможность работы грузоподъемных электромагнитов при ПВ-100% в качестве железоотделителя или сепаратора, при комплектации специальной системой управления.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Технические данные электромагнитов</h3>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>ПАРАМЕТРЫ</th>
                            <th className={styles.tableActiveSubmain}>ЭМГ 165-42/А</th>
                            <th className={styles.tableActiveSubmain}>ЭМГ 165-42/М</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Напряжение постоянного тока, B</th>
                            <td className={styles.tableunactive}>220±5%</td>
                            <td className={styles.tableunactive}>220±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Номинальный ток, A</th>
                            <td className={styles.tableunactive}>85±5%</td>
                            <td className={styles.tableunactive}>85±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Мощность номинальная, Вт</th>
                            <td className={styles.tableunactive}>18 700</td>
                            <td className={styles.tableunactive}>18 700</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Мощность при температуре обмоток, Вт.</th>
                            <td className={styles.tableunactive}>13 400</td>
                            <td className={styles.tableunactive}>13 400</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Отрывное усилие, кг, не меньше</th>
                            <td className={styles.tableunactive}>50 000</td>
                            <td className={styles.tableunactive}>50 000</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Грузоподъемность на скрапе ЗА, ГОСТ-2787-75, кг</th>
                            <td className={styles.tableunactive}>950</td>
                            <td className={styles.tableunactive}>950</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Грузоподъемность на стружке 15А, согласно ГОСТ-2787-75, кг</th>
                            <td className={styles.tableunactive}>850</td>
                            <td className={styles.tableunactive}>850</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Габаритные размеры, мм, АхВхС</th>
                            <td className={styles.tableunactive}>1650х420х1500</td>
                            <td className={styles.tableunactive}>1650х420х1500</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Рекомендуемая грузоподъемность крана, тн.</th>
                            <td className={styles.tableunactive}>10, 16</td>
                            <td className={styles.tableunactive}>10, 16</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Масса, кг</th>
                            <td className={styles.tableunactive}>3200</td>
                            <td className={styles.tableunactive}>3900</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}