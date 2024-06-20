import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Product</a> {'>'} Repair and Manufacture</span>
            <h1 className={styles.title}>Repair and Manufacture of Electromagnet Spare Parts</h1>
            <ReadMore 
                title="Repair of lifting electromagnets of foreign and domestic production"
                image="/Repair and manufacture 1.jpg"
                alt="Repair And Manufacture Product 1"
                text="Our company specialists perform comprehensive repairs of various types of lifting electromagnets from both foreign and domestic manufacturers. The quality of electromagnet repairs is ensured by meticulous control at every stage of the repair process..."
                href="RepairAndManufacture/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Repair of electromagnets"
                image="/Repair and manufacture 2.jpg"
                alt="Repair And Manufacture Product 2"
                text="Our company specializes in repairing electromagnets of various capacities. Electromagnet repair may include the following types of work: Repair of the excitation coil of the electromagnet. Replacement of the terminal box. Filling with complex electro-insulating compound. Building up..."
                href="RepairAndManufacture/SecondPage">
            </ReadMore>
        </div>
    );
}