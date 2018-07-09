import React, { Component} from 'react'; 
import city from './city.mp4';
import './Video.css';


import PlanForm from '../PlanForm/PlanForm';




class Video extends Component { 
    render(){ 
        return(
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                 
               
               {/*Video*/}
                <header className="v-header container">
                <div className="fullscreen-video-wrap">
                  
                  <video src={city} autoplay="" loop="true">
                </video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content text-md-center">

                {/*Planner Pro logo*/}
                <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>Planner</b></span> <span className="w3-hide-small w3-text-light-grey">Pro</span></h1>
                <h2> Plan, Share, and Post <br/> your trip. <br/>Travel Easy. </h2>
                </div>
              </header>

            {/*Section A*/}
              <section className="section section-a">
                {/*Section A Column 1*/}
                <div className="container">
                <div className="row">
                <div className="column">
                <p> Column 1</p>
                {/*Section A Column 2*/} 
                </div>
                <div className="column">
                  {/*Insert PlanForm*/}
                <PlanForm/>
                </div>            
                </div> 
                </div>
                </section>
            
            {/*Section B*/}
              <section className="section section-b">
                <div className="container">
                <p>Hello</p>
                
                  
                </div>
              </section>
            </div>

            
        );
    }
}
export default Video;
