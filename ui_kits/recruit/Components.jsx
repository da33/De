// Recruit Deck UI Kit — 招生 marketing pages
const { useState } = React;

function DeckSlide({ bg, children, align='center', label, overlay=true }) {
  return (
    <section style={{position:'relative',minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:align==='left'?'flex-start':'center',textAlign:align==='left'?'left':'center',padding:'80px',overflow:'hidden',background:'#0a0a0a'}}>
      {bg && <>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
        {overlay && <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.72)'}}></div>}
      </>}
      <div style={{position:'relative',zIndex:1,width:'100%',maxWidth:960}}>
        {label && <div style={{fontSize:11,letterSpacing:'.35em',color:'#6a5820',textTransform:'uppercase',marginBottom:20,fontFamily:'var(--font-mono)'}}>{label}</div>}
        {children}
      </div>
    </section>
  );
}

function DeckH1({ children }) {
  return <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px,6vw,72px)',color:'#c9a84c',letterSpacing:'.08em',lineHeight:1.2,marginBottom:20,textTransform:'uppercase'}}>{children}</div>;
}
function DeckH2({ children }) {
  return <div style={{fontFamily:'var(--font-tc)',fontSize:'clamp(24px,4vw,42px)',fontWeight:900,color:'#c9a84c',letterSpacing:'.04em',lineHeight:1.3,marginBottom:16}}>{children}</div>;
}
function DeckSub({ children }) {
  return <div style={{fontFamily:'var(--font-tc)',fontSize:'clamp(13px,1.6vw,17px)',color:'#b89a60',letterSpacing:'.08em',lineHeight:1.8,maxWidth:640,margin:'0 auto'}}>{children}</div>;
}
function DeckLine({ left }) {
  return <div style={{width:48,height:1,background:'#c9a84c',margin:left?'20px 0':'24px auto'}}></div>;
}

function CardGrid({ cols=3, items }) {
  return (
    <div style={{display:'grid',gridTemplateColumns:`repeat(${cols},1fr)`,gap:1,background:'#2a1e08',border:'1px solid #2a1e08',marginTop:28,width:'100%'}}>
      {items.map((it, i) => (
        <div key={i} style={{background:'#0d0d0d',padding:'20px 18px',textAlign:'left'}}>
          {it.tag && <div style={{fontSize:10,letterSpacing:'.25em',color:'#5a4818',marginBottom:6,fontFamily:'var(--font-mono)'}}>{it.tag}</div>}
          {it.title && <div style={{fontSize:15,color:it.titleColor||'#c9a84c',fontWeight:700,marginBottom:6,fontFamily:'var(--font-tc)'}}>{it.title}</div>}
          {it.desc && <div style={{fontSize:12,color:'#8a7040',lineHeight:1.7,fontFamily:'var(--font-tc)'}}>{it.desc}</div>}
        </div>
      ))}
    </div>
  );
}

function PathList({ items }) {
  return (
    <div style={{width:'100%',marginTop:24,borderTop:'1px solid #2a1e08'}}>
      {items.map((it, i) => (
        <div key={i} style={{display:'grid',gridTemplateColumns:'160px 1fr',borderBottom:'1px solid #2a1e08'}}>
          <div style={{padding:'16px 14px',borderRight:'1px solid #2a1e08'}}>
            <span style={{fontSize:10,letterSpacing:'.25em',color:'#5a4818',display:'block',marginBottom:4,fontFamily:'var(--font-mono)'}}>{it.n}</span>
            <div style={{fontSize:13,color:'#c9a84c',fontWeight:700,fontFamily:'var(--font-tc)'}}>{it.name}</div>
          </div>
          <div style={{padding:'16px 14px'}}>
            <div style={{fontSize:14,color:'#ede0c4',fontWeight:700,marginBottom:4,fontFamily:'var(--font-tc)'}}>{it.tag}</div>
            <div style={{fontSize:12,color:'#6a5830',lineHeight:1.6,fontFamily:'var(--font-tc)'}}>{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DeckNav({ i, n, onPrev, onNext }) {
  return (<>
    <div style={{position:'fixed',bottom:0,left:0,right:0,height:2,background:'#1a1208',zIndex:100}}>
      <div style={{height:'100%',background:'#c9a84c',width:`${((i+1)/n)*100}%`,transition:'width .3s'}}></div>
    </div>
    <div style={{position:'fixed',bottom:14,right:20,fontSize:10,letterSpacing:'.25em',color:'#3a2e10',zIndex:100,fontFamily:'var(--font-mono)'}}>{i+1} / {n}</div>
    <button onClick={onPrev} style={{position:'fixed',top:'50%',left:4,transform:'translateY(-50%)',background:'none',border:'none',cursor:'pointer',fontSize:32,color:'#2a1e08',padding:16,zIndex:100}}>‹</button>
    <button onClick={onNext} style={{position:'fixed',top:'50%',right:4,transform:'translateY(-50%)',background:'none',border:'none',cursor:'pointer',fontSize:32,color:'#2a1e08',padding:16,zIndex:100}}>›</button>
  </>);
}

Object.assign(window, { DeckSlide, DeckH1, DeckH2, DeckSub, DeckLine, CardGrid, PathList, DeckNav });
