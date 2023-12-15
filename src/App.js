import { useState } from 'react';
import './App.css';
import BondAnalysisDCF from './components/BondAnalysisDCF';
import Compound from './components/Compound';
import Dcf from './components/Dcf';
import DcfNew from './components/DcfNew';
import DirectYield from './components/DirectYield';
import FinalCompound from './components/FinalCompound';
import FinalSimple from './components/FinalSimple';
import Pbond from './components/Pbond';
import Sidebar from './components/Sidebar';
import Simple from './components/Simple';
import Header from './components/Header';




function App() {
  //------------------画面切り替え----------------------------
  const pages = [
    { title: "単利計算", id: 0 },
    { title: "複利計算", id: 1 },
    { title: "DCF(毎年同額のCF)", id: 2 },
    { title: "DCF(年ごとに異なるCF)", id: 3 },
    { title: "直接利回り", id: 4 },
    { title: "単利最終利回り", id: 5 },
    { title: "DCF応用債券価格分析", id: 6 },
    { title: "永久債", id: 7 },
    { title: "リンク", id: 8 },
  ];
  const [currentNum, setCurrentNun] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const handleClose = () => {
    setIsShow(false);
  }

  //---------------------------------------------------------

  const [plice, setPlice] = useState("");//価格
  const handlePlice = (e) => {
    setPlice(parseFloat(e.target.value));
  }

  const [rate, setRate] = useState("");//利率
  const handleRate = (e) => {
    setRate(parseFloat(e.target.value));
    console.log(rate);
  }

  const [year, setYear] = useState("");//年数 残存期間
  const handleyear = (e) => {
    setYear(parseFloat(e.target.value));
  }

  const [interest, setInterest] = useState("");//利子
  const handleInterest = (e) => {
    setInterest(parseFloat(e.target.value));
  }

  const [y, setY] = useState("");//利回り 最終利回り
  const handleY = (e) => {
    setY(parseFloat(e.target.value));
  }

  const [redemption, setRedemption] = useState("");  //償還金額 売却価格
  const handleRedemption = (e) => {
    setRedemption(parseFloat(e.target.value));
  }

  const [income, setIncome] = useState("");//利子収入  一年のクーポン収入 1年の支給額(CF)
  const handleIncome = (e) => {
    setIncome(parseFloat(e.target.value));
  }

  const [answer, setAnswer] = useState("");//計算結果



  //-------------------------四捨五入----------------------------------
  const [answerOption, setAnswerOption] = useState("四捨五入");
  const getRoundingOff = (e) => {
    const optionValue = e.target.value;
    setAnswerOption(optionValue);
    console.log(answerOption);
  }
  
  const setRoundingOff = (answer) => {
    switch (answerOption) {
      case "四捨五入":
        setAnswer(Math.round(answer));
        break;
      case "切り捨て":
        setAnswer(Math.floor(answer));
        break;
      case "指定なし":
        setAnswer(answer);
        break;
    }
  }

  //-----------------------------リセット----------------------------------

  const reset = (e) => {
    e.preventDefault();
    const resetValue = "";
    setPlice(resetValue);
    setRate(resetValue);
    setYear(resetValue);
    setInterest(resetValue);
    setY(resetValue);
    setRedemption(resetValue);
    setIncome(resetValue);
    setAnswer(resetValue);
    setAnswerOption('四捨五入');
  }


  //----------------サブ---------------------------------

  const [plice2, setPlice2] = useState("");
  const handlePlice2 = (e) => {
    setPlice2(parseFloat(e.target.value));
  }

  const [rate2, setRate2] = useState("");
  const handleRate2 = (e) => {
    setRate2(parseFloat(e.target.value));
  }

  const [income2, setIncome2] = useState("");//利子収入
  const [answer2, setAnswer2] = useState('');

  //----------------四捨五入サブ----------------------
  const [answerOption2, setAnswerOption2] = useState("四捨五入");
  const getRoundingOff2 = (e) => {
    const optionValue = e.target.value;
    setAnswerOption2(optionValue);
    console.log(answerOption2);
  }
  const setRoundingOff2 = (answer2) => {
    switch (answerOption2) {
      case "四捨五入":
        setAnswer2(Math.round(answer2));
        break;
      case "切り捨て":
        setAnswer2(Math.floor(answer2));
        break;
      case "指定なし":
        setAnswer2(answer2);
        break;
    }
  }
  //------------------リセット サブ-------------------
  const reset2 = (e) => {
    e.preventDefault();
    const resetValue2 = "";
    setPlice2(resetValue2);
    setRate2(resetValue2);
    setIncome2(resetValue2);
    setAnswer2(resetValue2);
  }

  return (
    <div >
      <Header
        isShow={isShow}
        setIsShow={setIsShow}
        handleClose={handleClose}
      />
      <div className={isShow === true ? "masck" : "hide"} onClick={handleClose}></div>

      <Sidebar
        pages={pages}
        currentNum={currentNum}
        setCurrentNun={setCurrentNun}
        isShow={isShow}
        reset={reset}
      />
      <div className='main'>
        <Simple
          currentNum={currentNum}
          plice={plice} handlePlice={handlePlice}
          rate={rate} handleRate={handleRate}
          year={year} handleyear={handleyear}
          answer={answer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
          reset={reset}
        />
        <Compound
          currentNum={currentNum}
          plice={plice} handlePlice={handlePlice}
          rate={rate} handleRate={handleRate}
          year={year} handleyear={handleyear}
          answer={answer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
          reset={reset}
        />
        <Dcf
          currentNum={currentNum}
          income={income} handleIncome={handleIncome}
          rate={rate} handleRate={handleRate}
          year={year} handleyear={handleyear}
          answer={answer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
          reset={reset}
        />
        <DcfNew
          currentNum={currentNum}
          rate={rate} setRate={setRate} handleRate={handleRate}
          answer={answer} setAnswer={setAnswer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
        />
        <DirectYield
          currentNum={currentNum}
          income={income} handleIncome={handleIncome}
          plice={plice} handlePlice={handlePlice}
          answer={answer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
          reset={reset}
        />
        <FinalSimple
          currentNum={currentNum}
          plice={plice} handlePlice={handlePlice}
          redemption={redemption} handleRedemption={handleRedemption}
          income={income} handleIncome={handleIncome}
          year={year} handleyear={handleyear}
          answer={answer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
          reset={reset}
        />
        <BondAnalysisDCF
          currentNum={currentNum}
          plice={plice} handlePlice={handlePlice}
          interest={interest} handleInterest={handleInterest}
          y={y} handleY={handleY}
          year={year} handleyear={handleyear}
          answer={answer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
          reset={reset}
        />
        <Pbond
          currentNum={currentNum}
          rate={rate} handleRate={handleRate}
          y={y} handleY={handleY}
          income={income} setIncome={setIncome} handleIncome={handleIncome}
          answer={answer}
          getRoundingOff={getRoundingOff} setRoundingOff={setRoundingOff}
          reset={reset}
          //サブ
          rate2={rate2} handleRate2={handleRate2}
          plice2={plice2} handlePlice2={handlePlice2}
          income2={income2} setIncome2={setIncome2}
          answer2={answer2} setAnswer2={setAnswer2}
          getRoundingOff2={getRoundingOff2} setRoundingOff2={setRoundingOff2}
          reset2={reset2}
        />
        <FinalCompound currentNum={currentNum} />
      </div>
    </div>

  );
}

export default App;
