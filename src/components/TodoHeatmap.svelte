<script>
  import { Chart } from "frappe-charts"
  const createDateStampMap = () => {

  }


function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).valueOf();
}

const data = {
  dataPoints: {
        "1578182400": 20,
        "1580860800": 113,
        "1587340800": 57,
    },
    start: new Date(2020, 0, 1), // a JS date object
    end: new Date()
}

  setTimeout(function() {
    try {
    if (typeof window !== 'undefined' && window.document) {
console.log(data)
 let chart = new Chart("#heatmap", {
    type: 'heatmap',
    data: data,
})


    }
  } catch (e) {
    console.log(e)
  }
  }, 50)
</script>

<div>
<div id="heatmap"></div>
</div>
