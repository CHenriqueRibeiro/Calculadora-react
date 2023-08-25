/* eslint-disable no-useless-concat */

import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
    setOperation('');
  }

  const eraseOne = () => {
    if (currentNumber.length === 1) {
      setCurrentNumber(0)
    } else {
      setCurrentNumber(String(currentNumber).substring(0, currentNumber.length - 1));
    }

  }


  const handleAddNumber = (num) => {
    //setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    if (currentNumber === 0 || firstNumber === currentNumber) {
      setCurrentNumber(num);
      setSecondNumber(num);
    } else {
      setCurrentNumber(currentNumber + num);
      setSecondNumber(currentNumber + num);
    }

  }

  const handleSumNumber = () => {
    //const fnumber = Number(firstNumber);
    //const atualNumber = Number(currentNumber);

    if (firstNumber === 0) {
      if (currentNumber !== 0) {
        setOperation('+');
        setFirstNumber(currentNumber);
      }
    } else {
      if (firstNumber !== currentNumber) {
        setCurrentNumber(Number(firstNumber) + Number(secondNumber));
        setFirstNumber(Number(firstNumber) + Number(secondNumber));
      }
    }


    /*if (operation !== '+') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('+')

    } else if (operation === '+') {
      const sum = Number(fnumber) + Number(atualNumber)

      if (operation === '+') {
        setOperation('+')
        setCurrentNumber('')
        setFirstNumber(Number(sum))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber === '+' ? '' : 0}`)
      }

  }*/
  }

  const handleMinusNumber = () => {
    const fnumber1 = Number(firstNumber)
    const atualNumber2 = Number(currentNumber);
    const calMinus = fnumber1 - atualNumber2
    if (operation !== '-') {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('')
      setOperation('-')



    } else if (calMinus >= 1 || calMinus <= 0) {
      const minus = Number(fnumber1) - Number(atualNumber2)

      if (operation === '-') {
        setOperation('-')
        setCurrentNumber('')
        setFirstNumber(Number(minus))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber === '-' ? '' : 0}`)
        console.log(Number(minus))

      }

    }



  }

  const handleMultiplicationNumber = () => {
    const fnumber = Number(firstNumber)
    const atualNumber = Number(currentNumber);
    const calMultiplication = firstNumber * atualNumber
    if (operation !== 'x') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('x')

    } else if (operation === 'x') {
      const sum = Number(fnumber) * Number(atualNumber)

      if (calMultiplication >= 1) {
        setOperation('x')
        setCurrentNumber('')
        setFirstNumber(Number(sum))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber === 'x' ? '' : 0}`)
        return Number(sum)

      }

    }

  }

  const handleDivisionNumber = () => {
    const fnumber = Number(firstNumber)
    const atualNumber = Number(currentNumber);
    const calDivision = firstNumber / atualNumber
    if (operation !== '/') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('/')

    } else if (operation === '/') {
      const sum = Number(fnumber) / Number(atualNumber)

      if (calDivision >= 0) {
        setOperation('/')
        setCurrentNumber('')
        setFirstNumber(Number(sum))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber !== '/' ? '' : 0}`)
        return Number(sum)

      }

    }

  }

  const handlePercetageNumber = () => {
    const fnumber = Number(firstNumber)
    const atualNumber = Number(currentNumber);
    const calDivision = ((firstNumber * atualNumber) * 0.01)
    if (operation !== '%') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('%')

    } else if (operation === '%') {
      const division = Number(fnumber) * Number(atualNumber)
      const calPercetage = (division * 0.01).toFixed(2)

      if (calDivision >= 0) {
        setOperation('%')
        setCurrentNumber('')
        setFirstNumber(Number(calPercetage))

        return Number(calPercetage)

      }

    }

  }


  const handleEquals = () => {
    console.log(`${Number(firstNumber)} + ${Number(secondNumber)}`);
    if (firstNumber !== 0 && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          setCurrentNumber(Number(firstNumber) + Number(secondNumber));
          setFirstNumber(Number(firstNumber) + Number(secondNumber));
          break;
        case '-':
          handleMinusNumber()
          break;
        case 'x':
          handleMultiplicationNumber()
          break;
        case '/':
          handleDivisionNumber()
          break;
        case '%':
          handlePercetageNumber()
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="AC" onClick={handleOnClear} className="textblack" />
          <Button label="C" onClick={eraseOne} className="textblack" />
          <Button label="%" onClick={handlePercetageNumber} className="textblack" />
          <Button label="/" onClick={handleDivisionNumber} className="bckg-orange
          "/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handleMultiplicationNumber} className="bckg-orange
          " />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumber} className="bckg-orange
          " />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumber} className="bckg-orange
          " />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} className="numberZero" />
          <Button label="," onClick={() => handleAddNumber(',')} />
          <Button label="=" onClick={handleEquals} className="bckg-orange
          "/>
        </Row>



      </Content>
    </Container>
  );
}

export default App;
