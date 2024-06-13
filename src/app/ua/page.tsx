import { Metadata } from "next"
import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Головна - Electromagnit"
};

export default async function Home() {

    return (
        <div>
            <section className={styles.gradient}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Вантажопідйомні<br /><span className={styles.color}>електро</span>магніти</h1>
                    <div className={styles.flex}>
                        <div className={styles.box}>
                            <h2>Ми раді вітати Вас на сайті нашого підприємства!</h2>
                            <p>Electromagnit - це розробка вантажних електромагнітів, що охоплює ринки СНД і Європи.</p>
                            <Link className={styles.button} href="../ua/Contacts">Зв'яжіться з нами</Link>
                        </div>
                        <Image className={styles.image} src='/HeroImg.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.subtitle}>Працюючи з нами ви отримуєте</h2>
                    <ul className={styles.boxList}>
                        <li>Кожен вантажопідйомний електромагніт може бути оперативно виготовлений як у литому, так і зварному виконанні і укомплектований спеціальною системою управління.</li>
                        <li>Кожен вантажопідйомний електромагніт може бути оперативно виготовлений як у литому, так і зварному виконанні і укомплектований спеціальною системою управління.</li>
                        <li>Кожен вантажопідйомний електромагніт може бути оперативно виготовлений як у литому, так і зварному виконанні і укомплектований спеціальною системою управління.</li>
                    </ul>
                    <h2 className={styles.subtitle}>Пропозиція компанії</h2>
                </div>
            </section>
            <section className={styles.offer}>
                <div className={styles.container}>
                    <ul className={styles.offerFlex}>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/electromagnet.jpg' alt="Electromagnet image" width={275} height={205}></Image>
                                <h3>Електромагніти</h3>
                                <p>Постачання вантажопідйомних електромагнітів різної конфігурації</p>
                                <Link className={styles.learn} href="../../../ua/Product/Electromagnit">Щоб дізнатися більше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>  
                                <Image src='/control-system.jpg' alt="Control System image" width={275} height={205}></Image>
                                <h3>Системи керування</h3>
                                <p>Системи керування електромагнітами: генераторні, на базі перетворювачів ПН-500</p>
                                <Link className={styles.learn} href="../../../ua/Product/ControlSystems">Щоб дізнатися більше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Iron-separators.jpg' alt="Iron Separators image" width={275} height={205}></Image>
                                <h3>Залізовідділювачі</h3>
                                <p>Залізовідділювачі магнітні різних серій з детальними характеристиками та детальним описом.</p>
                                <Link className={styles.learn} href="../../../ua/Product/IronSeparators">Щоб дізнатися більше</Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.boxContainer}>
                                <Image src='/Repair.jpg' alt="Repair And Production image" width={275} height={205}></Image>
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
                            <h3>Ви вже зацікавлені?</h3>
                            <p className={styles.boxParagraph}>Ми готові обробити ваше замовлення сьогодні</p>
                        </div>
                        <div className={styles.box}>
                            <h3>Зв'яжіться з нами і ми виготовимо для вас деталь на замовлення</h3>
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
                                <Image src="/Person1.png" alt="First client" width={125} height={125}></Image>
                                <span>Олексій Бєлов</span>
                            </div>
                        </li>
                        <li>
                            <h3>Головний інженер автомобільного заводу</h3>
                            <p>'Ми придбали вантажопідйомний електромагніт серії EMG-117-32/A для нашого заводу, і я повинен сказати, що це перевершило наші очікування. Цей електромагніт забезпечує надійний підйомний пристрій для важких заготовок. Дякуємо за високоякісний продукт та відмінне обслуговування!'</p>
                            <div className={styles.boxFlex}>
                            <Image src="/Person2.png" alt="Second client" width={125} height={125}></Image>
                                <span>Денис Смирнов</span>
                            </div>
                        </li>
                        <li>
                            <h3>Відгук директора компанії 'МЕТАЛОПРОМ'</h3>
                            <p>'Ми придбали вантажопідйомний електромагніт серії EMG-117-32/A для нашого заводу, і я повинен сказати, що це перевершило наші очікування. Цей електромагніт забезпечує надійний підйомний пристрій для важких заготовок. Дякуємо за високоякісний продукт та відмінне обслуговування!'</p>
                            <div className={styles.boxFlex}>
                                <Image src="/Person3.png" alt="Third client" width={125} height={125}></Image>
                                <span>Андрій Кузнєцов</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div> 
    )
}