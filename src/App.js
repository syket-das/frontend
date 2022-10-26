import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState('');

  const onUpload = (event) => {
    setFile(event.files[0]);
  };

  useEffect(() => {
    console.log(file);
    if (file) {
    const asyncUpload = async () => {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('{backend api url}', formData);
      console.log(res);
    };
    asyncUpload();
  }
  }, [file]);

  return (
    <div
      className="App"
      style={{
        marginTop: '30%',
      }}
    >
      <div>
        <div className="card">
          <FileUpload
            name="demo"
            customUpload
            uploadHandler={onUpload}
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
