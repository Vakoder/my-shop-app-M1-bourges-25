import { useEffect, useState, type FC } from "react";
import { Box, Typography } from '@mui/material';
import "./Content.css"
import { Product, type ProductType } from "./Product";


export const Content: FC = () => {

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
        <Box className="Content">
            <Typography variant="h5" component="h2" gutterBottom>
                Current Time: {timeToDisplay}
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
                Man products
            </Typography>
            <Box component="section">
                <Box sx={{ display: 'flex', gap: 3, p: 2, flexWrap: 'wrap' }}>
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </Box>
            </Box>
        </Box>
  );
}


