'use strict';
// Vector arrows avoid platform-specific emoji rendering, including dynamic labels.
function setArrowLabel(element, label) {
  const wrapper = document.createElement('span');
  wrapper.setAttribute('aria-hidden', 'true');
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('class', 'arrow-icon');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('aria-hidden', 'true');
  icon.setAttribute('focusable', 'false');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M5 19 19 5M5 5h14v14');
  icon.append(path);
  wrapper.append(icon);
  element.replaceChildren(document.createTextNode(label + ' '), wrapper);
}
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open)});
navigation?.addEventListener('click',e=>{if(e.target.closest('a')){navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navigation.classList.contains('open')){navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.focus()}});
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const modal=document.querySelector('#media-dialog');
const content=document.querySelector('#media-content');
const caption=document.querySelector('#media-caption');
let previousFocus;
document.querySelectorAll('[data-image],[data-video],[data-instagram]').forEach(button=>button.addEventListener('click',event=>{
event.preventDefault();
previousFocus=button;content.replaceChildren();caption.replaceChildren();document.querySelector('#media-title').textContent=button.dataset.title;
if(button.dataset.instagram){
const url=`https://www.instagram.com/reel/${button.dataset.instagram}/`;
const frame=document.createElement('iframe');
frame.src=url+'embed/';frame.title=button.dataset.title;frame.className='instagram-frame';frame.allow='autoplay; encrypted-media; fullscreen; picture-in-picture';frame.allowFullscreen=true;content.append(frame);
caption.textContent='Wedding film · Beyond The Vows';
}
else if(button.dataset.video){const frame=document.createElement('iframe');frame.src=`https://www.tiktok.com/player/v1/${button.dataset.video}?autoplay=0&rel=0&description=0`;frame.title=button.dataset.title;frame.className='video-frame';frame.allow='autoplay; encrypted-media; fullscreen; picture-in-picture';frame.allowFullscreen=true;content.append(frame);caption.textContent='Wedding film · Beyond The Vows'}
else{const img=document.createElement('img');img.src=button.dataset.image;img.alt=button.querySelector('img').alt;img.className='modal-image';content.append(img);caption.textContent='Captured by Beyond The Vows'}
modal.showModal();document.body.style.overflow='hidden';}));
document.querySelector('.close-dialog')?.addEventListener('click',()=>modal.close());
modal?.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close()}});
modal?.addEventListener('close',()=>{content.replaceChildren();document.body.style.overflow='';previousFocus?.focus()});
const date=document.querySelector('#wedding-date');
if(date){const now=new Date();date.min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;}
const form=document.querySelector('#enquiry-form');
if(form){
  const button=form.querySelector('[type="submit"]');
  const status=document.querySelector('#form-status');
  const confirmation=document.querySelector('#enquiry-success');
  let sending=false;
  button.disabled=false;
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(sending||!form.reportValidity())return;
    sending=true;
    button.disabled=true;
    button.textContent='Sending your enquiry…';
    form.setAttribute('aria-busy','true');
    status.textContent='Sending your enquiry. Please keep this page open until it’s complete.';
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),30000);
    try{
      const response=await fetch(form.dataset.endpoint,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(Object.fromEntries(new FormData(form))),
        signal:controller.signal
      });
      const result=await response.json();
      if(!response.ok||!(result.success===true||result.success==='true'))throw new Error('Submission not confirmed');
      form.hidden=true;
      confirmation.hidden=false;
      confirmation.focus();
    }catch(error){
      status.textContent='We couldn’t confirm your enquiry was sent. Your details are still here. Please try again, or email info@beyondthevows.co.uk if you’re unsure whether it went through.';
    }finally{
      clearTimeout(timeout);
      sending=false;
      form.removeAttribute('aria-busy');
      button.disabled=false;
      setArrowLabel(button,'Send your enquiry');
    }
  });
}
if(form){const interest=new URLSearchParams(location.search).get('service');const select=document.querySelector('#service');if(interest&&Array.from(select.options).some(option=>option.value===interest))select.value=interest;}
