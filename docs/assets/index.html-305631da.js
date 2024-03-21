import{_ as o,r as p,o as c,c as l,b as n,d as s,a as e,e as t}from"./app-cad4e71c.js";const i={},r={id:"singledirectionscrollarea",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#singledirectionscrollarea","aria-hidden":"true"},"#",-1),d={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SingleDirectionScrollArea",target:"_blank",rel:"noopener noreferrer"},k=t(`<p><code>SingleDirectionScrollArea</code> implements smooth scrolling in a single direction. This component can be used when there is too much data to display in the vertical or horizontal direction.</p><p>Vertical direction:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea <span class="token operator">=</span> SingleDirectionScrollArea<span class="token punctuation">(</span>orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Vertical<span class="token punctuation">)</span>
scrollArea<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>

<span class="token comment"># There are many components in the vertical direction</span>
view <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>
layout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>QPushButton<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Button </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

scrollArea<span class="token punctuation">.</span>setWidget<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Horizontal direction:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea <span class="token operator">=</span> SingleDirectionScrollArea<span class="token punctuation">(</span>orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">)</span>
scrollArea<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>

<span class="token comment"># There are many components in the horizontal direction</span>
view <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>
layout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>QPushButton<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Button </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

scrollArea<span class="token punctuation">.</span>setWidget<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the background and border of the scroll area are opaque. To change to a transparent background and remove the border:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;QScrollArea{background: transparent; border: none}&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># You must also add a transparent background style to the internal view</span>
view<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;QWidget{background: transparent}&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={id:"scrollarea",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#scrollarea","aria-hidden":"true"},"#",-1),v={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.ScrollArea",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[n("code",null,"ScrollArea"),s(" implements smooth scrolling in the horizontal and vertical directions. The usage is exactly the same as "),n("code",null,"QScrollArea"),s(".")],-1),b={id:"scrollarea-1",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#scrollarea-1","aria-hidden":"true"},"#",-1),f={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.ScrollArea",target:"_blank",rel:"noopener noreferrer"},y=t(`<p><code>ScrollArea</code> implements smooth scrolling in the horizontal and vertical directions. The usage is exactly the same as <code>QScrollArea</code>.</p><p>In some cases, smooth scrolling may cause the interface to stutter, and the method to cancel smooth scrolling is as follows:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea<span class="token punctuation">.</span>setSmoothMode<span class="token punctuation">(</span>SmoothMode<span class="token punctuation">.</span>NO_SMOOTH<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),S={id:"smoothscrollarea",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#smoothscrollarea","aria-hidden":"true"},"#",-1),A={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SmoothScrollArea",target:"_blank",rel:"noopener noreferrer"},x=t(`<p><code>SmoothScrollArea</code> uses <code>QPropertyAnimation</code> to implement smooth scrolling in the horizontal and vertical directions. The usage is exactly the same as <code>QScrollArea</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>SmoothScrollArea<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># Load a high-resolution image</span>
        self<span class="token punctuation">.</span>label <span class="token operator">=</span> ImageLabel<span class="token punctuation">(</span><span class="token string">&quot;path/to/image.png&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># Custom smooth scrolling animation</span>
        self<span class="token punctuation">.</span>setScrollAnimation<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>Vertical<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> QEasingCurve<span class="token punctuation">.</span>OutQuint<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setScrollAnimation<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> QEasingCurve<span class="token punctuation">.</span>OutQuint<span class="token punctuation">)</span>

        <span class="token comment"># Scroll to a specific area</span>
        self<span class="token punctuation">.</span>horizontalScrollBar<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setValue<span class="token punctuation">(</span><span class="token number">1900</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>setWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(Q,z){const a=p("ExternalLinkIcon");return c(),l("div",null,[n("h3",r,[u,s(),n("a",d,[s("SingleDirectionScrollArea"),e(a)])]),k,n("h3",m,[h,s(),n("a",v,[s("ScrollArea"),e(a)])]),g,n("h3",b,[_,s(),n("a",f,[s("ScrollArea"),e(a)])]),y,n("h3",S,[w,s(),n("a",A,[s("SmoothScrollArea"),e(a)])]),x])}const T=o(i,[["render",q],["__file","index.html.vue"]]);export{T as default};
