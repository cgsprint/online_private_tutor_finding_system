import React, { Component } from "react";
import { connect } from 'react-redux';
import  actionCreators   from '../actions/GetEbookListAdmin'


class AdminEbookTable extends Component {

    // componentDidMount()
    // {
    //     this.props.onGetEbooks();
    // }


  render() {

    // let ebookList=this.props.ebooksList.map((ebook,index)=>{
    //     return(
    //         <tr key={index}>
    //             <th>{ebook.parentId}</th>
    //             <td>{ebook.firstName}</td>
    //             <td>{ebook.lastName}</td>
    //             <td>{ebook.mobileNo}</td>
    //             <td>{ebook.email}</td>
    //             <td>{ebook.address}</td> 
                
    //         </tr>
    //     )
    // })

    return (
      <div>
        <h2 className="text-center">Ebook List</h2>

        <table className="table table-stripped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Authorname</th>
              <th scope="col">Url</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        ebooksList:state.ebooksList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetEbooks: () => {
          return  dispatch(actionCreators.getAllEbooks())
        }
      
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEbookTable)
