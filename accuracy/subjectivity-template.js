option = {
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        data: ['bahdanau','fast-text-char', 'luong', 'multinomial',
        'self-attention', 'xgboost', 'BERT']
    },
    yAxis: {
        type: 'value',
        min:0.78,
        max:0.94
    },
    backgroundColor:'rgb(252,252,252)',
    series: [{
        data: [0.82, 0.89, 0.81, 0.89, 0.79, 0.85, 0.93],
        type: 'bar',
        label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
    }]
};
