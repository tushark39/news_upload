// import './App.css';
import './stylesheet.css';
import React from 'react';
import { Base } from './screen/Base';
import {UploadPage} from './screen/UploadPage';
function App() {
  // console.log('====================================');
  // console.log(process.env.PUBLIC_URL);
  // console.log('====================================');
  return (
   <Base>
      <UploadPage />
   </Base>
  );
}

export default App;
