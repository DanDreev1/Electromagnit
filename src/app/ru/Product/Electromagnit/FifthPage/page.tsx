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

    title: "ЭМГ 078-30/А, ЭМГ 078-30/М",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: "ЭМГ 078-30/А, ЭМГ 078-30/М",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Product/Electromagnit/FifthPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Электромагнит</Link> {'>'} ЕМГ 078-30/А, ЕМГ 078-30/М</span>
            <h1 className={styles.title}>Электромагниты грузоподъемные легкой серии ЕМГ 078-30/А, ЕМГ 078-30/М</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 2 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 5.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Сфера применения электромагнитов</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    Электромагниты грузоподъемные тяжелой серии предназначены для захвата и перемещения крановыми механизмами холодного (окружающей среды) груза из ферромагнитных материалов: металлолом, шлак, металлическая стружка, металлопрокат, забрус, слитки и т.д.
                </li>
                <li className={styles.list}>
                    Данные грузоподъемные электромагниты можно использовать на траверсе (изготавливается под конкретные потребности заказчика).
                </li>
                <li className={styles.list}>
                    Электромагниты рекомендованы для установки на мобильные экскаваторы типа FUCHS, LIEBHERR, ATLAS, SENNEBOGEN, CAT, ZEPPELIN и др. Большая грузоподъемность в комплекте с генераторной системой управления и специальной траверсой позволяет работать с электромагнитом без снятия захвата.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Отличительные особенности электромагнитов</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    Грузоподъемность электромагнита на 30% выше по сравнению с типовыми электромагнитами М62 и т.п.
                </li>
                <li className={styles.list}>
                    Большая тепловыделяющая поверхность <b>ЛИТОГО КОРПУСА</b> электромагнита, оригинальная технология сборки и применения новых изоляционных материалов и компаундов обеспечивают:
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                            Повышенную прочность и долговечность корпуса;
                        </li>
                        <li className={styles.list}>
                            Снижение нагрева электромагнита, экономию электроэнергии на тонну перемещаемого груза;
                        </li>
                        <li className={styles.list}>
                            Высокую продолжительность бесперебойной работы;
                        </li>
                        <li className={styles.list}>
                            Стабильность грузоподъемных параметров в процессе работы;
                        </li>
                        <li className={styles.list}>
                            Высокую надежность и долговечность обмотки.
                        </li>
                    </ul>
                </li>
                <li className={styles.list}>
                    Возможность работы грузоподъемных электромагнитов при ПВ-100% как залезоотделитель или сепаратор, при комплектации специальной системой управления.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Технические данные электромагнитов</h3>
            <div className="overflow-x-auto">
                <table className={styles.thirdtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>ПАРАМЕТРЫ</th>
                            <th className={styles.tableActiveSubmain}>ЕМГ 078-30/А</th>
                            <th className={styles.tableActiveSubmain}>ЕМГ 078-30/М</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Напряжение постоянного тока, В</th>
                            <td className={styles.tableunactive}>220±5%</td>
                            <td className={styles.tableunactive}>220±5%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Номинальный ток, А</th>
                            <td className={styles.tableunactive}>16±8%</td>
                            <td className={styles.tableunactive}>16±8%</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Мощность номинальная, Вт</th>
                            <td className={styles.tableunactive}>3 600</td>
                            <td className={styles.tableunactive}>3 600</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Мощность при температуре обмоток, Вт</th>
                            <td className={styles.tableunactive}>2 400</td>
                            <td className={styles.tableunactive}>2 400</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Отрывное усилие, кг, не менее</th>
                            <td className={styles.tableunactive}>9 000</td>
                            <td className={styles.tableunactive}>9 000</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Грузоподъемность на ломе ЗА, ГОСТ-2787-75, кг</th>
                            <td className={styles.tableunactive}>200</td>
                            <td className={styles.tableunactive}>200</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Грузоподъемность на стружке 15А, согласно ГОСТ-2787-75, кг</th>
                            <td className={styles.tableunactive}>150</td>
                            <td className={styles.tableunactive}>150</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Габаритные размеры, мм, АхВхС</th>
                            <td className={styles.tableunactive}>785х300х910</td>
                            <td className={styles.tableunactive}>785х300х910</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Рекомендуемая грузоподъемность крана, тн</th>
                            <td className={styles.tableunactive}>3,2; 5</td>
                            <td className={styles.tableunactive}>3,2; 5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Масса, кг</th>
                            <td className={styles.tableunactive}>550</td>
                            <td className={styles.tableunactive}>600</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    );
}