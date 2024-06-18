import ReadMore from "@/app/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Залізовідділювачі</span>
            <h2 className={styles.title}>Залізовідділювачі</h2>
            <ReadMore 
                title="Залізовідділювачі електромагнітні саморозвантажувальні (ЕМЖС)"
                image="/Iron Separators 1.jpg"
                alt="Iron Separators Product 1"
                text="Залізовідділювачі електромагнітні саморозвантажувальні ЕМЖС призначені для вилучення та автоматичного видалення феромагнітних домішок та феромагнітних предметів із сипучих матеріалів, що транспортуються стрічковими конвеєрами з шириною стрічки від 600 мм..."
                href="IronSeparators/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Залізовідділювачі електромагнітні підвісні (ЕМП)"
                image="/Iron Separators 2.jpg"
                alt="Iron Separators Product 2"
                text="ЕМЖ — Залізовідділювачі електромагнітні підвісні призначені для вилучення феромагнітних домішок та феромагнітних предметів із сипучих матеріалів, що транспортуються стрічковими конвеєрами із шириною стрічки від 600 мм..."
                href="IronSeparators/SecondPage">
            </ReadMore>
        </div>
    );
}