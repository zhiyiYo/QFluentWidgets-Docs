import{_ as p,r as e,o as i,c,b as n,d as a,a as s,w as l,e as u}from"./app-cad4e71c.js";const d={},r={id:"navigationinterface",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#navigationinterface","aria-hidden":"true"},"#",-1),v={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/navigation/navigation_interface/index.html#qfluentwidgets.components.navigation.navigation_interface.NavigationInterface",target:"_blank",rel:"noopener noreferrer"},m={class:"custom-container tip"},g=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),h=n("p",{class:"custom-container-title"},"提示",-1),b=n("h3",{id:"结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#结构","aria-hidden":"true"},"#"),a(" 结构")],-1),_=n("code",null,"NavigationInterface",-1),f=n("code",null,"QStackWidget",-1),y=n("code",null,"QHBoxLayout",-1),w={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation2/demo.py",target:"_blank",rel:"noopener noreferrer"},N=u(`<p><img src="https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Structure.jpg" alt="Structure"></p><p><code>NavigationInterface</code> 内部使用 <code>NavigationPanel</code> 来放置导航菜单项。所有导航菜单项都需要继承自 <code>NavigationWidget</code>，可以调用 <code>NavigationInterface.addWidget()</code> 或者 <code>NavigationPanel.addWidget()</code> 将导航项添加到导航界面中。</p><p>QFluentWidgets 实现了子类 <code>NavigationTreeWidget</code> ，同时提供了一个便捷的方法 <code>NavigationInterface.addItem()</code> 来创建多级菜单项并将其到导航界面上。</p><p>如果希望自定义一个导航项，可以创建 <code>NavigationWidget</code> 的子类并实现它的 <code>paintEvent()</code> 和 <code>setCompacted()</code>（可选） 方法。下面是一个简单例子，展示了如何定义头像导航项：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> qfluentwidgets <span class="token keyword">import</span> NavigationWidget


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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们看看 <code>addWidget()</code> 方法的各个参数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">addWidget</span><span class="token punctuation">(</span>
    self<span class="token punctuation">,</span>
    routeKey<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    widget<span class="token punctuation">:</span> NavigationWidget<span class="token punctuation">,</span>
    onClick<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>NavigationItemPosition<span class="token punctuation">.</span>TOP<span class="token punctuation">,</span>
    tooltip<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
    parentRouteKey<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，这个方法需要四个参数：</p><ul><li><code>routeKey</code>：路由键，被添加到导航界面上的 <code>widget</code> 的唯一标识。如果将 <code>QStackWidget</code> 里面的子界面视为网页，<code>routeKey</code> 就是这个子界面的 URL。当用户切换子界面时，<code>NavigationPanel</code> 会将一个路由键添加到导航历史中。导航界面上的后退按钮被点击时，位于导航历史栈顶的路由键会被弹出，如果此时导航历史不为空，就可以切换到栈顶的路由键对应的子界面，否则就切换到 <code>defaultRouteKey</code> 对应的子界面，因此在运行 app 之前需要调用 <code>NavigationInterface.setDefaultRouteKey()</code> 设置一下默认子界面。</li><li><code>widget</code>：被添加到导航界面上的导航项。</li><li><code>onClick</code>：点击导航项时触发的槽函数。如果想在点击导航项时切换子界面，一种推荐的写法是将槽函数写作：<code>lambda: self.stackWidget.setCurrentWidget(self.xxxInterface)</code>。</li><li><code>position</code>：导航项的位置。可以是下述值中的一种： <ul><li><code>NavigationItemPosition.TOP</code>：添加到导航面板的顶部</li><li><code>NavigationItemPosition.SCROLL</code>：添加到导航面板的滚动区域。当导航菜单项太多时，滚动区域中导航项可以被滚动</li><li><code>NavigationItemPosition.BOTTOM</code>: 添加到导航面板的底部</li></ul></li><li><code>tooltip</code>：菜单项的工具提示</li><li><code>parentRouteKey</code>: 父菜单项的路由键，父菜单项对应的小部件必须是 <code>NavigationTreeWidgetBase</code> 子类的实例</li></ul><h3 id="显示模式" tabindex="-1"><a class="header-anchor" href="#显示模式" aria-hidden="true">#</a> 显示模式</h3><p>导航面板有以下四种显示模式：</p>`,11),x=n("li",null,[n("code",null,"NavigationDisplayMode.EXPAND"),a("：左侧面板完全展开（当窗口的宽度大于等于 1008px 时可用）")],-1),P=n("li",null,[n("code",null,"NavigationDisplayMode.COMPACT"),a("：只在导航面板上显示图标，所有导航项都处于折叠状态（当窗口宽度小于 1007px 时默认使用这种显示模式）。")],-1),W=n("li",null,[n("code",null,"NavigationDisplayMode.MENU"),a("：展开的导航菜单（当窗口窗口小于 1007px 并点击菜单按钮时使用此显示模式）")],-1),I=n("code",null,"NavigationDisplayMode.MINIMAL",-1),Q=n("code",null,"NavigationPanel",-1),q=n("code",null,"NavigationPanel.toggle()",-1),C={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,[a("如果调用了 "),n("code",null,"NavigationInterface.setExpandWidth()"),a("，上述的窗口宽度阈值（1008px）将相应进行调整。")],-1),T=n("h3",{id:"更多示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#更多示例","aria-hidden":"true"},"#"),a(" 更多示例")],-1),M={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation1/demo.py",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,[n("img",{src:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface.jpg",alt:""})],-1),B={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation/navigation3",target:"_blank",rel:"noopener noreferrer"},E=n("img",{src:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/_images/NavigationInterface_Minimal.jpg",alt:""},null,-1);function F(L,z){const t=e("ExternalLinkIcon"),o=e("RouterLink");return i(),c("div",null,[n("h2",r,[k,a(),n("a",v,[a("NavigationInterface"),s(t)])]),n("div",m,[g,h,n("p",null,[a("只有需要高度定制侧边栏时才推荐直接使用这个类，否则请使用 "),s(o,{to:"/zh/components/fluentwindow/"},{default:l(()=>[a("FluentWindow")]),_:1}),a("。")])]),b,n("p",null,[a("QFluentWidgets 提供侧边导航类 "),_,a("，可以将它和 "),f,a(" 放在 "),y,a(" 中，实现多子界面跳转，示例程序参见 "),n("a",w,[a("navigation2"),s(t)]),a("。")]),N,n("ul",null,[x,P,W,n("li",null,[I,a("：只显示一个菜单按钮。在这种显示模式下，应该自己创建并管理菜单按钮和 "),Q,a("，然后将菜单按钮的点击信号连接到 "),q,a(" 函数上，具体写法可以参见 "),n("a",C,[a("navigation3"),s(t)]),a("。")])]),R,T,n("p",null,[a("下面是另外一种风格的导航界面，对应的示例程序为 "),n("a",M,[a("navigation"),s(t)]),a("。")]),S,n("p",null,[a("迷你导航界面如下图所示，可以在 "),n("a",B,[a("navigation3"),s(t)]),a(" 获取完整代码。 "),E])])}const D=p(d,[["render",F],["__file","index.html.vue"]]);export{D as default};
