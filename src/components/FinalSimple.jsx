import React from 'react'

const FinalSimple = (props) => {

  const handleCal = (e) => {
    e.preventDefault();
    const a = props.redemption - props.plice; //償還ー購入
    const b = a / props.year;  //a割る残存期間
    const c = props.income + b;
    const d = (c / props.plice) * 100;
    props.setRoundingOff(d);
  }

  return (
    <div className={`container ${props.currentNum === 5 ? "" : "hide"}`}>
      <h1>単利最終利回り・単利所有期間利回り</h1>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='購入価格' onChange={(e) => props.handlePlice(e)} value={props.plice} />
          <p>購入価格: <span>{props.plice.toLocaleString()}</span> 円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='償還 or 売却 価格' onChange={(e) => props.handleRedemption(e)} value={props.redemption} />
          <p>償還金額: <span>{props.redemption.toLocaleString()}</span> 円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='クーポン収入' onChange={(e) => props.handleIncome(e)} value={props.income} />
          <p>一年のクーポン収入: <span>{props.income.toLocaleString()}</span> 円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='残存期間' onChange={(e) => props.handleyear(e)} value={props.year} />
          <p>残存期間: <span>{props.year}</span>年</p>
        </div>
        <div className='main-btn-container'>
          <input className='main-btn' type="submit" value="計算" onClick={handleCal} />
          <select onChange={(e) => props.getRoundingOff(e)}>
            <option value="四捨五入">四捨五入</option>
            <option value="切り捨て">切り捨て</option>
            <option value="指定なし">指定なし</option>
          </select>
          <button className='reset' onClick={(e) => props.reset(e)}>リセット</button>
        </div>
      </form>
      <p className='answer'>（単利最終利回り） <span>{props.answer}</span> (%)</p>
      <div className='formula-container'>
        <h2>公式</h2>
        <div className='formula'>
          <p>単利最終利回り（％）</p>
          <p>＝</p>
          <div className='term'>
            <div className='formula'>
              <p className='molecule'>一年あたりの利子</p>
              <p>+</p>
              <div className='term'>
                <p>（償還価格 ー 購入価格）</p>
                <p>残存年数</p>
              </div>
            </div>
            <p className='denominator'>購入価格</p>
          </div>
          <p>×</p>
          <p>100</p>
        </div>
        <div className='formula'>
          <p>所有期間利回り（％）</p>
          <p>＝</p>
          <div className='term'>
            <div className='formula'>
              <p className='molecule'>一年あたりの利子</p>
              <p>+</p>
              <div className='term'>
                <p>（売却価格 ー 購入価格）</p>
                <p>残存年数</p>
              </div>
            </div>
            <p className='denominator'>購入価格</p>
          </div>
          <p>×</p>
          <p>100</p>
        </div>
      </div>
    </div>
  )
}

export default FinalSimple
