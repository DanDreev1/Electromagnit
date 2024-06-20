import Link from "next/link";
import Image from "next/image";
import style from "./styles.module.scss"

export default function Product() {
    return (
        <div className={style.container}>
            <h1 className={style.product}>У нас є можливості та сили, щоб здивувати вас нашою продукцією. Ви маєте можливість подивитися на кожну з них</h1>
            <ul className={style.menu}>
                <li className={style.list}>
                    <Link href="Product/Electromagnit" className={style.link}>
                        <Image className={style.image} src='/Product1.jpg' alt='electromagnets for sheet steel' width={500} height={300} priority></Image>
                        <div className={style.info}>
                            <h3>Електромагніти</h3>
                            <p>Електромагніти – потужні інструменти для вашого бізнесу! Створюючи магнітне поле при подачі електричного струму, вони забезпечують ефективне піднесення та переміщення вантажів, що робить вашу роботу швидкою та безпечною. З їхньою допомогою ви можете оптимізувати виробничі процеси, збільшити продуктивність і знизити витрати. Надійні, гнучкі та керовані – електромагніти відкривають нові можливості для вашого бізнесу.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                    <Link href="Product/ControlSystems" className={style.link}>
                        <Image className={style.image} src='/Product2.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                        <div className={style.info}>
                            <h3>Системи управління</h3>
                            <p>Керуйте своїм бізнесом на новому рівні з нашими передовими системами керування! Наші рішення надають повний контроль над вашим виробництвом, допомагаючи оптимізувати процеси і збільшувати продуктивність. З нашими системами ви зможете легко та безпечно керувати вашим обладнанням, що забезпечить вам надійність та стабільність у роботі.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                    <Link href="Product/IronSeparators" className={style.link}>
                        <Image className={style.image} src='/Product3.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                        <div className={style.info}>
                            <h3>Залізовідділювачі</h3>
                            <p>Дозвольте нам представити вам наші залізовідділювачі – надійних захисників вашого виробництва! З нашими передовими технологіями ви зможете ефективно видаляти металеві домішки із сировини, забезпечуючи безпеку та якість вашої продукції. Наша продукція гарантує надійну роботу, мінімізуючи ризик поломок та збоїв. Не пропустіть можливість підвищити ефективність вашого виробництва та забезпечити бездоганну якість продукції.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                        <Link href="Product/RepairAndManufacture" className={style.link}>
                            <Image className={style.image} src='/Product4.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                            <div className={style.info}>
                                <h3>Ремонт та виготовлення</h3>
                                <p>Впевнені у надійності вашого бізнесу, ми пропонуємо вам наш сервіс з ремонту та виготовлення запасних частин для електромагнітів. Наші фахівці готові оперативно відновити працездатність обладнання, а також виготовити необхідні деталі за вашими вимогами. Ми цінуємо ваш час та бізнес, тому гарантуємо високу якість послуг та конкурентоспроможні ціни.</p>
                            </div>
                        </Link>
                </li>
            </ul>
        </div>
    );
}