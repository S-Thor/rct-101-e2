import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Flex, Grid } from "@chakra-ui/react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  const [products, setProducts] = useState([]);

  return (
    <Flex>
      <AddProduct/>
      <Grid>{products.map((p) => (
          <Product>
        ))}
      </Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;
