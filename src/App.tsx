import {type FieldValues, useForm} from "react-hook-form";
import './App.css'
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useValidation} from "./hooks/useValidation.ts";
import Result from "./components/Result.tsx";
import {useState} from "react";

function App() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const { input1, input2 } = useValidation();
    const [formData, setFormData] = useState<FieldValues>();
    const onSubmit = ((data:FieldValues) => {
        if (data.input1.length !== data.input2.length) {
            setError("input2", {
                type: "manual",
                message: "Длина последовательностей в обоих полях должна быть одинаковой"
            });
            return;
        }
        setFormData(data);
    });
  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="aminoAcids1">
                <Form.Label column={'lg'}>Input1</Form.Label>
                <Form.Control type="text" autoComplete={'true'} {...register("input1", input1)} required isInvalid={!!errors?.input1} />
                <Form.Control.Feedback type="invalid">
                    {errors?.input1?.message?.toString()}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="aminoAcids2">
                <Form.Label column={'lg'}>Input2</Form.Label>
                <Form.Control type="text" autoComplete={'true'} {...register("input2", input2)} required isInvalid={!!errors?.input2} />
                <Form.Control.Feedback type="invalid">
                    {errors?.input2?.message?.toString()}
                </Form.Control.Feedback>
            </Form.Group>
            <Button onClick={handleSubmit(onSubmit)}>Enter</Button>
        </Form>

        {formData && <Result data={formData}></Result>}
    </>
  )
}

export default App
