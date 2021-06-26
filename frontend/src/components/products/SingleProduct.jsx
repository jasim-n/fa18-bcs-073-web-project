import React from "react";
import { Link } from "react-router-dom";

import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
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
const SingleProduct = (props) => {
  const { product, onDelete, history,company } = props;
  console.log(props,"this is in ghbdcuyedhunj38932iw3e9wiow9ik");
  const classes = useStyles();
  return (

    <Grid style={{margin:"2vh"}} className="cl"  >
      
      {product.companyName===company &&(
    <> <div  >
  
   <Card className={"" }>
   <Link style={{textDecoration:"none"}} to={ { 
 					 pathname: "/Prodisplay", 
            productname:{product},
            

} }>
     <CardActionArea>
      <CardMedia
          className={classes.media }
          image={product.imgs}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  className=""  gutterBottom variant="h5" component="h2">
       {product.name}
          </Typography>
          <Typography className="" gutterBottom variant="h5" component="h2">
       {product.price}
          </Typography>
          <Typography  className="" gutterBottom variant="h5" component="h2">
       {product.companyName}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        
         { 
       userService.isAdmin() && (
         <>
           <Button
             variant="contained"
             color="primary"
             onClick={(e) => {
               console.log("navigate to update");
               history.push("/products/update/" + product._id);
             }}
           >
             Edit
           </Button>{" "}
           <Button
             variant="contained"
             color="secondary"
             onClick={(e) => {
               productService
                 .deleteProduct(product._id)
                 .then((data) => {
                   console.log(data);
                   onDelete();
                 })
                 .catch((err) => {
                   console.log(err);
                 });
             }}
           >
             Delete
           </Button>
         </>
       )}
      </CardActions>
      </Link>
      <Button size="small" style={{textAlign:"center"}}  variant="contained"
             color="primary" onClick={()=>{
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
            }}>
          add to cart
        </Button>
     
    </Card>
   
     
    </div></>)}
    {company==="default" &&(<>
     <div  style={{minInlineSize:"20pc",width:"8rem"}}>
   
     <Card className={""} style={{width:"18rem"}}>
     <Link style={{textDecoration:"none"}} to={ { 
 					 pathname: "/Prodisplay", 
            productname:{product},
            

} }>
     <CardActionArea>
      <CardMedia
          className={classes.media}
          image={product.imgs}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
       {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
       {product.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
       {product.companyName}
          </Typography>

        </CardContent>
       
      </CardActionArea>
      </Link>
      <CardActions>
     
         { 
       userService.isAdmin() && (
         <>
           <Button
             variant="contained"
             color="primary"
             onClick={(e) => {
               console.log("navigate to update");
               history.push("/products/update/" + product._id);
             }}
           >
             Edit
           </Button>{" "}
           <Button
             variant="contained"
             color="secondary"
             onClick={(e) => {
               productService
                 .deleteProduct(product._id)
                 .then((data) => {
                   console.log(data);
                   onDelete();
                 })
                 .catch((err) => {
                   console.log(err);
                 });
             }}
           >
             Delete
           </Button>
         </>
       )}
      
   
      <Button size="small" style={{textAlign:"center"}} color="primary"  variant="contained"
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
        </CardActions></Card>
    
   </div></>)}
    </Grid>
   
  );
};

export default withRouter(SingleProduct);
