import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Железоотделители</span>
            <h1 className={styles.title}>Железоотделители</h1>
            <ReadMore 
                title="Железоотделители электромагнитные саморазгрузочные (ЭМЖС)"
                image="/Iron Separators 1.jpg"
                alt="Iron Separators Product 1"
                text="Железоотделители электромагнитные саморазгрузочные ЭМЖС предназначены для извлечения и автоматического удаления ферромагнитных примесей и ферромагнитных предметов из сыпучих материалов, транспортируемых ленточными конвейерами с шириной ленты от 600 мм..."
                href="IronSeparators/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Железоотделители электромагнитные подвесные (ЭМП)"
                image="/Iron Separators 2.jpg"
                alt="Iron Separators Product 2"
                text="ЭМЖ — Железоотделители подвесные электромагнитные предназначены для извлечения ферромагнитных примесей и ферромагнитных предметов из сыпучих материалов, транспортируемых ленточными конвейерами с шириной ленты от 600 мм..."
                href="IronSeparators/SecondPage">
            </ReadMore>
        </div>
    );
}