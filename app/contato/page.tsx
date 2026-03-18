import Topo from "../../componentes/Topo"

export default function Contato(){

return(

<>

{/* fundo */}
<img
className="w-full h-full fixed -z-20 object-cover"
src="/fundo_menu.jpg"
/>

{/* overlay */}
<div className="w-full h-full fixed -z-10 bg-black/50"></div>

<Topo pagina="CONTATO"/>

<div className="flex justify-center mt-20">

<div className="bg-neutral-900/90 p-10 rounded-2xl text-white w-600px shadow-2xl">

<h1 className="text-4xl text-yellow-400 mb-8 font-bold">
Fale Conosco
</h1>

<p className="text-xl">
📞 Telefone: (12) 4002-8922
</p>

<p className="text-xl mt-3">
📍 Endereço: Rua das Pizzas, 123

<div className="mt-10">

<iframe
className="w-full h-80 rounded-2xl"
src="https://www.google.com/maps?q=Avenida+Paulista,São+Paulo&output=embed"
loading="lazy"
></iframe>

</div>

</p>

<p className="text-xl mt-3">
🕒 Horário: 18:00 até 23:30
</p>

<p className="text-xl mt-3">
💬 WhatsApp: (12) 99569-1297
</p>

<div className="mt-10">

<input
className="w-full h-12 p-3 rounded-xl bg-neutral-800 mb-3 outline-none focus:ring-2 focus:ring-red-500"
type="text"
placeholder="Seu nome"
/>

<input
className="w-full h-12 p-3 rounded-xl bg-neutral-800 mb-3 outline-none focus:ring-2 focus:ring-red-500"
type="text"
placeholder="Seu email"
/>

<textarea
className="w-full h-32 p-3 rounded-xl bg-neutral-800 outline-none focus:ring-2 focus:ring-red-500"
placeholder="Sua mensagem"
/>

<button className="bg-red-600 w-full h-12 rounded-xl mt-5  hover:bg-red-700 transition font-semibold">

Enviar mensagem

</button>

</div>

</div>

</div>

</>

)

}