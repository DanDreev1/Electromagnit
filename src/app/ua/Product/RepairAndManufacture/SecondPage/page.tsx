import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ремонт електромагнітів"
};

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../RepairAndManufacture">Ремонт та виготовлення</Link> {'>'} Ремонт електромагнітів</span>
            <h2 className={styles.title}>Ремонт електромагнітів</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 ">На читання: 1 хв</span>
                <span className="text-gray-600">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Repair and manufacture 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}>Наша компанія виконує <b>ремонт електромагнітів</b> різної потужності.</p>
            <p className={styles.text}>Послуги з ремонту електромагнітів можуть включати такі види робіт:</p>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Ремонт котушки збудження електромагніту.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Заміна клемної коробки.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Заливка складним електроізоляційним компаундом.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Нарощування та посилення сталевого корпусу електромагніту (магнітопроводу).</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Заміна броні у разі великого зношування броньових листів.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Модернізація електромагнітів.</p>
                </li>
            </ol>
        </section>
    );
}