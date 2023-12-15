import React from 'react'

const FinalCompound = (props) => {
  const links = [
    {
      title: "IRR関数",
      siteText: "IRR（内部収益率とは？）初心者でもできるExcelでの計算方法を徹底解説",
      youtubeText: "【Excel講座】｢RRI関数｣｢IRR関数｣で貯蓄型保険の“闇”を暴く！",
      site: "https://www.propertyagent.co.jp/contents/pro/first/5253",
      youtube: "https://www.youtube.com/watch?v=wvLbFFGvZQ0"
    },
    {
      title: "YIELD関数",
      siteText: "Excelで債券や証券の「利回り」を計算する【YIELD関数】【YIELDDISC関数】【YIELDMAT関数】",
      youtubeText: "Excelで債券の利回りを計算するYIELD（イールド）関数",
      site: "https://onepoint.softcampus.co.jp/mos_onepoint/44306/",
      youtube: "https://www.youtube.com/watch?v=XWTE6SdmEVY"
    },
  ];

  return (
    <div className={`container ${props.currentNum === 8 ? "" : "hide"}`}>
      <h1>リンク</h1>
      <h2 className='link-h2'>
        このサイトは複利最終利回り・複利所有期間利回りに対応していません。<br />
        下の操作方法を参考にExcelでの計算をお願いします。
      </h2>

      <ul className='links'>
        {links.map((link) => (
          <li className='link'>
            <p className='link-title'>⇩⇩　{link.title}　⇩⇩</p>
            <p><a href={link.site}>{link.siteText}</a></p>
            <p><a href={link.youtube}>{link.youtubeText}</a></p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default FinalCompound
