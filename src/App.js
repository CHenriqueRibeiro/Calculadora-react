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
    console.log(currentNumber.length)
    if (currentNumber.length == 1 || currentNumber == 0) {
      setCurrentNumber(0)
    } else {
      setCurrentNumber(String(currentNumber).substring(0, currentNumber.length - 1));
    }

  }

  const handleAddNumber = (num) => {
    if (Number(currentNumber) === 0 || Number(firstNumber) === Number(currentNumber) || firstNumber === '.') {
      setCurrentNumber(num);
      setSecondNumber(num);
    } else {
      setCurrentNumber(currentNumber + num);
      setSecondNumber(currentNumber + num);
    }

  }

  const handleSumNumber = () => {
    if (firstNumber === 0) {
      if (currentNumber !== 0) {
        setOperation('+');
        setFirstNumber(currentNumber);
      }
    } else {
      if (firstNumber !== Number(currentNumber)) {
        setCurrentNumber(Number(firstNumber) + Number(secondNumber));
        setFirstNumber(Number(firstNumber) + Number(secondNumber));
      }
    }
  }

  const handleMinusNumber = () => {
    if (firstNumber === 0) {
      if (currentNumber !== 0) {
        setOperation('-');
        setFirstNumber(currentNumber);
      }
    } else {
      if (firstNumber !== currentNumber) {
        setCurrentNumber(Number(firstNumber) - Number(secondNumber));
        setFirstNumber(Number(firstNumber) - Number(secondNumber));
      }
    }
  }

  const handleMultiplicationNumber = () => {
    if (firstNumber === 0) {
      if (currentNumber !== 0) {
        setOperation('x');
        setFirstNumber(currentNumber);
      }
    } else {
      if (firstNumber !== currentNumber) {
        setCurrentNumber(Number(firstNumber) * Number(secondNumber));
        setFirstNumber(Number(firstNumber) * Number(secondNumber));
      }
    }
  }

  const handleDivisionNumber = () => {
    if (firstNumber === 0) {
      if (currentNumber !== 0) {
        setOperation('/');
        setFirstNumber(currentNumber);
      }
    } else {
      if (firstNumber !== currentNumber) {
        setCurrentNumber(Number(firstNumber) / Number(secondNumber));
        setFirstNumber(Number(firstNumber) / Number(secondNumber));
      }
    }
  }

  const handlePercetageNumber = () => {
    if (firstNumber === 0) {
      if (currentNumber !== 0) {
        setOperation('%');
        setFirstNumber(currentNumber);
      }
    } else {
      if (firstNumber !== currentNumber) {
        setCurrentNumber((Number(firstNumber) * Number(secondNumber)) * 0.01);
        setFirstNumber((Number(firstNumber) * Number(secondNumber)) * 0.01);
      }
    }
  }


  const handleEquals = () => {

    if (firstNumber !== 0 && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          setCurrentNumber(Number(firstNumber) + Number(secondNumber));
          setFirstNumber(Number(firstNumber) + Number(secondNumber));
          break;
        case '-':
          setCurrentNumber(Number(firstNumber) - Number(secondNumber));
          setFirstNumber(Number(firstNumber) - Number(secondNumber));
          break;
        case 'x':
          setCurrentNumber(Number(firstNumber) * Number(secondNumber));
          setFirstNumber(Number(firstNumber) * Number(secondNumber));
          break;
        case '/':
          setCurrentNumber(Number(firstNumber) / Number(secondNumber));
          setFirstNumber(Number(firstNumber) / Number(secondNumber));
          break;
        case '%':
          setCurrentNumber((Number(firstNumber) * Number(secondNumber)) * 0.01);
          setFirstNumber((Number(firstNumber) * Number(secondNumber)) * 0.01);
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
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} className="bckg-orange
          "/>
        </Row>



      </Content>
    </Container>
  );
}

export default App;
