import React from "react";
import { Link } from "react-router-dom";

import { Grid, Button } from "@material-ui/core";
import productService from "../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "../../styling.css";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  
  media: {
    height: 140,
  },
});
const handlecart=()=>{
  console.log("pressed");
}

const ProDisplay = (props) => {
  const product = props.location.productname.product;
  console.log(props);
  const classes = useStyles();
  return (

    <div className="prodisplay"  >

     
   <>
     <div  style={{minInlineSize:"20pc",width:"8rem"}}>
     
       <div className="prnt" style={{display:"flex"}} >
    <div className="imgdiv">

      <img src={product.imgs}></img>
    </div>

    <div className="desc">
    <p style={{ fontWeight: "bold"}}>name:</p>
      <p className="nm">{product.name}</p>
    
      <p style={{ fontWeight: "bold"}}>price:</p>
    <p className="pr">
      
    {product.price}
    </p>
    
    <p style={{ fontWeight: "bold"}}>Description</p>
    <p style={{marginBottom:"20px"}} className="stylep">
      {product.paragraph}</p>
    <Button size="small" className="cartBtn" color="primary"  variant="contained"
onClick={()=>{
  console.log(product._id);
  {
    var names = [];
    console.log(sessionStorage.length);
   
    names[(sessionStorage.length)]=[product._id,product.companyName,product.number=1,product.imgs,product.price];
    var n=sessionStorage.length;
    
      console.log(n)
      console.log("outttt")
      let c=1
      if(!sessionStorage.length){
        console.log( names[(sessionStorage.length)][0])
        console.log("first time")
        console.log("innnnnnnouttting")
          sessionStorage.setItem('product_id['+JSON.stringify({n})+']', JSON.stringify(names[(sessionStorage.length)]));
          console.log(sessionStorage.length);
          

       }else{
      for(let n=0;n<(sessionStorage.length)||n==0;n++){
        let a=sessionStorage.getItem('product_id['+JSON.stringify({n})+']')
        console.log(sessionStorage.getItem('product_id['+JSON.stringify({n})+']'))
        console.log(n,"values chk")
        a=JSON.parse(a) 
        console.log(a,"checking point")

       if(a[0]===product._id){
        console.log(a[2]++,"value increment ")
        console.log(names[(sessionStorage.length)][2]=a[2])
        c=0
        sessionStorage.setItem('product_id['+JSON.stringify({n})+']', JSON.stringify(names[(sessionStorage.length)]));
break;
       }

      
      
      }
      
    if((c)&&(sessionStorage.length)){
      var n=sessionStorage.length;
      console.log("the n inside of lst f",n)
console.log("inside of that if")
      sessionStorage.setItem('product_id['+JSON.stringify({n})+']', JSON.stringify(names[(sessionStorage.length)])); 
       console.log(sessionStorage.length);
    console.log("in")

}
    }
    

    
  }
}} >
          add to cart
        </Button>
       
       
    </div>


  
        </div>
      
    
   </div></>
    </div>
   
  );
};

export default withRouter(ProDisplay);
