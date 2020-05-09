import React from 'react'
import './MainScreen.css'

const MainScreen = props => (
    <div>
        <div className="flex-container">
            <div className="text-container">
                <center><h1>Join Us Now<br />For Better Place Recommendations</h1></center>
                <button className="button">Start Now</button>
            </div>
        </div> 
        
        <div className="card-container">
        <div className="card-content">
                <center><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique laborum fugiat accusantium, doloremque ad beatae, ipsam esse cupiditate quidem ullam tempore reiciendis labore ex repudiandae non. Hic et est laudantium?</p></center>
            </div>
            <div className="card-content">
                <center><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia illo sit veritatis reprehenderit excepturi accusantium, eveniet sapiente dolorum, expedita dolor libero distinctio, ducimus fugiat repudiandae? Tempora obcaecati laborum officia voluptatum?</p></center>
            </div>
            <div className="card-content">
                <center><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore tempora optio velit possimus vel culpa maxime harum nam, quidem perferendis libero! Quibusdam nemo minima porro culpa molestias quia, numquam expedita.</p></center>
            </div>

        </div>
    </div>
      );
  
export default MainScreen;
  