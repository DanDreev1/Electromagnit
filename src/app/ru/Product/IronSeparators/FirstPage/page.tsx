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

    title: "ЕМЖС",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: "ЕМЖС",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Product/IronSeparators/FirstPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../IronSeparators">Железоотделители</Link> {'>'} ЭМЖС</span>
            <h2 className={styles.title}>Железоотделители электромагнитные саморазгрузочные (ЭМЖС)</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 1 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Iron Separators 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h3 className={styles.subtitle}>Сфера использования</h3>
            <p className={styles.text}><b>Железоотделители электромагнитные саморазгрузочные ЭМЖС</b> предназначены для извлечения и автоматического удаления ферромагнитных примесей и ферромагнитных предметов из сыпучих материалов, транспортируемых ленточными конвейерами шириной ленты от 600 до 1600 мм. Извлеченные ферромагнитные предметы удаляются ленточным транспортером за пределы конвейера накопителя.</p>
            <p className={styles.text}>Принципиально новая конструкция данных <b>железоотделителей</b> позволяет добиться высоких показателей глубины оповещения без дополнительного увеличения мощности за счет оригинального распределения магнитных потоков. Также таким <b>железоотделителям</b> не страшен перегрев и не требуется дополнительное охлаждение обмотки.</p>
            <h3 className={styles.subtitle}>Технические данные саморазгружающихся железоотделителей:</h3>
            <div className="overflow-x-auto">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableActiveMain}>Наименование</th>
                            <th className={styles.tableActiveSubmain}>Габариты, мм</th>
                            <th className={styles.tableActiveSubmain}>Напряжение питания, B</th>
                            <th className={styles.tableActiveSubmain}>Номинальный ток обмотки при 20 С,А</th>
                            <th className={styles.tableActiveSubmain}>Мощность при установленной температуре, кВт</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 080</th>
                            <td className={styles.tableunactive}>1900х1420х350</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>19</td>
                            <td className={styles.tableunactive}>2,8</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 100</th>
                            <td className={styles.tableunactive}>2140х1420х350</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>22</td>
                            <td className={styles.tableunactive}>3,3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 120</th>
                            <td className={styles.tableunactive}>2320х1420х350</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>22</td>
                            <td className={styles.tableunactive}>3,3</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 140</th>
                            <td className={styles.tableunactive}>2520х1420х440</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>4,5</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 160</th>
                            <td className={styles.tableunactive}>2760х1420х440</td>
                            <td className={styles.tableunactive}>220/~380</td>
                            <td className={styles.tableunactive}>30</td>
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
                            <th className={styles.tableActiveMain}>ЭМЖС 080</th>
                            <td className={styles.tableunactive}>600-800</td>
                            <td className={styles.tableunactive}>15</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1100</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 100</th>
                            <td className={styles.tableunactive}>1000</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1500</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 120</th>
                            <td className={styles.tableunactive}>1200</td>
                            <td className={styles.tableunactive}>30</td>
                            <td className={styles.tableunactive}>400</td>
                            <td className={styles.tableunactive}>1680</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 140</th>
                            <td className={styles.tableunactive}>1400</td>
                            <td className={styles.tableunactive}>35</td>
                            <td className={styles.tableunactive}>450</td>
                            <td className={styles.tableunactive}>2150</td>
                        </tr>
                        <tr>
                            <th className={styles.tableActiveMain}>ЭМЖС 160</th>
                            <td className={styles.tableunactive}>1600</td>
                            <td className={styles.tableunactive}>35</td>
                            <td className={styles.tableunactive}>450</td>
                            <td className={styles.tableunactive}>2700</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}