import {type FieldValues, useForm} from "react-hook-form";
import './App.css'
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useValidation} from "./hooks/useValidation.ts";
import Result from "./components/Result.tsx";
import {useState} from "react";

function App() {
    const { register, handleSubmit } = useForm();
    const { input1, input2 } = useValidation();
    const [formData, setFormData] = useState<FieldValues>();
    const onSubmit = ((data:FieldValues) => {
        setFormData(data);
    });
  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="aminoAcids1">
                <Form.Label column={'lg'}>Input1</Form.Label>
                <Form.Control type="text" autoComplete={'true'} {...register("input1", input1)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="aminoAcids2">
                <Form.Label column={'lg'}>Input2</Form.Label>
                <Form.Control type="text" autoComplete={'true'} {...register("input2", input2)} required />
            </Form.Group>
            <Button onClick={handleSubmit(onSubmit)}>Enter</Button>
        </Form>

        <Result data={formData}></Result>
    </>
  )
}

export default App
