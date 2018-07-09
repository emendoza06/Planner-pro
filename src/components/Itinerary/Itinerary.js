import React, { Component} from 'react'; 
 
import FullCalendar from '../../../node_modules/fullcalendar-reactwrapper';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
 
class Itinerary extends Component {
  constructor(props) {
    super(props);
    
    this.state= {
    events:[
                {
                    title: '' ,
                    start: '2018-07-08',
                    end: '2018-07-14'
                },
               
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-07-20'
                }
            ],		
    }
  }
 
  render() {
    return (
      <div id="example-component">
        <FullCalendar
             id = "your-custom-ID"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        }}
         defaultDate={'2018-07-08'}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {this.state.events}	
    />
      </div>
    );
  }
}
export default Itinerary;