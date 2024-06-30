import{_ as o,r as p,o as c,c as l,b as n,d as s,a as e,e as t}from"./app-cad4e71c.js";const i={},u={id:"singledirectionscrollarea",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#singledirectionscrollarea","aria-hidden":"true"},"#",-1),d={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SingleDirectionScrollArea",target:"_blank",rel:"noopener noreferrer"},k=t(`<p><code>SingleDirectionScrollArea</code> 实现了单方向的平滑滚动，当竖直方向或者水平方向有太多数据需要展示时，可使用此组件。</p><p>竖直方向：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea <span class="token operator">=</span> SingleDirectionScrollArea<span class="token punctuation">(</span>orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Vertical<span class="token punctuation">)</span>
scrollArea<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>

<span class="token comment"># 竖直方向有很多组件</span>
view <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>
layout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>QPushButton<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;按钮 </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

scrollArea<span class="token punctuation">.</span>setWidget<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>水平方向：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea <span class="token operator">=</span> SingleDirectionScrollArea<span class="token punctuation">(</span>orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">)</span>
scrollArea<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>

<span class="token comment"># 水平方向有很多组件</span>
view <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>
layout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>QPushButton<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;按钮 </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

scrollArea<span class="token punctuation">.</span>setWidget<span class="token punctuation">(</span>view<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下滚动区域的背景和边框不透明，如需改为透明背景并移除边框：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;QScrollArea{background: transparent; border: none}&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 必须给内部的视图也加上透明背景样式</span>
view<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&quot;QWidget{background: transparent}&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={id:"scrollarea",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#scrollarea","aria-hidden":"true"},"#",-1),h={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.ScrollArea",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[n("code",null,"ScrollArea"),s(" 实现了水平和竖直方向的平滑滚动，使用方式和 "),n("code",null,"QScrollArea"),s(" 完全相同。")],-1),g={id:"scrollarea-1",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#scrollarea-1","aria-hidden":"true"},"#",-1),f={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.ScrollArea",target:"_blank",rel:"noopener noreferrer"},S=t(`<p><code>ScrollArea</code> 实现了水平和竖直方向的平滑滚动，使用方式和 <code>QScrollArea</code> 完全相同。</p><p>在某些情况下平滑滚动可能导致界面卡顿，取消平滑滚动的方法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scrollArea<span class="token punctuation">.</span>setSmoothMode<span class="token punctuation">(</span>SmoothMode<span class="token punctuation">.</span>NO_SMOOTH<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),y={id:"smoothscrollarea",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#smoothscrollarea","aria-hidden":"true"},"#",-1),A={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/scroll_area/index.html#qfluentwidgets.components.widgets.scroll_area.SmoothScrollArea",target:"_blank",rel:"noopener noreferrer"},x=t(`<p><code>SmoothScrollArea</code> 使用 <code>QPropertyAnimation</code> 实现了水平和竖直方向的平滑滚动，使用方式和 <code>QScrollArea</code> 完全相同。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>SmoothScrollArea<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 加载一张分辨率很高的图片</span>
        self<span class="token punctuation">.</span>label <span class="token operator">=</span> ImageLabel<span class="token punctuation">(</span><span class="token string">&quot;path/to/image.png&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># 自定义平滑滚动动画</span>
        self<span class="token punctuation">.</span>setScrollAnimation<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>Vertical<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> QEasingCurve<span class="token punctuation">.</span>OutQuint<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setScrollAnimation<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> QEasingCurve<span class="token punctuation">.</span>OutQuint<span class="token punctuation">)</span>

        <span class="token comment"># 滚动到指定区域</span>
        self<span class="token punctuation">.</span>horizontalScrollBar<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>setValue<span class="token punctuation">(</span><span class="token number">1900</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>setWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(Q,z){const a=p("ExternalLinkIcon");return c(),l("div",null,[n("h3",u,[r,s(),n("a",d,[s("SingleDirectionScrollArea"),e(a)])]),k,n("h3",m,[v,s(),n("a",h,[s("ScrollArea"),e(a)])]),b,n("h3",g,[_,s(),n("a",f,[s("ScrollArea"),e(a)])]),S,n("h3",y,[w,s(),n("a",A,[s("SmoothScrollArea"),e(a)])]),x])}const V=o(i,[["render",q],["__file","index.html.vue"]]);export{V as default};