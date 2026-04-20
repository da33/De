// Portfolio UI Kit — dark editorial, inspired by da33/lin-yu-fan
const { useState, useEffect, useRef } = React;

function Nav({ active = 'about' }) {
  const links = [['about','About'],['experience','Work'],['international','Global'],['contact','Contact']];
  return (
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,padding:'2rem 3rem',display:'flex',justifyContent:'space-between',alignItems:'center',mixBlendMode:'difference'}}>
      <div style={{fontSize:'.7rem',letterSpacing:'.3em',textTransform:'uppercase',color:'var(--paper)',fontWeight:500}}>Lin Yu-Fan</div>
      <div style={{display:'flex',gap:'2.5rem'}}>
        {links.map(([id,label]) => (
          <a key={id} href={`#${id}`} style={{fontSize:'.65rem',letterSpacing:'.25em',textTransform:'uppercase',color:'var(--paper)',textDecoration:'none',opacity:active===id?1:.5}}>{label}</a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'3rem',position:'relative',overflow:'hidden',borderBottom:'1px solid rgba(245,244,240,0.08)',background:'var(--ink)'}}>
      <div style={{position:'absolute',top:'8rem',right:'3rem',fontSize:'.65rem',letterSpacing:'.3em',color:'rgba(245,244,240,0.2)',textTransform:'uppercase'}}>Portfolio — 2026</div>
      <div style={{position:'relative',zIndex:2}}>
        <div style={{fontSize:'.65rem',letterSpacing:'.35em',textTransform:'uppercase',color:'rgba(245,244,240,0.4)',marginBottom:'1.5rem'}}>Dancer · Educator · Creator</div>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(5rem,13vw,14rem)',fontWeight:900,lineHeight:.9,letterSpacing:'-.02em',textTransform:'uppercase',margin:0}}>
          Lin<br/><span style={{color:'transparent',WebkitTextStroke:'1px rgba(245,244,240,0.4)'}}>Yu-Fan</span>
        </h1>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginTop:'3rem',paddingTop:'2rem',borderTop:'1px solid rgba(245,244,240,0.1)'}}>
          <p style={{fontSize:'.8rem',color:'rgba(245,244,240,0.4)',letterSpacing:'.08em',maxWidth:300,lineHeight:1.8,fontFamily:'var(--font-tc)'}}>萬能科技大學時尚造型設計系專任講師<br/>舞蹈藝術家 · 表演藝術教育者</p>
          <div style={{fontSize:'.6rem',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(245,244,240,0.3)',display:'flex',alignItems:'center',gap:'1rem'}}>
            <span style={{display:'block',width:40,height:1,background:'rgba(245,244,240,0.2)'}}></span>Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee({ items }) {
  return (
    <div style={{overflow:'hidden',borderBottom:'1px solid rgba(245,244,240,0.08)',padding:'1.2rem 0',background:'var(--ink)'}}>
      <div style={{display:'flex',gap:'4rem',animation:'rpmarquee 20s linear infinite',whiteSpace:'nowrap'}}>
        {[...items,...items].map((item, i) => (
          <React.Fragment key={i}>
            <span style={{fontSize:'.65rem',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(245,244,240,0.25)'}}>{item}</span>
            <span style={{color:'var(--flare)'}}>✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function About() {
  const skills = ['舞蹈藝術','表演訓練','Hip-Hop','編舞','自媒體','數位音樂','國際合作','影音製作'];
  return (
    <section id="about" style={{padding:'8rem 3rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6rem',borderBottom:'1px solid rgba(245,244,240,0.08)'}}>
      <div>
        <div style={{fontSize:'.6rem',letterSpacing:'.3em',color:'rgba(245,244,240,0.25)',marginBottom:'4rem',textTransform:'uppercase',fontFamily:'var(--font-mono)'}}>001 — About</div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2.5rem,5vw,5rem)',lineHeight:.95,textTransform:'uppercase',letterSpacing:'-.02em',margin:0}}>Who<br/><em style={{fontStyle:'normal',color:'transparent',WebkitTextStroke:'1px rgba(245,244,240,0.3)'}}>I Am</em></h2>
      </div>
      <div style={{paddingTop:'5rem'}}>
        <p style={{fontFamily:'var(--font-tc)',fontSize:'1rem',lineHeight:1.9,color:'rgba(245,244,240,0.6)',marginBottom:'1.5rem',fontWeight:300}}>現任<strong style={{color:'var(--paper)',fontWeight:500}}>萬能科技大學時尚造型設計系</strong>專任講師，深耕表演藝術教育超過十年。</p>
        <p style={{fontFamily:'var(--font-tc)',fontSize:'1rem',lineHeight:1.9,color:'rgba(245,244,240,0.6)',marginBottom:'1.5rem',fontWeight:300}}>專精舞蹈藝術、表演訓練與數位媒體應用，致力於培育具備<strong style={{color:'var(--paper)',fontWeight:500}}>國際視野</strong>的表演藝術人才。</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem',marginTop:'2.5rem'}}>
          {skills.map(s => <span key={s} style={{fontSize:'.65rem',letterSpacing:'.2em',textTransform:'uppercase',padding:'.4rem .9rem',border:'1px solid rgba(245,244,240,0.15)',color:'rgba(245,244,240,0.5)'}}>{s}</span>)}
        </div>
      </div>
    </section>
  );
}

function ExpItem({ n, title, place, year, active, onHover }) {
  return (
    <div onMouseEnter={onHover} style={{display:'grid',gridTemplateColumns:'80px 1fr 1fr auto',gap:'2rem',alignItems:'center',padding:'2rem 0',paddingLeft:active?'1rem':0,borderBottom:'1px solid rgba(245,244,240,0.06)',transition:'all .3s',cursor:'default'}}>
      <span style={{fontFamily:'var(--font-mono)',fontSize:'.65rem',letterSpacing:'.2em',color:'rgba(245,244,240,0.3)'}}>{n}</span>
      <span style={{fontSize:'1.1rem',fontWeight:500,color:active?'var(--paper)':'rgba(245,244,240,0.8)',transition:'color .3s'}}>{title}</span>
      <span style={{fontSize:'.8rem',color:'rgba(245,244,240,0.35)',letterSpacing:'.05em'}}>{place}</span>
      <span style={{fontFamily:'var(--font-mono)',fontSize:'.65rem',letterSpacing:'.2em',color:'rgba(245,244,240,0.35)',textAlign:'right'}}>{year}</span>
    </div>
  );
}

function Experience() {
  const [hov, setHov] = useState(-1);
  const items = [
    ['01','專任講師','萬能科技大學 時尚造型設計系','2024 — Now'],
    ['02','創辦人 · 校長','踢踢兒童街舞培訓中心','2023 — Now'],
    ['03','創辦人 · Swipe APP','台灣首個互動型舞蹈學習平台','2022'],
    ['04','行銷企劃顧問','HRC 台灣最大街舞教室','2019 — 2022'],
    ['05','影像主管 · VJ','FLUX STUDIO, Shanghai','2016 — 2019'],
    ['06','職業舞者 · 編舞師','Dance Soul 靈動力','2002 — 2012'],
  ];
  return (
    <section id="experience" style={{padding:'0 3rem 8rem',borderBottom:'1px solid rgba(245,244,240,0.08)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',padding:'3rem 0 2rem',borderBottom:'1px solid rgba(245,244,240,0.08)'}}>
        <h2 style={{fontFamily:'var(--font-mono)',fontSize:'.65rem',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(245,244,240,0.3)',margin:0}}>002 — Experience</h2>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'.65rem',letterSpacing:'.2em',color:'rgba(245,244,240,0.3)'}}>06 Positions</span>
      </div>
      {items.map((it, i) => (
        <ExpItem key={i} n={it[0]} title={it[1]} place={it[2]} year={it[3]} active={hov===i} onHover={()=>setHov(i)} />
      ))}
    </section>
  );
}

function Global() {
  const cards = [
    {flag:'🇨🇳',year:'2014 — 2019',country:'China · Shanghai',name:'FLUX STUDIO',desc:'執行超過 100 場大型品牌活動視覺設計。Adidas、Nike、NBA、Nespresso、Moet & Chandon。'},
    {flag:'🌏',year:'2002 — 2012',country:'World Tour',name:'世界巡迴演唱會',desc:'羅志祥、蕭亞軒、林俊傑、王力宏、潘瑋柏專屬舞者。'},
    {flag:'🇯🇵',year:'2022',country:'Japan · Collab',name:'Swipe APP',desc:'與日本 RIZIN DANCE STUDIO 合作，台灣首個互動舞蹈學習 APP。'},
    {flag:'🇫🇷',year:'2025',country:'France',name:'學海築夢計畫',desc:'帶領時尚造型設計系學生赴法國海外實習。'},
  ];
  return (
    <section id="international" style={{padding:'8rem 3rem',borderBottom:'1px solid rgba(245,244,240,0.08)'}}>
      <div style={{marginBottom:'5rem'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'.65rem',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(245,244,240,0.3)',marginBottom:'1.5rem'}}>003 — Global</div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2.5rem,5vw,5rem)',textTransform:'uppercase',letterSpacing:'-.02em',margin:0}}>International</h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(245,244,240,0.08)'}}>
        {cards.map((c, i) => (
          <div key={i} style={{background:'var(--ink)',padding:'3rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'3rem'}}>
              <div style={{fontSize:'2rem'}}>{c.flag}</div>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'.6rem',letterSpacing:'.25em',color:'rgba(245,244,240,0.25)',textTransform:'uppercase'}}>{c.year}</span>
            </div>
            <div style={{fontSize:'.6rem',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(245,244,240,0.3)',marginBottom:'.8rem',fontFamily:'var(--font-mono)'}}>{c.country}</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',lineHeight:1.2,marginBottom:'1.2rem',letterSpacing:'-.01em',textTransform:'uppercase'}}>{c.name}</div>
            <div style={{fontSize:'.85rem',color:'rgba(245,244,240,0.45)',lineHeight:1.9,fontFamily:'var(--font-tc)',fontWeight:300}}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ onSend }) {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState('');
  return (
    <section id="contact" style={{padding:'8rem 3rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6rem',alignItems:'center'}}>
      <div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(3rem,7vw,8rem)',textTransform:'uppercase',letterSpacing:'-.03em',lineHeight:.9,margin:0}}>Let's<br/><em style={{fontStyle:'normal',color:'transparent',WebkitTextStroke:'1px rgba(245,244,240,0.3)'}}>Talk</em></h2>
      </div>
      <div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'.65rem',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(245,244,240,0.3)',marginBottom:'2rem'}}>005 — Contact</div>
        {sent ? (
          <div style={{border:'1px solid var(--flare)',padding:'2rem',color:'var(--flare)'}}>Sent ✦ Thanks — I'll be in touch.</div>
        ) : (
          <>
            <p style={{fontFamily:'var(--font-tc)',fontSize:'.9rem',color:'rgba(245,244,240,0.5)',lineHeight:1.9,marginBottom:'2rem',fontWeight:300}}>無論是課程合作、演出邀約或國際交流計畫，歡迎與我聯繫。</p>
            <input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Your message · 訊息" style={{width:'100%',background:'transparent',border:'none',borderBottom:'1px solid rgba(245,244,240,0.2)',padding:'1rem 0',color:'var(--paper)',fontSize:'.9rem',fontFamily:'var(--font-body)',outline:'none',marginBottom:'1.5rem'}} />
            <button onClick={()=>{setSent(true); onSend && onSend(msg);}} style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',padding:'1.2rem 1.5rem',border:'1px solid rgba(245,244,240,0.2)',background:'transparent',color:'rgba(245,244,240,0.7)',fontSize:'.8rem',letterSpacing:'.2em',textTransform:'uppercase',cursor:'pointer',fontFamily:'var(--font-body)'}}>Send → <span style={{opacity:.4}}>rino1133@gmail.com</span></button>
          </>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Marquee, About, Experience, Global, Contact });
