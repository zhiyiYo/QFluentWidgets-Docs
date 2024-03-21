import{_ as t}from"./BreadCrumbBar-efd69d4c.js";import{_ as e,r as p,o,c,b as n,d as s,a as u,e as i}from"./app-cad4e71c.js";const l={},d={id:"breadcrumbbar",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#breadcrumbbar","aria-hidden":"true"},"#",-1),k={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/breadcrumb/index.html#qfluentwidgets.components.navigation.breadcrumb.BreadcrumbBar",target:"_blank",rel:"noopener noreferrer"},m=i('<p><img src="'+t+`" alt="BreadcrumbBar"></p><p><code>BreadcrumbBar</code> serves as an auxiliary and supplementary navigation method. It allows users to know their location within the application and can easily return to their original location.</p><p>You can append a node to the right by using <code>addItem()</code>. When there are too many nodes to fit in the viewport, the nodes on the left will be folded into the menu:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>breadcrumb <span class="token operator">=</span> BreadcrumbBar<span class="token punctuation">(</span><span class="token punctuation">)</span>
items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Documents&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Learning Materials&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Action Movies&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Ip Man&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> items<span class="token punctuation">:</span>
    <span class="token comment"># The first parameter is routeKey, which must be globally unique</span>
    breadcrumb<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>item<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the selected node changes, it will send <code>currentItemChanged(routeKey: str)</code> and <code>currentIndexChanged(index: int)</code> signals:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>breadcrumbBar<span class="token punctuation">.</span>currentItemChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span> key<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Adjust the layout and font of the breadcrumb:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>qfluentwidgets<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span>breadcrumbBar<span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
breadcrumbBar<span class="token punctuation">.</span>setSpacing<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The breadcrumb navigation bar is often used with <code>QStackedWidget</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&#39;Demo{background:rgb(255,255,255)}&#39;</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>breadcrumbBar <span class="token operator">=</span> BreadcrumbBar<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget <span class="token operator">=</span> QStackedWidget<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>lineEdit <span class="token operator">=</span> LineEdit<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addButton <span class="token operator">=</span> PrimaryToolButton<span class="token punctuation">(</span>FluentIcon<span class="token punctuation">.</span>SEND<span class="token punctuation">,</span> self<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>vBoxLayout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lineEditLayout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># Add a new navigation item and sub-interface when the enter key is pressed or the button is clicked</span>
        self<span class="token punctuation">.</span>addButton<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>returnPressed<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">.</span>currentItemChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>switchInterface<span class="token punctuation">)</span>

        <span class="token comment"># Adjust the size of the breadcrumb navigation</span>
        setFont<span class="token punctuation">(</span>self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">.</span>setSpacing<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">&#39;Enter the name of interface&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># Add two navigation items</span>
        self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span><span class="token string">&#39;Home&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span><span class="token string">&#39;Documents&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># Initialize layout</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>setContentsMargins<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>addLayout<span class="token punctuation">(</span>self<span class="token punctuation">.</span>lineEditLayout<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>lineEditLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lineEditLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>addButton<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">addInterface</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> text<span class="token punctuation">:</span>
            <span class="token keyword">return</span>

        w <span class="token operator">=</span> SubtitleLabel<span class="token punctuation">(</span>text<span class="token punctuation">)</span>
        w<span class="token punctuation">.</span>setObjectName<span class="token punctuation">(</span>uuid1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">hex</span><span class="token punctuation">)</span>    <span class="token comment"># Use a randomly generated route key</span>
        w<span class="token punctuation">.</span>setAlignment<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>w<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>setCurrentWidget<span class="token punctuation">(</span>w<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>w<span class="token punctuation">.</span>objectName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">switchInterface</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> objectName<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>setCurrentWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>findChild<span class="token punctuation">(</span>SubtitleLabel<span class="token punctuation">,</span> objectName<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(b,f){const a=p("ExternalLinkIcon");return o(),c("div",null,[n("h3",d,[r,s(),n("a",k,[s("BreadcrumbBar"),u(a)])]),m])}const y=e(l,[["render",v],["__file","index.html.vue"]]);export{y as default};
