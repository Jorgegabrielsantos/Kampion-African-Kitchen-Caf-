import fufu from "@/assets/fufu-eguci.jpg";
import poundedYam from "@/assets/pounded-yam.jpg";
import waakye from "@/assets/waakye.jpg";
import jollof from "@/assets/jollof.jpg";
import friedRicePlantain from "@/assets/fried-rice-plantain.jpg";
import friedRiceChicken from "@/assets/fried-rice-chicken.jpg";
import yassa from "@/assets/yassa.jpg";
import maafe from "@/assets/maafe.jpg";
import soupouKandja from "@/assets/soupou-kandja.jpg";
import tchepDjen from "@/assets/tchep-djen.jpg";
import catxupa from "@/assets/catxupa.jpg";
import cuzcuz from "@/assets/cuzcuz.jpg";
import cowLegPepper from "@/assets/cow-leg-pepper.jpg";
import goatPepper from "@/assets/goat-pepper.jpg";
import assortedPepper from "@/assets/assorted-pepper.jpg";
import sarabudja from "@/assets/sarabudja.jpg";
import cowSkin from "@/assets/cow-skin.jpg";
import isiEwu from "@/assets/isi-ewu.jpg";
import shawarma from "@/assets/shawarma.jpg";
import burger from "@/assets/burger.jpg";
import chickenFries from "@/assets/chicken-fries.jpg";
import fishFries from "@/assets/fish-fries.jpg";
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
    { name: "Soupou Kandja", desc: "Guisado senegalês de quiabo com peixe, servido sobre arroz branco.", img: soupouKandja, price: "500$" },
    { name: "Tchep Djen", desc: "Arroz vermelho com peixe e legumes, prato nacional do Senegal.", img: tchepDjen, price: "500$ / 700$" },
    { name: "Catxupa", desc: "Prato nacional de Cabo Verde com milho, feijão e carnes.", img: catxupa, price: "250$ / 450$" },
    { name: "Cuzcuz", desc: "Cuscuz tradicional de milho, fofo e dourado.", img: cuzcuz, price: "300$" },
  ],
  "Sopas": [
    { name: "Cow Leg Pepper Soup", desc: "Sopa picante nigeriana com perna de vaca e especiarias.", img: cowLegPepper, price: "700$" },
    { name: "Goat Meat Pepper Soup", desc: "Sopa apimentada com carne de cabra tenra e ervas frescas.", img: goatPepper, price: "700$" },
    { name: "Assorted Meat Pepper Soup", desc: "Mistura de carnes variadas em caldo picante e aromático.", img: assortedPepper, price: "600$" },
    { name: "Sarabudja", desc: "Sopa tradicional reconfortante de sabores intensos.", img: sarabudja, price: "350$" },
    { name: "Cow Skin Sauce", desc: "Molho de pele de vaca temperado com cebolinho.", img: cowSkin, price: "100$ / unid." },
    { name: "Nigerian Isi Ewu", desc: "Iguaria nigeriana de cabeça de cabra temperada com cebola roxa.", img: isiEwu, price: "1200$" },
  ],
  "Fast-food": [
    { name: "Shawarma", desc: "Wrap recheado de carne marinada, vegetais frescos e molhos.", img: shawarma, price: "300$" },
    { name: "Hambúrguer", desc: "Pão fofo, hambúrguer suculento, queijo derretido e vegetais.", img: burger, price: "300$" },
    { name: "Chicken & Fries", desc: "Frango grelhado dourado servido com batatas fritas crocantes.", img: chickenFries, price: "500$" },
    { name: "Fish & Fries", desc: "Peixe frito estaladiço acompanhado de batatas e legumes.", img: fishFries, price: "600$" },
  ],
  "Pequeno Almoço": [
    { name: "Akara and Custard / Bread", desc: "Bolinhos de feijão fradinho com creme ou pão.", price: "350$" },
    { name: "Moimoi and Custard", desc: "Pudim de feijão cozido no vapor servido com creme.", price: "350$" },
    { name: "Fried Egg Sauce / Plantain", desc: "Ovos estrelados com molho de tomate e banana-pão.", price: "500$" },
    { name: "Beans and Custard", desc: "Feijão estufado servido com creme tradicional.", price: "" },
    { name: "Beans and Plantain", desc: "Feijão estufado com banana-pão dourada.", price: "600$" },
    { name: "Fried Egg and Fried Potatoes", desc: "Ovos estrelados com batatas fritas caseiras.", price: "450$" },
    { name: "Noodles and Fried Egg", desc: "Massa salteada coberta com ovo estrelado.", price: "350$" },
    { name: "Sandes Ovo / Carne", desc: "Sanduíche de ovo ou de carne em pão fresco.", price: "250$" },
    { name: "Quaker Oat / Egg Sauce & Plantain", desc: "Papas de aveia com molho de ovo e banana-pão.", price: "600$" },
    { name: "Cachupa Simples", desc: "Cachupa tradicional cabo-verdiana.", price: "250$" },
    { name: "Cachupa with Omelet", desc: "Cachupa refogada coberta com omelete.", price: "500$" },
    { name: "Cuzcuz", desc: "Cuscuz tradicional de milho.", price: "200$" },
    { name: "Omelet", desc: "Omelete fofa preparada na hora.", price: "300$" },
    { name: "Pancake / Tea", desc: "Panquecas servidas com chá quente.", price: "250$" },
  ],
  "Drinks": [
    { name: "Água 1.5L", desc: "Água mineral natural.", price: "150$" },
    { name: "Água 0.5L", desc: "Água mineral natural.", price: "100$" },
    { name: "Spirit", desc: "Refrigerante gaseificado.", price: "250$" },
    { name: "Coke 1.5L / 0.5L", desc: "Coca-Cola clássica.", price: "100$" },
    { name: "7up", desc: "Refrigerante de lima-limão.", price: "100$" },
    { name: "Pepsi", desc: "Refrigerante de cola.", price: "100$" },
    { name: "Sumol", desc: "Sumo gaseificado de fruta.", price: "100$" },
    { name: "Maaza", desc: "Néctar de manga indiano.", price: "150$" },
    { name: "Compal", desc: "Sumo de fruta natural.", price: "150$" },
    { name: "Malta", desc: "Bebida de malte sem álcool.", price: "150$" },
    { name: "Mega Force", desc: "Bebida energética.", price: "100$" },
    { name: "Somersby", desc: "Cidra refrescante.", price: "200$" },
    { name: "D'nos", desc: "Bebida refrescante.", price: "140$" },
    { name: "Vinho Tinto", desc: "Copo de vinho tinto.", price: "200$" },
    { name: "Vinho Branco", desc: "Copo de vinho branco.", price: "200$" },
    { name: "Super Bock", desc: "Cerveja portuguesa.", price: "160$" },
    { name: "Strela", desc: "Cerveja cabo-verdiana.", price: "150$" },
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
];

export const INFO = {
  name: "Kampion African Kitchen & Café",
  address: "Achada Santo António, Praia, Cabo Verde",
  hours: "Todos os dias · 09:00 — 00:00",
  phone: "+238 939 32 27",
  phoneRaw: "2389393227",
  email: "contacto@kampionafricankitchen.cv",
};
