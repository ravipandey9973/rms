import { Component } from '@angular/core';

@Component({
  selector: 'app-pichart',
  templateUrl: './pichart.component.html',
  styleUrl: './pichart.component.css'
})
export class PichartComponent {
  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Feedbacks"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Labour" },
		  { y: 10, name: "Legal" },
		  { y: 20, name: "Production" },
		 
		]
	  }]
	}
}
