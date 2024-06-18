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

    title: "ПН-500-Ж",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: "ПН-500-Ж",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Product/ControlSystems/FirstPage',
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
            <span className={styles.span}>
                <Link className={styles.link} href="../../Product">Продукт</Link> {'>'} 
                <Link className={styles.link} href="../ControlSystems">Системы управления</Link> {'>'} 
                ПН-500-Ж
            </span>
            <h2 className={styles.title}>Система управления залезоотделителем ПН-500-Ж</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 2 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Control System 1.jpg" alt="Something" width={1200} height={575} priority />
            <p className={styles.text}>
                <b>Преобразователь напряжения серии (ПН-500-Ж)</b> предназначен для <b>питания и управления залезоотделителем,</b> ток которого не превышает допустимых значений.
            </p>
            <p className={styles.text}>
                <b>Применяемые типы залезоотделителей, питаемые: ЕМЖ065, ЕМЖ080, ЕМЖ100, ЕМЖ120, ЕМЖ140, ЕМЖ160, ЕМЖС080, ЕМЖС100, ЕМЖС120, ЕМЖС140, ЕМЖС160 и другие</b>
            </p>
            <h3 className={styles.subtitle}>Основные виды защиты залезоотделителя</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Точное ограничение максимального выходного напряжения на уровне 110-230 В.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Защита от короткого замыкания в нагрузке.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Защита от замыкания живого кабеля между собой и на «землю».</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Сигнализация обрыва кабеля питания.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Сигнализация о превышении тока утечки в цепи залезоотделителя (при перегреве электромагнита).</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Сигнализация о появлении коротких межвитковых замыканий в электромагните залезоотделителя.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Сигнализация о превышении максимально допустимого тока.</p>
                </li>
            </ol>
            <h3 className={styles.subtitle}>ПН-500-40Ж, ПН-500-80Ж. Особенности систем управления (ПН-500-40Ж, ПН-500-80Ж)</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p><b>Увеличение срока службы залезоотделителя</b> за счет быстрых электронных защит и сигнализации аварийных ситуаций в процессе работы.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p><b>Универсальность</b> - предназначены для <b>залезоотделителей с напряжением питания 110 и 220 В.</b></p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Плавное регулирование напряжения, возможность сепарации перемещаемых по конвейеру грузов.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Алфавитно-цифровая индикация текущих параметров, режимов работы и аварийных сообщений.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Малые габаритные показатели позволяют установить <b>преобразователи серии ПН-500-Ж</b> в удобном для оператора месте.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Звуковая сигнализация аварийных ситуаций.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Высокая надежность, достигаемая за счет новой элементной базы и оригинальных технических решений, защищенных патентным законодательством РФ.</p>
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