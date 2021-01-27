import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

function TutorHome() {
    return (
            <div style={{backgroundColor:"LightGreen"}}>
                <Jumbotron style={{backgroundImage:'url(https://1635225677.rsc.cdn77.org/images/cyber-security-in-education.jpg?1496735713)',   fontFamily: "Arial" }}>
      <h1 style={{color:"blue"}}><u><b>Education!!</b></u></h1>
      <p style={{color:"orange"}}><b> 
      Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.
      <p style={{color:"white"}}>Change your life today. Don’t gamble on the future, act now, without delay.......</p>
       </b> 
      </p>
      
    </Jumbotron>
     
    <div className="container" style={{backgroundColor:"orange"}}>
      <div className="row">
        <div className="col-sm">
         <div class="card" >
      <img src="https://ak.picdn.net/shutterstock/videos/16338784/thumb/11.jpg" class="card-img-top" alt="..." width="100px" height="126"/>
      <div class="card-body">
        <h5 class="card-title"  style={{color:"Red"}}><b>Impossible to Possible</b></h5>
        <p class="card-text">There will be obstacles.There will be mistakes. There will be doubters. But with hard work, there are no limits. ....</p>
        <a href="#" class="btn btn-primary">Go Somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-sm">
         <div class="card" >
      <img src="https://1.bp.blogspot.com/-I51Cq_Uj0yI/TqPfqsuR1sI/AAAAAAAASTs/tbrIazc89Co/s1600/Education+Wallpapers+%252815%2529.jpg" class="card-img-top" alt="..." height="150" />
      <div class="card-body">
        <h5 class="card-title" style={{color:"green"}}><b>Never Give Up</b></h5>
        <p class="card-text">Never give up, for that is just the place and time that the tide will turn..</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-sm">
         <div class="card" >
      <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." height="150" />
      <div class="card-body">
        <h5 class="card-title" style={{color:"red"}}><b>Beauty of Education</b></h5>
        <p class="card-text">The future belongs to those who believe in the beauty of their dreams.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        </div>
      </div>
    </div>
    
    <hr></hr>
    <footer class="text-muted">
      <div class="container">
            <small class="d-block mb-3 text-muted">&copy; 2021 Online Private Tutor Finder System</small>
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
      </div>
      </footer><hr></hr>
    

        </div>
    )
}


export default TutorHome
