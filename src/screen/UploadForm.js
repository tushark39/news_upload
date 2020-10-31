import React from 'react';
import { Auth,Name } from '../helper/Auth';
import Login from './Login'
// export const UploadForm = () => {

// }   
export default class UploadForm extends React.Component {
    render() {
        let isAuthenticated = Auth
        let name =  Name
        return (
            <div>
                {
                    isAuthenticated && (
                        <div className="upload-form">
                            <h3 className="section-title">Upload News</h3>
                            <p>Name of Intern : {name}</p>
                            {/* Add a <textarea> tag */}
                            <b><p><span style={{ color: "red" }}>*</span> Enter Article below  :- </p></b>
                            <textarea defaultValue={""} />
                            <p><span style={{ color: "red" }}>*</span> Required fields must be filled</p>
                            {/* Add an <input> tag */}
                            <input className="contact-submit" type="submit" defaultValue="Send" />
                        </div>
                    )
                }
                {
                    !isAuthenticated && <Login />
                }
            </div>
        )
    }
}