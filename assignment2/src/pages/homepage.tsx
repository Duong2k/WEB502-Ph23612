import Product from "./product"
import { useState, useEffect } from "react"
import { IProduct } from "../model"
import { getProducts } from "../api/product"


const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getProducts()
        setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return <div className="px-[30px]">
        <h1 className="pb-5 text-[#444444] text-[22px]">ĐIỆN THOẠI NỔI BẬT</h1>
        <div className="grid grid-cols-4 gap-4">
            {products.map(product => <Product data={product} key={product.id} />)}
        </div>
    </div>
}

export default HomePage