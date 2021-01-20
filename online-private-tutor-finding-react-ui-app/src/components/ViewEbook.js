import React, { Component } from 'react';

class ViewEbook extends Component {
        
    render() {
        return (
            <div>

                <h1 className="text-center">EBook List</h1>

                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <td>Ebook Id</td>
                            <td>Ebook Title</td>
                            <td>Ebook Authorname</td>
                            <td>Ebook Url</td>
                        </tr>
                    </thead>

                </table>
            </div>
        );
    }
}

export default ViewEbook;