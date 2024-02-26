---
title: Color Dialog
date: 2024-02-26 16:55:01
permalink: /components/colordialog/
---

### [ColorDialog](https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/dialog_box/color_dialog/index.html)

![ColorDialog](/img/components/colordialog/ColorDialog.png)

`ColorDialog` is used to select colors, and when the selected color changes, a `colorChanged(color: QColor)` signal will be sent.

```python
w = ColorDialog(QColor(0, 255, 255), "Choose Background Color", window, enableAlpha=False)
w.colorChanged.connect(lambda color: print(color.name()))
w.exec()
```