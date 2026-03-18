import Topo from "../../componentes/Topo"

export default function Menu(){

const pizzas=[

{
nome:"Calabresa",
img:"/calabrasa-3.jpg",
preco:"39,90"
},

{
nome:"Mussarela",
img:"/mussarela.png",
preco:"36,90"
},

{
nome:"Portuguesa",
img:"/pizza-portuguesa.jpg",
preco:"42,90"
},

{
nome:"Frango Catupiry",
img:"/Pizza-de-frango-com-catupiry.jpg",
preco:"44,90"
},

{
nome:"Quatro Queijos",
img:"/quatro-queijo.jpg",
preco:"46,90"
},

{
nome:"Chocolate",
img:"/chocolate.jpg",
preco:"35,90"
}

]

return(

<>

{/* imagem fundo */}
<img
className="w-full h-full fixed -z-20 object-cover"
src="/fundo_menu.jpg"
/>

{/* overlay escuro */}
<div className="w-full h-full fixed -z-10 bg-black/50"></div>

<Topo pagina="MENU"/>

<div className="p-20">

<div className="grid grid-cols-3 gap-10">

{pizzas.map((pizza,index)=>(

<div
key={index}
className="bg-neutral-900/90 p-5 rounded-2xl text-white hover:scale-105 transition duration-300 shadow-2xl"
>

<img
className="rounded-xl w-full h-48 object-cover"
src={pizza.img}
/>

<h2 className="text-2xl mt-3 text-yellow-400 font-bold">
{pizza.nome}
</h2>

<p className="text-red-500 text-xl mt-2 font-semibold">
R$ {pizza.preco}
</p>

<button className="bg-red-600 w-full h-10 rounded-xl mt-3 hover:bg-red-700 transition">

Pedir

</button>

</div>

))}

</div>

</div>

</>

)

}
