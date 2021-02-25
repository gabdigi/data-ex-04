function barGraph(canvasID, labels, title, values){
    const ctx = document.getElementById(canvasID).getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: title,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: values
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}