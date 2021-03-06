import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";
import Admin from "../auth/Admin";

const UpdateProduct = (props) => {
  const [name, setName] = React.useState("");
  const [paragraph, setparagraph] = React.useState("");
  const [imgs, setimgs] = React.useState("");

  const [price, setPrice] = React.useState(0);
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.name);
      setimgs(data.imgs);
      setparagraph(data.paragraph);
//      console.log(data.paragraph);
      setPrice(data.price);
    });
  }, []);
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            
          />
          <TextField
            label="paragraph"
            fullWidth
            value={paragraph}
            onChange={(e) => {
              setparagraph(e.target.value);
            }}
            
          />
          <TextField
            label="imgs"
            fullWidth
            value={imgs}
            onChange={(e) => {
              setimgs(e.target.value);
            }}
            
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              productService
                .updateProduct(id, { name, price ,paragraph,imgs,})
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default UpdateProduct;
