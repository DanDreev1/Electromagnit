import Link from "next/link";
import Image from "next/image";
import style from "./styles.module.scss"

type Info = {
    title: string;
    image: string;
    alt: string;
    text: string;
    href: string
}

export default function Product({ title, image, alt, text, href}: Info) {
    return (
        <div className={style.margin}>
            <Link className={style.title} href={href}>{title}</Link>
            <Image src={image} alt={alt} width={1200} height={575}></Image>
            <p className={style.text}>{text}</p>
            <Link className={style.link} href={href}>Читать полностью</Link>
        </div>
    );
}