'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// The provider inserts the form beside its script and loads global Flowbite CSS.
// A separate document preserves that behavior without changing the host site.
const formDocument = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body{margin:0;padding:0;background:#f3efe7;font-family:Arial,sans-serif}#widget-root{display:flow-root;width:100%}[data-widget-container]>.mx-auto>.flex.flex-col{width:100%!important;max-width:100%!important;padding:12px!important;border-radius:0!important;background-color:transparent!important}[data-widget-container]>.mx-auto>.flex.flex-col>div:has(>img){margin:-12px -12px 16px!important}#loading{padding:12px;color:#57514b;font-size:15px}</style></head>
<body><div id="widget-root"><p id="loading" role="status">Loading your free marketing report form…</p>
<script src="https://services.leadconnectorhq.com/prospecting/client/widget-embed.js" data-widget-id="6ae321378baf771302237e64" onerror="document.getElementById('loading').textContent='The form could not load. Please refresh or contact Timemac below.'"></script>
</div><script>
const root=document.getElementById('widget-root');
new MutationObserver(()=>{
  const widget=root.querySelector('[data-widget-container]');
  if(widget && widget.textContent.trim()) document.getElementById('loading')?.remove();
}).observe(root,{childList:true,subtree:true});
new ResizeObserver(()=>parent.postMessage({type:'timemac-report-height',height:Math.ceil(root.getBoundingClientRect().height)},'*')).observe(root);
</script></body></html>`;

export function MarketingReportForm() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(760);

  useEffect(() => {
    function resize(event: MessageEvent) {
      if (
        event.source === frame.current?.contentWindow &&
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
      <iframe
        ref={frame}
        title="Get your free Timemac marketing report"
        srcDoc={formDocument}
        style={{ height, width: '100%', border: 0, display: 'block' }}
      />
      <noscript>Enable JavaScript to use the marketing report form.</noscript>
      <p className="report-form-help">
        Trouble loading the form? <Link href="/contact">Contact our team</Link>.{' '}
        Read our <Link href="/privacy">Privacy Policy</Link> and{' '}
        <Link href="/terms">Terms & Conditions</Link>.
      </p>
    </div>
  );
}
