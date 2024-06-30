import{_ as t}from"./BreadCrumbBar-efd69d4c.js";import{_ as e,r as p,o as c,c as o,b as n,d as s,a as u,e as i}from"./app-cad4e71c.js";const l={},d={id:"breadcrumbbar",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#breadcrumbbar","aria-hidden":"true"},"#",-1),r={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/breadcrumb/index.html#qfluentwidgets.components.navigation.breadcrumb.BreadcrumbBar",target:"_blank",rel:"noopener noreferrer"},m=i('<p><img src="'+t+`" alt="BreadcrumbBar"></p><p><code>BreadcrumbBar</code> 是作为辅助和补充的导航方式，它能让用户知道在应用中所处的位置并能方便地回到原先的位置。</p><p>通过 <code>addItem()</code> 可在右侧追加一个节点，当节点过多以至于视口容纳不下时，左侧的节点将被折叠到菜单中：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>breadcrumb <span class="token operator">=</span> BreadcrumbBar<span class="token punctuation">(</span><span class="token punctuation">)</span>
items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;主页&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;文档&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;学习资料&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;动作电影&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;叶问&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> items<span class="token punctuation">:</span>
    <span class="token comment"># 第一个参数为 routeKey，必须全局唯一</span>
    breadcrumb<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>item<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当选中的节点变化时会发送 <code>currentItemChanged(routeKey: str)</code> 和 <code>currentIndexChanged(index: int)</code> 信号：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>breadcrumbBar<span class="token punctuation">.</span>currentItemChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span> key<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调整面包屑的布局和字体：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>qfluentwidgets<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span>breadcrumbBar<span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
breadcrumbBar<span class="token punctuation">.</span>setSpacing<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>面包屑导航栏通常与 <code>QStackedWidget</code> 一起使用：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span><span class="token string">&#39;Demo{background:rgb(255,255,255)}&#39;</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>breadcrumbBar <span class="token operator">=</span> BreadcrumbBar<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget <span class="token operator">=</span> QStackedWidget<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>lineEdit <span class="token operator">=</span> LineEdit<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addButton <span class="token operator">=</span> PrimaryToolButton<span class="token punctuation">(</span>FluentIcon<span class="token punctuation">.</span>SEND<span class="token punctuation">,</span> self<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>vBoxLayout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lineEditLayout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 按下回车键或者点击按钮时添加一个新导航项和子界面</span>
        self<span class="token punctuation">.</span>addButton<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>returnPressed<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">.</span>currentItemChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>switchInterface<span class="token punctuation">)</span>

        <span class="token comment"># 调整面包屑导航的尺寸</span>
        setFont<span class="token punctuation">(</span>self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">.</span>setSpacing<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">&#39;Enter the name of interface&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 添加两个导航项</span>
        self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span><span class="token string">&#39;Home&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addInterface<span class="token punctuation">(</span><span class="token string">&#39;Documents&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># 初始化布局</span>
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
        w<span class="token punctuation">.</span>setObjectName<span class="token punctuation">(</span>uuid1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">hex</span><span class="token punctuation">)</span>    <span class="token comment"># 使用随机生成的路由键</span>
        w<span class="token punctuation">.</span>setAlignment<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>lineEdit<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>w<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>setCurrentWidget<span class="token punctuation">(</span>w<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>breadcrumbBar<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>w<span class="token punctuation">.</span>objectName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">switchInterface</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> objectName<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>setCurrentWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>findChild<span class="token punctuation">(</span>SubtitleLabel<span class="token punctuation">,</span> objectName<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(b,f){const a=p("ExternalLinkIcon");return c(),o("div",null,[n("h3",d,[k,s(),n("a",r,[s("BreadcrumbBar"),u(a)])]),m])}const h=e(l,[["render",v],["__file","index.html.vue"]]);export{h as default};