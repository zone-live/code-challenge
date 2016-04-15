define(['chartjs'], function(Chart) {

	var barChartOptions = function (node, countriesData) {

		var ctx = node.getContext('2d');
		var data = {
			labels: countriesData.map(function(item) {
				return item.country;
			}),
			datasets: [
				{
					label: 'Countries',
		            fillColor: '#A4E5FE',
					pointHighlightStroke: 'rgba(220,220,220, 0.75)',
					data: countriesData.map(function(item) {
						return item.value;
					})
				}
			]
		}
		var barChart = new Chart(ctx).Bar(data, {
			barDatasetSpacing : 3,
			barValueSpacing : 30,
			scaleShowHorizontalLines: false
		});
		return {
			teardown: function () {
				barChart.destroy();
			}
		};
	};

	return barChartOptions;
});