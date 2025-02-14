import Card from "@/app/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <nav className="w-[100%] bg-black p-4 flex items-center justify-center">
        <h1 className="text-white font-bold text-[1.5em]">TO DO LIST</h1>
      </nav>
      <main className="flex p-10 flex-col gap-8 row-start-2 items-center sm:items-start w-[100%]">
        <div className="w-[100%] flex flex-row justify-between">
          <h2 className="text-black font-bold text-[1.5em]">Hello, welcome!</h2>
          <a className="cursor-pointer text-white bg-pink-700 font-bold p-2 rounded-md shadow-md">New task</a>
        </div>
        <div className="bg-zinc-100 w-[100%] h-screen rounded-md p-10 flex flex-col gap-4">
          <Card title="Atividade Inglês" data="FEB, 22" status="em andamento" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."/>
          <Card title="Profile hackatoon" data="FEB, 14" status="finalizado" description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the."/>
          <Card title="Lavar a louça" data="FEB, 09" status="para fazer" description="Release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}