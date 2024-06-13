import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ЕМП"
};


export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../IronSeparators">Залізовідділювачі</Link> {'>'} ЕМП</span>
            <h2 className={styles.title}>Залізовідділювачі електромагнітні підвісні (ЕМП)</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 ">На читання: 1 хв</span>
                <span className="text-gray-600">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Iron Separators 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h3 className={styles.subtitle}>ЕМЖ - Сфера застосування</h3>
            <p className={styles.text}>ЕМЖ - Залізовідділювачі електромагнітні підвісні призначені для вилучення феромагнітних домішок та феромагнітних предметів із сипучих матеріалів, що транспортуються стрічковими конвеєрами із шириною стрічки від 600 до 1600мм.</p>
            <h3 className={styles.subtitle}>Технічні дані:</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableActiveMain}>Найменування</th>
                        <th className={styles.tableActiveSubmain}>Габарити, мм</th>
                        <th className={styles.tableActiveSubmain}>Напруги живлення, B</th>
                        <th className={styles.tableActiveSubmain}>Номінальний струм обмотки при 20 С,А</th>
                        <th className={styles.tableActiveSubmain}>Потужність при установ. температурі, кВт</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 065</th>
                        <td className={styles.tableunactive}>800х500х665</td>
                        <td className={styles.tableunactive}>220/110</td>
                        <td className={styles.tableunactive}>44866</td>
                        <td className={styles.tableunactive}>1,8</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 080</th>
                        <td className={styles.tableunactive}>920х500х720</td>
                        <td className={styles.tableunactive}>220/110</td>
                        <td className={styles.tableunactive}>15/30</td>
                        <td className={styles.tableunactive}>2,3</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 100</th>
                        <td className={styles.tableunactive}>1080х550х860</td>
                        <td className={styles.tableunactive}>220/110</td>
                        <td className={styles.tableunactive}>19/38</td>
                        <td className={styles.tableunactive}>2,8</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 120</th>
                        <td className={styles.tableunactive}>1200х600х900</td>
                        <td className={styles.tableunactive}>220</td>
                        <td className={styles.tableunactive}>22</td>
                        <td className={styles.tableunactive}>3,2</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 140</th>
                        <td className={styles.tableunactive}>1400х700х950</td>
                        <td className={styles.tableunactive}>220</td>
                        <td className={styles.tableunactive}>25</td>
                        <td className={styles.tableunactive}>4</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 160</th>
                        <td className={styles.tableunactive}>1550х750х980</td>
                        <td className={styles.tableunactive}>220</td>
                        <td className={styles.tableunactive}>28</td>
                        <td className={styles.tableunactive}>4,5</td>
                    </tr>
                </tbody>
            </table>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableActiveMain}>Найменування</th>
                        <th className={styles.tableActiveSubmain}>Ширина стрічки конвеєра, мм</th>
                        <th className={styles.tableActiveSubmain}>Маса вилучених включень, кг</th>
                        <th className={styles.tableActiveSubmain}>Глибина зони вилучення, мм</th>
                        <th className={styles.tableActiveSubmain}>Маса, кг</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 065</th>
                        <td className={styles.tableunactive}>600</td>
                        <td className={styles.tableunactive}>10</td>
                        <td className={styles.tableunactive}>300</td>
                        <td className={styles.tableunactive}>600</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 080</th>
                        <td className={styles.tableunactive}>800</td>
                        <td className={styles.tableunactive}>15</td>
                        <td className={styles.tableunactive}>300</td>
                        <td className={styles.tableunactive}>870</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 100</th>
                        <td className={styles.tableunactive}>1000</td>
                        <td className={styles.tableunactive}>20</td>
                        <td className={styles.tableunactive}>400</td>
                        <td className={styles.tableunactive}>1200</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 120</th>
                        <td className={styles.tableunactive}>1200</td>
                        <td className={styles.tableunactive}>25</td>
                        <td className={styles.tableunactive}>400</td>
                        <td className={styles.tableunactive}>1450</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 140</th>
                        <td className={styles.tableunactive}>1400</td>
                        <td className={styles.tableunactive}>25</td>
                        <td className={styles.tableunactive}>500</td>
                        <td className={styles.tableunactive}>1700</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖ 160</th>
                        <td className={styles.tableunactive}>1600</td>
                        <td className={styles.tableunactive}>30</td>
                        <td className={styles.tableunactive}>500</td>
                        <td className={styles.tableunactive}>2100</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}