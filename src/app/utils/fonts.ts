import { Montserrat, Montserrat_Alternates } from "next/font/google"

const montserrat_init = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-montserrat",
})

const montserrat_alternates_init = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-montserrat",
})

export const montserrat = montserrat_init.className;
export const montserrat_alternate = montserrat_alternates_init.className;