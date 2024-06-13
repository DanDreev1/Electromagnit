import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ЕМГ 165-42/А, ЕМГ 165-42/М"
};

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../Electromagnit">Електромагніт</Link> {'>'} ЕМГ 165-42/А, ЕМГ 165-42/М</span>
            <h2 className={styles.title}>Електромагніти вантажопідйомні важкої серії ЕМГ 165-42/А, ЕМГ 165-42/М</h2>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 ">На читання: 2 хв</span>
                <span className="text-gray-600">Опубліковано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Electromagnit 2.jpg" alt="Something" width={1200} height={575} priority></Image>
            <h2 className={styles.title}>Сфера застосування електромагнітів</h2>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    Електромагніти вантажопідйомні важкої серії призначені для захоплення та перенесення крановими механізмами холодного (навколишнього середовища) вантажу з феромагнітних матеріалів: металобрухт, скрап, металева шихта, стружка, металопрокат, чушки, сляби тощо.
                </li>
                <li className={styles.list}>
                    Дані вантажопідйомні електромагніти можна використовувати на траверсі (виготовляється під конкретні потреби замовника).
                </li>
                <li className={styles.list}>
                    Електромагніти рекомендовані для встановлення на мобільні екскаватори типу FUCHS, LIEBHERR, ATLAS, SENNEBOGEN, CAT, ZEPPELIN та ін. Великий вантажопідйомності в комплекті з генераторною системою управління та спеціальною траверсою, що дозволяє не знімаючи грейфер працювати електромагнітом.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Відмінні риси електромагнітів</h3>
            <ul className={styles.menu}>
                <li className={styles.list}>
                    Вантажопідйомність електромагніту на 30% вище порівняно з типовими електромагнітами М62 і т.п.
                </li>
                <li className={styles.list}>
                    Велика тепловідвідна поверхня <b>ЛИТОГО КОРПУСУ</b> електромагніту, оригінальна технологія збирання та застосування нових ізоляційних матеріалів та компаундів забезпечують:
                </li>
                <li className={styles.secondLevel}>
                    <ul className={styles.menu}>
                        <li className={styles.list}>
                            Підвищену міцність та довговічність корпусу;
                        </li>
                        <li className={styles.list}>
                            Зниження нагріву електромагніту економію електроенергії на тонну вантажу, що переноситься;
                        </li>
                        <li className={styles.list}>
                            Високу тривалість безперервної роботи;
                        </li>
                        <li className={styles.list}>
                            Стабільність вантажопідйомних параметрів у процесі роботи;
                        </li>
                        <li className={styles.list}>
                            Високу надійність та довговічність обмотки.
                        </li>
                    </ul>
                </li>
                <li className={styles.list}>
                    Можливість роботи вантажопідйомних електромагнітів при ПВ-100% як залізовідділювач або сепаратор, при комплектації спеціальною системою управління.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Технічні дані електромагнітів</h3>
            <table className={styles.thirdtable}>
                <thead>
                    <tr>
                        <th className={styles.tableActiveMain}>ПАРАМЕТРИ</th>
                        <th className={styles.tableActiveSubmain}>ЕМГ 165-42/А</th>
                        <th className={styles.tableActiveSubmain}>ЕМГ 165-42/М</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={styles.tableActiveMain}>Напруга постійного струму, B</th>
                        <td className={styles.tableunactive}>220±5%</td>
                        <td className={styles.tableunactive}>220±5%</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Номінальний струм, A</th>
                        <td className={styles.tableunactive}>85±5%</td>
                        <td className={styles.tableunactive}>85±5%</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Потужність номінальна, Вт</th>
                        <td className={styles.tableunactive}>18 700</td>
                        <td className={styles.tableunactive}>18 700</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Потужність при температурі обмоток, Вт</th>
                        <td className={styles.tableunactive}>13 400</td>
                        <td className={styles.tableunactive}>13 400</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Відривне зусилля, кг, не менше</th>
                        <td className={styles.tableunactive}>50 000</td>
                        <td className={styles.tableunactive}>50 000</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Вантажопідйомність на скрапі ЗА, ГОСТ-2787-75, кг</th>
                        <td className={styles.tableunactive}>950</td>
                        <td className={styles.tableunactive}>950</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Вантажопідйомність на стружці 15А, згідно з ГОСТ-2787-75, кг</th>
                        <td className={styles.tableunactive}>850</td>
                        <td className={styles.tableunactive}>850</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Габаритні розміри, мм, АхВхС</th>
                        <td className={styles.tableunactive}>1650х420х1500</td>
                        <td className={styles.tableunactive}>1650х420х1500</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Рекомендована вантажопідйомність крана, тн</th>
                        <td className={styles.tableunactive}>10, 16</td>
                        <td className={styles.tableunactive}>10, 16</td>
                    </tr>
                    <tr>
                        <th className={styles.tableActiveMain}>Маса, кг</th>
                        <td className={styles.tableunactive}>3200</td>
                        <td className={styles.tableunactive}>3900</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}