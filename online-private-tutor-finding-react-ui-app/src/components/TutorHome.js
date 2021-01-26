import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'


function TutorHome() {
    return (
            <div style={{backgroundColor:"LightPink"}}>
                <Jumbotron style={{backgroundImage: 'url(https://1635225677.rsc.cdn77.org/images/cyber-security-in-education.jpg?1496735713)',   fontFamily: "Arial" }}>
      <h1 style={{color:"yellow"}}><u><b>Education!!!</b></u></h1>
      <p style={{color:"blue"}}><b> 
      One way to keep momentum going is to have constantly greater goals.!!
      <p style={{color:"white"}}>Change your life today with me. Don’t gamble on the future, act now, without delay.......</p>
       </b> 
      </p>
      
    </Jumbotron>
     
    <div className="container" style={{backgroundColor:"blueviolet"}}>
      <div className="row">
        <div className="col-sm">
         <div class="card" >
      <img src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/03/Online-teaching-class-header.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"  style={{color:"Purple"}}><b>Education Gives Strengthness</b></h5>
        <p class="card-text">Education is the passport to the future, for tomorrow belongs to those who prepare for it today..</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-sm">
         <div class="card" >
      <img src="https://www.thestatesman.com/wp-content/uploads/2020/06/class-1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title" style={{color:"blue"}}><b>Education's Power</b></h5>
        <p class="card-text"> Education is what remains after one has forgotten what one has learned in school.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-sm">
         <div class="card" >
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8M3x8b25saW5lJTIwdGVhY2hpbmd8fDB8fHw&ixlib=rb-1.2.1&q=80&w=1080" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{color:"red"}}><b>We make Impossible to Possible</b></h5>
        <p class="card-text">The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</p>
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
