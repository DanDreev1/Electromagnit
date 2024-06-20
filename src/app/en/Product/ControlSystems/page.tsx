import ReadMore from "@/app/ua/components/ReadMore"
import styles from "./styles.module.scss"

export default function Electromagnit() {
    return (
        <div className={styles.container}>
            <span className={styles.span}><a className={styles.link} href="../Product">Product</a> {'>'} Control Systems</span>
            <h1 className={styles.title}>Control Systems</h1>
            <ReadMore 
                title="Iron Separator Control System PN-500-ZH"
                image="/Control System 1.jpg"
                alt="Control System Product 1"
                text="The PN-500-ZH voltage converter series is designed to power and control iron separators, ensuring that the current does not exceed allowable limits. Compatible iron separators include EMZ065, EMZ080, EMZ100, EMZ120, EMZ140, EMZ160, EMZS080..."
                href="ControlSystems/FirstPage">
            </ReadMore>
            <ReadMore 
                title="Generator Control Systems for Electromagnets (PN-500-G)"
                image="/Control System 2.jpg"
                alt="Control System Product 2"
                text="The PN-500-G voltage converter series is specifically designed for use with generators installed on mobile cranes and excavators in the absence of a stationary network. They are used to power and..."
                href="ControlSystems/SecondPage">
            </ReadMore>
            <ReadMore 
                title="Voltage Converter PN-500"
                image="/Product2.jpg"
                alt="Control System Product 3"
                text="PN-500 voltage converters are designed to power and control DC electromagnets of any power rating and simultaneously power multiple electromagnets, provided that their combined current does not exceed allowable limits. The converter..."
                href="ControlSystems/ThirdPage">
            </ReadMore>
        </div>
    );
}