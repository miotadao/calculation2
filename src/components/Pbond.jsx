import React from 'react'

const Pbond = (props) => {

  let useRate;
  let useY;

  const handleCal = (e) => {
    e.preventDefault();
    let useRate = props.rate / 100;
    props.setIncome(useRate * 100);
    useY = props.y / 100;
    props.setRoundingOff((useRate * 100) / useY);
  }

  //----------------------サブ------------------------
  const handleCal2 = (e) => {
    e.preventDefault();
    let useRate2 = props.rate2 / 100;
    const newIncome = useRate2 * 100;
    props.setIncome2(newIncome);

    props.setRoundingOff2((newIncome / props.plice2) * 100);
  }






  return (
    <div className={`container ${props.currentNum === 7 ? "" : "hide"}`}>
      <h1>永久債</h1>
      <h2>⇩⇩ 債券価格を求める ⇩⇩</h2>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='利率' onChange={(e) => props.handleRate(e)} value={props.rate} />
          <p>利率: <span>{props.rate}</span> (%)</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='利回り' onChange={(e) => props.handleY(e)} value={props.y} />
          <p>利回り: <span>{props.y}</span> (%)</p>
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
      <p className='answer'>（債券価格） <span>{props.answer}</span> 円</p>
      <div className='space'></div>
      {/* -------------------サブ--------------------------------- */}
      <h2>⇩⇩ 利回りを求める ⇩⇩</h2>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='利率' onChange={(e) => props.handleRate2(e)} value={props.rate2} />
          <p>利率: <span>{props.rate2}</span> %</p>
        </div>
        <div className='i-p'>
          <input type="number" placeholder='債券・売買価格' onChange={(e) => props.handlePlice2(e)} value={props.plice2} />
          <p>債券・売却価格: <span>{props.plice2}</span> 円</p>
        </div>
        <div className='main-btn-container'>
          <input className='main-btn' type="submit" value="計算" onClick={handleCal2} />
          <select onChange={(e) => props.getRoundingOff2(e)}>
            <option value="四捨五入">四捨五入</option>
            <option value="切り捨て">切り捨て</option>
            <option value="指定なし">指定なし</option>
          </select>
          <button className='reset' onClick={(e) => props.reset2(e)}>リセット</button>
        </div>
      </form>
      <p className='answer'>（利回り） <span>{props.answer2}</span> (%)</p>
    </div>
  )
}

export default Pbond
