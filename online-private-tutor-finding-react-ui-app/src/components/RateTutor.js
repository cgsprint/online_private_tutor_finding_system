import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

const tutorIdRef = React.createRef();

function RateTutor() {

   function clickMe ()
   {
       alert("successfully added")
   }
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

   
   
    
    return (
        
        <div>
            
            

                    <div class="container mt-5 px-3 py-3 text-dark border border-dark rounded main-login">
            <div class="row">
              <div class="col">
                <h2><b><u>Rate Tutor</u></b></h2>
                <br></br>
                <form>
                  <div>
    
                  <div class="mb-3 row">
                    <label for="firstName" class="col-sm-4 col-form-label">
                   <b>Rate Tutor</b>
                    </label>
                    <div class="col-sm-5">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="tutorId"
                        name="tutorId"
                        ref={tutorIdRef}
                        placeholder = "Eg: 12@"   required
                      />
 
                      <br></br>
                      <div class="invalid-feedback">Please enter a valid tutorId</div>
                    </div>
                  </div>
                 
                  {[...Array(5)].map((start, i) => {
    const ratingValue = i + 1
    return (
                    <label>
                        <input 
                        type='radio' 
                        name='rating' 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)} 
                        style={{ display: 'none' }} 
                        />


                        <FaStar 
                        className='star' 
                        color={ratingValue <=(hover || rating) ? '#ffc107' : '#e4e5e9'} 
                        size={100} 
                        style={{ cursor: 'pointer' }} 
                        onMouseOver={() => setHover(ratingValue)} 
                        onMouseOut={() => setHover(null)} 
                        />

                    </label>

                   
                   
                  //<button type="submit" className="btn btn-dark btn-" onClick={()=>{this.rate.bind(this)}}>Added</button>
                    
        )
                })
        }


        
        </div>
        <div><button type="submit" className="btn btn-dark btn-" onClick={clickMe}>Added</button></div>
           
             
        </form>
</div>
</div>
</div>

       
        </div> 
    );
    
    
}



export default RateTutor