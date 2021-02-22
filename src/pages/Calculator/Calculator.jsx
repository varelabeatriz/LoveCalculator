import React, { useState } from 'react';
import { Title, Subtitle, Button, Input, Wrapper, Hearts, ButtonWrapper } from './styles';
import hearts from './img/hearts.png'

const Calculator = () => {
    const [name, setName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [showResults, setShowResults] = useState(false)

    function operation() {
        setShowResults(true)
    }

    let loveResult = name.length * secondName.length;

    let nameChars = name.split("");
    let secondNameChars = secondName.split("");
    let chars = nameChars.concat(secondNameChars);
    //console.log(chars);
    let letter = 1;
    let numbers = []

    for (var i = 0; i < chars.length; i++) {
        for (var j = 0; j < chars.length; j++) {
            if (chars[i] == chars[j]) {
                if (i != j) {
                    letter = letter + 1;
                    chars.splice(j, 1);
                }
            } else {
                letter = 1;
            }
        }
        console.log(letter);
        numbers.push(letter);
        letter = 1;
    }

    console.log(numbers);

    // let newNumber;
    // let newArray = [];

    // for(var k = 0; k < (numbers.length) / 2; k++){
    //     newNumber = numbers[k] + numbers[numbers.length]
    //     newArray.push(newNumber);
    // }

    // console.log(newArray);



    // if ((name == "Beatriz") || (secondName == "Beatriz")) {
    //     if ((name == "Gabriel") || (secondName == "Gabriel")) {
    //         loveResult = 100;
    //     }
    // }

    return (
        <Wrapper>
            <Title>Love Calculator</Title>
            <Subtitle>Be sure that you are right for each other</Subtitle>
            <div>
                <Input
                    placeholder="Your name"
                    onChange={event => { setName(event.target.value); setShowResults(false) }}
                >
                </Input>
                <Hearts
                    alt="hearts"
                    src={hearts}
                    style={{ width: 100, height: 100 }}
                />
                <Input
                    placeholder="Your lover's name"
                    onChange={event => { setSecondName(event.target.value); setShowResults(false) }}
                >
                </Input>
            </div>
            <ButtonWrapper>
                <Button
                    onClick={() => operation()}
                >
                    Calculate
                </Button>
            </ButtonWrapper>

            {
                showResults ?
                    <p>
                        {loveResult}%
                    </p>
                    : null
            }




        </Wrapper>
    )
}

export default Calculator;