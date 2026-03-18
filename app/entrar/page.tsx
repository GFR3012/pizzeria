import Topo from "../../componentes/Topo"

export default function Entrar(){

return(

<>

{/* fundo */}
<img
className="w-full h-full fixed -z-20 object-cover"
src="/fundo_menu.jpg"
/>

{/* overlay */}
<div className="w-full h-full fixed -z-10 bg-black/50"></div>

<Topo pagina="ENTRAR"/>

<div className="flex justify-center items-center h-[70vh]">

<div className="bg-neutral-900/90 p-10 rounded-2xl text-white w-400px shadow-2xl">

<h1 className="text-4xl text-yellow-400 mb-8 font-bold text-center">
Login
</h1>

<input
className="w-full h-12 p-3 rounded-xl bg-neutral-800 mb-3 outline-none focus:ring-2 focus:ring-red-500"
type="text"
placeholder="Email"
/>

<input
className="w-full h-12 p-3 rounded-xl bg-neutral-800 mb-5 outline-none focus:ring-2 focus:ring-red-500"
type="password"
placeholder="Senha"
/>

<button className="cursor-pointer bg-red-600 w-full h-12 rounded-xl hover:bg-red-700 transition font-semibold">

Entrar

</button>

<p className="text-center mt-5 text-gray-400">

Não tem conta?

<span className="text-yellow-400 cursor-pointer hover:underline ms-2">

Cadastrar

</span>

</p>

</div>

</div>

</>

)

}