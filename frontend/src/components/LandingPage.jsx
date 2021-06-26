import React, { useEffect } from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../styling.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css"
 




export default function LandingPage(props)

{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img:"https://wallpapercave.com/wp/wp1882738.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:"https://wallpaperaccess.com/full/1602660.jpg"
        }
    ]
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div><Carousel animation="slide" interval="5000" >
            {
                items.map( (item, i) => <Item key={i} item={item}  /> )
            }
        </Carousel>
        <div className="descript row-r">
           
            <p className="d-p" data-aos="fade-left">
              To me, accessorizing is the most fun part of an outfit. While I don't think you can't rely on accessories to make a dress that isn't working work, I do love jewelry and handbags more than anything.
            </p>
            <img src={require('./desc1.jpg')} data-aos="fade-right" alt="" />
          </div>
          <div className="descript">
            <p className="d-p" data-aos="fade-up">
              To me, accessorizing is the most fun part of an outfit. While I don't think you can't rely on accessories to make a dress that isn't working work, I do love jewelry and handbags more than anything.
            </p>
            <img src={require('./desc1.jpg')} data-aos="fade-down" alt="" />
          </div>
          {
              <div className="footer">
              <div className="f-logo">NSR</div>
              <hr />
              <div className="f-desc">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Excepturi reiciendis praesentium at explicabo hic sint <br />optio. A quibusdam unde assumenda!</p>
              </div>
              <div className="d-icons">
                <h2>Contact US:</h2>
                <i className="fa fa-facebook" />
                <i className="fa fa-twitter" />
                <i className="fa fa-instagram" />
                <i className="fa fa-github" />
              </div>
            </div>
          
          }
           
       </div>
    )
}

function Item(props)
{
    return (
   <Paper style={{minHeight:"70vh",backgroundRepeat:"no-repeat",backgroundImage: `url(${props.item.img})`}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

