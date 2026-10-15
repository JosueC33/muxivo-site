// Arrow-key / Page / Space navigation between slides, as on the Veilbox pages.
// Inside the long full-text section the keys scroll normally.
(()=>{
  const stops=[...document.querySelectorAll('.slide,.doc')];
  const hint=document.querySelector('.hint');
  const cur=()=>{const y=scrollY+innerHeight/2;
    const i=stops.findIndex(s=>y>=s.offsetTop&&y<s.offsetTop+s.offsetHeight);
    return i<0?(scrollY<10?0:stops.length-1):i;};
  const go=i=>stops[Math.max(0,Math.min(i,stops.length-1))].scrollIntoView({behavior:'smooth'});
  addEventListener('keydown',e=>{
    if(e.metaKey||e.ctrlKey||e.altKey||e.defaultPrevented)return;
    const down=['ArrowDown','PageDown'].includes(e.key)||(e.key===' '&&!e.shiftKey);
    const up=['ArrowUp','PageUp'].includes(e.key)||(e.key===' '&&e.shiftKey);
    if(!down&&!up)return;
    const i=cur(),s=stops[i];
    if(s.classList.contains('doc')&&!(up&&scrollY<=s.offsetTop+4))return;
    if(down&&i===stops.length-1)return;
    e.preventDefault();go(down?i+1:i-1);
  });
  const sync=()=>{if(!hint)return;const i=cur();
    hint.classList.toggle('gone',i===stops.length-1||stops[i].classList.contains('doc'));};
  addEventListener('scroll',sync,{passive:true});sync();
})();
