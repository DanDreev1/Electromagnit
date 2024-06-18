import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://electromagnit.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0,
    },
    {
      url: 'https://electromagnit.vercel.app/ua/Main',
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: 'https://electromagnit.vercel.app/ru/Main',
          en: 'https://electromagnit.vercel.app/en/Main',
        },
      },
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://electromagnit.vercel.app/ua/Product',
      lastModified: new Date(),
      alternates: {
        languages: {
            ru: 'https://electromagnit.vercel.app/ru/Product',
            en: 'https://electromagnit.vercel.app/en/Product',
        },
      },
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/Electromagnit',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/Electromagnit',
              en: 'https://electromagnit.vercel.app/en/Product/Electromagnit',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/Electromagnit/FirstPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/Electromagnit/FirstPage',
              en: 'https://electromagnit.vercel.app/en/Product/Electromagnit/FirstPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/Electromagnit/SecondPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/Electromagnit/SecondPage',
              en: 'https://electromagnit.vercel.app/en/Product/Electromagnit/SecondPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/Electromagnit/ThirdPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/Electromagnit/ThirdPage',
              en: 'https://electromagnit.vercel.app/en/Product/Electromagnit/ThirdPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/Electromagnit/FourthPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/Electromagnit/FourthPage',
              en: 'https://electromagnit.vercel.app/en/Product/Electromagnit/FourthPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/Electromagnit/FifthPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/Electromagnit/FifthPage',
              en: 'https://electromagnit.vercel.app/en/Product/Electromagnit/FifthPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/ControlSystems',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/ControlSystems',
              en: 'https://electromagnit.vercel.app/en/Product/ControlSystems',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/ControlSystems/FirstPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/ControlSystems/FirstPage',
              en: 'https://electromagnit.vercel.app/en/Product/ControlSystems/FirstPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/ControlSystems/SecondPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/ControlSystems/SecondPage',
              en: 'https://electromagnit.vercel.app/en/Product/ControlSystems/SecondPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/ControlSystems/ThirdPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/ControlSystems/ThirdPage',
              en: 'https://electromagnit.vercel.app/en/Product/ControlSystems/ThirdPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/IronSeparators',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/IronSeparators',
              en: 'https://electromagnit.vercel.app/en/Product/IronSeparators',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/IronSeparators/FirstPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/IronSeparators/FirstPage',
              en: 'https://electromagnit.vercel.app/en/Product/IronSeparators/FirstPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/IronSeparators/SecondPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/IronSeparators/SecondPage',
              en: 'https://electromagnit.vercel.app/en/Product/IronSeparators/SecondPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/RepairAndManufacture',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/RepairAndManufacture',
              en: 'https://electromagnit.vercel.app/en/Product/RepairAndManufacture',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/RepairAndManufacture/FirstPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/RepairAndManufacture/FirstPage',
              en: 'https://electromagnit.vercel.app/en/Product/RepairAndManufacture/FirstPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Product/RepairAndManufacture/SecondPage',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Product/RepairAndManufacture/SecondPage',
              en: 'https://electromagnit.vercel.app/en/Product/RepairAndManufacture/SecondPage',
          },
        },
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/About',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/About',
              en: 'https://electromagnit.vercel.app/en/About',
          },
        },
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://electromagnit.vercel.app/ua/Contacts',
        lastModified: new Date(),
        alternates: {
          languages: {
              ru: 'https://electromagnit.vercel.app/ru/Contacts',
              en: 'https://electromagnit.vercel.app/en/Contacts',
          },
        },
        changeFrequency: 'never',
        priority: 0.8,
    },
  ]
}