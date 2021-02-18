import React, { useState } from 'react';
import { Title, Subtitle, Button, Input } from './styles';

const Calculator = () => {
    const [name, setName] = useState('')
    const [secondName, setSecondName] = useState('')

    let result = name.length * secondName.length;
    let loveResult = 0;

    if (result % 2 == 0){
        loveResult = result * 3
    } else {
        loveResult = result * 4
    }

    if (loveResult > 100){
        loveResult = 100;
    }

    if (loveResult < 0){
        loveResult = 0;
    }

    if ((name == "Beatriz") || (secondName == "Beatriz")) {
        if((name == "Gabriel") || (secondName == "Gabriel")){
            loveResult = 100;
        }
    }

    return (
        <>
            <Title>Love calculator</Title>
            <Subtitle>Be sure that you are right for each other</Subtitle>
            <div>
                <Input
                    placeholder="Your name"
                    onChange={event => setName(event.target.value)}
                >
                </Input>
                <Input
                    placeholder="Your lover's name"
                    onChange={event => setSecondName(event.target.value)}
                >
                </Input>
            </div>
            <Button
                onClick={console.log(name)}
            >Calculate</Button>
            <p>{loveResult}%</p>

        </>
    )
}

export default Calculator;