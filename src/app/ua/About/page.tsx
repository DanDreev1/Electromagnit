import Image from "next/image";
import style from "./styles.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Про нас'
}

export default async function About() {

    return (
        <div className={style.container}>
            <h1 className={style.title}>Про нас</h1>
            <div className={style.box}>
                <Image className={style.image} src='/about.svg' alt='electromagnets for sheet steel' width={100} height={100}></Image>
                <div>
                    <h2 className={style.subtitle}>"Гіркота поганої якості відчувається навіть тоді, коли насолода низької ціни вже давно забута"</h2>
                    <p className={style.text}>"Electromagnit" - це компанія, що спеціалізується на виробництві та обслуговуванні вантажопідйомних електромагнітів, систем управління, залізовідділювачів, а також надання послуг з ремонту та виготовлення запасних частин для електромагнітів.</p>
                </div>
            </div>
            <div className={style.textBox}>
                <p className={style.textList}><b>Наша місія</b>: забезпечити наших клієнтів надійними та інноваційними рішеннями в галузі електромагнітних технологій, які допоможуть їм підвищити ефективність виробництва та забезпечити безпеку роботи обладнання. Ми пишаємося своїм професіоналізмом, високою якістю продукції та чудовим обслуговуванням, і прагнемо постійного розвитку та вдосконалення, щоб залишатися в лідерах на ринку. З нами ви отримуєте не просто продукти та послуги – ви отримуєте партнера, на якого можна покладатися у будь-якій ситуації.</p>
                <p className={style.textList}><b>Наші клієнти</b>: ми виготовляємо різні деталі та комплектуючі для всіх галузей промисловості. Наші вироби успішно працюють на десятках підприємств харчової, металургійної, машинобудівної, хімічної, будівельної та інших галузей промисловості.</p>
                <p className={style.textList}><b>Наші можливості</b>: приймаємо замовлення на виготовлення деталей за кресленнями (ескізами) або зразками, а також на виготовлення нестандартного та унікального обладнання (до Ваших послуг: верстати ЧПУ, токарно-фрезерувальні цехи, термопластавтомати (ТПА) для лиття деталей з використанням прес-форм, Шприц- прес, ротаційне формування, Вакуумне формування, послуги конструктора і т.д.).</p>
            </div>
            <h3 className={style.about}>Основні напрямки нашої діяльності:</h3>
            <ol className={style.menu}>
                <li className={style.list}>
                    <span>1</span>
                    <p>Виготовляє деталі за кресленнями (ескізами) або зразками замовника, із зазначенням необхідного технічного завдання, характеристик тощо. з різних європейських (Італія, Англія, Німеччина та ін.) пластиків (поліамід (капролон) РА-6 та ін; поліацеталь (поліоксиметилен) (РОМ); поліетилен РЕ-500, РЕ-1000; поліпропілен (РР); фторопласт ( 100% первинка) та ін;</p>
                </li>
                <li className={style.list}>
                    <span>2</span>
                    <p>Виготовлення гумо-технічних виробів (РТІ) (каучук) за кресленнями (ескізами) або зразками замовника, із зазначенням необхідного технічного завдання, характеристик тощо; постачання різних пластиків у листах та у стрижнях;</p>
                </li>
                <li className={style.list}>
                    <span>3</span>
                    <p>Постачання та ремонт вантажопідйомного (електромагніти М22, М42, М62 та ін.), нестандартного та допоміжного обладнання та систем управління до них;</p>
                </li>
            </ol>
        </div>
    );
}