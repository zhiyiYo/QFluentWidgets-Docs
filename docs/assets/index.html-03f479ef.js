import{_ as a,r as e,o,c,b as t,d as n,a as p,e as i}from"./app-cc992c34.js";const d={},l=i(`<p>QFluentWidgets 将每个配置项表示为界面的一个设置卡。用户在设置卡上的交互行为将会改变相应配置项的值，同时 QFluentWidgets 会自动更新配置文件。</p><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><p><code>ConfigItem</code> 类表示一个配置项， <code>QConfig</code> 类用于读写 <code>ConfigItem</code> 项的值。当 <code>ConfigItem</code> 的值发生改变时，<code>QConfig</code> 类会自动将配置项的值同步到配置文件中。</p><p>由于配置文件可能被用户手动篡改，导致配置项的值非法，所以 QFluentWidgets 使用 <code>ConfigValidator</code> 类及其子类来验证和修正配置项的值。</p><p>QFluentWidgets 使用 json 文件来保存配置，而 json 文件只支持字符串、布尔值、列表和字典，对于枚举类或者 <code>QColor</code>，无法直接将它们的值写入 json 文件中。为了解决这个问题，QFluentWidgets 提供了 <code>ConfigSerializer</code> 类及其子类来序列化和反序列化配置项。举个栗子，可以使用 <code>ColorSerializer</code> 来序列化值类型为 <code>QColor</code> 的配置项。</p><p><code>ConfigItem</code> 的属性如下表所示：</p><table><thead><tr><th>属性</th><th>数据类型</th><th>描述</th></tr></thead><tbody><tr><td><code>group</code></td><td><code>str</code></td><td>配置项所属的组别</td></tr><tr><td><code>name</code></td><td><code>str</code></td><td>配置项的名字</td></tr><tr><td><code>default</code></td><td><code>Any</code></td><td>配置项的默认值，当配置值非法时将被默认值替代</td></tr><tr><td><code>validator</code></td><td><code>ConfigValidator</code></td><td>配置校验器</td></tr><tr><td><code>serializer</code></td><td><code>ConfigSerializer</code></td><td>配置序列化器</td></tr><tr><td><code>restart</code></td><td><code>bool</code></td><td>配置更新后是否重启应用</td></tr></tbody></table><p>为了正确读写配置项的值，应该将 <code>ConfigItem</code> 的实例添加到 <code>QConfig</code> 子类的类属性中，然后使用 <code>qconfig.load()</code> 来加载配置文件。下面是一个简单的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MvQuality</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; MV quality enumeration class &quot;&quot;&quot;</span>

    FULL_HD <span class="token operator">=</span> <span class="token string">&quot;Full HD&quot;</span>
    HD <span class="token operator">=</span> <span class="token string">&quot;HD&quot;</span>
    SD <span class="token operator">=</span> <span class="token string">&quot;SD&quot;</span>
    LD <span class="token operator">=</span> <span class="token string">&quot;LD&quot;</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>q<span class="token punctuation">.</span>value <span class="token keyword">for</span> q <span class="token keyword">in</span> MvQuality<span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">Config</span><span class="token punctuation">(</span>QConfig<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Config of application &quot;&quot;&quot;</span>

    <span class="token comment"># main window</span>
    enableAcrylic <span class="token operator">=</span> ConfigItem<span class="token punctuation">(</span><span class="token string">&quot;MainWindow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;EnableAcrylic&quot;</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> BoolValidator<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    playBarColor <span class="token operator">=</span> ColorConfigItem<span class="token punctuation">(</span><span class="token string">&quot;MainWindow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PlayBarColor&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#225C7F&quot;</span><span class="token punctuation">)</span>
    themeMode <span class="token operator">=</span> OptionsConfigItem<span class="token punctuation">(</span><span class="token string">&quot;MainWindow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ThemeMode&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Light&quot;</span><span class="token punctuation">,</span> OptionsValidator<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;Light&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dark&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Auto&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> restart<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    recentPlaysNumber <span class="token operator">=</span> RangeConfigItem<span class="token punctuation">(</span><span class="token string">&quot;MainWindow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;RecentPlayNumbers&quot;</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> RangeValidator<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># online</span>
    onlineMvQuality <span class="token operator">=</span> OptionsConfigItem<span class="token punctuation">(</span><span class="token string">&quot;Online&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MvQuality&quot;</span><span class="token punctuation">,</span> MvQuality<span class="token punctuation">.</span>FULL_HD<span class="token punctuation">,</span> OptionsValidator<span class="token punctuation">(</span>MvQuality<span class="token punctuation">)</span><span class="token punctuation">,</span> EnumSerializer<span class="token punctuation">(</span>MvQuality<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 创建配置实例并使用配置文件来初始化它</span>
cfg <span class="token operator">=</span> Config<span class="token punctuation">(</span><span class="token punctuation">)</span>
qconfig<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&#39;config/config.json&#39;</span><span class="token punctuation">,</span> cfg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置卡" tabindex="-1"><a class="header-anchor" href="#设置卡" aria-hidden="true">#</a> 设置卡</h2><p>PyQt-Fluent-Widgets 内置了许多类型的设置卡：</p><table><thead><tr><th style="text-align:center;">Class</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>HyperlinkCard</code></td><td>超链接设置卡</td></tr><tr><td style="text-align:center;"><code>ColorSettingCard</code></td><td>拾色器设置卡</td></tr><tr><td style="text-align:center;"><code>CustomColorSettingCard</code></td><td>颜色选择按钮设置卡</td></tr><tr><td style="text-align:center;"><code>ComboBoxSettingCard</code></td><td>下拉框设置卡</td></tr><tr><td style="text-align:center;"><code>RangeSettingCard</code></td><td>滑动条设置卡</td></tr><tr><td style="text-align:center;"><code>PushSettingCard</code></td><td>按钮设置卡</td></tr><tr><td style="text-align:center;"><code>PrimaryPushSettingCard</code></td><td>主题色按钮设置卡</td></tr><tr><td style="text-align:center;"><code>SwitchSettingCard</code></td><td>开关按钮设置卡</td></tr><tr><td style="text-align:center;"><code>OptionsSettingCard</code></td><td>单选按钮设置卡</td></tr><tr><td style="text-align:center;"><code>FolderListSettingCard</code></td><td>文件夹列表设置卡</td></tr></tbody></table><p>可以通过 <code>SettingCardGroup.addSettingCard()</code> 将多个设置卡添加到同一个组中，<code>SettingCardGroup</code> 会根据设置卡的高度自动调整自己的布局。</p>`,13),u={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/blob/master/examples/settings/setting_interface.py",target:"_blank",rel:"noopener noreferrer"};function r(k,g){const s=e("ExternalLinkIcon");return o(),c("div",null,[l,t("p",null,[n("对于上述组件的具体使用方式，参见 "),t("a",u,[n("setting_interface.py"),p(s)]),n(".")])])}const v=a(d,[["render",r],["__file","index.html.vue"]]);export{v as default};
