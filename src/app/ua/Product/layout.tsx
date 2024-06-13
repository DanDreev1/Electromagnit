import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: 'Продукт',
        template: "Продукт | %s"
    }
}

export default async function Layout({children}: {children: React.ReactNode}) {

    return (
        <section>
            {children}
        </section>
    );
}