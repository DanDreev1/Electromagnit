import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Product</a> {'>'} Electromagnet</span>
            <h1 className={styles.title}>Lifting Electromagnets</h1>
            <ReadMore 
                title="M22, M42, M62, M63 — Modernized Electromagnets with Increased Lifting Capacity"
                image="/Electromagnit 1.jpg"
                alt="ElectroProduct 1"
                text="The application area of M22, M42, M62, M63 electromagnets — modernized electromagnets with increased lifting capacity is designed for the capture and transport by crane mechanisms of cold (ambient) loads from ferromagnetic materials: scrap metal..."
                href="Electromagnit/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Heavy Series Lifting Electromagnets EMG 165-42/A, EMG 165-42/M"
                image="/Electromagnit 2.jpg"
                alt="ElectroProduct 2"
                text="Heavy series lifting electromagnets are designed for the capture and transport by crane mechanisms of cold (ambient) loads from ferromagnetic materials: scrap metal, scrap, metallic charge, chips, metal products, ingots..."
                href="Electromagnit/SecondPage">
            </ReadMore>
            <ReadMore 
                title="Medium Series Lifting Electromagnets EMG 117-39/A, EMG 117-39/M"
                image="/Electromagnit 3.jpg"
                alt="ElectroProduct 3"
                text="Electromagnets are designed for the capture and transport by crane mechanisms of cold loads from ferromagnetic materials: scrap metal, scrap, metallic charge, chips, metal products, ingots, slabs, etc..."
                href="Electromagnit/ThirdPage">
            </ReadMore>
            <ReadMore 
                title="Medium Series Lifting Electromagnets EMG 117-32/A, EMG 117-32/M"
                image="/Electromagnit 4.jpg"
                alt="ElectroProduct 4"
                text="Medium series lifting electromagnets EMG 117-32/A, EMG 117-32/M are designed for the capture and transport by crane mechanisms of cold loads from ferromagnetic materials: scrap metal, scrap, metallic charge..."
                href="Electromagnit/FourthPage">
            </ReadMore>
            <ReadMore 
                title="Light Series Lifting Electromagnets EMG 078-30/A, EMG 078-30/M"
                image="/Electromagnit 5.jpg"
                alt="ElectroProduct 5"
                text="Electromagnets are designed for the capture and transport by crane mechanisms of cold loads from ferromagnetic materials: scrap metal, scrap, metallic charge, chips, metal products, ingots, slabs, etc..."
                href="Electromagnit/FifthPage">
            </ReadMore>
        </div>
    );
}