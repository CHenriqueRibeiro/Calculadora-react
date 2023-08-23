/* eslint-disable no-useless-concat */

import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  const soma = parseFloat(firstNumber) + parseFloat(currentNumber)

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')


  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumber = () => {
    const fnumber = parseFloat(firstNumber)
    const atualNumber = parseFloat(currentNumber);

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')



    } else if (firstNumber >= 1) {
      const sum = parseFloat(fnumber) + parseFloat(atualNumber)

      if (operation === '+') {
        setOperation('+')
        setCurrentNumber('0')
        setFirstNumber(parseFloat(sum))

        console.log(parseFloat(sum))

      }

    }



  }






  const handleMinusNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')

    } else {
      console.log('minus')
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')


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
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={soma} />
        <Row>
          <Button label="AC" onClick={handleOnClear} className="textblack" />
          <Button label="+/-" className="textblack" />
          <Button label="%" className="textblack" />
          <Button label="/" className="bckg-orange
          "/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" className="bckg-orange
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
