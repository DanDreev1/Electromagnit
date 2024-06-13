import ReadMore from "@/app/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Електромагніт</span>
            <h2 className={styles.title}>Вантажопідйомні електромагніти</h2>
            <ReadMore 
                title="М22, М42, М62, М63 — Модернизированные электромагниты с увеличенной грузоподъемностью"
                image="/Electromagnit 1.jpg"
                alt="ElectroProduct 1"
                text="Сфера застосування електромагнітів М22, М42, М62, М63 — Модернізовані електромагніти зі збільшеною вантажопідйомністю призначені для захоплення та перенесення крановими механізмами холодного (довкілля) вантажу з феромагнітних матеріалів: металобрухт..."
                href="Electromagnit/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Електромагніти вантажопідйомні важкої серії ЕМГ 165-42/А, ЕМГ 165-42/М"
                image="/Electromagnit 2.jpg"
                alt="ElectroProduct 2"
                text="Сфера применения электромагнитов Электромагниты грузоподъемные тяжелой серии предназначены для захвата и переноса крановыми механизмами холодного (окружающей среды) груза из ферромагнитных материалов: металлолом, скрап, металлическая шихта, стружка, металлопрокат, чушки..."
                href="Electromagnit/SecondPage">
            </ReadMore>
            <ReadMore 
                title="Електромагніти вантажопідйомні середньої серії ЕМГ 117-39/А, ЕМГ 117-39/М"
                image="/Electromagnit 3.jpg"
                alt="ElectroProduct 3"
                text="Сфера застосування Електромагніти призначені для захоплення та перенесення крановими механізмами холодного (навколишнього середовища) вантажу з феромагнітних матеріалів: металобрухт, скрап, металева шихта, стружка, металопрокат, чушки, сляби тощо..."
                href="Electromagnit/ThirdPage">
            </ReadMore>
            <ReadMore 
                title="Електромагніти вантажопідйомні середньої серії ЕМГ 117-32/А, ЕМГ 117-32/М"
                image="/Electromagnit 4.jpg"
                alt="ElectroProduct 4"
                text="Сфера применения Электромагниты грузоподъемные средней серии ЭМГ 117-32/А, ЭМГ 117-32/М предназначены для захвата и переноса крановыми механизмами холодного (окружающей среды) груза из ферромагнитных материалов: металлолом, скрап, металлическая шихта..."
                href="Electromagnit/FourthPage">
            </ReadMore>
            <ReadMore 
                title="Електромагніти вантажопідйомні легкої серії ЕМГ 078-30/А, ЕМГ 078-30/М"
                image="/Electromagnit 5.jpg"
                alt="ElectroProduct 5"
                text="Сфера застосування електромагнітів Електромагніти призначені для захоплення та перенесення крановими механізмами холодного (навколишнього середовища) вантажу з феромагнітних матеріалів: металобрухт, скрап, металева шихта, стружка, металопрокат, чушки, сляби тощо..."
                href="Electromagnit/FifthPage">
            </ReadMore>
        </div>
    );
}