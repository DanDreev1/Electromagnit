import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { montserrat } from "../utils/fonts";

// Придется заморочится с шрифтами

export const metadata: Metadata = {
    applicationName: 'Electromagnit',
    referrer: 'origin-when-cross-origin',
    keywords: ['Електромагніт', 'Системи керування', 'Залізовідділювачі', 'Залізовідділювачі', 'Ремонт та виготовлення запасних частин електромагнітів', 'Electromagnit', 'Вантажопідйомні електромагніти'],
    authors: [{ name: 'Сергій', url: 'mailto:europlastic2018@gmail.com' }],
    creator: 'Daniil Andrieiev',
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },

    title: {
        default: 'Electomagnit: вантажні електромагніти – тільки у нас!',
        template: '%s - Electromanit'
    },
    description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',

    metadataBase: new URL('https://electromagnit.vercel.app/ua'),
    alternates: {
      canonical: '/ua',
      languages: {
        'en-GB': '/en',
        'ru-RU': '/ru',
      },
    },
    
    openGraph: {
        title: {
            default: 'Electomagnit: вантажні електромагніти – тільки у нас!',
            template: '%s - Electromanit'
        },
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
        url: 'https://electromagnit.vercel.app/ua',
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
        description: 'Найкращі вантажні електромагніти для будь-яких потреб. Дізнайтеся більше про наші продукти та послуги.',
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

export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <html lang="uk">
      <body className={`${montserrat}`}>
        <Header></Header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer></Footer>
      </body>
    </html>
  );
}