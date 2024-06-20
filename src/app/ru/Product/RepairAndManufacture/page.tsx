import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Ремонт и изготовление</span>
            <h1 className={styles.title}>Ремонт и изготовление запасных частей электромагнитов</h>
            <ReadMore 
                title="Ремонт грузоподъемных электромагнитов импортного и отечественного производства"
                image="/Repair and manufacture 1.jpg"
                alt="Repair And Manufacture Product 1"
                text="Специалисты нашей компании производят капитальный ремонт любых видов грузоподъемных электромагнитов как импортного, так и отечественного производства. Качество ремонта грузоподъемных электромагнитов обеспечивается тщательным контролем за каждым этапом ремонтных работ..."
                href="RepairAndManufacture/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Ремонт электромагнитов"
                image="/Repair and manufacture 2.jpg"
                alt="Repair And Manufacture Product 2"
                text="Наша компания производит ремонт электромагнитов разной мощности. Ремонт электромагнитов может включать следующие виды работ: Ремонт катушки возбуждения электромагнита. Замена клеммной коробки. Заливка сложным электроизоляционным компаундом. Наращивание..."
                href="RepairAndManufacture/SecondPage">
            </ReadMore>
        </div>
    );
}