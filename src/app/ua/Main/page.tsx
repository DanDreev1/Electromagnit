import { Metadata } from "next"
import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link"
import { montserrat_alternate } from "@/app/utils/fonts";

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

    title: 'Головна',
    description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua/Main'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: 'Головна',
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
        url: 'https://electromagnit.vercel.app/ua/Main',
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

export default async function Home() {

    return (
        <div>
            <section className={styles.gradient}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Вантажопідйомні<br /><span className={styles.color}>електро</span>магніти</h1>
                    <div className={styles.flex}>
                        <div className={styles.box}>
                            <h2 className={`${montserrat_alternate}`}>Ми раді вітати Вас на сайті нашого підприємства!</h2>
                            <p>Electromagnit - це розробка вантажних електромагнітів, що охоплює ринки СНГ і Європи.</p>
                            <Link className={styles.button} href="../ua/Contacts">Зв'яжіться з нами</Link>
                        </div>
                        <Image className={styles.image} src='/HeroImg.jpg' alt='electromagnets for sheet steel' width={500} height={200} priority></Image>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.subtitle}>Працюючи з нами ви отримуєте</h2>
                    <ul className={styles.boxList}>
                        <li>Кожен вантажопідйомний електромагніт може бути оперативно виготовлений як у литому, так і зварному виконанні і укомплектований спеціальною системою управління.</li>
                        <li>Ми надаємо повну інформацію про всі етапи роботи та витрати, забезпечуючи вам можливість повного контролю над процесом та ухвалення обґрунтованих рішень.</li>
                        <li>Ми завжди на зв'язку, готові оперативно відповісти на всі ваші запитання та надати необхідну підтримку. Наші фахівці забезпечують безперервний обмін інформацією та регулярно інформують вас про хід виконання замовлення.</li>
                    </ul>
                    <h2 className={styles.subtitle}>Пропозиція компанії</h2>
                </div>
            </section>
            <section className={styles.offer}>
                <div className={styles.container}>
                    <ul className={styles.offerFlex}>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/electromagnet.jpg' alt="Electromagnet image" width={275} height={205} loading="eager"></Image>
                                <h3>Електромагніти</h3>
                                <p>Постачання вантажопідйомних електромагнітів різної конфігурації</p>
                                <Link className={styles.learn} href="../../../ua/Product/Electromagnit">Щоб дізнатися більше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>  
                                <Image src='/control-system.jpg' alt="Control System image" width={275} height={205} loading="eager"></Image>
                                <h3>Системи керування</h3>
                                <p>Системи керування електромагнітами: генераторні, на базі перетворювачів ПН-500</p>
                                <Link className={styles.learn} href="../../../ua/Product/ControlSystems">Щоб дізнатися більше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Iron-separators.jpg' alt="Iron Separators image" width={275} height={205} loading="eager"></Image>
                                <h3>Залізовідділювачі</h3>
                                <p>Залізовідділювачі магнітні різних серій з детальними характеристиками та детальним описом.</p>
                                <Link className={styles.learn} href="../../../ua/Product/IronSeparators">Щоб дізнатися більше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Repair.jpg' alt="Repair And Production image" width={275} height={205} loading="eager"></Image>
                                <h3>Ремонт та виготовлення</h3>
                                <p>Сервісне обслуговування електромагнітів та їх запчастин. Виготовимо на замовлення шестірні і т.д.</p>
                                <Link className={styles.learn} href="../../../ua/Product/RepairAndManufacture">Щоб дізнатися більше</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.gradient}>
                <div className={styles.container}>
                    <div className={styles.gradientFlex}>
                        <div className={styles.gradientBox}>
                            <h3 className={`${montserrat_alternate}`}>Ви вже зацікавлені?</h3>
                            <p className={styles.boxParagraph}>Ми готові обробити ваше замовлення сьогодні</p>
                        </div>
                        <div className={styles.box}>
                            <h3 className={`${montserrat_alternate}`}>Зв'яжіться з нами і ми виготовимо для вас деталь на замовлення</h3>
                            <Link className={styles.button} href="../ua/Contacts">Зв'яжіться з нами</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.subtitle}>Відгуки наших клієнтів</h2>
                    <span className={styles.experience}>Що говорять про наш продукт ті, хто вже його випробував?</span>
                    <ul className={styles.experienceFlex}>
                        <li>
                            <h3>Відгук директора виробничої компанії</h3>
                            <p>'Ми придбали вантажопідйомний електромагніт серії EMG-117-32/A для нашого заводу, і я повинен сказати, що це перевершило наші очікування. Цей електромагніт забезпечує надійний підйомний пристрій для важких заготовок. Дякуємо за високоякісний продукт та відмінне обслуговування!'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person1.png" alt="First client" width={125} height={125} loading="eager"></Image>
                                <span>Олексій Бєлов</span>
                            </div>
                        </li>
                        <li>
                            <h3>Головний інженер автомобільного заводу</h3>
                            <p>'Ми придбали залізовідділювачі електромагнітні саморозвантажувальні для нашого автомобільного заводу, і я повинен зазначити, що вони значно перевершили наші очікування. Ці пристрої забезпечують ефективне та надійне відділення бажаних матеріалів, що значно підвищило якість нашої продукції.'</p>
                            <div className={styles.boxFlex}>
                            <Image src="/Person2.png" alt="Second client" width={125} height={125} loading="eager"></Image>
                                <span>Денис Смирнов</span>
                            </div>
                        </li>
                        <li>
                            <h3>Відгук директора компанії 'МЕТАЛОПРОМ'</h3>
                            <p>'Ми придбали систему керування залізовідділювачем ПН-500-Ж для нашого виробництва, і я хочу висловити свою повну задоволеність щодо цього обладнання. Система виявилася надзвичайно ефективною та надійною, дозволяючи нам оптимізувати процес відділення металевих матеріалів і підвищити загальну продуктивність нашого заводу.'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person3.png" alt="Third client" width={125} height={125} loading="eager"></Image>
                                <span>Андрій Кузнєцов</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div> 
    )
}