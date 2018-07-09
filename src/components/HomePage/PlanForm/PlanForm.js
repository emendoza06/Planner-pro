import React, { Component} from 'react'; 
import './PlanForm.css';
import Itinerary from './../../Itinerary/Itinerary';




import axios from 'axios';

class PlanForm extends Component { 

    state = { 
        CheckIn: '', 
        CheckOut: '', 
        Adults: '', 
        Kids: '', 
        Email: '', 
        Budget: '',
        Destination: '',
        
    }

    ChangeHandler = (event) => { 
        const name = event.target.name;
        const value = event.target.value;

        
        this.setState(
            {
                [name]:value,
                
              
               
            }
           
        )
        console.log("ChangeHandler " + this.state.CheckIn, this.state.CheckOut, this.state.Adults, this.state.Kids, this.state.Email, this.state.Budget)
    
        
        
    }

    submitPlanHandler = (event) => { 
        event.preventDefault();
        const plan = { 
            CheckIn: this.state.CheckIn,
            CheckOut: this.state.CheckOut,
            Adults: this.state.Adults,
            Kids: this.state.Kids,
            Email: this.state.Email, 
            Budget: this.state.Email,
            Destination: this.state.Destination
        }    
           
   
        axios.post('https://localhost:8080/', plan)
        .then(response => { 
            console.log("user created!");
        }).catch(error => { 
            console.log("this was an error");
        })

        console.log("Submit " + plan.Destination);
       
      
        
    }
    

    


    render(){ 
        return(
            <div>
                    <div className="w3-container w3-white w3-padding-16">
                        <form action='../../Itinerary/Itinerary.js' onSubmit={this.submitPlanHandler}>
                        <div className="w3-row-padding" >
                            <div className="w3-half w3-margin-bottom">
                            <label><i className="fa fa-calendar-o"></i> Check In</label>
                            <input onChange = {this.ChangeHandler} value = {this.state.CheckIn} className="w3-input w3-border" type="date" placeholder="MM/DD/YYYY" name="CheckIn" required/>
                            </div>
                            
                            <div className="w3-half">
                            <label><i className="fa fa-calendar-o"></i> Check Out</label>
                            <input onChange = {this.ChangeHandler} value={this.state.CheckOut} className="w3-input w3-border" type="date" placeholder="MM/DD/YYYY" name="CheckOut" required/>
                            </div>
                        </div>
                        <div className="w3-row-padding" id="div-margin-8" >
                            <div className="w3-half w3-margin-bottom">
                            <label><i className="fa fa-male"></i> Adults</label>
                            <input onChange = {this.ChangeHandler} value={this.state.Adults} className="w3-input w3-border" type="number"  name="Adults" min="1" max="6"/>
                            </div>
                            <div className="w3-half">
                            <label><i className="fa fa-child"></i> Kids</label>
                            <input onChange = {this.ChangeHandler} value={this.state.Kids} className="w3-input w3-border" type="number"  name="Kids" min="0" max="6"/>
                            </div>
                            <div className="">
                            <label><i className="w3-half w3-margin-bottom"></i> Email</label>
                            <input onChange = {this.ChangeHandler} value={this.state.Email} className="w3-input w3-border" type="email" placeholder="Email" name="Email" required/>
                            </div>
                        <div className="w3-half w3-margin-bottom">
                        <label><i className=""></i> Budget</label>
                        <input onChange = {this.ChangeHandler} value={this.state.Budget} className="w3-input w3-border" type="range" placeholder="Budget" name="Budget" required/>
                        </div>
                        <div className="w3-half w3-margin-bottom">
                        <label><i className=""></i> Destination</label>
                        <input onChange = {this.ChangeHandler} value={this.state.Destination} className="w3-input w3-border" type="text" placeholder="Destination" name="Destination" required/>
                        </div>
                        </div>
                        <button className="w3-button w3-dark-grey" type="submit"><i className="fa fa-search w3-margin-right"></i> Search availability</button>
                        </form>
                       <Itinerary destination = {this.state.Destination}/>
                    </div>

                                      
                

                </div>
        );
    }
}
export default PlanForm;