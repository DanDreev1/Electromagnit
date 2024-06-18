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

    title: "ПН-500-Г",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: "ПН-500-Г",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Product/ControlSystems/SecondPage',
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
                <Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../ControlSystems">Системы управления</Link> {'>'} ПН-500-Г
            </span>
            <h2 className={styles.title}>Генераторные системы управления электромагнитами (ПН-500-Г)</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 2 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Control System 2.jpg" alt="Что-то" width={1200} height={575} priority />
            <p className={styles.text}>
                <b>ПН-500-Г – Преобразователи напряжения серии (ПН-500-Г)</b> – были специально разработаны для работы с генераторами, установленными на передвижных кранах и экскаваторах при отсутствии стационарной сети. Предназначены для <b>питания и управления грузоподъемными электромагнитами</b> постоянного тока любой мощности и для совместной работы с генераторами 220 или 380 В.
            </p>
            <p className={styles.text}>
                Применяемые типы электромагнитов: <b>ЕМГ078, ЕМГ117, ЕМГ-140, ЕМГ165, ЕМГ-200, ЕМГ-230, ЕМГ110, ЕМГ170, М22, М42, М43, М62, М63, М67, ПМ15, ПМ25, WALKER, FELEMANG, WOKO и другие</b>
            </p>
            <h3 className={styles.subtitle}>Основные виды защиты электромагнита</h3>
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
                    <p>Сигнализация о появлении коротких межвитковых замыканий в эл.магнити залізовідділювача.</p>
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
                    <p><b>Увеличение срока службы залізовідділювача</b> за счет быстродействующих электронных защит и сигнализации аварийных ситуаций в процессе работы.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Возможность работы с генераторами 220 или 380 В в зависимости от установленного генератора.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Плавное регулирование напряжения электромагнита, возможность сепарации перемещаемых грузов.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Повышается производительность за счет увеличения скорости нарастания и снижения тока в электромагните.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Максимально допустимый ударный ток 4500 А, что гарантирует надежную работу системы при КЗ.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Алфавитно-цифровая индикация текущих параметров, режимов работы и аварийных сообщений.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Звуковая сигнализация аварийных ситуаций.</p>
                </li>
                <li className={styles.ollist}>
                    <span>8</span>
                    <p>Подключение к стандартному пульту управления крана, дополнительный выход для подключения регулятора напряжения сельсину.</p>
                </li>
                <li className={styles.ollist}>
                    <span>9</span>
                    <p>Малогабаритные показатели позволяют устанавливать <b>преобразователи серии ПН-500-Г</b> непосредственно в кабине крана в удобном для оператора месте.</p>
                </li>
                <li className={styles.ollist}>
                    <span>10</span>
                    <p>Высокая надежность, достигаемая за счет новой элементной базы и оригинальных технических решений, защищенных патентным законом РФ.</p>
                </li>
            </ol>
            <div className="overflow-x-auto">
                <table className={styles.secondtable}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>ПАРАМЕТРЫ</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-Г-50</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-Г-100</th>
                            <th className={styles.tableActiveSubmain}>ПН-500-Г-150</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>Напряжение питания, B</th>
                            <td className={styles.tableunactive}>220 или 380</td>
                            <td className={styles.tableunactive}>220 или 380</td>
                            <td className={styles.tableunactive}>220 или 380</td>
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
                            <th className={styles.tableActiveMain}>Максимально допустимый ток, ПВ-75%, А</th>
                            <td className={styles.tableunactive}>50</td>
                            <td className={styles.tableunactive}>100</td>
                            <td className={styles.tableunactive}>150</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Габаритные размеры, мм, не более</th>
                            <td className={styles.tableunactive}>360х150х375</td>
                            <td className={styles.tableunactive}>360х150х375</td>
                            <td className={styles.tableunactive}>360х150х375</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Посадочные размеры, мм</th>
                            <td className={styles.tableunactive}>255х350</td>
                            <td className={styles.tableunactive}>255х350</td>
                            <td className={styles.tableunactive}>255х350</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Масса, кг, не более</th>
                            <td className={styles.tableunactive}>12,0</td>
                            <td className={styles.tableunactive}>12,2</td>
                            <td className={styles.tableunactive}>12,5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>Рекомендованная мощность генератора, кВт</th>
                            <td className={styles.tableunactive}>10-15</td>
                            <td className={styles.tableunactive}>20-25</td>
                            <td className={styles.tableunactive}>30-40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span className={styles.exclamacion}>ВНИМАНИЕ! ПРИ ВЫБОРЕ ПИТАНИЯ ГЕНЕРАТОРА УЧИТЫВАЙТЕ МОЩНОСТЬ ДРУГИХ ПОТРЕБИТЕЛЕЙ ЭНЕРГИИ!</span>
        </section>
    );
}