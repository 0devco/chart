# 📊 @0devco/chart documentations


# install

```bash
# npm
npm -i @0devco/chart
# yarn
yarn add @0devco/chart

```

# implementation

```html
<canvas id="barChart" width="300" height="300"></canvas>
```

```js
/* import @0devco/chart */
import chart from '@0devco/chart'

let barChart = {
  /* main rules */

  /* desired extra rules */
}

/* call function */
chart().setup(barChart )
```

# main rules

```js
id: 'canvas_id',
type: 'chart_type',
multiple: 2 /* multi chart n */
labels: array
fill: multi array according  (multiple n) ex => [true,false]
label: multi array according  (multiple n)
data: multi array according  (multiple n)
bgColor: multi array according  (multiple n)
bdrColor: multi array according  (multiple n)
bdrDash: [0,0] multi array according  (multiple n)
```

# extra rules

```js
animated: false,
title: "title name",
legend: false,
legendPosition:  /* top bottom left right */
drawOnChartArea: false,
tooltips: false,
beginZeroX: true,
beginZeroY: true,
hideX: true,
hideY: true,
stackX: true,
stackY: true
```


<a href="https://twitter.com/0devco" target="_blank" ><p align="center" ><img src="https://raw.githubusercontent.com/0devco/docs/master/.devco-images/logo-transparent.png"></p></a>