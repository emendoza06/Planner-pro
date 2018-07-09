import React, { Component} from 'react'; 
import './PicGallery.css';


class PicGallery extends Component { 
    render() { 
        return(
            <div class="gallery">
               
               
               <div class="gallery-wrap">
                 <div className="item" id="item-1"></div>
                 <div className="item" id="item-2"></div>
                 <div className="item" id="item-3"></div>
                 <div className="item" id="item-4"></div>
                 <div className="item" id="item-5"></div>
               </div>
            </div>
        );
    }
}
export default PicGallery;