import ReadMore from "@/app/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Системи керування</span>
            <h2 className={styles.title}>Системи керування</h2>
            <ReadMore 
                title="Система керування залізовідділювачем ПН-500-Ж"
                image="/Control System 1.jpg"
                alt="Contorl System Product 1"
                text="Перетворювач напруги серії (ПН-500-Ж) - призначений для живлення та керування залізовідділювачем, струм якого не перевищує допустимих значень. Прикладні типи залізовідділювачів, що живляться: ЭМЖ065, ЭМЖ080, ЭМЖ100, ЭМЖ120, ЭМЖ140, ЭМЖ160, ЭМЖС080..."
                href="ControlSystems/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Генераторні системи керування електромагнітами (ПН-500-Г)"
                image="/Control System 2.jpg"
                alt="Contorl System Product 2"
                text="ПН-500-Г – Перетворювачі напруги серії (ПН-500-Г) – були спеціально розроблені для роботи з генераторами, що встановлюються на пересувних кранах та екскаваторах за відсутності стаціонарної мережі. Призначені для харчування та..."
                href="ControlSystems/SecondPage">
            </ReadMore>
            <ReadMore 
                title="Перетворювач напруги ПН-500"
                image="/Product2.jpg"
                alt="Contorl System Product 3"
                text="Перетворювачі напруги ПН-500 призначені для живлення та управління вантажопідйомних електромагнітів постійного струму будь-якої потужності та одночасного живлення кількох електромагнітів, сумарний струм яких не перевищує допустимих значень. Перетворювач..."
                href="ControlSystems/ThirdPage">
            </ReadMore>
        </div>
    );
}