import React from 'react';
import { Auth } from '../helper/Auth';
import Login from '../helper/Login'
import Upload from '../helper/Upload';
export const UploadPage=()=> {
    let isAuthenticated = Auth
    return (
        <div style={{marginTop:50,marginBottom:50}}>
            {
                isAuthenticated && <Upload />
            }
            {
                !isAuthenticated && <Login />
            }
        </div>
    )
}