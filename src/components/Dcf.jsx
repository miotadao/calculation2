import React from 'react'

const Dcf = (props) => {

  const calculate = (e) => {
    e.preventDefault();
    const results = [];
    const useRate = props.rate / 100;
    for (let i = 1; i < (props.year + 1); i++) {
      let pv = props.income / ((1 + useRate) ** i);
      results.push(pv);
    }
    const total = results.reduce(function (sum, element) {
      return sum + element;
    }, 0);
    props.setRoundingOff(total);
  }

  return (
    <div className={`container ${props.currentNum === 2 ? "" : "hide"}`}>
      <h1>DCF法(毎年同額のCF)</h1>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='1年の支給額(CF)' onChange={(e) => props.handleIncome(e)} value={props.income} />
          <p>1年の支給額(CF): <span>{props.income.toLocaleString()}</span> 円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='割引率' onChange={(e) => props.handleRate(e)} value={props.rate} />
          <p>割引率: <span>{props.rate}</span> (%)</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='期間' onChange={(e) => props.handleyear(e)} value={props.year} />
          <p>期間: <span>{props.year}</span> 年</p>
        </div>
        <div className='main-btn-container'>
          <input className='main-btn' type="submit" value="計算" onClick={calculate} />
          <select onChange={(e) => props.getRoundingOff(e)}>
            <option value="四捨五入">四捨五入</option>
            <option value="切り捨て">切り捨て</option>
            <option value="指定なし">指定なし</option>
          </select>
          <button className='reset' onClick={(e) => props.reset(e)}>リセット</button>
        </div>
      </form>
      <p className='answer'>（商品の現在価値）<span>{props.answer.toLocaleString()}</span> 円 </p>
      <div className='formula-container'>
        <h2>公式</h2>
        <div className='formula'>
          <div className='term'>
            <p>CF1</p>
            <p>(1 + R)</p>
          </div>
          <p>+</p>
          <div className='term'>
            <p>CF2</p>
            <p>(1 + R) ^ 2</p>
          </div>
          <p>+</p>
          <p>・・・</p>
          <p>+</p>
          <div className='term'>
            <p>CFn</p>
            <p>(1 + R) ^ n</p>
          </div>
        </div>
        <p>＊「^」はべき乗</p>
      </div>
    </div>
  )
}

export default Dcf
