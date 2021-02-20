#  💕Love Calculator

![Love Calculator UI](https://i.imgur.com/kSI0F07.png)

## 💏 About
 - The Love Calculator will tell what are the odds that you and your loved one will end up together! Just type both names and cross your fingers. Good luck, and remeber: the Love Calculator never lies...

## ❔ How it Works
In order for the algorithm to work it combines two names and the word "loves". For this example we will use names "Ana" and "Thiago" so the combined text for the calculation is "Ana Loves Thiago"

1.  **Count all the letters**  from left to right and write down the number
    -   First one is "A" and it appears three times, so we write down 3
    -   Next is "N" and it appears once, write down 1
    -   Don’t repeat letters and continue to the end
    -   **You should get 31121111111**
2.  The second part is getting the  **shorter version of the number**
    -   You do this by adding the leftmost and rightmost numbers together
    -   The first pair is 3 + 1 and write down the sum of the two numbers (in our case 4), next 1 + 1, 1 + 1…, continue this till you reach the middle, if there is only one number left, write it down, otherwise sum both numbers
        -   Again you should strike the numbers you add together (one from the left and one from the right)
    -   You should get 422321
3.  Next step is  **repeating step 2**  until you get only two numbers
    -   For our example, this is three more times
    -   So you should get 545 for the first iteration, then 104
    -   And the **result should be 50**
        -   The result should always have two numbers (except 100)
4.  The result is  **50%**

## 💻 Run this App

    #clone this repo
    $ git clone https://github.com/varelabeatriz/LoveCalculator

	#install dependencies
	$ yarn install

	#run the app
	$ yarn start

## 💻 Technologies

- [yarn](https://yarnpkg.com/)
- [React.js](https://pt-br.reactjs.org/)
- [styled-components](https://styled-components.com/)
