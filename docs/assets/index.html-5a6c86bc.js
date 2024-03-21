import{_ as t,a as p}from"./Pager-25f69944.js";import{_ as o,r as i,o as c,c as r,b as n,d as s,a,e as l}from"./app-cad4e71c.js";const u={},d={id:"pipspager",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#pipspager","aria-hidden":"true"},"#",-1),g={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/pips_pager/index.html#qfluentwidgets.components.widgets.pips_pager.PipsPager",target:"_blank",rel:"noopener noreferrer"},h=l('<p><img src="'+p+`" alt="PipsPager"></p><p><code>PipsPager</code> is a lightweight pagination component, where each dot on the control represents a page. This control is very useful in scenarios where page switching is needed, such as image carousels or user guide interfaces.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pager <span class="token operator">=</span> PipsPager<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">)</span>

<span class="token comment"># Set the number of pages</span>
pager<span class="token punctuation">.</span>setPageNumber<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>

<span class="token comment"># Set the number of dots</span>
pager<span class="token punctuation">.</span>setVisibleNumber<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>

<span class="token comment"># Always display forward and backward buttons</span>
pager<span class="token punctuation">.</span>setNextButtonDisplayMode<span class="token punctuation">(</span>PipsScrollButtonDisplayMode<span class="token punctuation">.</span>ALWAYS<span class="token punctuation">)</span>
pager<span class="token punctuation">.</span>setPreviousButtonDisplayMode<span class="token punctuation">(</span>PipsScrollButtonDisplayMode<span class="token punctuation">.</span>ALWAYS<span class="token punctuation">)</span>

<span class="token comment"># Set the current page number</span>
pager<span class="token punctuation">.</span>setCurrentIndex<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the current page number changes, the signal <code>currentIndexChanged(index: int)</code> will be emitted:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pager<span class="token punctuation">.</span>currentIndexChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span> index<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> pager<span class="token punctuation">.</span>currentIndex<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),k={id:"pager",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#pager","aria-hidden":"true"},"#",-1),_={href:"https://qfluentwidgets.com/price",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[n("img",{src:t,alt:"Pager"})],-1),f=n("p",null,[n("code",null,"Pager"),s(" provides paging functionality, which is used to break down data when there is too much of it.")],-1);function x(w,y){const e=i("ExternalLinkIcon");return c(),r("div",null,[n("h3",d,[m,s(),n("a",g,[s("PipsPager"),a(e)])]),h,n("h3",k,[v,s(),n("a",_,[s("Pager"),a(e)])]),b,f])}const B=o(u,[["render",x],["__file","index.html.vue"]]);export{B as default};
