import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
//import Card from 'react-bootstrap/Card'
//import { CardDeck } from 'react-bootstrap'

function AdminHome() {
  const adminObject = localStorage.getItem("adminObj");

  console.log("adminObject ", JSON.parse(adminObject).adminName);

  const adminName = JSON.parse(adminObject).adminName

  return (
    <div style={{ backgroundColor: "LightPink" }}>
      <Jumbotron
        style={{
          backgroundImage:
            "url(https://th.bing.com/th/id/Red57359be7816a73496989c5c33f63a0?rik=jDAo3eeXcQXeKw&riu=http%3a%2f%2frankingsacademy.com%2fwp-content%2fuploads%2f2017%2f04%2flibraary.jpg&ehk=AkRBd5S0F2nTKr9q47%2b6V8t8dNmI42E1llyp7GQJBZI%3d&risl=&pid=ImgRaw)",
          fontFamily: "Arial",
        }}
      >
        <h1 style={{ color: "green" }}>
          <u>
            <b>Welcome { adminName }</b>
          </u>
        </h1>
        <p style={{ color: "yellow" }}>
          <b>
            The direction in which education starts a man will determine his
            future life!!
            <p style={{ color: "white" }}>
              So, let's start our future from here. By following the small steps
              you can rich to the the toppest tutors all over the India......
            </p>
          </b>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card">
              <img
                src="https://wallpapercave.com/wp/wp4385845.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "Purple" }}>
                  <b>Education Gives Strengthness</b>
                </h5>
                <p class="card-text">
                  Education is the passport to the future, for tomorrow belongs
                  to those who prepare for it today..
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                src="https://th.bing.com/th/id/OIP.WwT7vzOU2OOQgXVe1neUowHaEK?pid=Api&rs=1"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue" }}>
                  <b>Education's Power</b>
                </h5>
                <p class="card-text">
                  {" "}
                  Education is what remains after one has forgotten what one has
                  learned in school.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                src="https://th.bing.com/th/id/R8edeb49c409e863c97ac8925aa6438c9?rik=tp%2bu3pWR3s6DwA&riu=http%3a%2f%2fil9.picdn.net%2fshutterstock%2fvideos%2f4773473%2fthumb%2f10.jpg&ehk=o6pUJZB0d%2bVBjYtz4oweVAYVbJngDVUmrjVcPwAeuSY%3d&risl=&pid=ImgRaw"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "red" }}>
                  <b>Learn as u play</b>
                </h5>
                <p class="card-text">
                  The more that you read, the more things you will know, the
                  more that you learn, the more places you’ll go.
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      <footer class="text-muted">
        <div class="container">
          <small class="d-block mb-3 text-muted">
            &copy; 2021 Online Private Tutor Finder System
          </small>
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
      <hr></hr>
    </div>
  );
}

export default AdminHome;
