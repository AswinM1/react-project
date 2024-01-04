import React from 'react';
import { Card, CardContent, CardActions, Button, Grid, Typography } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', price: '$20' },
  { id: 2, name: 'Product 2', price: '$30' },
  { id: 3, name: 'Product 3', price: '$25' },
  { id: 4, name: 'Product 4', price: '$15' },
  { id: 5, name: 'Product 5', price: '$40' },
  { id: 6, name: 'Product 6', price: '$22' },
  // Add more products as needed
];

const Products = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography color="text.secondary">{`Price: ${product.price}`}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
