import { Metadata } from "next";
import NotFound from "@/app/not-found";

export const metadata: Metadata = {
    title: {
        default: 'Системи керування',
        template: "Системи керування | %s"
    }
}

export default async function Layout({children}: {children: React.ReactNode}) {

    return (
        <section>
            {children}
        </section>
    );
}