import './App.css';
import React from 'react';
import { Base } from './screen/Base';
import UploadForm from './screen/UploadForm';
;
function App() {
  return (
   <Base>
      {<UploadForm />}
   </Base>
  );
}

export default App;
