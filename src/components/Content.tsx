import { useEffect, useState, type ComponentProps, type FC } from "react";
import "./Content.css"
import { Product, type ProductType } from "./Product";


export const Content: FC <ComponentProps<'div'>> = (props) => {

  const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const img = await fetch("https://jsonplaceholder.typicode.com/photos");
            const data = await response.json();
            const images = await img.json();
            const products : ProductType[] = data.slice(0, 2).map((post: any, index: number) => {
                return {
                    id: post.id,
                    name: post.title,
                    price: Math.round(Math.random() * 100),
                    description: post.body,
                    photo: images[index].url
                }
            });
            setProducts(products);
        };
        loadProducts();
    }, []);

  return (
        <div {...props}>
        <h2>Man products</h2>
        <section>
            <div className="d-flex p-2 gap-5">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </section>
        </div>

  );
}


