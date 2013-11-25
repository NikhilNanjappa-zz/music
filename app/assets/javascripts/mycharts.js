  $(function() {
$( "#accordion" ).accordion();
});

    $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_bar_chart',type: 'bar',backgroundColor: '#E48743' },
    title: { text: 'Fruit Consumption (Bar Chart)' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
    series: [{
      name: 'Jane',
      data: [1, 2, 4]
    }, {
      name:'John',
      data: [5, 7, 3]
    }]
  });
});

      $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_pie_chart', backgroundColor: '#90CA77' },
    title: { text: 'Fruit Consumption of Jane (Pie Chart)' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
            plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
    series: [{
      type: 'pie',
      name: 'Jane',
      data: [
      { name: 'Apples', y: 2, sliced: true, selected: false },
      { name: 'Bananas', y: 1, sliced: false, selected: true },
      { name: 'Oranges', y: 6, sliced: false, selected: true }
      ]
    }]
  });
});

          $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_line_chart',type: 'line',backgroundColor: '#90CA77' },
    title: { text: 'Fruit Consumption (Line Chart)' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
    series: [{
      name: 'Jane',
      data: [1, 2, 4]
    }, {
      name:'John',
      data: [5, 7, 3]
    }]
  });
});

  $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_area_chart',type: 'area',backgroundColor: '#E48743' },
    title: { text: 'Fruit Consumption (Area Chart)' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
    series: [{
      name: 'Jane',
      data: [1, 2, 4]
    }, {
      name:'John',
      data: [5, 7, 3]
    }]
  });
});

  $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_column_chart',type: 'column',backgroundColor: '#E48743' },
    title: { text: 'Fruit Consumption (Column Chart)' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
    series: [{
      name: 'Jane',
      data: [1, 2, 4]
    }, {
      name:'John',
      data: [5, 7, 3]
    }]
  });
});


          $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_polar_chart', polar: true, type: 'line',backgroundColor: '#90CA77' },
    title: { text: 'Fruit Consumption (Polar Chart)' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
    series: [{
      name: 'Jane',
      data: [1, 2, 4]
    }, {
      name:'John',
      data: [5, 7, 3]
    }]
  });
});


          $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_gauges_chart', type: 'gauge',backgroundColor: '#90CA77' },
    title: { text: 'Fruit Consumption (Angular Gauges Chart)' },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
    series: [{
      name: 'Jane',
      data: [1, 2, 4]
    }, {
      name:'John',
      data: [5, 7, 3]
    }]
  });
});


  $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_range_chart', type: 'columnrange', inverted: true,backgroundColor: '#E48743' },
    title: { text: 'Fruit Consumption (Range Series Chart)' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: {
      title: { text: 'Fruit eaten'}
    },
    series: [{
      name: 'Jane',
      data: [
      [1, 3],
      [4, 9],
      [2, 7]
      ]
    }]
  });

   $.getJSON('one.json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
    });

});


  $(function () {
  new Highcharts.Chart({
    chart: { renderTo: 'fruits_funnel_chart', type: 'funnel', marginRight: 100,backgroundColor: '#90CA77' },
    title: { text: 'Fruit Consumption (Funnel Chart)', x: -50 },
            plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'
            }
        },
                legend: {
            enabled: false
        },
    series: [{
      name: 'Jane',
      data: [
      ['Apples', 3],
      ['Bananas', 9],
      ['Oranges', 7]
      ]
    }]
  });
});