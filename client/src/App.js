import './App.css';
import CoinInfoBlock from './components/CoinInfoBlock.jsx'
import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';

function App() {
  const [coinsData, setCoinsData] = useState([{}])

  useEffect(() => {
    fetch("/getTargetedCoinsPrice").then(
      response => response.json()
    ).then(
      data => {
        setCoinsData(data)
      }
    )
  }, [])

  let items2 = coinsData.ticker;
  let coinInfoBlockList = [];
  items2?.forEach((item, index)=>{
    coinInfoBlockList.push(
      <CoinInfoBlock key={index}
        base = {item.base}
        price = {item.price}
        volume = {item.volume}
        change = {item.change}
      />
    )
  })

  return (
    <div className='frame'>
      <h1 className='topicSentence'>Cryptocurrency Realtime Price</h1>

      {(typeof coinsData.ticker === 'undefined') ? (
        <p>Loading</p>
      ): (
      <Container className='px-0 mx-0'>
        <Row className='w-100'>
          {coinInfoBlockList}
        </Row>
      </Container>
      )}

    </div>
  );
}

export default App;
