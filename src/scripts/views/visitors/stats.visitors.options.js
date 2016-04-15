define(['chartjs'], function(Chart) {

	var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'];

	var lineChartOptions = function(node, visitorsData) {
		
		var ctx = node.getContext('2d');
		var data = {
			labels: visitorsData.map(function(item) {
				return formatDate(item.timestamp);
			}),
			datasets: [
				{
					label: 'Visitors',
					fillColor: 'transparent',
					strokeColor: '#8FACF8',
					pointColor: '#8FACF8',
					pointStrokeColor: '#FFFFFF',
					pointHighlightFill: '#FFFFFF',
					pointHighlightStroke: 'rgba(220,220,220,0.75)',
					data: visitorsData.map(function(item) {
						return item.value;
					})
				}
			]
		};
		var lineChart = new Chart(ctx).Line(data, {
			bezierCurve: false,
			scaleShowLabels: false,
			scaleShowVerticalLines: false,
			pointHitDetectionRadius: 5
		});
		return {
			teardown: function () {
				lineChart.destroy();
			}
		};
	};

	function formatDate(timestamp) {
		var date = new Date(timestamp);
		return date.getDate() + ' ' + getReadableMonth(date.getMonth()) + ' ' + date.getFullYear();
	}

	function getReadableMonth(monthIndex) {
		return monthArray[monthIndex];
	}

	return lineChartOptions;
});