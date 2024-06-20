import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Системы управления</span>
            <h1 className={styles.title}>Системы управления</h>
            <ReadMore 
                title="Система управления залізовідділювачем ПН-500-Ж"
                image="/Control System 1.jpg"
                alt="Contorl System Product 1"
                text="Преобразователь напряжения серии ПН-500-Ж предназначен для питания и управления залізовідділювачем, ток которого не превышает допустимых значений. Применяемые типы залізовідділювачів: ЭМЖ065, ЭМЖ080, ЭМЖ100, ЭМЖ120, ЭМЖ140, ЭМЖ160, ЭМЖС080..."
                href="ControlSystems/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Генераторные системы управления электромагнитами (ПН-500-Г)"
                image="/Control System 2.jpg"
                alt="Contorl System Product 2"
                text="ПН-500-Г – Преобразователи напряжения серии ПН-500-Г – были специально разработаны для работы с генераторами, устанавливаемыми на подвижных кранах и экскаваторах при отсутствии стационарной сети. Предназначены для питания и..."
                href="ControlSystems/SecondPage">
            </ReadMore>
            <ReadMore 
                title="Преобразователь напряжения ПН-500"
                image="/Product2.jpg"
                alt="Contorl System Product 3"
                text="Преобразователи напряжения ПН-500 предназначены для питания и управления грузоподъемными электромагнитами постоянного тока любой мощности и одновременного питания нескольких электромагнитов, суммарный ток которых не превышает допустимых значений. Преобразователь..."
                href="ControlSystems/ThirdPage">
            </ReadMore>
        </div>
    );
}