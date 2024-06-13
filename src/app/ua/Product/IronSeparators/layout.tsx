import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: 'Залізовідділювачі',
        template: "Залізовідділювачі | %s"
    }
}

export default async function Layout({children}: {children: React.ReactNode}) {

    return (
        <section>
            {children}
        </section>
    );
}