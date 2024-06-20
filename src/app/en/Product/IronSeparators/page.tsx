import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Product</a> {'>'} Iron Separators</span>
            <h1 className={styles.title}>Iron Separators</h1>
            <ReadMore 
                title="Self-unloading electromagnetic iron separators (EMIS)"
                image="/Iron Separators 1.jpg"
                alt="Iron Separators Product 1"
                text="Self-unloading electromagnetic iron separators (EMIS) are designed to extract and automatically remove ferromagnetic impurities and objects from bulk materials transported by belt conveyors with belt widths ranging from 600 mm..."
                href="IronSeparators/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Suspension electromagnetic iron separators (SEIS)"
                image="/Iron Separators 2.jpg"
                alt="Iron Separators Product 2"
                text="SEIS - Suspension electromagnetic iron separators are designed to extract ferromagnetic impurities and objects from bulk materials transported by belt conveyors with belt widths from 600 mm..."
                href="IronSeparators/SecondPage">
            </ReadMore>
        </div>
    );
}