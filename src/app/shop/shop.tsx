'use client'

import Card, { CardProps } from "@/components/card";
import Search from "@/components/search";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Shop() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setData(res.products));
    }, [])

    return (
        <div>


            <div className="max-w-[1440px] m-auto p-2">
                <div className="">
                    <Search />
                </div>
            </div>


            <div className="max-w-[1440px] m-auto p-2">
                <div className="flex flex-wrap justify-center text-center items-center gap-5 mt-5">
                    {data.map((e: CardProps) => {
                        return (
                            <Card key={e.id} id={e.id} title={e.title} price={e.price} images={e.images[0]} />
                        )
                    })}
                </div>

            </div>
        </div>
    );
}
