import fufu from "@/assets/fufu-eguci.jpg";
import poundedYam from "@/assets/pounded-yam.jpg";
import waakye from "@/assets/waakye.jpg";
import jollof from "@/assets/jollof.jpg";
import friedRicePlantain from "@/assets/fried-rice-plantain.jpg";
import friedRiceChicken from "@/assets/fried-rice-chicken.jpg";
import yassa from "@/assets/yassa.jpg";
import maafe from "@/assets/maafe.jpg";
import coffee from "@/assets/coffee.jpg";
import bissap from "@/assets/bissap.jpg";

export const popular = [
  { name: "Nigerian Jollof Rice", img: jollof, desc: "Arroz vermelho aromático preparado à moda nigeriana, servido com salada fresca." },
  { name: "Maafe", img: maafe, desc: "Guisado cremoso de amendoim com legumes, servido sobre arroz branco." },
  { name: "Pounded Yam & Bitter Leaf Soup", img: poundedYam, desc: "Inhame pilado acompanhado de sopa tradicional de folha amarga." },
  { name: "Yassa", img: yassa, desc: "Frango marinado em limão e cebola caramelizada, clássico senegalês." },
];

export const menu = {
  "Pratos Principais": [
    { name: "Fufu with Eguci", desc: "Fufu macio servido com sopa cremosa de egusi e vegetais.", img: fufu, price: "500$ / 700$" },
    { name: "Pounded Yam with Bitter Leaf Soup", desc: "Inhame pilado com sopa tradicional de folha amarga e carnes.", img: poundedYam, price: "700$" },
    { name: "Ghanaian Waakye", desc: "Arroz e feijão à moda do Gana, com acompanhamentos típicos.", img: waakye, price: "700$" },
    { name: "Nigerian Jollof Rice", desc: "Arroz vermelho aromático preparado à moda nigeriana.", img: jollof, price: "500$ / 800$" },
    { name: "Nigerian Fried Rice with Plantain", desc: "Arroz frito nigeriano com legumes e banana-pão dourada.", img: friedRicePlantain, price: "800$" },
    { name: "Fried Rice with Chicken", desc: "Arroz frito colorido servido com frango grelhado.", img: friedRiceChicken, price: "500$ / 800$" },
    { name: "Yassa", desc: "Frango marinado em limão e cebola caramelizada, clássico senegalês.", img: yassa, price: "500$ / 700$" },
    { name: "Maafe", desc: "Guisado cremoso de amendoim com legumes sobre arroz branco.", img: maafe, price: "500$ / 700$" },
  ],
  "Café & Bebidas": [
    { name: "Café Africano", desc: "Espresso encorpado de grãos africanos selecionados.", img: coffee, price: "" },
    { name: "Bissap (Hibiscus)", desc: "Sumo natural de hibisco gelado com hortelã.", img: bissap, price: "" },
    { name: "Sumo de Tamarindo", desc: "Refrescante sumo natural feito na casa.", img: bissap, price: "" },
  ],
};

export const gallery = [
  { src: jollof, alt: "Nigerian Jollof Rice" },
  { src: fufu, alt: "Fufu com sopa de egusi" },
  { src: maafe, alt: "Maafe — guisado de amendoim" },
  { src: poundedYam, alt: "Pounded Yam com bitter leaf soup" },
  { src: yassa, alt: "Yassa de frango" },
  { src: friedRicePlantain, alt: "Fried rice com plantain" },
  { src: friedRiceChicken, alt: "Fried rice com frango" },
  { src: waakye, alt: "Ghanaian Waakye" },
  { src: coffee, alt: "Café africano artesanal" },
];

export const INFO = {
  name: "Kampion African Kitchen & Café",
  address: "Achada Santo António, Praia, Cabo Verde",
  hours: "Todos os dias · 09:00 — 00:00",
  phone: "+238 939 32 27",
  phoneRaw: "2389393227",
  email: "contacto@kampionafricankitchen.cv",
};
