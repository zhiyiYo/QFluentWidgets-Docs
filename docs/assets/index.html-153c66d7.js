import{_ as e}from"./SwitchButton-17a6fb35.js";import{_ as a,r as o,o as c,c as i,b as n,d as t,a as p,e as u}from"./app-cad4e71c.js";const l={},d={id:"switchbutton",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#switchbutton","aria-hidden":"true"},"#",-1),h={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/switch_button/index.html#qfluentwidgets.components.widgets.switch_button.SwitchButton",target:"_blank",rel:"noopener noreferrer"},k=u('<p><img src="'+e+`" alt="SwitchButton"></p><p><code>SwitchButton</code> represents the switch between two opposing states, often used to trigger &quot;on/off&quot;. When the switch state changes, it will send a <code>checkChanged(checked: bool)</code> signal.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>button <span class="token operator">=</span> SwitchButton<span class="token punctuation">(</span><span class="token punctuation">)</span>

button<span class="token punctuation">.</span>checkedChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span> checked<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Is the button selected: &quot;</span><span class="token punctuation">,</span> checked<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Change button status</span>
button<span class="token punctuation">.</span>setChecked<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># Get whether the button is selected</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>button<span class="token punctuation">.</span>isChecked<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the button text is &quot;Off/On&quot;, which can be modified as follows:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>button<span class="token punctuation">.</span>setOffText<span class="token punctuation">(</span><span class="token string">&quot;Close&quot;</span><span class="token punctuation">)</span>
button<span class="token punctuation">.</span>setOnText<span class="token punctuation">(</span><span class="token string">&quot;Open&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(b,v){const s=o("ExternalLinkIcon");return c(),i("div",null,[n("h3",d,[r,t(),n("a",h,[t("SwitchButton"),p(s)])]),k])}const w=a(l,[["render",m],["__file","index.html.vue"]]);export{w as default};
