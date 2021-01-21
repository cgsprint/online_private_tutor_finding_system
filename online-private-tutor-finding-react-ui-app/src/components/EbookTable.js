import React, { Component } from 'react';

class ViewEbook extends Component {
        
    render() {
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

export default ViewEbook;