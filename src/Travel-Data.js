import React from "react";
import Card from "react-bootstrap/Card"
import ReviewModal from "./Review-Modal";



export default class TravelData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.travel.id,
            destination: props.travel.destination,
            img: props.travel.img,
            visitYear: props.travel.visitYear,
            bio: props.travel.bio
            
        }
    };
    
    //TODO This is the entire travel portion of the app it takes props from each trip in the travel list object.
    render(){
    return (
     
        <Card>
            <div className="cardBox">
                <Card.Img variant="top" className="cardImg" src={this.state.img} width="200" alt={this.state.destination} />
                <Card.Text className="cardText">{this.state.bio}</Card.Text>
                
            </div>
           
            <Card.Body>
                
                <Card.Title className="card-title"><b>{this.state.destination} || {this.state.visitYear}</b></Card.Title>
              
            </Card.Body>
            < ReviewModal key={this.props.travel.id} destination={this.props.travel.destination} />
            <br></br>
            
        </Card>
     
    );
    }
}