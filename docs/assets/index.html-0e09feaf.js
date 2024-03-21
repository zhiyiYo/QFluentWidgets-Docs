import{_ as s,a}from"./promote_dialog-cf1c4b87.js";import{_ as l,r,o as d,c,b as e,d as t,a as i,e as n}from"./app-cad4e71c.js";const p={},h=e("p",null,"In Qt Designer, there are two ways to use PyQt-Fluent-Widgets.",-1),u=e("h3",{id:"using-plugins-recommend",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-plugins-recommend","aria-hidden":"true"},"#"),t(" Using plugins (Recommend)")],-1),m=e("p",null,[e("strong",null,"For all the following operations, they must be performed in an English path.")],-1),g={href:"https://afdian.net/item/62cc7298cd9411eeb14d52540025c377",target:"_blank",rel:"noopener noreferrer"},w={href:"https://item.taobao.com/item.htm?ft=t&id=767961666600",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"You can also start the designer with plugins by following these steps:",-1),_=n(`<li><p>Create a new virtual environment, preferably using conda.</p></li><li><p>Activate the virtual environment and install the dependencies:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install PyQt<span class="token operator">-</span>Fluent<span class="token operator">-</span>Widgets
pip install pyqt5<span class="token operator">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),b={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,[e("p",null,[t("Run "),e("code",null,"python tools/designer.py"),t(" to start the designer.")])],-1),v=e("p",null,[e("img",{src:"https://img.fastmirror.net/s/2024/02/18/65d22363d4a73.jpg",alt:"Fluent Designer"})],-1),x=e("p",null,"The following video demonstrates the usage of Fluent Client:",-1),k=e("div",{style:{position:"relative",width:"100%","padding-bottom":"56.25%",height:"0"}},[e("iframe",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},src:"https://www.youtube.com/embed/7UCmcsOlhTk?si=gCyZNmtSOrWERG4P",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1),P=n('<h3 id="promoting-widget" tabindex="-1"><a class="header-anchor" href="#promoting-widget" aria-hidden="true">#</a> Promoting widget</h3><p>Right click on a widget, select the <code>Promote to ...</code> of context menu.</p><p>Promoting a widget indicates that it should be replaced with the specified subclass, in our case the <code>qfluentwidgets.PushButton</code>.</p><p><img src="'+s+'" alt="context menu"></p><p>You will be presented with a dialog to specify the custom widget class the placeholder widget will become.</p><p>The header file is the name of the Python module used to import the class, which is <code>qfluentwidgets</code>. Specify <code>PushButton</code> as the class name of the widget to replace it with.</p><p><img src="'+a+'" alt="promote dialog"></p><p>Well, the widget is now promoted to fluent push button. But you won’t be able to see any changes within Qt Designer. Save the window as <code>mainwindow.ui</code> and compile it to python code, you will see that the <code>PushButton</code> is imported from <code>qfluentwidgets</code> package.</p>',8),T=e("div",{style:{position:"relative",width:"100%","padding-bottom":"56.25%",height:"0"}},[e("iframe",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},src:"https://www.youtube.com/embed/9FLCTLe7InU?si=0TkEWYDYX2OZSaeu",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1),B=e("h3",{id:"complex-example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#complex-example","aria-hidden":"true"},"#"),t(" Complex example")],-1),F=e("p",null,"Here is an example that uses a side navigation bar to implement multiple sub-interfaces window.",-1),Y=e("div",{style:{position:"relative",width:"100%","padding-bottom":"56.25%",height:"0"}},[e("iframe",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},src:"https://www.youtube.com/embed/qxZebL0EBOY?si=T0qauzjBjZ3vRxfh",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1);function W(C,E){const o=r("ExternalLinkIcon");return d(),c("div",null,[h,u,m,e("p",null,[t("Fluent Client integrates designer plugins, supporting direct drag-and-drop usage of QFluentWidgets components in Designer. What you see is what you get, making the construction of modern interfaces silky smooth! You can purchase from "),e("a",g,[t("Afadian"),i(o)]),t(" or "),e("a",w,[t("TaoBao"),i(o)]),t(".")]),f,e("ol",null,[_,e("li",null,[e("p",null,[t("Download the code from the "),e("a",b,[t("PyQt-Fluent-Widgets repository"),i(o)]),t(".")])]),y]),v,x,k,P,T,B,F,Y])}const D=l(p,[["render",W],["__file","index.html.vue"]]);export{D as default};
