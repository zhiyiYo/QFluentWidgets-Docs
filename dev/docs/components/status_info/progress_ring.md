---
title: Progress Ring
date: 2024-02-27 13:34:00
permalink: /components/progressring/
---

### [ProgressRing](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.ProgressRing)

![ProgressRing](/img/components/progressring/ProgressRing.png)

`ProgressRing` is a circular progress bar that can be used to represent processing progress or as a dashboard, its usage is similar to [ProgressBar](/zh/components/progressbar).

```python
ring = ProgressRing()

# Set the range and current value of the progress ring
ring.setRange(0, 100)
ring.setValue(30)

# Display text inside the progress ring
ring.setTextVisible(True)

# Adjust the size of the progress ring
ring.setFixedSize(80, 80)

# Adjust thickness
ring.setStrokeWidth(4)
```

Adjust the text format of the progress ring, for example, to display temperature:
```python
ring.setFormat("%v℃")
```

### [IndeterminateProgressRing](https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_ring/index.html#qfluentwidgets.components.widgets.progress_ring.IndeterminateProgressRing)

`IndeterminateProgressRing` is used to indicate that the application is performing an operation, but the completion time of this operation is unknown.

```python
spinner = IndeterminateProgressRing()

# Adjust the size
spinner.setFixedSize(50, 50)

# Adjust thickness
spinner.setStrokeWidth(4)
```