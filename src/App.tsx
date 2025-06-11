import { useState } from 'react'
import './App.css'
import {Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [firstInput, setFirstInput] = useState<string>();
    const [secondInput, setSecondInput] = useState<string>();
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="aminoAcids1">
                <Form.Label column={'lg'}>Input1</Form.Label>
                <Form.Control type="text" autoComplete={'true'} value={firstInput} onChange={(e) => setFirstInput(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="aminoAcids2">
                <Form.Label column={'lg'}>Input1</Form.Label>
                <Form.Control type="text" autoComplete={'true'} value={secondInput} onChange={(e) => setSecondInput(e.target.value)} required />
            </Form.Group>
        </Form>
    </>
  )
}

export default App
