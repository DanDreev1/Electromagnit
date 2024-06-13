import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ЕМЖС"
};

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../IronSeparators">Залізовідділювачі</Link> {'>'} ЕМЖС</span>
            <h2 className={styles.title}>Залізовідділювачі електромагнітні саморозвантажувальні (ЕМЖС)</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 ">На читання: 1 хв</span>
                <span className="text-gray-600">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Iron Separators 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h3 className={styles.subtitle}>Сфера використання</h3>
            <p className={styles.text}><b>Залізовідділювачі електромагнітні саморозвантажувальні ЕМЖС</b> призначені для вилучення та автоматичного видалення феромагнітних домішок та феромагнітних предметів із сипучих матеріалів, що транспортуються стрічковими конвеєрами із шириною стрічки від 600 до 1600 мм. Вилучені феромагнітні предмети видаляються стрічковим транспортером за межі конвеєра накопичувач.</p>
            <p className={styles.text}>Принципово нова конструкція даних <b>залізовідділювачів</b> дозволяє досягти високих показників глибини сповіщення без додаткового збільшення потужності за рахунок оригінального розподілу магнітних потоків. Також таким <b>залізовідділювачам</b> не страшний перегрів і не потрібне додаткове охолодження обмотки.</p>
            <h3 className={styles.subtitle}>Технічні дані залізовідділювачів, що саморозвантажуються:</h3>
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
                        <th className={styles.tableActiveMain}>ЕМЖС 080</th>
                        <td className={styles.tableunactive}>1900х1420х350</td>
                        <td className={styles.tableunactive}>220/~380</td>
                        <td className={styles.tableunactive}>19</td>
                        <td className={styles.tableunactive}>2,8</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 100</th>
                        <td className={styles.tableunactive}>2140х1420х350</td>
                        <td className={styles.tableunactive}>220/~380</td>
                        <td className={styles.tableunactive}>22</td>
                        <td className={styles.tableunactive}>3,3</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 120</th>
                        <td className={styles.tableunactive}>2320х1420х350</td>
                        <td className={styles.tableunactive}>220/~380</td>
                        <td className={styles.tableunactive}>22</td>
                        <td className={styles.tableunactive}>3,3</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 140</th>
                        <td className={styles.tableunactive}>2520х1420х440</td>
                        <td className={styles.tableunactive}>220/~380</td>
                        <td className={styles.tableunactive}>30</td>
                        <td className={styles.tableunactive}>4,5</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 160</th>
                        <td className={styles.tableunactive}>2760х1420х440</td>
                        <td className={styles.tableunactive}>220/~380</td>
                        <td className={styles.tableunactive}>30</td>
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
                        <th className={styles.tableActiveMain}>ЕМЖС 080</th>
                        <td className={styles.tableunactive}>600-800</td>
                        <td className={styles.tableunactive}>15</td>
                        <td className={styles.tableunactive}>400</td>
                        <td className={styles.tableunactive}>1100</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 100</th>
                        <td className={styles.tableunactive}>1000</td>
                        <td className={styles.tableunactive}>30</td>
                        <td className={styles.tableunactive}>400</td>
                        <td className={styles.tableunactive}>1500</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 120</th>
                        <td className={styles.tableunactive}>1200</td>
                        <td className={styles.tableunactive}>30</td>
                        <td className={styles.tableunactive}>400</td>
                        <td className={styles.tableunactive}>1680</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 140</th>
                        <td className={styles.tableunactive}>1400</td>
                        <td className={styles.tableunactive}>35</td>
                        <td className={styles.tableunactive}>450</td>
                        <td className={styles.tableunactive}>2150</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>ЕМЖС 160</th>
                        <td className={styles.tableunactive}>1600</td>
                        <td className={styles.tableunactive}>35</td>
                        <td className={styles.tableunactive}>450</td>
                        <td className={styles.tableunactive}>2700</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}