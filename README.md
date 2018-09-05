# chart
JavaScript charting with @chartjs 0devco


# implementation

```js
/* import @0devco/chart */
import chart from '@0devco/chart'
/* chart component */
let barChart = {
  id: 'bar-chart',
  type: 'bar',
  multiple: 1,
  labels: [
    ["1",'2','3','4','5']
  ],
  label: [
    'one step'
  ],
  data: [
    [20,30,40,50,60]
  ],
  bgColor:[
    ['red','green','blue','blue','red']
  ],
  bdrColor:[
    ['green']
  ],
  bdrWidth: 1
}
/* call function */
chart().setup(chartEl)
```
