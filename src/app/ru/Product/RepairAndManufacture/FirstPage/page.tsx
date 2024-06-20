import styles from "../styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Электромагнит', 'Системы управления', 'Железоотделители', 'Ремонт и изготовление запасных частей электромагнитов', 'Electromagnit', 'Грузоподъемные электромагниты'],
    authors: [{ name: 'Сергей', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: "Ремонт грузоподъемных электромагнитов импортного и отечественного производства",
    description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
    
    openGraph: {
        title: "Ремонт грузоподъемных электромагнитов импортного и отечественного производства",
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        url: 'https://electromagnit.vercel.app/ru/Product/IronSeparators/FirstPage',
        siteName: 'Electromanit',
        
        images: [
        {
            url: 'https://electromagnit.vercel.app/Logo.png',
            width: 250,
            height: 100,
            alt: 'Logo'
        },
        {
            url: 'https://electromagnit.vercel.app/Electromagnit 2.jpg',
            width: 1800,
            height: 1600,
            alt: 'Electromagnit',
        },
        ],
        locale: 'uk_UA',
        type: 'website',
    },

    icons: {
        icon: '../icon.png',
        shortcut: '../icon.png',
        apple: '../icon.png',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Electomagnit',
        description: 'Лучшие грузовые электромагниты для любых нужд. Узнайте больше о наших продуктах и ​​услугах.',
        // creator: '@nextjs',
        // creatorId: '1467726470533754880',
        images: ['https://electromagnit.vercel.app/Electromagnit 2.jpg'], // Must be an absolute URL
    },

    verification: {
        google: 'google-site-verification-code',
        yandex: 'yandex-verification-code',
        yahoo: 'yahoo-verification-code',
        other: {
          me: ['mailto:europlastic2018@gmail.com', 'my-link'],
        },
    },

    appleWebApp: {
        title: 'Electromagnit',
        statusBarStyle: 'black-translucent',
    },

    category: 'electromagnit',
};

export default function Page() {
    return (
        <section className={styles.container}>
            <span className={styles.span}><Link className={styles.link} href="../../Product">Продукт</Link> {'>'} <Link className={styles.link} href="../RepairAndManufacture">Ремонт и изготовление</Link> {'>'} Ремонт грузоподъемных электромагнитов</span>
            <h1 className={styles.title}>Ремонт грузоподъемных электромагнитов импортного и отечественного производства</h1>
            <div className="flex my-10">
                <span className="mr-10 text-gray-600 text-sm">На чтение: 1 мин</span>
                <span className="text-gray-600 text-sm">Опубликовано: 07/06/2024</span>
            </div>
            <Image className="mb-10" src="/Repair and manufacture 1.jpg" alt="Something" width={1200} height={575} priority></Image>
            <p className={styles.text}>Специалисты нашей компании осуществляют капитальный ремонт любых видов грузоподъемных электромагнитов как импортного, так и отечественного производства. Качество ремонта грузоподъемных электромагнитов обеспечивается тщательным контролем за каждым этапом ремонтных работ и применением новых материалов и технологий.</p>
            <h3 className={styles.subtitle}>Основные причины выхода из строя грузоподъемных электромагнитов:</h3>
            <p className={styles.text}>Основными причинами выхода из строя грузоподъемных электромагнитов являются пробой катушки на корпус, обрыв проводника и межвитковые замыкания в катушке, а также скачки напряжения при включении. И если последнюю причину можно устранить использованием преобразователей напряжения, ограничивающих перенапряжение, то с такими факторами как влага и перегрев бороться сложнее.</p>
            <p className={styles.text}>От попадания влаги внутрь электромагнита защищает масса заливки, которая герметизирует катушку электромагнита внутри корпуса, а также крышка клеммной коробки и гермоввод кабеля. Впоследствии в массе заливки могут возникать микротрещины, через которые внутрь электромагнита попадает влага, что, в свою очередь, может привести к пробою катушки на корпус.</p>
            <p className={styles.text}>Еще одним фактором, снижающим срок эксплуатации и ведущим к необходимости ремонта грузоподъемного электромагнита, является перегрев. Перегрев приводит к падению сопротивления электроизоляции. Эксплуатация электромагнита при критическом понижении сопротивления изоляции может привести к пробою на корпус. Сохранить работоспособность электромагнита можно использованием термостойких лаков и заливочных масс, увеличением теплоотвода от катушки, ребра корпуса электромагнита с целью увеличения отдающей тепло площади. В некоторых случаях в единственной степени остается временное отключение электромагнита при достижении критических температур.</p>
            <p className={styles.text}>Наше предприятие предоставляет услуги по тестированию и модернизации грузоподъемных электромагнитов, техническому обслуживанию и выполнению ремонтных работ вплоть до капитального ремонта грузоподъемных электромагнитов.</p>
            <p className={styles.text}>Если у вас нет электромагнита для ремонта, мы можем предложить купить у нас электромагнит после капитального ремонта. А именно: ПМ25, М22, М42, М43, М62, М63, ЭМГ078, ЭМГ117, ЭМГ165, ПМ15, ПМ25, ЭМГ117-39/А, ЭМГ 117-39/М.Электромагнит ПМ25, электромагнит4 электромагнит М62, электромагнит М63, электромагнит ЭМГ078, электромагнит ЭМГ117, электромагнит ЭМГ165, электромагнит ПМ15.</p>
        </section>
    );
}