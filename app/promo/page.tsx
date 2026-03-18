import Topo from "../../componentes/Topo"

export default function Promo(){

const promos=[

{
nome:"Calabresa",
img:"/calabrasa-3.jpg",
preco:"39,90",
promo:"29,90"
},

{
nome:"Mussarela",
img:"/mussarela.png",
preco:"36,90",
promo:"27,90"
},

{
nome:"Portuguesa",
img:"/pizza-portuguesa.jpg",
preco:"42,90",
promo:"32,90"
},

{
nome:"Frango Catupiry",
img:"/Pizza-de-frango-com-catupiry.jpg",
preco:"44,90",
promo:"34,90"
}

]

return(

<>

{/* fundo */}
<img
className="w-full h-full fixed -z-20 object-cover"
src="/fundo_menu.jpg"
/>

{/* overlay escuro */}
<div className="w-full h-full fixed -z-10 bg-black/50"></div>

<Topo pagina="PROMOÇÕES"/>

<div className="p-20">

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

{promos.map((pizza,index)=>(

<div
key={index}
className="bg-neutral-900/90 p-5 rounded-2xl text-white relative hover:scale-105 transition duration-300 shadow-2xl"
>

<span className="absolute top-3 left-3 bg-red-600 px-3 py-1 rounded-lg font-bold">

🔥 PROMO

</span>

<img
className="rounded-xl w-full h-60 object-cover"
src={pizza.img}
/>

<h2 className="text-3xl mt-3 text-yellow-400 font-bold">
{pizza.nome}
</h2>

<p className="text-gray-400 line-through text-lg">
R$ {pizza.preco}
</p>

<p className="text-red-500 text-3xl font-bold">
R$ {pizza.promo}
</p>

<button className="bg-red-600 w-full h-12 rounded-xl mt-3 hover:bg-red-700 transition font-semibold">

Pedir promoção

</button>

</div>

))}

</div>

</div>

</>

)

}
