/* eslint-disable no-useless-concat */

import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  const calc = `${Number(firstNumber)}` + `${operation}` + `${Number(currentNumber)}`

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')


  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)

  }

  const handleSumNumber = () => {
    const fnumber = parseFloat(firstNumber)
    const atualNumber = parseFloat(currentNumber);

    if (operation !== '+') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('+')

    } else if (operation === '+') {
      const sum = parseFloat(fnumber) + parseFloat(atualNumber)

      if (operation === '+') {
        setOperation('+')
        setCurrentNumber('')
        setFirstNumber(parseFloat(sum))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber === '+' ? '' : 0}`)
        return parseFloat(sum)

      }

    }



  }

  const handleMinusNumber = () => {
    const fnumber1 = parseFloat(firstNumber)
    const atualNumber2 = parseFloat(currentNumber);
    const calMinus = fnumber1 - atualNumber2
    if (operation !== '-') {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('')
      setOperation('-')



    } else if (calMinus >= 1 || calMinus <= 0) {
      const minus = parseFloat(fnumber1) - parseFloat(atualNumber2)

      if (operation === '-') {
        setOperation('-')
        setCurrentNumber('')
        setFirstNumber(parseFloat(minus))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber === '-' ? '' : 0}`)
        console.log(parseFloat(minus))

      }

    }



  }

  const handleMultiplicationNumber = () => {
    const fnumber = parseFloat(firstNumber)
    const atualNumber = parseFloat(currentNumber);
    const calMultiplication = firstNumber * atualNumber
    if (operation !== 'x') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('x')

    } else if (operation === 'x') {
      const sum = parseFloat(fnumber) * parseFloat(atualNumber)

      if (calMultiplication >= 1) {
        setOperation('x')
        setCurrentNumber('')
        setFirstNumber(parseFloat(sum))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber === 'x' ? '' : 0}`)
        return parseFloat(sum)

      }

    }

  }

  const handleDivisionNumber = () => {
    const fnumber = parseFloat(firstNumber)
    const atualNumber = parseFloat(currentNumber);
    const calDivision = firstNumber / atualNumber
    if (operation !== '/') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('/')

    } else if (operation === '/') {
      const sum = parseFloat(fnumber) / parseFloat(atualNumber)

      if (calDivision >= 0) {
        setOperation('/')
        setCurrentNumber('')
        setFirstNumber(parseFloat(sum))
        setCurrentNumber((prevatualNumber) => `${prevatualNumber !== '/' ? '' : 0}`)
        return parseFloat(sum)

      }

    }

  }

  const handlePercetageNumber = () => {
    const fnumber = parseFloat(firstNumber)
    const atualNumber = parseFloat(currentNumber);
    const calDivision = ((firstNumber * atualNumber) * 0.01)
    if (operation !== '%') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('%')

    } else if (operation === '%') {
      const division = parseFloat(fnumber) * parseFloat(atualNumber)
      const calPercetage = (division * 0.01).toFixed(2)

      if (calDivision >= 0) {
        setOperation('%')
        setCurrentNumber('')
        setFirstNumber(parseFloat(calPercetage))

        return parseFloat(calPercetage)

      }

    }

  }


  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          handleSumNumber()
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
        <Input value={calc} />
        <Row>
          <Button label="AC" onClick={handleOnClear} className="textblack" />
          <Button label="+/-" className="textblack" />
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
