import Link from "next/link";
import Image from "next/image";
import style from "./styles.module.scss"

export default function Product() {
    return (
        <div className={style.container}>
            <h2 className={style.product}>We have the capabilities and strength to amaze you with our products. You can explore each of them:</h2>
            <ul className={style.menu}>
                <li className={style.list}>
                    <Link href="Product/Electromagnit" className={style.link}>
                        <Image className={style.image} src='/Product1.jpg' alt='electromagnets for sheet steel' width={500} height={300} priority></Image>
                        <div className={style.info}>
                            <h3>Electromagnets</h3>
                            <p>Electromagnets are powerful tools for your business! Creating a magnetic field when electricity is applied, they ensure efficient lifting and moving of loads, making your work fast and safe. They optimize production processes, increase productivity, and reduce costs. Reliable, flexible, and controllable electromagnets open up new possibilities for your business.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                    <Link href="Product/ControlSystems" className={style.link}>
                        <Image className={style.image} src='/Product2.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                        <div className={style.info}>
                            <h3>Control Systems</h3>
                            <p>Manage your business at a new level with our advanced control systems! Our solutions provide full control over your production, helping to optimize processes and increase productivity. With our systems, you can easily and safely manage equipment, ensuring reliability and stability in operation.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                    <Link href="Product/IronSeparators" className={style.link}>
                        <Image className={style.image} src='/Product3.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                        <div className={style.info}>
                            <h3>Iron Separators</h3>
                            <p>Let us introduce our iron separators - reliable protectors of your production! With our advanced technologies, you can efficiently remove metal impurities from raw materials, ensuring safety and product quality. Our products guarantee reliable operation, minimizing the risk of breakdowns and failures. Don't miss the opportunity to increase production efficiency and ensure impeccable product quality.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                    <Link href="Product/RepairAndManufacture" className={style.link}>
                        <Image className={style.image} src='/Product4.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                        <div className={style.info}>
                            <h3>Repair and Manufacture</h3>
                            <p>Confident in the reliability of your business, we offer you our service for repairing and manufacturing parts for electromagnets. Our specialists are ready to promptly restore the functionality of equipment and manufacture necessary parts according to your requirements. We value your time and business, thus guaranteeing high-quality services and competitive prices.</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}