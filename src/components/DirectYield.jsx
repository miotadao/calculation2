import React from 'react'

const DirectYield = (props) => {

  const handleCal = (e) => {
    e.preventDefault();
    const a = (props.income / props.plice) * 100;
    props.setRoundingOff(a);
  }

  return (
    <div className={`container ${props.currentNum === 4 ? "" : "hide"}`}>
      <h1>直接利回り</h1>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='年間の利子収入' onChange={(e) => props.handleIncome(e)} value={props.income} />
          <p>利子収入: <span>{props.income.toLocaleString()}</span> 円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='購入価格' onChange={(e) => props.handlePlice(e)} value={props.plice} />
          <p>購入価格: <span>{props.plice.toLocaleString()}</span> 円</p>
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
      <p className='answer'>（直接利回り）<span>{props.answer}</span>％</p>
      <div className='formula-container'>
        <h2>公式</h2>
        <div className='formula'>
          <p>直接利回り（％）</p>
          <p>＝</p>
          <div className='term'>
            <p>一年あたりの利子収入</p>
            <p>購入価格</p>
          </div>
          <p>×</p>
          <p>100</p>
        </div>
      </div>
    </div>
  )
}

export default DirectYield
