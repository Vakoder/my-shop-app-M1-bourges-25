
import type { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import "./Product.css"
export type ProductType = {
    id : string,
    name : string,
    price : number,
    description : string,
    photo : string
}
export type ProductProps = {
    product : ProductType
}
export const Product: FC<ProductProps> = ({product}: ProductProps) => {
    return (
        <Card sx={{ maxWidth: 300, m: 1 }}>
            <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                    {product.name}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="200"
                image={product.photo}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                    {product.price}€
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    );
}