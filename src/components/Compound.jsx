import React from 'react'

const Compound = (props) => {

  const calculateFuture = (e) => {
    e.preventDefault();
    const useRate = props.rate / 100;
    const future = props.plice * ((1 + useRate) ** props.year);
    props.setRoundingOff(future);
  }

  const calculateNow = (e) => {
    e.preventDefault();
    const useRate = props.rate / 100;
    const now = props.plice / ((1 + useRate) ** props.year);
    props.setRoundingOff(now);
  }

  return (
    <div className={`container ${props.currentNum === 1 ? "" : "hide"}`}>
      <h1>複利計算</h1>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='価格' onChange={(e) => props.handlePlice(e)} value={props.plice} />
          <p>価格: <span>{props.plice.toLocaleString()}</span>円</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='金利' onChange={(e) => props.handleRate(e)} value={props.rate} />
          <p>金利: <span>{props.rate}</span> (%)</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='期間' onChange={(e) => props.handleyear(e)} value={props.year} />
          <p>期間: <span>{props.year}</span> 年</p>
        </div>
        <div className='main-btn-container'>
          <input className='main-btn' type="submit" value="将来価値を計算" onClick={calculateFuture} />
          <input className='main-btn' type="submit" value="現在価値を計算" onClick={calculateNow} />
          <select onChange={(e) => props.getRoundingOff(e)}>
            <option value="四捨五入">四捨五入</option>
            <option value="切り捨て">切り捨て</option>
            <option value="指定なし">指定なし</option>
          </select>
          <button className='reset' onClick={(e) => props.reset(e)}>リセット</button>
        </div>
      </form>
      <p className='answer'>（計算結果） <span>{props.answer.toLocaleString()}</span> 円 </p>
      <div className='formula-container'>
        <h2>公式</h2>
        <p>将来価格 = 現在価値 × ( 1 + 金利 ) ^ n</p>
        <p>現在価格 = 将来価値 ÷ ( 1 + 金利 ) ^ n</p>
        <p>＊「^」はべき乗</p>
      </div>
    </div>
  )
}

export default Compound
