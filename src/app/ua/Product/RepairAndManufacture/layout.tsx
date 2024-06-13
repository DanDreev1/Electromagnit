import { Metadata } from "next";


export const metadata: Metadata = {
    title: {
        default: 'Ремонт та виготовлення',
        template: "Ремонт та виготовлення | %s"
    }
}

export default async function Layout({children}: {children: React.ReactNode}) {

    return (
        <section>
            {children}
        </section>
    );
}