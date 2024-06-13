import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: 'Електромагніти',
        template: "Електромагніти | %s"
    }
}

export default async function Layout({children}: {children: React.ReactNode}) {

    return (
        <section>
            {children}
        </section>
    );
}