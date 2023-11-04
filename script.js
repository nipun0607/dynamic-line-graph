//anime .js
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //chart,js
  const ctx = document.getElementById('myChart');
myChartData={
   
    datasets:[{
        label:"chances of rainfall %",
        data:[],
        borderWidth:1,
        color:'black',
        backgroundColor:"brown"
        }
    ]   
}
let myDataOptions={
    scales:{
        y:{
            beginAtZero:true,
        }
    },
    plugin:{

    }
}
const DataOfRain=new Chart(ctx,{
    type:"line",
    data:myChartData,
    options:myDataOptions,
    });

    let labelsArray=[];
    let dataArray=[];


    function rainData(){
        labelsArray=fetchlabel();
        dataArray=fetchdata();
        myChartData.labels=labelsArray;
        myChartData.datasets[0].data=dataArray;
        DataOfRain .update();
    }

setInterval(()=>{
    rainData();
},1000);
let number=1;
function fetchlabel(){
    labelsArray.push(number++);
    return labelsArray;
}
function fetchdata(){
    dataArray.push(Math.floor(Math.random()*100));
    return dataArray;
}
