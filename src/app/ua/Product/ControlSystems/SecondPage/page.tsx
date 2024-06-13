import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ПН-500-Г"
};

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../ControlSystems">Системи керування</Link> {'>'} ПН-500-Г</span>
            <h2 className={styles.title}>Генераторні системи керування електромагнітами (ПН-500-Г)</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 ">На читання: 2 хв</span>
                <span className="text-gray-600">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Control System 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}><b>ПН-500-Г – Перетворювачі напруги серії (ПН-500-Г)</b> – були спеціально розроблені для роботи з генераторами, що встановлюються на пересувних кранах та екскаваторах за відсутності стаціонарної мережі. Призначені для <b>живлення та керування вантажопідйомних електромагнітів</b> постійного струму будь-якої потужності та для спільної роботи з генераторами 220 або 380 в.</p>
            <p className={styles.text}>Прикладні типи електромагнітів, що живляться: <b>ЕМГ078, ЕМГ117, ЕМГ-140, ЕМГ165, ЕМГ-200, ЕМГ-230, ЕМГ110, ЕМГ170, М22, М42, М43, М62, М63, М67, ПМ15, ПМ25, WALKER, FELEMANG, WOKO та інші</b></p>
            <h3 className={styles.subtitle}>Основні види захисту електромагніту</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p>Обмеження максимальної вихідної напруги лише на рівні 220-230 В.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Захист від короткого замикання у навантаженні.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Захист від замикання жив кабелю між собою та на «землю».</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Сигналізація обриву кабелю живлення.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Сигналізація про перевищення струму витоку в ланцюзі залізовідділювача (при перегріванні електромагніту).</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Сигналізація про появу коротких міжвиткових замикань в ел.магніті залізовідділювача.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Сигналізація про перевищення максимально допустимого струму.</p>
                </li>
            </ol>
            <h3 className={styles.subtitle}>ПН-500-40Ж, ПН-500-80Ж. Відмінні риси систем управління (ПН-500-40Ж, ПН-500-80Ж)</h3>
            <ol className={styles.olmenu}>
                <li className={styles.ollist}>
                    <span>1</span>
                    <p><b>Збільшення терміну служби залізовідділювача</b> за рахунок швидкодіючих електронних захистів, сигналізації аварійних ситуацій у процесі роботи.</p>
                </li>
                <li className={styles.ollist}>
                    <span>2</span>
                    <p>Можливість роботи з генераторами 220 або 380В залежно від встановленого генератора.</p>
                </li>
                <li className={styles.ollist}>
                    <span>3</span>
                    <p>Плавне регулювання напруги електромагніту, можливість сепарування вантажів, що переміщуються.</p>
                </li>
                <li className={styles.ollist}>
                    <span>4</span>
                    <p>Підвищується продуктивність за рахунок збільшення швидкості наростання та зниження струму в електромагніті.</p>
                </li>
                <li className={styles.ollist}>
                    <span>5</span>
                    <p>Максимально допустимий ударний струм 4500 А, що гарантує надійну роботу системи при КЗ.</p>
                </li>
                <li className={styles.ollist}>
                    <span>6</span>
                    <p>Алфавітно-цифрова індикація поточних параметрів, режимів роботи та аварійних повідомлень.</p>
                </li>
                <li className={styles.ollist}>
                    <span>7</span>
                    <p>Звукова сигналізація аварійних ситуацій.</p>
                </li>
                <li className={styles.ollist}>
                    <span>8</span>
                    <p>Підключення до стандартного пульта управління крана, додатковий вихід для підключення регулятора напруги сельсину.</p>
                </li>
                <li className={styles.ollist}>
                    <span>9</span>
                    <p>Малі масогабаритні показники дозволяють встановити <b>перетворювачі серії ПН-500-Г</b> безпосередньо в кабіні крана в зручному для оператора місці.</p>
                </li>
                <li className={styles.ollist}>
                    <span>10</span>
                    <p>Висока надійність, одержувана за рахунок нової елементної бази та оригінальних технічних рішень, захищених патентним законом РФ.</p>
                </li>
            </ol>
            <table className={styles.secondtable}>
                <thead>
                    <tr>
                        <th className={styles.tableActiveMain}>ПАРАМЕТРИ</th>
                        <th className={styles.tableActiveSubmain}>ПН-500-Г-50</th>
                        <th className={styles.tableActiveSubmain}>ПН-500-Г-100</th>
                        <th className={styles.tableActiveSubmain}>ПН-500-Г-150</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={styles.tableActiveMain}>Напруга живлення, B</th>
                        <td className={styles.tableunactive}>220 чи 380</td>
                        <td className={styles.tableunactive}>220 чи 380</td>
                        <td className={styles.tableunactive}>220 чи 380</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Частота, Гц</th>
                        <td className={styles.tableunactive}>50</td>
                        <td className={styles.tableunactive}>50</td>
                        <td className={styles.tableunactive}>50</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Діапазон регулювання вихідної напруги, B</th>
                        <td className={styles.tableunactive}>10-230</td>
                        <td className={styles.tableunactive}>10-230</td>
                        <td className={styles.tableunactive}>10-230</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Час розмагнічування, сек, не більше</th>
                        <td className={styles.tableunactive}>3</td>
                        <td className={styles.tableunactive}>3</td>
                        <td className={styles.tableunactive}>3</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Максимально допустимий струм, ПВ-75%, А</th>
                        <td className={styles.tableunactive}>50</td>
                        <td className={styles.tableunactive}>100</td>
                        <td className={styles.tableunactive}>150</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Габаритні розміри, мм, не більше</th>
                        <td className={styles.tableunactive}>360х150х375</td>
                        <td className={styles.tableunactive}>360х150х375</td>
                        <td className={styles.tableunactive}>360х150х375</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Посадочні розміри, мм</th>
                        <td className={styles.tableunactive}>255х350</td>
                        <td className={styles.tableunactive}>255х350</td>
                        <td className={styles.tableunactive}>255х350</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Маса, кг, не більше</th>
                        <td className={styles.tableunactive}>12,0</td>
                        <td className={styles.tableunactive}>12,2</td>
                        <td className={styles.tableunactive}>12,5</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Рекомендована потужність генератора, кВт</th>
                        <td className={styles.tableunactive}>10-15</td>
                        <td className={styles.tableunactive}>20-25</td>
                        <td className={styles.tableunactive}>30-40</td>
                    </tr>
                </tbody>
            </table>
            <span className={styles.exclamacion}>УВАГА! ПРИ ВИБОРІ ЖИВЧОГО ГЕНЕРАТОРА Враховуйте ПОТУЖНІСТЬ ІНШИХ СПОЖИВАЧІВ ЕНЕРГІЇ!</span>
        </section>
    );
}