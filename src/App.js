import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function App() {
  const [file, setFile] = useState('');

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

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


  const formSubmit =  (e) => {
    e.preventDefault();
    console.log(name, age);
  }

  return (
    <div
      className=""
      style={{
        marginTop: '10%',
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
      <div
        style={{
          marginTop: '10%',
          width: '350px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
