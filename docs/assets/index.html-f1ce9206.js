import{_ as i,r as t,o as p,c,b as n,d as a,a as s,w as l,e as u}from"./app-cad4e71c.js";const d={},r={id:"navigationinterface",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#navigationinterface","aria-hidden":"true"},"#",-1),m={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/navigation_interface/index.html#qfluentwidgets.components.navigation.navigation_interface.NavigationInterface",target:"_blank",rel:"noopener noreferrer"},h={class:"custom-container tip"},v=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),g=n("p",{class:"custom-container-title"},"Tip",-1),b=n("h3",{id:"structure",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#structure","aria-hidden":"true"},"#"),a(" Structure")],-1),f=n("code",null,"NavigationInterface",-1),w=n("code",null,"QStackWidget",-1),y=n("code",null,"QHBoxLayout",-1),_={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation2/demo.py",target:"_blank",rel:"noopener noreferrer"},x=u(`<p><img src="https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Structure.jpg" alt=""></p><p><code>NavigationInterface</code> contains <code>NavigationPanel</code> which is used to place navigation menu items. All navigation menu items should inherit from <code>NavigationWidget</code> and you can add them to the panel by calling <code>NavigationInterface.addWidget()</code> or <code>NavigationPanel.addWidget()</code>. PyQt-Fluent-Widgets implements subclass <code>NavigationPushButton</code> and provides a convenient method <code>NavigationInterface.addItem()</code> to add it to the panel.</p><p>If you want to customize a navigation menu item, you should inherit the <code>NavigationWidget</code> and rewrite its <code>paintEvent()</code> and <code>setCompacted()</code>(optional). Here an example shows how to create an avatar item.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> qfluentwidgets <span class="token keyword">import</span> NavigationWidget


<span class="token keyword">class</span> <span class="token class-name">AvatarWidget</span><span class="token punctuation">(</span>NavigationWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Avatar widget &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>isSelectable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> parent<span class="token operator">=</span>parent<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>avatar <span class="token operator">=</span> QImage<span class="token punctuation">(</span><span class="token string">&#39;resource/shoko.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>scaled<span class="token punctuation">(</span>
            <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>KeepAspectRatio<span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>SmoothTransformation<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">paintEvent</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">:</span>
        painter <span class="token operator">=</span> QPainter<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>setRenderHints<span class="token punctuation">(</span>
            QPainter<span class="token punctuation">.</span>SmoothPixmapTransform <span class="token operator">|</span> QPainter<span class="token punctuation">.</span>Antialiasing<span class="token punctuation">)</span>

        painter<span class="token punctuation">.</span>setPen<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>NoPen<span class="token punctuation">)</span>

        <span class="token keyword">if</span> self<span class="token punctuation">.</span>isPressed<span class="token punctuation">:</span>
            painter<span class="token punctuation">.</span>setOpacity<span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">)</span>

        <span class="token comment"># draw background</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>isEnter<span class="token punctuation">:</span>
            c <span class="token operator">=</span> <span class="token number">255</span> <span class="token keyword">if</span> isDarkTheme<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token number">0</span>
            painter<span class="token punctuation">.</span>setBrush<span class="token punctuation">(</span>QColor<span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            painter<span class="token punctuation">.</span>drawRoundedRect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>rect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

        <span class="token comment"># draw avatar</span>
        painter<span class="token punctuation">.</span>setBrush<span class="token punctuation">(</span>QBrush<span class="token punctuation">(</span>self<span class="token punctuation">.</span>avatar<span class="token punctuation">)</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>translate<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>drawEllipse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>translate<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>isCompacted<span class="token punctuation">:</span>
            painter<span class="token punctuation">.</span>setPen<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>white <span class="token keyword">if</span> isDarkTheme<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> Qt<span class="token punctuation">.</span>black<span class="token punctuation">)</span>
            font <span class="token operator">=</span> QFont<span class="token punctuation">(</span><span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">)</span>
            font<span class="token punctuation">.</span>setPixelSize<span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>
            painter<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span>font<span class="token punctuation">)</span>
            painter<span class="token punctuation">.</span>drawText<span class="token punctuation">(</span>QRect<span class="token punctuation">(</span><span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignVCenter<span class="token punctuation">,</span> <span class="token string">&#39;zhiyiYo&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let&#39;s take a look at the parameters required for the <code>addWidget()</code> method:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">addWidget</span><span class="token punctuation">(</span>
    self<span class="token punctuation">,</span>
    routeKey<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    widget<span class="token punctuation">:</span> NavigationWidget<span class="token punctuation">,</span>
    onClick<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>NavigationItemPosition<span class="token punctuation">.</span>TOP<span class="token punctuation">,</span>
    tooltip<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
    parentRouteKey<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, this method requires four parameters:</p><ul><li><code>routeKey</code>: A unique name for the <code>widget</code> to be added. You can consider the sub interface in the <code>QStackWidget</code> as a web page, and the <code>routeKey</code> is the url of the web page. When you switch between sub interfaces, <code>NavigationPanel</code> will add a <code>routeKey</code> to the navigation history. When you click the return button, the <code>routeKey</code> at the top of the navigation history will pop up. If there are other <code>routeKeys</code> in the history at this time, PyQt-Fluent-Widgets will switch to the corresponding sub interface corresponding to current top <code>routeKey</code>. Otherwise, it will switch to the sub interface corresponding to <code>defaultRouteKey</code>, so you should call <code>NavigationInterface.setDefaultRouteKey()</code> before running app.</li><li><code>widget</code>: The widget to be added to panel.</li><li><code>onClick</code>: Slot function connected to the widget&#39;s <code>clicked</code> signal. If you want to switch sub interfaces when clicking <code>widget</code>, it is recommended to write this slot function as <code>lambda: self.stackWidget.setCurrentWidget(self.xxxInterface) </code>.</li><li><code>position</code>: Where to add the <code>widget</code> to the panel. The following values are available: <ul><li><code>NavigationItemPosition.TOP</code>: add <code>widget</code> to the top layout of panel.</li><li><code>NavigationItemPosition.SCROLL</code>: add <code>widget</code> to the scroll layout of panel. You can scroll the widgets in scroll layout when there are too many menu items.</li><li><code>NavigationItemPosition.BOTTOM</code>: add <code>widget</code> to the bottom layout of panel.</li></ul></li><li><code>tooltip</code>: The tooltip of menu item.</li><li><code>parentRouteKey</code>: The route key of parent menu item, the widget of parent item must be the instance of <code>NavigationTreeWidgetBase</code></li></ul><h3 id="display-mode" tabindex="-1"><a class="header-anchor" href="#display-mode" aria-hidden="true">#</a> Display mode</h3><p>The navigation panel has four display modes:</p>`,10),N=n("li",null,[n("p",null,[n("code",null,"NavigationDisplayMode.EXPAND"),a(": An expanded left pane on large window widths (1008px or greater). "),n("img",{src:"https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Expand.39gngq1yta40.webp",alt:""})])],-1),P=n("li",null,[n("p",null,[n("code",null,"NavigationDisplayMode.COMPACT"),a(": A left, icon-only, nav panel on medium window widths (1007px or less). "),n("img",{src:"https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Compact.20s8q00qtvfk.webp",alt:""})])],-1),I=n("li",null,[n("p",null,[n("code",null,"NavigationDisplayMode.MENU"),a(": An expanded left menu (1007px or less). "),n("img",{src:"https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Menu.5qqwsbrrs4w0.webp",alt:""})])],-1),W=n("code",null,"NavigationDisplayMode.MINIMAL",-1),q={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3",target:"_blank",rel:"noopener noreferrer"},Q=n("p",null,[a("If you call "),n("code",null,"NavigationInterface.setExpandWidth()"),a(", the large window width (1008px) will change accordingly.")],-1),T=n("h3",{id:"more-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#more-examples","aria-hidden":"true"},"#"),a(" More examples")],-1),M={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation1/demo.py",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,[n("img",{src:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface.jpg",alt:""})],-1),C={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,[n("img",{src:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Minimal.jpg",alt:""})],-1);function K(R,S){const e=t("ExternalLinkIcon"),o=t("RouterLink");return p(),c("div",null,[n("h2",r,[k,a(),n("a",m,[a("NavigationInterface"),s(e)])]),n("div",h,[v,g,n("p",null,[a("This class is only recommended for direct use when you need to highly customize the sidebar, otherwise, please use "),s(o,{to:"/components/fluentwindow/"},{default:l(()=>[a("FluentWindow")]),_:1}),a(".")])]),b,n("p",null,[a("PyQt Fluent Widgets provides a side navigation class "),f,a(". You can use it with "),w,a(" and put them in "),y,a(". Examples are available at "),n("a",_,[a("navigation2"),s(e)]),a(".")]),x,n("ul",null,[N,P,I,n("li",null,[n("p",null,[W,a(": Only a menu button on small window widths (you should add and manage the menu button to main window by yourself like "),n("a",q,[a("navigation3"),s(e)]),a(" does).")])])]),Q,T,n("p",null,[a("Here is an another style of navigation interface, and its corresponding example program is available at "),n("a",M,[a("navigation"),s(e)]),a(".")]),A,n("p",null,[a("Minimal display mode navigation interface is available at "),n("a",C,[a("navigation3"),s(e)]),a(".")]),E])}const F=i(d,[["render",K],["__file","index.html.vue"]]);export{F as default};
