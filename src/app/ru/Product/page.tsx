import Link from "next/link";
import Image from "next/image";
import style from "./styles.module.scss"

export default function Product() {
    return (
        <div className={style.container}>
            <h2 className={style.product}>У нас есть возможности и силы, чтобы удивить вас нашей продукции. Вы можете посмотреть на каждую из них</h2>
            <ul className={style.menu}>
                <li className={style.list}>
                    <Link href="Product/Electromagnit" className={style.link}>
                        <Image className={style.image} src='/Product1.jpg' alt='electromagnets for sheet steel' width={500} height={300} priority></Image>
                        <div className={style.info}>
                            <h3>Электромагниты</h3>
                            <p>Электромагниты – мощные инструменты для вашего бизнеса! Создавая магнитное поле при подаче электрического тока, они обеспечивают эффективный подъем и перемещение грузов, что делает вашу работу быстрой и безопасной. С их помощью можно оптимизировать производственные процессы, увеличить производительность и снизить затраты. Надежные, гибкие и управляемые электромагниты открывают новые возможности для вашего бизнеса.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                    <Link href="Product/ControlSystems" className={style.link}>
                        <Image className={style.image} src='/Product2.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                        <div className={style.info}>
                            <h3>Системы управления</h3>
                            <p>Управляйте своим бизнесом на новом уровне с нашими передовыми системами управления! Наши решения обеспечивают полный контроль над вашим производством, помогая оптимизировать процессы и увеличивать производительность. С нашими системами вы сможете легко и безопасно управлять оборудованием, что обеспечит вам надежность и стабильность в работе.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                    <Link href="Product/IronSeparators" className={style.link}>
                        <Image className={style.image} src='/Product3.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                        <div className={style.info}>
                            <h3>Железоотделители</h3>
                            <p>Позвольте нам представить наши железоотделители – надежных защитников вашего производства! С нашими передовыми технологиями вы сможете эффективно удалять металлические примеси из сырья, обеспечивая безопасность и качество продукции. Наша продукция гарантирует надежную работу, минимизируя риск поломок и сбоев. Не упустите возможность повысить эффективность вашего производства и обеспечить безупречное качество продукции.</p>
                        </div>
                    </Link>
                </li>
                <li className={style.list}>
                        <Link href="Product/RepairAndManufacture" className={style.link}>
                            <Image className={style.image} src='/Product4.jpg' alt='electromagnets for sheet steel' width={500} height={300}></Image>
                            <div className={style.info}>
                                <h3>Ремонт и изготовление</h3>
                                <p>Уверенные в надежности вашего бизнеса, мы предлагаем вам наш сервис по ремонту и изготовлению запчастей для электромагнитов. Наши специалисты готовы оперативно восстановить работоспособность оборудования, а также производить необходимые детали по вашим требованиям. Мы ценим ваше время и бизнес, поэтому гарантируем высокое качество услуг и конкурентоспособные цены.</p>
                            </div>
                        </Link>
                </li>
            </ul>
        </div>
    );
}