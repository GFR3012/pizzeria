import Topo from "../componentes/Topo"

export default function Home(){

return(

<>

<img
className="w-full h-full fixed -z-10 object-cover brightness-50"
src="/fundo.jpg"
/>

<Topo pagina="HOME"/>

<div className="flex flex-col justify-center h-[70vh] ms-40">

<h1 className="text-7xl text-yellow-400 font-bold">
PIZZA ITALIANO
</h1>

<h2 className="text-3xl text-white mt-3">
A melhor pizza da cidade 🍕
</h2>

<p className="text-white w-150 mt-5 text-lg">

Peça agora e receba uma pizza quentinha feita com
ingredientes selecionados e muito sabor.
Entrega rápida e qualidade garantida.

</p>

<div className="mt-10">

<input
className="text-white p-3 rounded-xl bg-neutral-800 w-100 h-12 mb-3 block"
type="text"
placeholder="Seu nome"
/>

<input
className="text-white p-3 rounded-xl bg-neutral-800 w-100 h-12"
type="text"
placeholder="Seu pedido"
/>

<button className="bg-red-600 w-40 h-12 rounded-xl mt-5 ms-5 hover:bg-red-700 transition">

Fazer Pedido

</button>

</div>

</div>

</>

)

}