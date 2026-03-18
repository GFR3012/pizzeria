import "./globals.css";

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {

return (

<html lang="pt-br">

<body>

<img
className="h-40 absolute"
src="/logo.png"
/>

{children}

</body>

</html>

);
}