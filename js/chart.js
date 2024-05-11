 // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
 Highcharts.chart('line1', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        }, 22.8, 17.5, 12.1, 7.6]

    }, {
        name: 'Bergen',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 1.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            },
            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the chart.'
            }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
    }]
});
// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('line2', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Reggane',
        data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
            22.0, 17.8]
    }, {
        name: 'Tallinn',
        data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
            2.0, -0.9]
    }]
});

// Data retrieved from https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/
Highcharts.chart('area1', {
    chart: {
        type: 'area'
    },
    accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
        text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
            'target="_blank">FAS</a>'
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [
            null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
            1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
            28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
            26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
            23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
            21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
            10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
            5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
            3750, 3708, 3708
        ]
    }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null,
            1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
            3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
            14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
            32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
            32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
            13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
            5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
            4310, 4495, 4477
        ]
    }]
});
Highcharts.chart('area2', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Greenhouse gases from Norwegian economic activity',
        align: 'left'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
            'target="_blank">SSB</a>',
        align: 'left'
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Million tonnes CO<sub>2</sub>-equivalents'
        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
    },
    plotOptions: {
        series: {
            pointStart: 2012
        },
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Ocean transport',
        data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
    }, {
        name: 'Households',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

    }, {
        name: 'Agriculture and hunting',
        data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
    }, {
        name: 'Air transport',
        data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

    }, {
        name: 'Construction',
        data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
    }]
});

Highcharts.chart('bar1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1990',
        data: [631, 727, 3202, 721]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726]
    }, {
        name: 'Year 2018',
        data: [1276, 1007, 4561, 746]
    }]
});

Highcharts.chart('bar2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Corn vs wheat estimated production for 2020',
        align: 'left'
    },
    subtitle: {
        text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Corn',
            data: [406292, 260000, 107000, 68300, 27500, 14500]
        },
        {
            name: 'Wheat',
            data: [51086, 136000, 5500, 141000, 107180, 77000]
        }
    ]
});
