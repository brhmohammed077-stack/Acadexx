document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
// Prototype thumbnails are intentional placeholders; replace each with real work samples/videos later.
document.querySelectorAll('[data-gallery]').forEach(g=>{for(let i=1;i<=15;i++){const t=document.createElement('div');t.className='thumb';t.textContent='صورة '+String(i).padStart(2,'0');g.appendChild(t)}});
const orderForm=document.getElementById('order-form');
if(orderForm){const params=new URLSearchParams(location.search);const packageMap={basic:'الباقة الأساسية',pro:'الباقة الاحترافية',premium:'الباقة المميزة'};const productMap={'academic-presentation':'قالب عرض أكاديمي','word-research':'قالب بحث Word','portfolio':'قالب عرض أعمال','canva-bundle':'حزمة قوالب Canva','cv-template':'قالب سيرة ذاتية','design-bundle':'حزمة تصميم متكاملة'};const pre=packageMap[params.get('package')]||productMap[params.get('product')];if(pre){const select=orderForm.elements.service;for(const o of select.options){if(o.text===pre){select.value=o.value;break}}}orderForm.addEventListener('submit',e=>{e.preventDefault();if(!orderForm.reportValidity())return;const d=Object.fromEntries(new FormData(orderForm).entries());const subject=encodeURIComponent('طلب جديد - ACADEX');const body=encodeURIComponent(`الاسم: ${d.name}
البريد: ${d.email}
الهاتف: ${d.phone}
الخدمة: ${d.service}
الموضوع: ${d.topic}
التفاصيل: ${d.details}
رابط مرجعي: ${d.reference||'—'}

ملاحظة: هذه رسالة مُجهّزة من نسخة الموقع الثابتة.`);document.getElementById('form-status').textContent='سيُفتح تطبيق البريد لإرسال الطلب. لم يتم إرساله تلقائيًا من الموقع.';location.href=`mailto:?subject=${subject}&body=${body}`;});}
const trackForm=document.getElementById('track-form');if(trackForm)trackForm.addEventListener('submit',e=>{e.preventDefault();document.getElementById('track-status').textContent='لم يتم تفعيل قاعدة بيانات الطلبات بعد؛ لا يمكن جلب حالة حقيقية حتى ربط النظام الخلفي.'});
const menu=document.querySelector('.menu');if(menu)menu.addEventListener('click',()=>{const nav=document.querySelector('.header nav');nav.style.display=nav.style.display==='none'?'flex':'none'});
