
 
    /*
     * BAR CHART
     * ---------
     */

    
   Highcharts.chart('container', {
   chart: {
   type: 'bar'
   },
    title: {
   text: null,
   },
   subtitle: {
   text: null,
            },
           xAxis: {
            categories: ["Vehiculos"],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: null,
                align: "high"
            },
            labels: {
                overflow: "justify"
            }
        },
        tooltip: {
            valueSuffix: null
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          },
          series: {
            cursor: "pointer",
            point: {
              events: {
                click: function () {
                  window.location.href = this.url;
                }
              }
            }
          }
        },
        legend: {
            layout: "vertical",
            align: "right",
            x: -30,
            verticalAlign: "top",
            y: 25,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || "#FFFFFF"),
            shadow: true
        },
        credits: {
            enabled: false
        },
    series: 
    [{"name":"NAZ51E","data":[{"y":10000,"url":"http://127.0.0.1:8000/flota/vehiculos/"}]},
    {"name":"A52CV9G","data":[{"y":8000,"url":"vehiculo\/view\/A52CV9G"}]},
    {"name":"MDY20V","data":[{"y":5000,"url":"vehiculo\/view\/MDY20V"}]},
    {"name":"AA185FJ","data":[{"y":5000,"url":"vehiculo\/view\/AA185FJ"}]},
    {"name":"AA357KH","data":[{"y":4000,"url":"vehiculo\/view\/AA357KH"}]},
    {"name":"AA039GL","data":[{"y":1000,"url":"vehiculo\/view\/AA039GL"}]},
    {"name":"AA435JJ","data":[{"y":1000,"url":"vehiculo\/view\/AA435JJ"}]},
    {"name":"MDU27C","data":[{"y":700,"url":"vehiculo\/view\/MDU27C"}]}]
  });
    
    /* END BAR CHART */

    /*
     * DONUT CHART
     * -----------
     */

    Highcharts.chart('donut', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'dato',
        colorByPoint: true,
        data: [{
          name: 'Operativo',
          y: 80,
          sliced: true,
          selected: true
        }, {
          name: 'Taller',
          y: 10
        }, {
          name: 'Inoperativo',
          y: 10
        
        }]
      }]
    });
    /*
     * END DONUT CHART
     */
    /*
     * DONUT CHART2 PRUEBA
     * -----------
     */

    Highcharts.chart('barra-ordenes', {
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      credits: {
        enabled: false
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          categories: [
              '',
              
              
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
          
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
          
      },
      series: [{
          name: 'Abiertas',
          data: [20]
  
      }, {
          name: 'Cerradas',
          data: [15]
  
      }]
  });
    /*
     * END DONUT CHART 
     */


    /*
     * DONUT CHART PRUEBA 3
     * -----------
     */

    Highcharts.chart('barra-reporte', {
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      credits: {
        enabled: false
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          categories: [
              '',
              
              
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
          
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
          
      },
      series: [{
          name: 'Abiertas',
          data: [20]
  
      }, {
          name: 'Cerradas',
          data: [20]
  
      }]
  });