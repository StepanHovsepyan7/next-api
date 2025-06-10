'use client'

import React, { useEffect, useState } from 'react'

interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
}

function Search() {
    const [search, setSearch] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            const timer = setTimeout(() => {
                fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
                    .then(res => res.json())
                    .then(res => setSearch(res.products));
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setSearch([]);
        }
    }, [searchQuery]);

    return (
        <div>
            <div>
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="inp"
                    type="text"
                    placeholder="Search..."
                />
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-4">
                {search.map((e: Product) => (
                    <div className="cursor-pointer border-2 p-2 rounded-3xl card" key={e.id}>
                        <img className="h-[300px] w-[300px] object-contain" src={e.images[0]} alt={e.title} />
                        <h3 className="font-bold">{e.title}</h3>
                        <span>Price: {e.price} $</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
