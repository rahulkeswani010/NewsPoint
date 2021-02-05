import React from 'react';
import { Button, CardImg } from "react-bootstrap";
import '../App.css';
import {Card} from 'react-bootstrap';
function Cards(props){
    const readLater={
        description:`${props.description}`,
        url:`${props.url}`
    }
    const readLaterHandler=()=>{
        fetch('http://localhost:3001/description', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(readLater),
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    return(
        <Card className="card">
            <CardImg src={props.image} className="image"/>
            <Card.Text>{props.title}</Card.Text>
            <Button variant="primary" onClick={readLaterHandler}>Read Later</Button>
        </Card>
    );
}
export default Cards;