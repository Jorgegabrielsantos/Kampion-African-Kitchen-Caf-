import mafe from "@/assets/mafe.jpg";
import waakye from "@/assets/waakye.jpg";
import tchep from "@/assets/tchep.jpg";
import coconut from "@/assets/coconut-chicken.jpg";
import bife from "@/assets/bife.jpg";
import vegRice from "@/assets/veg-rice.jpg";
import akara from "@/assets/akara.jpg";
import porridge from "@/assets/porridge.jpg";
import coffee from "@/assets/coffee.jpg";
import bissap from "@/assets/bissap.jpg";

export const popular = [
  { name: "Mafé au Poisson", img: mafe, desc: "Guisado cremoso de amendoim com peixe fresco, servido sobre arroz aromático." },
  { name: "Ghanaian Wache", img: waakye, desc: "Arroz e feijão tradicional do Gana, com banana frita, ovo e shito." },
  { name: "Tchep Djen", img: tchep, desc: "Clássico senegalês de arroz vermelho com peixe inteiro grelhado e legumes." },
  { name: "Coconut Rice Fried Chicken", img: coconut, desc: "Arroz de coco perfumado acompanhado de frango crocante e lima." },
];

export const menu = {
  "Pratos Principais": [
    { name: "Bife Re Cavaldo", desc: "Bife grelhado com cebola caramelizada e arroz.", price: "1 200 CVE", img: bife },
    { name: "Arroz com Legumes", desc: "Arroz africano com pimentos, ervas e especiarias.", price: "850 CVE", img: vegRice },
    { name: "Mafé au Poisson", desc: "Guisado de amendoim com peixe sobre arroz.", price: "1 350 CVE", img: mafe },
    { name: "Ghanaian Wache", desc: "Arroz e feijão com acompanhamentos típicos.", price: "1 100 CVE", img: waakye },
    { name: "Tchep Djen", desc: "Arroz vermelho senegalês com peixe inteiro.", price: "1 450 CVE", img: tchep },
    { name: "Coconut Rice Fried Chicken", desc: "Arroz de coco com frango frito crocante.", price: "1 250 CVE", img: coconut },
  ],
  "Pequeno-Almoço": [
    { name: "Akara Beans Cake & Akamu", desc: "Bolinhos de feijão fritos servidos com mingau de milho.", price: "450 CVE", img: akara },
    { name: "White Rice Porridge & Beans", desc: "Mingau de arroz cremoso com feijão temperado.", price: "400 CVE", img: porridge },
  ],
  "Café & Bebidas": [
    { name: "Café Africano", desc: "Espresso encorpado de grãos africanos selecionados.", price: "150 CVE", img: coffee },
    { name: "Bissap (Hibiscus)", desc: "Sumo natural de hibisco gelado com hortelã.", price: "300 CVE", img: bissap },
    { name: "Sumo de Tamarindo", desc: "Refrescante sumo natural feito na casa.", price: "300 CVE", img: bissap },
  ],
};

export const gallery = [
  { src: tchep, alt: "Tchep Djen — arroz vermelho com peixe" },
  { src: mafe, alt: "Mafé au poisson" },
  { src: coconut, alt: "Coconut rice com frango" },
  { src: waakye, alt: "Wache do Gana" },
  { src: bife, alt: "Bife grelhado" },
  { src: vegRice, alt: "Arroz com legumes" },
  { src: coffee, alt: "Café africano artesanal" },
  { src: bissap, alt: "Bissap gelado" },
  { src: akara, alt: "Akara com akamu" },
];

export const INFO = {
  name: "Kampion African Kitchen & Café",
  address: "Achada Santo António, Praia, Cabo Verde",
  hours: "Todos os dias · 09:00 — 00:00",
  phone: "+238 939 32 27",
  phoneRaw: "2389393227",
  email: "contacto@kampionafricankitchen.cv",
};
