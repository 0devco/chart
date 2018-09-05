<p align="center" ><img src="https://raw.githubusercontent.com/0devco/chart/master/0devco-chart.png"></p>

# install

```bash
# npm
npm -i @0devco/chart 
# yarn
yarn add @0devco/chart

```

# implementation

```js
/* import @0devco/chart */
import chart from '@0devco/chart'
/* chart component */
let barChart = {
  type:'pie',
  id: 'barChart',
  multiple: 1,
  labels:['one','two','three'],
  label:[['one step']],
  data:[[54,13,15]],
  bgColor:[['red','green','blue']],
  bdrColor:[['black','black','black']],
  bdrWidth:[6]
}
/* call function */
chart().setup(barChart )
```

# courtesy

* [chart.js](http://www.chartjs.org/)

<a href="https://twitter.com/0devco" target="_blank" ><p align="center" ><img src="https://raw.githubusercontent.com/0devco/docs/master/.devco-images/logo-transparent.png"></p></a>
