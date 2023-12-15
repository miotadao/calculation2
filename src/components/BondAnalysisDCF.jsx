import React from 'react'

const BondAnalysisDCF = (props) => {

  const handleCal = (e) => {
    e.preventDefault();
    const results = [];
    const useYield = props.y / 100;
    for (let i = 1; i < (props.year + 1); i++) {
      let pv;
      if (i === props.year) {
        pv = (props.interest + props.plice) / ((1 + useYield) ** i);
        results.push(pv);
      } else {
        pv = props.interest / ((1 + useYield) ** i);
        results.push(pv);
      }
    }
    const total = results.reduce(function (sum, element) {
      return sum + element;
    }, 0);
    props.setRoundingOff(total);
  }

  return (
    <div className={`container ${props.currentNum === 6 ? "" : "hide"}`}>
      <h1>DCF法を使った債券価格分析</h1>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='償還金額' onChange={(e) => props.handlePlice(e)} value={props.plice} />
          <p>償還金額: <span>{props.plice.toLocaleString()}</span> 円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='利子' onChange={(e) => props.handleInterest(e)} value={props.interest} />
          <p>利子: <span>{props.interest.toLocaleString()}</span>円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='最終利回り' onChange={(e) => props.handleY(e)} value={props.y} />
          <p>最終利回り: <span>{props.y.toLocaleString()}</span>(%)</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='期間' onChange={(e) => props.handleyear(e)} value={props.year} />
          <p>期間: <span>{props.year.toLocaleString()} </span>年</p>
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
      <p className='answer'>（現在価値）<span>{props.answer.toLocaleString()}</span>円</p>
      <div className='formula-container'>
        <h2>公式</h2>
        <div className='formula'>
          <p>現在価値</p>
          <p>＝</p>
          <div className='term'>
            <p>利子</p>
            <p>(1 + 利回り)</p>
          </div>
          <p>+</p>
          <div className='term'>
            <p>利子</p>
            <p>(1 + 利回り) ^ 2</p>
          </div>
          <p>+</p>
          <p>・・・</p>
          <p>+</p>
          <div className='term'>
            <p>利子 + 償還金額</p>
            <p>(1 + 利回り) ^ n</p>
          </div>
        </div>
        <p>＊「^」はべき乗</p>
      </div>
    </div>
  )
}

export default BondAnalysisDCF
