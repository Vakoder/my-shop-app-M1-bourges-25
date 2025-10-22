import { useState, type ComponentProps, type FC } from "react";
import "./Content.css"
import { Product, type ProductType } from "./Product";


export const Content: FC <ComponentProps<'div'>> = (props) => {
  const [products] = useState<ProductType[]>([
    {
        id: "1",
        name: "White T-shirt",
        price: 10,
        description: "A plain white t-shirt made of 100% cotton.",
        photo: "./src/assets/whiteshirt.jpg"
    },
    {
        id: "2",
        name: "Black Parka",
        price: 50,
        description: "A warm black parka jacket.",
        photo: "./src/assets/parka.jpg"
    }

]);

  return (
        <div {...props}>
        <h2>Man products</h2>
        <section>
            <div className="d-flex p-2 gap-5">
                {products.map(product => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </section>
        </div>

  );
}


