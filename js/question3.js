const quizData =[{
    question:"I have difficulty falling or staying asleep",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"I feel fatigued during the day",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
  
},
{
    question:"My performance at work,school,or other duties has been negatively impacted",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"I wake up feeling tired or exhausted",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"I have to get out of bed to use the restroom",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"I experience unpleasent urges to move while falling asleep",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:" I have trouble focusing or concentrating",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"I feel irritable or anxious",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"I have trouble maintaining a consistent sleep schedule",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"I have strong urge to take a nap during the day",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
}
];

let temp=0;
let index = 0;
var res=0;
let ans;
total = quizData.length;
total1 = 100;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    temp = getAnswer();
    console.log(temp); //for printing purpose only.
    res=parseInt(res) + parseInt(temp);
    console.log("Inner Result",res);
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("by")[0].innerHTML = `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Test Results</title>
<link href="../css/css" rel="stylesheet">
<link rel="stylesheet" media="all" href="../Mind_diag1.css">
</head>

<body class="layout-2018">


<header>
<div class="container">
  <div class="row">
    <div class="col-md-8">
      <br>
      <a href="options.html">Mental Health Analyzer</a>
    </div>
  </div>
</div>
</header>

<div class="core-layout__viewport">
  <div class="screener-results">
    <div class="hero">
      <div class="container">
        <h1>Your Depression test results</h1>
      </div>
    </div>
    <div class="container main">
      <div class="crest">
        <div class="row">
          <div class="col-md-12 score">
            <p>Your result is</p>
          </div>
        </div>
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 col-xs-12 flex-container">
              <div class="row">
                <div class="col-md-5 col-sm-5 col-xs-12 flex-item">
                  <dl class="interpretation">
                    <dt>0 - 20</dt>
                    <dd>Very Low Risk</dd>
                    <dt>21 - 40</dt>
                    <dd>Low Risk</dd>
                    <dt>41 - 60</dt>
                    <dd>Moderate Risk</dd>
                    <dt>61 - 80</dt>
                    <dd>High Risk</dd>
                    <dt>81 - 100</dt>
                    <dd>Severe Risk</dd>
                    </dl>
                    </div>
                    <div class="col-md-7 col-sm-7 col-xs-12 flex-item">
                    <div class="real-val" style="display:none;">14</div>
                    <div class="donut-wrapper animated">
                    <div class="donut-card">
<div class="donut-chart chart">
      <svg class="svg-donut" width="145px" height="145px" viewBox="0 0 42 42">
        <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
        <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#31466d" stroke-width="4"></circle>
        <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#12a5c6" stroke-width="4" stroke-dasharray="50 50" stroke-dashoffset="25"></circle>
      </svg>
<div class="chart-center">
  <span class="value">${res}</span>
  <span class="small">out of ${total1} </span>
  </div>
  </div>
  </div>
  </div>
<div class="subtitle-copy">
  <p>As per your result, if you have Moderate risk, High risk or Severe risk then you must consult with the doctors, Here are our some specialist that you can contact with them and keep your health stable.
  <br>

  <span id="center">
  <button value="sound" onclick="window.location.href='doctor.html'; "id="ce" class="btn btn-primary">Dr.Consultation</button>
  </span>
  </p>

 
  




  </div>
  </div>
  </div>
  </div>
  </div>
  </div>


  


  <style>
 #center{
  align-item:center;
 }
#ce {
    /* padding: 52px; */
    margin-top: 95px;
    padding: auto 131px;
    height: 66px;
    width: 124px;
    font-size: 15px;
    font-weight: 500;
  }
  .svg-donut {
    transform: scale(1.15) rotate(0deg); }
  
  .donut-segment {
    animation: donut 3s forwards; }
  
  @keyframes donut {
    0% {
      stroke-dasharray: 0 100; }
    100% {
      stroke-dasharray: 35 65; } }
  
  .donut-chart {
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    background: #31466d;
    width: 145px;
    height: 145px; }
    .donut-chart .chart-center {
      top: 15px;
      left: 15px;
      width: 115px;
      height: 115px;
      background: #162c56; }
      .donut-chart .chart-center span {
        font-size: 60px;
        line-height: 100px;
        color: #e9edf0; }
</style>





</body>
</html>
`
}
loadQuestion(index);