const result = async () => {
   
   
    const response1 = await fetch('https://covid19.mathdro.id/api/', {
        method: 'GET',
        // body: myBody, // string or object
    });
    const data1 = await response1.json(); //extract JSON from the http response
   
    const response2 = await fetch('https://covid19.mathdro.id/api/daily', {
        method: 'GET',
        // body: myBody, // string or object
    });
    const data2 = await response2.json(); //extract JSON from the http response
   
    const response3 = await fetch('https://covid19.mathdro.id/api/countries/australia', {
        method: 'GET',
        // body: myBody, // string or object
    });
    const data3 = await response3.json(); //extract JSON from the http response
   
    // const response4 = await fetch('https://covid19.mathdro.id/api/confirmed/', {
    //     method: 'GET',
    //     // body: myBody, // string or object
    // });
    // const data4 = await response4.json(); //extract JSON from the http response
   
    // do something with myJson
    // console.log(JSON.stringify(myJson));
    // console.log(JSON.stringify(data))
    document.getElementById("confirmed").innerHTML = `${data1.confirmed.value}`
    document.getElementById("recovered").innerHTML = `${data1.recovered.value}`
    document.getElementById("deaths").innerHTML = `${data1.deaths.value}`

    chart1(data2,"chart1","World Wide Confirmed","reportDate","totalConfirmed");
    chart1(data2,"chart2","World Wide Delta Confirmed","reportDate","deltaConfirmed");
    chart2(data2);
    
    document.getElementById("confirmed_a").innerHTML = `${data3.confirmed.value}`
    document.getElementById("recovered_a").innerHTML = `${data3.recovered.value}`
    document.getElementById("deaths_a").innerHTML = `${data3.deaths.value}`


}

result()

const chart2 = (data)=>{

    var ctx = document.getElementById("chart3").getContext('2d');
    let labels_ = []
    let data_ = []
    let data2_=[]
    for(const item of data) {
        labels_.push(item["reportDate"])
        const num = parseInt(item["deaths"]["total"])
        data_.push(num)
        data2_.push(item["deaths"]["china"])
    }

    labels_= labels_.slice(40);
    data_ =data_.slice(40);
    data2_ = data2_.slice(40);

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels_,
            datasets: [
                {
                label: "World Wild Deaths by Date",
                data: data_,
                borderWidth: 3, 
                pointRadius:1,
                fill:true,
                backgroundColor: 'SILVER',
                borderColor:'GRAY'
            }
        
        ]
        },
        options: {
            pointRadius:1,
           
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

const chart1 = (data,id,title,key1,key2) => {
    var ctx = document.getElementById(id).getContext('2d');
    let labels_ = []
    let data_ = []
    for(const item of data) {
        labels_.push(item[key1])
        const num = parseInt(item[key2])
        data_.push(num)
    }
    labels_= labels_.slice(40);
    data_ =data_.slice(40);

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels_,
            datasets: [{
                label: title,
                data: data_,
                borderWidth: 3,
                tension:0.4,
                pointStyle:"line",
                backgroundColor: 'SILVER',
                borderColor:'GRAY',
                fill:true
            }]
        },
        options: {
            hover:{
                mode:'average',
                intersect:true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}