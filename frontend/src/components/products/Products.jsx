import React from "react";
import SingleProduct from "./SingleProduct";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "./../../services/ProductsService";
import userService from "../../services/UserService";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styling.css";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
{if(!sessionStorage.length){ let a=0
  localStorage.setItem('totals',a)}}
const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [company,setCompany ] = React.useState("default");

  const [perPage, setPerPage] = React.useState(10);
  const getData = () => {
    productService
      .getProducts(page, perPage)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  const handleNewProductClick = () => {
    console.log(props,"products waka jji");
    props.history.push("/products/new");
  };
  console.log(props,products,"products waka jji");
  return (
    <div style={{ marginTop:"7rem" }}>
      <h1>Products</h1>
      Records Per Page:{" "}
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="2">Two</option>
        <option value="10">Ten</option>
      </select>
      <br/>
      <p className="compName">Company Name:</p>
      <select className="comp"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="default">default</option>
        <option value="honda">honda</option>
        <option value="toyota">toyota</option>
      </select>
      {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}
      {products.length == 0 ? (
        <p>There are no products</p>
      ) : (
        <div  style={{display:"flex",justifyContent:"center"}} className="row"  >
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} company={company} />
          ))}
        </div>
      )}
      <Grid item xs={12} style={{marginTop:"10pc"}}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/products/" + value);
          }}
        />{" "}
        Total: {total} Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + products.length}
      </Grid>

      
    </div>
  );
};

export default Products;
