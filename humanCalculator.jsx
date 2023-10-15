import React, {useState} from 'react';
import {Container, Form, FormGroup,Button} from "react-bootstrap";

function HumanCalculator(props) {
    const [inputage,setInputAge] = useState("")
    const [setInput,setSetInput] = useState("")
    const [value,setValue] =useState(0)
    const inputChange=(e)=>{
        setInputAge(e.target.value)


    }

    const getAge=(birthVal)=>{
        const currentAge = new Date()
        const birthAge = new Date(birthVal)
        let age = currentAge.getFullYear() - birthAge.getFullYear()
        const month = currentAge.getMonth() - birthAge.getMonth()
        if(month<0 || (month === 0 && currentAge.getDay()< birthAge.getDay())){
            age--
        }
        return age;
    }
    const changingValue = (e)=>{
        const lot = inputage;
        (lot === ''?alert("Please valid input"):getAge(lot))
        console.log(getAge(lot))

        setSetInput(`Your age is ${getAge(lot)} ${getAge(lot)>1?"years":"year"}`)
    }
    return (
        <>
        <h1>Human Calculator Example with Bootstrap</h1>
            <Container className={"w-50  shadow rounded bg-primary"} style={{minHeight:"400px"}}>
                <h1 className={"text-white-50"}>
                    Human Calculator Example
                </h1>
                <Form>
                    <FormGroup>
                        <Form.Label className={"text-white fw-bolder"}>Input Your Age</Form.Label>
                        <Form.Control type={"date"} placeholder={"Enter Your Age"} value={inputage} onChange={inputChange}></Form.Control>
                    </FormGroup>
                </Form>
                <Button variant={"danger"} className={"mt-3"} onClick={changingValue}>Calculate the Age</Button>
                <div className="display-4 text-white mt-4"> {setInput}</div>
            </Container>
        </>
    );
}

export default HumanCalculator;