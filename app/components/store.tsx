import Link from "next/link";
export const Store = () => {
    return (
        <div>
        <div className="h-screen">
            <h1 className=" text-6xl font-bold  flex justify-center items-center py-20  ">Store</h1>
            <h5 className=" text-xl flex justify-center items-center py-5 ">to shop our product click here </h5>
            <Link className="flex justify-center items-center text-3xl decoration-green-400  hover:underline" href="https://infomgckarachi.wixsite.com/zarak/category/all-products">Zarak Pakistan</Link>
            <Link className="flex justify-center items-center text-3xl  decoration-green-800 hover:underline py-15" href="https://zarak-arabia.company.site/products">Zarak Arabia</Link>
        </div>
        </div>
    );
}