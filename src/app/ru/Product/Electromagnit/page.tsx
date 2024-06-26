import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Электромагнит</span>
            <h1 className={styles.title}>Грузоподъемные электромагниты</h1>
            <ReadMore 
                title="М22, М42, М62, М63 — Модернизированные электромагниты с увеличенной грузоподъемностью"
                image="/Electromagnit 1.jpg"
                alt="ElectroProduct 1"
                text="Сфера применения электромагнитов М22, М42, М62, М63 — Модернизированные электромагниты с увеличенной грузоподъемностью предназначены для захвата и переноса крановыми механизмами холодного (окружающей среды) груза из ферромагнитных материалов: металлолом..."
                href="Electromagnit/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Электромагниты грузоподъемные тяжелой серии ЭМГ 165-42/А, ЭМГ 165-42/М"
                image="/Electromagnit 2.jpg"
                alt="ElectroProduct 2"
                text="Электромагниты грузоподъемные тяжелой серии предназначены для захвата и переноса крановыми механизмами холодного (окружающей среды) груза из ферромагнитных материалов: металлолом, скрап, металлическая шихта, стружка, металлопрокат, чушки..."
                href="Electromagnit/SecondPage">
            </ReadMore>
            <ReadMore 
                title="Электромагниты грузоподъемные средней серии ЭМГ 117-39/А, ЭМГ 117-39/М"
                image="/Electromagnit 3.jpg"
                alt="ElectroProduct 3"
                text="Электромагниты предназначены для захвата и переноса крановыми механизмами холодной (окружающей среды) груза из ферромагнитных материалов: металлолом, скрап, металлическая шихта, стружка, металлопрокат, чушки, слябы и т.п..."
                href="Electromagnit/ThirdPage">
            </ReadMore>
            <ReadMore 
                title="Электромагниты грузоподъемные средней серии ЭМГ 117-32/А, ЭМГ 117-32/М"
                image="/Electromagnit 4.jpg"
                alt="ElectroProduct 4"
                text="Электромагниты грузоподъемные средней серии ЭМГ 117-32/А, ЭМГ 117-32/М предназначены для захвата и переноса крановыми механизмами холодного (окружающей среды) груза из ферромагнитных материалов: металлолом, скрап, металлическая шихта..."
                href="Electromagnit/FourthPage">
            </ReadMore>
            <ReadMore 
                title="Электромагниты грузоподъемные легкой серии ЭМГ 078-30/А, ЭМГ 078-30/М"
                image="/Electromagnit 5.jpg"
                alt="ElectroProduct 5"
                text="Электромагниты предназначены для захвата и переноса крановыми механизмами холодной (окружающей среды) груза из ферромагнитных материалов: металлолом, скрап, металлическая шихта, стружка, металлопрокат, чушки, слябы и т.п..."
                href="Electromagnit/FifthPage">
            </ReadMore>
        </div>
    );
}