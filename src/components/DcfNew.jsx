import React, { useState } from 'react'

const DcfNew = (props) => {

  const [inputs, setInputs] = useState([{ text: "", id: 0, num: 1 }]);
  const [trick, setTrick] = useState(false);

  const plus = (e) => {
    e.preventDefault();
    setInputs([
      ...inputs,
      {
        text: "",
        id: inputs.length,
        num: inputs.length + 1,
        delete: false
      }
    ]);
  }

  const minus = (e) => {
    e.preventDefault();
    if (inputs.length > 1) {
      inputs.pop();
      setTrick(!trick);
    }
  }

  const reset = (e) => {
    e.preventDefault();
    props.setRate("");
    setInputs([{ text: "", id: 0, num: 1 }]);
    props.setAnswer("");
  }

  const handleText = (index, e) => {
    setInputs(inputs.map((input) => {
      if (input.id === index) {
        return {
          ...input,
          text: parseFloat(e.target.value)
        }
      }
      return input;
    }))
  }

  const handlecal = (e) => {
    e.preventDefault();
    const results = [];
    const useRate = props.rate / 100;
    inputs.forEach((input) => {
      let pv = input.text / ((1 + useRate) ** input.num);
      results.push(pv);
    });

    const total = results.reduce(function (sum, element) {
      return sum + element;
    }, 0);
    props.setRoundingOff(total);
    console.log(...inputs);
  }


  return (
    <div className={`container ${props.currentNum === 3 ? "" : "hide"}`}>
      <h1>DCF法(年ごとに異なるCF)</h1>
      <form>
        <div className='i-p'>
          <input type="number" placeholder='割引率（％）' onChange={(e) => props.handleRate(e)} value={props.rate} />
          <p>割引率 <span>{props.rate}</span>（％）</p>
        </div>
        <div className='plus-minus-container'>
          <button className='main-btn' onClick={plus}>1年 プラス</button>
          <button className='main-btn' onClick={minus}>1年 マイナス</button>
        </div>
        <ul className='i-p-container'>
          {inputs.map((input, index) => (
            <li key={index} className='i-p'>
              <input type="number" onChange={(e) => handleText(index, e)} value={input.text} placeholder={`${input.num}年目 （円）`} />
              <p>{input.num}年目: <span>{input.text.toLocaleString()}</span> 円</p>
            </li>

          ))}
        </ul>
        <div className='main-btn-container'>
          <input className='main-btn' type="submit" value="計算する" onClick={(e) => handlecal(e)} />
          <select onChange={(e) => props.getRoundingOff(e)}>
            <option value="四捨五入">四捨五入</option>
            <option value="切り捨て">切り捨て</option>
            <option value="指定なし">指定なし</option>
          </select>
          <button className='reset' onClick={reset}>リセット</button>
        </div>
      </form>
      <p className='answer'>（商品の現在価値） <span>{props.answer.toLocaleString()}</span> 円</p>
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

export default DcfNew
