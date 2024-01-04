import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  chartOptions = {
		animationEnabled: true,  
    title:
    {
       text:"RMS Traffic (based on sub categories)"
    },
	
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			itemclick: function(e:any) {
			  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
				e.dataSeries.visible = false;
			  } else {
				e.dataSeries.visible = true;
			  }
			  e.chart.render();
			}
		},
		data: [{        
			type: "spline",
			showInLegend: true,
			name: "Result",
			dataPoints: [
			  { label: "Jan", y: 3.92 },     
			  { label: "Feb", y: 3.31 },     
			  { label: "Mar", y: 3.85 },     
			  { label: "Apr", y: 3.60 },     
			  { label: "May", y: 3.24 },     
			  { label: "Jun", y: 3.22 },     
			  { label: "Jul", y: 3.06 },     
			  { label: "Aug", y: 3.37 },     
			  { label: "Sep", y: 3.47 },     
			  { label: "Oct", y: 3.79 },     
			  { label: "Nov", y: 3.98 },     
			  { label: "Dec", y: 3.73 }
			]
		}, {        
			type: "spline",
			showInLegend: true,
			name: "Scrutiny",
			dataPoints: [
			  { label: "Jan", y: 2.98 },     
			  { label: "Feb", y: 3.11 },     
			  { label: "Mar", y: 2.4 },     
			  { label: "Apr", y: 0.63 },     
			  { label: "May", y: 0.24 },     
			  { label: "Jun", y: 0.08 },     
			  { label: "Jul", y: 0.03 },     
			  { label: "Aug", y: 0.14 },     
			  { label: "Sep", y: 0.26 },     
			  { label: "Oct", y: 0.36 },     
			  { label: "Nov", y: 1.13 },     
			  { label: "Dec", y: 1.79 }
			]
		}, {        
			type: "spline",
			showInLegend: true,
			name: "UMC",
			dataPoints: [
			  { label: "Jan", y: 5.24 },     
			  { label: "Feb", y: 4.09 },     
			  { label: "Mar", y: 3.92 },     
			  { label: "Apr", y: 2.75 },     
			  { label: "May", y: 2.03 },     
			  { label: "Jun", y: 1.55 },     
			  { label: "Jul", y: 0.93 },     
			  { label: "Aug", y: 1.16 },     
			  { label: "Sep", y: 1.61 },     
			  { label: "Oct", y: 3.24 },     
			  { label: "Nov", y: 5.67 },     
			  { label: "Dec", y: 6.06 }   
			]
		},
    {        
			type: "spline",
			showInLegend: true,
			name: "Seating Plan",
			dataPoints: [
			  { label: "Jan", y: 3.24 },     
			  { label: "Feb", y: 4.09 },     
			  { label: "Mar", y: 2.92 },     
			  { label: "Apr", y: 2.75 },     
			  { label: "May", y: 3.03 },     
			  { label: "Jun", y: 1.55 },     
			  { label: "Jul", y: 0.93 },     
			  { label: "Aug", y: 8.16 },     
			  { label: "Sep", y: 1.61 },     
			  { label: "Oct", y: 3.24 },     
			  { label: "Nov", y: 5.67 },     
			  { label: "Dec", y: 6.06 }   
			]
		}
  ]
	}	
}   


