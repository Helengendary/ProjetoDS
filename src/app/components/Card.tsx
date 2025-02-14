"use client"

type CardData = {
    title: string;
    data: string;
    status: string;
    description: string;
}

const limit = 25

const Card = ( {title, description, data, status} : CardData) => {
    return (
        <div className={styles.container}> 
            <div className="flex flex-row justify-between w-[100%] mr-10 ml-10">
                <div className="flex flex-row">
                    <div className="bg-pink-800 w-8 mr-4"></div>
                    <div>
                        <h1 className={styles.title} >{title}</h1>
                        <p className="max-w-[90%] text-zinc-500">{description}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end - gap-3">
                    <p>{data}</p>
                    <div className={status == "finalizado" ? "bg-green-400 w-6 h-6 rounded-full" : status == "em andamento" ? "bg-yellow-400 w-6 h-6 rounded-full" : "bg-red-400 w-6 h-6 rounded-full"}></div>
                </div>
            </div>
        </div>
        
    );
}

const styles = {
    container:
      "flex bg-white flex-row justify-center items-center dark:bg-neutral-700 hover:dark:bg-zinc-900 p-4 border-b-2 ease-in-out duration-300 hover:bg-zinc-200 hover:border-zinc-300 cursor-pointer",
    img: "rounded h-32 w-32 object-cover mr-5",
    title: "text-blue1 dark:text-blue5 text-[1.2em] font-semibold",
    question:"w-full dark:text-blue4 text-sm text-gray-700 overflow-hidden overflow-ellipsis whitespace-nowrap",
  };


export default Card;