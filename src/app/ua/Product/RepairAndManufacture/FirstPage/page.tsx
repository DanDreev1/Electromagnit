import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Електромагніт', 'Системи керування', 'Залізовідділювачі', 'Залізовідділювачі', 'Ремонт та виготовлення запасних частин електромагнітів', 'Electromagnit', 'Вантажопідйомні електромагніти'],
    authors: [{ name: 'Сергій', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: "Ремонт вантажопідйомних електромагнітів імпортного та вітчизняного виробництва",
    description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/Product/IronSeparators/FirstPage'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: "Ремонт вантажопідйомних електромагнітів імпортного та вітчизняного виробництва",
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
        url: 'https://electromagnit.vercel.app/ua/Product/IronSeparators/FirstPage',
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
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../RepairAndManufacture">Ремонт та виготовлення</Link> {'>'} Ремонт вантажопідйомних електромагнітів</span>
            <h2 className={styles.title}>Ремонт вантажопідйомних електромагнітів імпортного та вітчизняного виробництва</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На читання: 1 хв</span>
                <span className="text-gray-600 text-sm">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Repair and manufacture 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}>Фахівці нашої компанії здійснюють <b>капітальний ремонт будь-яких видів вантажопідйомних електромагнітів як імпортного, так і вітчизняного виробництва.</b> Якість ремонту вантажопідйомних електромагнітів забезпечується ретельним контролем за кожним етапом ремонтних робіт та застосуванням нових матеріалів та технологій.</p>
            <h3 className={styles.subtitle}>Основні причини виходу з ладу вантажопідйомних електромагнітів:</h3>
            <p className={styles.text}>Основними причинами виходу з ладу вантажопідйомних електромагнітів є пробою котушки на корпус, обрив провідника та міжвиткові замикання в котушці, а також стрибки напруги при включенні. І якщо останню причину можна усунути використанням перетворювачів напруги, які обмежують перенапругу, то з такими факторами, як волога та перегрів, боротися складніше.</p>
            <p className={styles.text}>Від попадання вологи всередину електромагніту захищає маса заливки, яка герметизує котушку електромагніту всередині корпусу, а також кришка клемної коробки і гермоввод кабелю. Згодом у масі заливки можуть виникати мікротріщини, через які всередину електромагніту потрапляє волога, що, в свою чергу, може призвести до пробою котушки на корпус.</p>
            <p className={styles.text}>Ще одним фактором, що знижує термін експлуатації та веде до необхідності ремонту вантажопідйомного електромагніту, є перегрів. Перегрів веде до падіння опору електроізоляції. Експлуатація електромагніту при критичному зниженні опору ізоляції може призвести до пробою на корпус. Зберегти працездатність електромагніта можна використанням термостійких лаків і заливальних мас, збільшенням тепловідведення від котушки, ребра корпусу електромагніту з метою збільшення площі, що віддає тепло. У деяких випадках єдиною мірою залишається тимчасове відключення електромагніту при досягненні критичних температур.</p>
            <p className={styles.text}>Наше підприємство надає послуги з тестування та модернізації вантажопідіймальних електромагнітів, технічного обслуговування та виконання ремонтних робіт аж до капітального ремонту вантажопідйомних електромагнітів.</p>
            <p className={styles.text}>Якщо у вас немає електромагніту для ремонту, можемо запропонувати купити у нас електромагніт після капітального ремонту. А саме: ПМ25, М22, М42, М43, М62, М63, ЕМГ078, ЕМГ117, ЕМГ165, ПМ15, ПМ25, ЕМГ117-39/А, ЕМГ 117-39/М.Електромагніт ПМ25, електромагніт М22, електромагніт М42, електромагніт М43, електромагніт М62, електромагніт М63, електромагніт ЕМГ078, електромагніт ЕМГ117, електромагніт ЕМГ165, електромагніт ПМ15.</p>
        </section>
    );
}