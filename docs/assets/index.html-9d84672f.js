import{_ as i,a as o}from"./RadialGauge-cdce7fbb.js";import{_ as r,r as p,o as c,c as l,b as n,d as s,a,e as t}from"./app-cad4e71c.js";const d={},u={id:"progressring",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#progressring","aria-hidden":"true"},"#",-1),m={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.ProgressRing",target:"_blank",rel:"noopener noreferrer"},h=t('<p><img src="'+o+`" alt="ProgressRing"></p><p><code>ProgressRing</code> is a circular progress bar that can be used to represent processing progress or as a dashboard, its usage is similar to <a href="/zh/components/progressbar">ProgressBar</a>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ring <span class="token operator">=</span> ProgressRing<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Set the range and current value of the progress ring</span>
ring<span class="token punctuation">.</span>setRange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
ring<span class="token punctuation">.</span>setValue<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>

<span class="token comment"># Display text inside the progress ring</span>
ring<span class="token punctuation">.</span>setTextVisible<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># Adjust the size of the progress ring</span>
ring<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span>

<span class="token comment"># Adjust thickness</span>
ring<span class="token punctuation">.</span>setStrokeWidth<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adjust the text format of the progress ring, for example, to display temperature:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ring<span class="token punctuation">.</span>setFormat<span class="token punctuation">(</span><span class="token string">&quot;%v℃&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),k={id:"indeterminateprogressring",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#indeterminateprogressring","aria-hidden":"true"},"#",-1),b={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.IndeterminateProgressRing",target:"_blank",rel:"noopener noreferrer"},_=t(`<p><code>IndeterminateProgressRing</code> is used to indicate that the application is performing an operation, but the completion time of this operation is unknown.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>spinner <span class="token operator">=</span> IndeterminateProgressRing<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Adjust the size</span>
spinner<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

<span class="token comment"># Adjust thickness</span>
spinner<span class="token punctuation">.</span>setStrokeWidth<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={id:"radialgauge",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#radialgauge","aria-hidden":"true"},"#",-1),y={href:"https://qfluentwidgets.com/price",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,[n("img",{src:i,alt:"RadialGauge"})],-1),w=n("p",null,[n("code",null,"RadialGauge"),s(" can be used to display a range of data, such as speed, progress, or other measurements that can be represented by angles.")],-1);function P(q,I){const e=p("ExternalLinkIcon");return c(),l("div",null,[n("h3",u,[g,s(),n("a",m,[s("ProgressRing"),a(e)])]),h,n("h3",k,[v,s(),n("a",b,[s("IndeterminateProgressRing"),a(e)])]),_,n("h3",f,[x,s(),n("a",y,[s("RadialGauge"),a(e)])]),R,w])}const j=r(d,[["render",P],["__file","index.html.vue"]]);export{j as default};
