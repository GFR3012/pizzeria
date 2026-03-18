import Link from "next/link"

type TopoProps = {
  pagina: string
}

export default function Topo({ pagina }: TopoProps){

return(

<main className="w-full h-40">

<img className="h-40 absolute" src="/logo.png"/>

<ul className="font-serif text-2xl text-white inline-flex ms-50 mt-10">

<li className="me-8 cursor-pointer hover:text-red-600">
<Link href="/">HOME</Link>
</li>

<li className="me-8 cursor-pointer hover:text-red-600">
<Link href="/menu">MENU</Link>
</li>

<li className="me-8 cursor-pointer hover:text-red-600">
<Link href="/promo">PROMO</Link>
</li>

<li className="me-8 cursor-pointer hover:text-red-600">
<Link href="/contato">CONTATO</Link>
</li>

<li className="me-8 cursor-pointer hover:text-red-600">
<Link href="/entrar">ENTRAR</Link>
</li>

</ul>

<label className="block float-right me-100 mt-8">
          <input
            className=" p-2 rounded-2xl bg-mist-400 w-160 h-10 mt-5"
            defaultValue="🔍 "
            type="text"
            placeholder="🔍"
          />
        </label>

</main>

)
}