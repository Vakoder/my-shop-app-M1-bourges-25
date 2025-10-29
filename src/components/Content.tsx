import { useEffect, useState, type ComponentProps, type FC } from "react";
import "./Content.css"
import { Product, type ProductType } from "./Product";


export const Content: FC <ComponentProps<'div'>> = (props) => {

    const [timeToDisplay,setTimeToDisplay] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeToDisplay(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            const products : ProductType[] = data.slice(0, 2).map((post: any) => {
                return {
                    id: post.id,
                    name: post.title,
                    price: Math.round(Math.random() * 100),
                    description: post.body,
                    photo: "https://picsum.photos/seed/${post.id}/200"
                }
            });
            setProducts(products);
        };
        loadProducts();
    }, []);

  return (
        <div {...props}>
        <h2>Current Time: {timeToDisplay}</h2>
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


