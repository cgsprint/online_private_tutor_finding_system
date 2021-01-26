// import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import actionCreators from './GetEbookAdmin'


// export class EbookTable extends Component {

//     componentDidMount()
//     {
//         this.props.onGetEbooks();
//     }


//   render() {

//     // let ebookList=this.props.ebooksList.map((ebook,index)=>{
//     //     return(
//     //         <tr key={index}>
//     //             <th>{parent.parentId}</th>
//     //             <td>{parent.firstName}</td>
//     //             <td>{parent.lastName}</td>
//     //             <td>{parent.mobileNo}</td>
//     //             <td>{parent.email}</td>
//     //             <td>{parent.address}</td> 
                
//     //         </tr>
//     //     )
//     // })

//     return (
//       <div>
//         <h2 className="text-center">Ebook List</h2>

//         <table className="table table-stripped">
//           <thead>
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">Title</th>
//               <th scope="col">Authorname</th>
//               <th scope="col">Url</th>
//             </tr>
//           </thead>
//         </table>
//       </div>
//     );
//   }
// }


// const mapStateToProps = (state) => {
//     return {
//         ebooksList:state.ebooksList,
//         returnedMessage: state.returnedMessage
//     }
// }

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         onGetEbooks: () => {
// //           return  dispatch(actionCreators.getEbooks())
// //         }
      
// //     }

// // }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EbookTable))
