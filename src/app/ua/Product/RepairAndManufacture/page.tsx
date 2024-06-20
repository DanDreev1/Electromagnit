import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Продукт</a> {'>'} Ремонт та виготовлення</span>
            <h1 className={styles.title}>Ремонт та виготовлення запасних частин електромагнітів</h1>
            <ReadMore 
                title="Ремонт вантажопідйомних електромагнітів імпортного та вітчизняного виробництва"
                image="/Repair and manufacture 1.jpg"
                alt="Repair And Manufacture Product 1"
                text="Фахівці нашої компанії здійснюють капітальний ремонт будь-яких видів вантажопідйомних електромагнітів як імпортного, так і вітчизняного виробництва. Якість ремонту вантажопідйомних електромагнітів забезпечується ретельним контролем за кожним етапом ремонтних робіт..."
                href="RepairAndManufacture/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Ремонт електромагнітів"
                image="/Repair and manufacture 2.jpg"
                alt="Repair And Manufacture Product 2"
                text="Наша компанія виконує ремонт електромагнітів різної потужності. Ремонт електромагнітів може включати такі види робіт: Ремонт котушки збудження електромагніту. Заміна клемної коробки. Заливка складним електроізоляційним компаундом. Нарощування..."
                href="RepairAndManufacture/SecondPage">
            </ReadMore>
        </div>
    );
}