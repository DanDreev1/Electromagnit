import { Metadata } from "next"
import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link"
import { montserrat_alternate } from "@/app/utils/fonts";

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

    title: 'Главная',
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: 'Главная',
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Main',
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

export default async function Home() {

    return (
        <div>
            <section className={styles.gradient}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Грузоподъемные<br /><span className={styles.color}>электро</span>магниты</h1>
                    <div className={styles.flex}>
                        <div className={styles.box}>
                            <h2 className={`${montserrat_alternate}`}>Мы рады приветствовать вас на сайте нашего предприятия!</h2>
                            <p>Electromagnit занимается разработкой грузоподъемных электромагнитов и активно работает на рынках СНГ и Европы.</p>
                            <Link className={styles.button} href="../ua/Contacts">Свяжитесь с нами</Link>
                        </div>
                        <Image className={styles.image} src='/HeroImg.jpg' alt='электромагниты для листовой стали' width={500} height={200} priority></Image>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.subtitle}>Работая с нами, вы получаете</h2>
                    <ul className={styles.boxList}>
                        <li>Каждый грузоподъемный электромагнит может быть оперативно изготовлен как в литом, так и сварном исполнении и оснащен специальной системой управления.</li>
                        <li>Мы предоставляем полную информацию по всем этапам работы и затратам, предоставляя вам возможность полного контроля над процессом и принятия обоснованных решений.</li>
                        <li>Мы всегда на связи, готовы оперативно отвечать на все ваши вопросы и предоставлять необходимую поддержку. Наши специалисты обеспечивают непрерывный обмен информацией и регулярно информируют вас о ходе выполнения заказа.</li>
                    </ul>
                    <h2 className={styles.subtitle}>Предложение компании</h2>
                </div>
            </section>
            <section className={styles.offer}>
                <div className={styles.container}>
                    <ul className={styles.offerFlex}>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/electromagnet.jpg' alt="Изображение электромагнита" width={275} height={205} loading="eager"></Image>
                                <h3>Электромагниты</h3>
                                <p>Поставка грузоподъемных электромагнитов различной конфигурации</p>
                                <Link className={styles.learn} href="../../../ua/Product/Electromagnit">Узнать больше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>  
                                <Image src='/control-system.jpg' alt="Изображение системы управления" width={275} height={205} loading="eager"></Image>
                                <h3>Системы управления</h3>
                                <p>Системы управления электромагнитами: генераторные, на основе преобразователей ПН-500</p>
                                <Link className={styles.learn} href="../../../ua/Product/ControlSystems">Узнать больше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Iron-separators.jpg' alt="Изображение железоотделителей" width={275} height={205} loading="eager"></Image>
                                <h3>Железоотделители</h3>
                                <p>Магнитные железоотделители разных серий с подробными характеристиками и описанием</p>
                                <Link className={styles.learn} href="../../../ua/Product/IronSeparators">Узнать больше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Repair.jpg' alt="Изображение ремонта и производства" width={275} height={205} loading="eager"></Image>
                                <h3>Ремонт и изготовление</h3>
                                <p>Сервисное обслуживание электромагнитов и их комплектующих. Изготовим по заказу шестерни и т.д.</p>
                                <Link className={styles.learn} href="../../../ua/Product/RepairAndManufacture">Узнать больше</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.gradient}>
                <div className={styles.container}>
                    <div className={styles.gradientFlex}>
                        <div className={styles.gradientBox}>
                            <h3 className={`${montserrat_alternate}`}>Вы уже заинтересованы?</h3>
                            <p className={styles.boxParagraph}>Мы готовы обработать ваш заказ сегодня</p>
                        </div>
                        <div className={styles.box}>
                            <h3 className={`${montserrat_alternate}`}>Свяжитесь с нами и мы изготовим для вас деталь на заказ</h3>
                            <Link className={styles.button} href="../ua/Contacts">Свяжитесь с нами</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.subtitle}>Отзывы наших клиентов</h2>
                    <span className={styles.experience}>Что говорят о нашем продукте те, кто уже его испытал?</span>
                    <ul className={styles.experienceFlex}>
                        <li>
                            <h3>Отзыв директора производственной компании</h3>
                            <p>'Мы приобрели грузоподъемный электромагнит серии EMG-117-32/A для нашего завода, и я должен сказать, что это превзошло наши ожидания. Этот электромагнит обеспечивает надежный грузоподъемный механизм для тяжелых заготовок. Спасибо за высококачественный продукт и отличное обслуживание!'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person1.png" alt="Первый клиент" width={125} height={125} loading="eager"></Image>
                                <span>Алексей Белов</span>
                            </div>
                        </li>
                        <li>
                            <h3>Главный инженер автомобильного завода</h3>
                            <p>'Мы приобрели железоотделители электромагнитные саморазгрузочные для нашего автомобильного завода, и я должен отметить, что они значительно превзошли наши ожидания. Эти устройства обеспечивают эффективное и надежное отделение желаемых материалов, что значительно повысило качество нашей продукции.'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person2.png" alt="Второй клиент" width={125} height={125} loading="eager"></Image>
                                <span>Денис Смирнов</span>
                            </div>
                        </li>
                        <li>
                            <h3>Отзыв директора компании 'МЕТАЛОПРОМ'</h3>
                            <p>'Мы приобрели систему управления железоотделителем ПН-500-Ж для нашего производства, и я хочу выразить свою полную удовлетворенность этим оборудованием. Система оказалась чрезвычайно эффективной и надежной, позволяя нам оптимизировать процесс отделения металлических материалов и повысить общую производительность нашего завода.'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person3.png" alt="Третий клиент" width={125} height={125} loading="eager"></Image>
                                <span>Андрей Кузнецов</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div> 
    )
}