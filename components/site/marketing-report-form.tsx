'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCw } from 'lucide-react';

// The provider inserts the form beside its script and loads global Flowbite CSS.
// A separate document preserves that behavior without changing the host site.
const formDocument = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
@font-face{font-family:Archivo;src:url('/fonts/archivo.woff2') format('woff2');font-display:swap;font-weight:400 800}
html,body{margin:0;padding:0;background:#f3efe7;font-family:Archivo,Arial,sans-serif;color:#24211f}
#widget-root{display:flow-root;width:100%}
#widget-root [data-widget-container]>.mx-auto{width:100%!important;max-width:100%!important;padding:0!important;background:none!important}
#widget-root [data-widget-container]>.mx-auto>.flex.flex-col{width:100%!important;max-width:100%!important;padding:12px!important;border-radius:0!important;background-color:transparent!important;gap:0!important}
/* The page already supplies the campaign artwork and a clear form heading. */
#widget-root [data-widget-container]>.mx-auto>.flex.flex-col>div:has(>img),
#widget-root [data-widget-container]>.mx-auto>.flex.flex-col>p{display:none!important}
#widget-root form{display:grid;grid-template-columns:minmax(0,1fr);gap:18px;width:100%!important;max-width:none!important;margin:0!important}
#widget-root form>div{margin:0!important;min-width:0}
#widget-root form label{font-family:Archivo,Arial,sans-serif!important;color:#24211f!important;font-size:13px!important;line-height:1.5!important;font-weight:600!important;margin-bottom:8px}
#widget-root form input:not([type=radio]):not([type=checkbox]),#widget-root form select,#widget-root form textarea{box-sizing:border-box;width:100%;min-height:48px;padding:12px 14px!important;border:1px solid #cfc6ba!important;border-radius:6px!important;background:#fffdf8!important;color:#24211f!important;font-family:Archivo,Arial,sans-serif!important;font-size:16px!important;line-height:1.5!important;box-shadow:none!important}
#widget-root form input::placeholder{font-family:Archivo,Arial,sans-serif!important;color:#82796e!important;font-size:14px;opacity:1}
#widget-root form input:focus-visible,#widget-root form select:focus-visible,#widget-root form textarea:focus-visible{outline:2px solid #c43e25!important;outline-offset:2px;border-color:#c43e25!important}
#widget-root form input[type=radio]{width:18px;height:18px;flex-shrink:0;accent-color:#c43e25;color:#c43e25}
#widget-root form>div:has(input[type=radio]){display:flex!important;flex-wrap:wrap;gap:8px 20px!important;border-bottom:1px solid #ded6ca;padding-block:2px 16px}
#widget-root form>div:has(input[type=radio]) label{display:flex;align-items:center;min-height:36px;margin-bottom:0;cursor:pointer;font-size:13px!important}
#widget-root [data-widget-container] form button[type=submit]{min-height:52px;border-radius:6px!important;background:#c43e25!important;color:#fff!important;font-family:Archivo,Arial,sans-serif!important;font-size:15px!important;font-weight:600!important;padding:14px 20px!important;line-height:1.5!important;transition:background .15s}
#widget-root [data-widget-container] form button[type=submit]:hover{--report-button-background:#a8331e;background:#a8331e!important}
#widget-root form button:focus-visible{outline:2px solid #24211f;outline-offset:3px}
#loading{margin:0;padding:12px;min-height:160px;display:flex;align-items:center;gap:12px;color:#57514b;font-size:14px;line-height:1.6}
#loading:before{content:'';width:18px;height:18px;flex-shrink:0;border:2px solid #ded6ca;border-top-color:#c43e25;border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){#loading:before{animation:none}}
@media(min-width:480px){#widget-root form{grid-template-columns:repeat(2,minmax(0,1fr))}#widget-root form>*{grid-column:1/-1}#widget-root form>div:has(>input#first_name),#widget-root form>div:has(>input#last_name),#widget-root form>div:has(>input#phone),#widget-root form>div:has(>input#email){grid-column:auto}}
</style></head>
<body><div id="widget-root"><p id="loading" role="status">Loading your free marketing report form…</p>
<script src="https://services.leadconnectorhq.com/prospecting/client/widget-embed.js" data-widget-id="6ae321378baf771302237e64" onerror="document.getElementById('loading').textContent='The form could not load. Please try again below.';parent.postMessage({type:'timemac-report-status',status:'error'},'*')"></script>
</div><script>
const root=document.getElementById('widget-root');
let ready=false;
const autocomplete={first_name:'given-name',last_name:'family-name',email:'email',phone:'tel',website:'url'};
new MutationObserver(()=>{
  const widget=root.querySelector('[data-widget-container]');
  const form=widget?.querySelector('form');
  if(form && !ready){
    ready=true;
    document.getElementById('loading')?.remove();
    Object.entries(autocomplete).forEach(([id,value])=>{
      const input=form.querySelector('input#'+id);
      if(input){input.autocomplete=value;if(id==='phone')input.inputMode='tel'}
    });
    const submit=form.querySelector('button[type=submit]');
    if(submit){
      submit.textContent='Get my free report';
      submit.style.setProperty('background-color','var(--report-button-background, #c43e25)','important');
      submit.style.setProperty('color','#fff','important');
    }
    parent.postMessage({type:'timemac-report-status',status:'ready'},'*');
  }else if(widget && /failed to load widget/i.test(widget.textContent)){
    document.getElementById('loading')?.remove();
    parent.postMessage({type:'timemac-report-status',status:'error'},'*');
  }
}).observe(root,{childList:true,subtree:true});
setTimeout(()=>{if(!ready){
  const loading=document.getElementById('loading');
  if(loading)loading.textContent='The form is taking longer than usual. You can try again below.';
  parent.postMessage({type:'timemac-report-status',status:'error'},'*');
}},20000);
new ResizeObserver(()=>parent.postMessage({type:'timemac-report-height',height:Math.ceil(root.getBoundingClientRect().height)},'*')).observe(root);
</script></body></html>`;

export function MarketingReportForm() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(760);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );

  useEffect(() => {
    function resize(event: MessageEvent) {
      if (event.source !== frame.current?.contentWindow) return;
      if (
        event.data?.type === 'timemac-report-status' &&
        (event.data.status === 'ready' || event.data.status === 'error')
      ) {
        setStatus(event.data.status);
      }
      if (
        event.data?.type === 'timemac-report-height' &&
        typeof event.data.height === 'number' &&
        Number.isFinite(event.data.height) &&
        event.data.height > 100
      ) {
        setHeight(Math.ceil(event.data.height) + 8);
      }
    }
    window.addEventListener('message', resize);
    return () => window.removeEventListener('message', resize);
  }, []);

  return (
    <div className="report-form">
      <div className="report-form-heading">
        <span className="report-form-label">YOUR NEXT CHAPTER</span>
        <span className="report-form-free">
          FREE REPORT <ArrowRight size={14} aria-hidden="true" />
        </span>
        <h2>Let’s start with your business.</h2>
        <p>Find your business below, or enter its details manually.</p>
      </div>
      <iframe
        key={attempt}
        ref={frame}
        title="Get your free Timemac marketing report"
        srcDoc={formDocument}
        style={{ height, width: '100%', border: 0, display: 'block' }}
      />
      <noscript>Enable JavaScript to use the marketing report form.</noscript>
      {status === 'error' && (
        <div className="report-form-retry" role="status">
          <span>Having trouble connecting?</span>
          <button
            type="button"
            onClick={() => {
              setStatus('loading');
              setHeight(760);
              setAttempt((value) => value + 1);
            }}
          >
            <RotateCw size={15} aria-hidden="true" /> Try again
          </button>
        </div>
      )}
      <p className="report-form-help">
        Trouble loading the form? <Link href="/contact">Contact our team</Link>.{' '}
        Read our <Link href="/privacy">Privacy Policy</Link> and{' '}
        <Link href="/terms">Terms & Conditions</Link>.
      </p>
    </div>
  );
}
