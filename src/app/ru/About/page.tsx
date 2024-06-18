import Image from "next/image";
import style from "./styles.module.scss"
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

    title: 'Про нас',
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/About'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: 'Про нас',
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ua/About',
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

export default async function About() {

    return (
        <div className={style.container}>
            <h1 className={style.title}>О нас</h1>
            <div className={style.box}>
                <Image className={style.image} src='/about.svg' alt='электромагниты для листовой стали' width={100} height={100}></Image>
                <div>
                    <h2 className={style.subtitle}>"Горечь плохого качества ощущается даже тогда, когда наслаждение низкой цены уже давно забыто"</h2>
                    <p className={style.text}>"Electromagnit" - это компания, специализирующаяся на производстве и обслуживании грузоподъемных электромагнитов, систем управления, железоотделителей, а также предоставлении услуг по ремонту и изготовлению запасных частей для электромагнитов.</p>
                </div>
            </div>
            <div className={style.textBox}>
                <p className={style.textList}><b>Наша миссия</b>: обеспечить наших клиентов надежными и инновационными решениями в области электромагнитных технологий, которые помогут им повысить эффективность производства и обеспечить безопасность работы оборудования. Мы гордимся своим профессионализмом, высоким качеством продукции и отличным обслуживанием, и стремимся к постоянному развитию и совершенствованию, чтобы оставаться лидером на рынке. С нами вы получаете не просто продукцию и услуги - вы получаете партнера, на которого можно положиться в любой ситуации.</p>
                <p className={style.textList}><b>Наши клиенты</b>: мы изготавливаем различные детали и комплектующие для всех отраслей промышленности. Наши изделия успешно работают на десятках предприятий пищевой, металлургической, машиностроительной, химической, строительной и других отраслей промышленности.</p>
                <p className={style.textList}><b>Наши возможности</b>: принимаем заказы на изготовление деталей по чертежам (эскизам) или образцам, а также на изготовление нестандартного и уникального оборудования (к вашим услугам: станки ЧПУ, токарно-фрезерные цеха, термопластавтоматы (ТПА) для литья деталей с использованием пресс-форм, Шприц-прессы, ротационное формование, вакуумное формование, услуги конструктора и т.д.).</p>
            </div>
            <h3 className={style.about}>Основные направления нашей деятельности:</h3>
            <ol className={style.menu}>
                <li className={style.list}>
                    <span>1</span>
                    <p>Изготавливаем детали по чертежам (эскизам) или образцам заказчика, с указанием необходимого технического задания, характеристик и т.д. из различных европейских (Италия, Англия, Германия и др.) пластиков (полиамид (капролон) PA-6 и др.; полиацеталь (полиоксиметилен) (POM); полиэтилен PE-500, PE-1000; полипропилен (PP); фторопласт (100% первичка) и др.;</p>
                </li>
                <li className={style.list}>
                    <span>2</span>
                    <p>Изготовление резинотехнических изделий (РТИ) (каучук) по чертежам (эскизам) или образцам заказчика, с указанием необходимого технического задания, характеристик и т.д.; поставка различных пластиков в листах и в стержнях;</p>
                </li>
                <li className={style.list}>
                    <span>3</span>
                    <p>Поставка и ремонт грузоподъемного (электромагниты М22, М42, М62 и др.), нестандартного и вспомогательного оборудования и систем управления к ним;</p>
                </li>
            </ol>
        </div>
    );
}