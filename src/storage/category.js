import stock from "../assets/dashboard/stock.svg"
import transport from '../assets/dashboard/transport.svg'
import tech from "../assets/dashboard/tech.svg"
import product from "../assets/dashboard/product.svg"
import train from "../assets/dashboard/train.svg"
import additional from "../assets/dashboard/additional.svg"

const category = [
    {
        name: "Склади",
        img: stock,
        btn_desc: "Всі",
        src: "/skladi"
    },
    {
        name: "Транспорт",
        img: transport,
        btn_desc: "Всі",
        src: "/transport"
    },
    {
        name: "Техніка",
        img: tech,
        btn_desc: "Всі",
        src: "/tehnika"
    },
    {
        name: "Продукція",
        img: product,
        btn_desc: "Всі",
        src: "/produkcia"
    },
    {
        name: "Транспортні послуги",
        img: train,
        btn_desc: "Всі",
        src: "/poslugi"
    },
    {
        name: "Додаткові послуги",
        img: additional,
        btn_desc: "Всі",
        src: "/poslugi"
    }
]

export default category