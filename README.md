# chart
JavaScript charting with @chartjs 0devco


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
chart().setup(chartEl)
```
