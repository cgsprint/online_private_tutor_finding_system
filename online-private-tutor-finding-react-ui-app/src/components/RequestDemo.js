/* eslint-disable no-undef */
// import React, { Component, useState } from "react";
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'


//   const RequestDemo = (props) => {
    
//         const parentIdRef = React.createRef(null);
//         const tutorIdRef = React.createRef(null);
//         const subjectRef = React.createRef(null);
    


    //  const requestdemo = () =>
    // {
    //     alert(parentIdRef.current.value,tutorIdRef.current.value,subjectRef.current.value)
    // }
    
//         const [selectedDate, setSelectedDate] = useState(null);
//         return (
            // <div class="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark">
            // <div class="row">
            //   <div class="col">
            //     <h2>Demo Request</h2>
            //     <br></br>
            // <form method="post">
            // <div className="mb-3-row">
            //         <label for="parentid" class="col-form-label">Enter ParentId:</label>
            //         <input type="text"  className="form-control form-control-sm" name="parentId"  id="parentId"  placeholder="ParentId" ref={parentIdRef}  required title="Enter a valid Id " />
            //     </div> 

                
            //     <div className="form-group">              
            //         <label for="tutorid" class="col-sm-3 col-form-label" >Enter TutorId:</label>
            //         <input type="text"  className="form-control form-control-sm" name="tutortId"  id="tutorId" placeholder="TutorId" ref={tutorIdRef}  required title="Enter a valid Id " />
            //     </div>
 
            //     <div className="form-group"> 
            //         <label for="subject" class="col-sm-3 col-form-label">Enter Subject:</label>
            //         <input type="text"  className="form-control form-control-sm" name="subject"  id="subject" placeholder="Enter Subject"  ref={subjectRef} required title="Enter a subject" />
            //     </div>
                 
            //     <div className="form-group">
            //         <label for="date" class="col-sm-3 col-form-label">Select Date:</label>
            //          <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} className="form-control form-control-sm" dateFormat='dd/MM/yyyy' isClearable scrollableMonthYearDropdown />
            //      </div>


                

            //     <button type="submit" className="btn btn-dark btn-md" onClick={requestdemo} >Request</button>
                
            // </form>
            // </div></div>
          
            // </div>
//         );
//     }


import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export class RequestDemo extends Component {

    constructor(props) {
        super(props)
    
        // this.parentIdRef = React.createRef();
        // // this.tutorIdRef = React.createRef();
        // // this.subjectRef = React.createRef();
        // this.demoDateRef = React.createRef(new Date());

        this.state = {
            startDate : new Date(),
            parentId : 0,
            parentName : '',
            tutorId : 0,
            subject : ''
        }

        this.parentId = React.createRef();
        this.parentName = React.createRef();
        this.tutorId = React.createRef();
        this.subjectRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.requestdemo = this.requestdemo.bind(this);
    }

    componentDidMount() {
        //  console.log(this.props.tutorUname)
        //  this.props.onGetTutor(this.props.tutorUname);
    
        const parentObject = localStorage.getItem("parentObj");
        const parentId =JSON.parse(parentObject).parentId;

        // console.log("Tutor id is ",JSON.parse(tutorObject).tutorId);
        console.log("parentId ",parentId)

        console.log(this.props.parentId+" "+this.props.parentName+" "+this.props.tutorId)
    
        // this.props.onGetTutorById(tutorId);
    
        // console.log("this.props.tutor",this.props.tutor)
        // this.props.history.push('/tutor/updatetutor')
    
      }

    requestdemo = (e) =>
    {
        e.preventDefault();
        // date = moment(this.state.startDate).format("YYYY-MM-DD")
        alert(this.state.startDate.getDate()+ " " +(this.state.startDate.getMonth() + 1)+ " " +this.state.startDate.getFullYear());
        // alert(this.state.startDate.getHours()+ " " +(this.state.startDate.getMonth() + 1)+ " " +this.state.startDate.getFullYear());
        // ,this.tutorIdRef.current.value,this.subjectRef.current.value,this.demoDateRef.current.value
        console.log(this.parentId.current.value+" "+this.parentName.current.value+" "+this.tutorId.current.value+" "+this.subjectRef.current.value)
    }

    setValues = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    

    handleChange(date) {
        this.setState({
            startDate: date
        })
      }
    

    
    render() {
        return (
            <div class="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark">
            <div class="row">
              <div class="col">
                <h2>Demo Request</h2>
                <br></br>
            <form>
            <div className="mb-3-row">
                    <label for="parentid" class="col-form-label">Enter ParentId:</label>
                    <input type="number"  className="form-control form-control-sm" name="parentId"  id="parentId"  placeholder="ParentId" defaultValue={this.props.parentId}  ref={this.parentId} readOnly title="Enter a valid Id " />
                </div> 

                <div className="form-group"> 
                    <label for="parent-name" class="col-sm-3 col-form-label">Enter Parent Name:</label>
                    <input type="text"  className="form-control form-control-sm" name="parentName"  id="parent-name" placeholder="Enter Parent Name"  defaultValue={this.props.parentName} ref={this.parentName} readOnly title="Enter a parent name" />
                </div>

                <div className="form-group">              
                    <label for="tutorid" class="col-sm-3 col-form-label" >Enter TutorId:</label>
                    <input type="number"  className="form-control form-control-sm" name="tutorId"  id="tutorId" placeholder="TutorId" defaultValue={this.props.tutorId} ref={this.tutorId} readOnly title="Enter a valid Id " />
                </div>
 
                <div className="form-group"> 
                    <label for="subject" class="col-sm-3 col-form-label">Enter Subject:</label>
                    <input type="text"  className="form-control form-control-sm" name="subject"  id="subject" placeholder="Enter Subject"  ref={this.subjectRef} required title="Enter a subject" />
                </div>
                 
                <div className="form-group">
                    <label for="date" class="col-sm-3 col-form-label">Select Date:</label>
                     <DatePicker selected={ this.state.startDate }
                        onChange={ this.handleChange }
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={20}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                         />
                 </div>


                

                <button className="btn btn-dark btn-md" onClick={this.requestdemo} >Request</button>
                
            </form>
            </div></div>
          
            </div>
        )
    }
}

export default RequestDemo


// export default RequestDemo