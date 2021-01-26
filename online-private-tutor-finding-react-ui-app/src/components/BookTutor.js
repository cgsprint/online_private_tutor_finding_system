import React, { Component, useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


  const BookTutor = (props) => {
    const parentIdRef = React.createRef(null);
        const tutorIdRef = React.createRef(null);
        const subjectRef = React.createRef(null);
    


     const booktutor = () =>
    {
        alert(parentIdRef.current.value,tutorIdRef.current.value,subjectRef.current.value)
    }
    const [selectedDate, setSelectedDate] = useState(null);
        return (
            <div class="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark">
            <div class="row">
              <div class="col">
                <h2>Book Tutor</h2>
                <br></br>
            <form>
    

                <div class="mb-3-row">
                    <label>Enter ParentId</label>
                    <input type="text" className="form-control" name="parentId"  id="parentId"  placeholder="ParentId" ref={parentIdRef}  required title="Enter a valid Id " />
                </div>

                <div className="form-group">
                    <label>Enter TutorId</label>
                    <input type="text" className="form-control" name="tutortId"  id="tutorId" placeholder="TutorId" ref={tutorIdRef}  required title="Enter a valid Id " />
                </div>

                <div className="form-group">
                    <label>Enter Subject</label>
                    <input type="email" className="form-control"  name="subject"  id="subject" placeholder="Enter Subject"  ref={subjectRef} required title="Enter a subject" />
                </div>

                <div className="form-group">
                    <label for="date" class="col-sm-3 col-form-label">Select Date:</label>
                     <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} className="form-control form-control-sm" dateFormat='dd/MM/yyyy' isClearable scrollableMonthYearDropdown />
                 </div>

                <button type="submit" className="btn btn-dark btn-" onClick={booktutor} >Booked</button>
                
            </form>
            </div></div>
           
            </div>
        );
    }


export default BookTutor