import rating from '../assets/navbar/favorite.svg'
import attention from '../assets/navbar/attention.svg'
import create from '../assets/navbar/create.svg'
import transport from '../assets/navbar/transport.svg'
import deal from '../assets/navbar/deal.svg'
import faq from '../assets/navbar/faq.svg'
import settings from '../assets/navbar/settings.svg'

const navbar = [
    {
        name: "Мої Обранні товари і послуги",
        link: "/rating",
        images: rating
    },
    {
        name: "Додати оголошення",
        link: "/add-advertisement",
        images: create
    },
    {
        name: "Мої Оголошення",
        link: "/advertisment",
        images: attention
    },
    {
        name: "Мій транспорт",
        link: "/my-transport",
        images: transport
    },
    {
        name: "Мої угоди",
        link: "me-deal",
        images: deal
    },
    {
        name: "Навчальні матеріали",
        link: "/faq",
        images: faq
    },
    {
        name: "Мова та підтримка",
        link: "/lang-and-support",
        images: settings
    }
]

export default navbar