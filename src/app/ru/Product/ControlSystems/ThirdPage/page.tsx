import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Електромагніт', 'Системи керування', 'Залізовідділювачі', 'Залізовідділювачі', 'Ремонт та виготовлення запасних частин електромагнітів', 'Electromagnit', 'Вантажопідйомні електромагніти'],
    authors: [{ name: 'Сергей', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: "ПН-500",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: "ПН-500",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Product/ControlSystems/ThirdPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../ControlSystems">Системы управления</Link> {'>'} ПН-500</span>
            <h1 className={styles.title}>Преобразователь напряжения ПН-500</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 3 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Product2.jpg" alt="Something" width={1200} height={575} priority />
            <p className={styles.text}><b>Преобразователи напряжения ПН-500</b> - предназначены для питания и управления грузоподъемными электромагнитами постоянного тока любой мощности и одновременного питания нескольких электромагнитов, суммарный ток которых не превышает допустимых значений.</p>
            <p className={styles.text}><b>Преобразователь напряжения ПН-500</b> предназначен для питания и управления следующих типов электромагнитов: ЭМГ078, ЭМГ117, ЭМГ165, ЭМГ-200, ЭМГ-230, ЭМГ110, ЭМГ170, М22, М42, М43, М62, М63, ПМ15, ПМ25, WALKER, FELEMANG, WOKO и других.</p>
            <span className={styles.statement}>Почти всегда в наличии на складе. Поставка, в случае отсутствия на складе, 10-20 дней.</span>
            <h3 className={styles.subtitle}>Основные виды защиты электромагнита при использовании преобразователя напряжения ПН-500</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Ограничение максимального выходного напряжения только на уровне 220-230 В.</p>
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
                    <p>Сигнализация о превышении тока утечки в цепи залізовідділювача (при перегреве электромагнита).</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Сигнализация о появлении коротких межвитковых замыканий в эл.магните залізовідділювача.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Сигнализация о превышении максимально допустимого тока.</p>
                </li>
            </ol>
            <span className={styles.question}>Преобразователи напряжения бывают таких типов: ПН-500-100A, ПН-500-150A, ПН-500-200A, ПН-500-250A</span>
            <h3 className={styles.subtitle}>ПН-500-40Ж, ПН-500-80Ж. Отличительные черты систем управления (ПН-500-40Ж, ПН-500-80Ж)</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p><b>Увеличение срока службы залізовідділювача</b> за счет быстродействующих электронных защит и сигнализации аварийных ситуаций в процессе работы.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Отсутствие перенапряжений при рекуперации и размагничивании.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Экономия электроэнергии на 30-40% за счет исключения из схемы крана балластных резисторов, возврата энергии в сеть в режиме размагничивания.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Плавное регулирование напряжения электромагнита, возможность сепарации перемещаемых грузов.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Повышается производительность за счет увеличения скорости нарастания и снижения тока в электромагните.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Максимально допустимый ударный ток 4500 А, что гарантирует надежную работу системы при КЗ.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Универсальность - могут работать с залізовідділювачами при ПВ-100%.</p>
                </li>
                <li className={styles.ollist}>
                    <span>8</span>
                    <p>Алфавитно-цифровая индикация текущих параметров, режимов работы и аварийных сообщений.</p>
                </li>
                <li className={styles.ollist}>
                    <span>9</span>
                    <p>Звуковая сигнализация аварийных ситуаций.</p>
                </li>
                <li className={styles.ollist}>
                    <span>10</span>
                    <p>Подключение к стандартному пульту управления крана, дополнительный выход для подключения регулятора напряжения сельсину.</p>
                </li>
                <li className={styles.ollist}>
                    <span>11</span>
                    <p>Малогабаритные показатели позволяют установить <b>преобразователи серии ПН-500-Г</b> непосредственно в кабине крана в удобном для оператора месте.</p>
                </li>
                <li className={styles.ollist}>
                    <span>12</span>
                    <p>Высокая надежность, обеспечиваемая за счет новой элементной базы и оригинальных технических решений, защищенных патентным законом РФ.</p>
                </li>
            </ol>
            <h3 className={styles.subtitle}>Технические характеристики преобразователей ПН-500</h3>
            <div className="overflow-x-auto">
                <table className={styles.secondtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>ПАРАМЕТРЫ</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-100</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-150</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-200</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Питание</th>
                            <td className={styles.tableunactive}>Трехфазное</td>
                            <td className={styles.tableunactive}>Трехфазное</td>
                            <td className={styles.tableunactive}>Трехфазное</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Напряжение питания, B</th>
                            <td className={styles.tableunactive}>380±60</td>
                            <td className={styles.tableunactive}>380±60</td>
                            <td className={styles.tableunactive}>380±60</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Частота, Гц</th>
                            <td className={styles.tableunactive}>50</td>
                            <td className={styles.tableunactive}>50</td>
                            <td className={styles.tableunactive}>50</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Диапазон регулирования выходного напряжения, B</th>
                            <td className={styles.tableunactive}>10-230</td>
                            <td className={styles.tableunactive}>10-230</td>
                            <td className={styles.tableunactive}>10-230</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Время размагничивания, сек, не более</th>
                            <td className={styles.tableunactive}>3</td>
                            <td className={styles.tableunactive}>3</td>
                            <td className={styles.tableunactive}>3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Режим работы ПВ, %</th>
                            <td className={styles.tableunactive}>60, 100</td>
                            <td className={styles.tableunactive}>60, 100</td>
                            <td className={styles.tableunactive}>60, 100</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Максимально допустимый ток, ПВ-75%, А</th>
                            <td className={styles.tableunactive}><b>100</b></td>
                            <td className={styles.tableunactive}><b>150</b></td>
                            <td className={styles.tableunactive}><b>200</b></td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Максимально допустимый ток, ПВ-100%, А</th>
                            <td className={styles.tableunactive}><b>50</b></td>
                            <td className={styles.tableunactive}><b>80</b></td>
                            <td className={styles.tableunactive}><b>110</b></td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Габаритные размеры, мм, не более</th>
                            <td className={styles.tableunactive}>360х150х375</td>
                            <td className={styles.tableunactive}>360х150х375</td>
                            <td className={styles.tableunactive}>450х200х375</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Посадочные размеры, мм</th>
                            <td className={styles.tableunactive}>255х350</td>
                            <td className={styles.tableunactive}>255х350</td>
                            <td className={styles.tableunactive}>255х350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Масса, кг, не более</th>
                            <td className={styles.tableunactive}>12,2</td>
                            <td className={styles.tableunactive}>12,5</td>
                            <td className={styles.tableunactive}>15,5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}