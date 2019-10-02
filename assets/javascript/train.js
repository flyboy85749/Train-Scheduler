$(document).ready(function () {
  // document is loaded and DOM is ready
  // alert('document is ready')

  setInterval(function () {
    $('.current-time').html(moment().format('hh:mm:ss A'))
  }, 1000)
    ; (function () {
      // instantiate a moment object
      let NowMoment = moment()

      // instantiate a JavaScript Date object
      let NowDate = new Date()

      // display value of moment object in #displayMoment div
      // let DisplayMoment = document.getElementById('#displayMoment')
      // DisplayMoment.innerHTML = NowMoment
      // $("#displayMoment").text(nowMoment);

      //display value of Date object in #displayJsDate div
      // let DisplayDate = document.getElementById('#displayJsDate')
      // DisplayDate.innerHTML = NowDate
      // $("#displayJsDate").text(NowDate);

      $('.current').text(moment())
      let now = moment()
      $('.current').text(`The time is ${now}`)
    })()

  const trains = ["Crazy Train", "Midnight Train to Georgia", "Long Black Train", "Train in Vain", "Runaway Train", "Train Kept a Rollin'", "Train Ride Home", "TrainWreck", "Night Train", "Love Train"]

  function addTrain() {
    $('#add').on('click', function () {
      let returnName = $('#train-name')
        .val()
        .trim()
      let returnDest = $("#train-destination")
        .val()
        .trim()
      let returnFreq = $('#train-arrival')
        .val()
        .trim()
      let returnOnTime = $('#train-onTime')
        .val()
        .trim()

      console.log(returnName)
      console.log(returnDest)
      console.log(returnFreq)
      console.log(returnOnTime)
    })
  }
  addTrain()

  function updateTrain() {
    $('#update').on('click', function () {

      let updateDest = $('#update-destination')
        .val()
        .trim()
      let updateFreq = $('#update-arrival')
        .val()
        .trim()
      let updateOnTime = $('#update-onTime')
        .val()
        .trim()


      console.log(updateDest)
      console.log(updateFreq)
      console.log(updateOnTime)
    })
  }
  updateTrain();

});

// set up our train information
const trains = [
  {Name: "Crazy Train", Destination: "Phoenix", Arrival: "", Delay: true},
  {Name: "Midnight Train to Georgia", Destination: "Tucson", Arrival: "", Delay: true},
  {Name: "Long Black Train", Destination: "Trenton", Arrival: "", Delay: false},
  {Name: "Train in Vain", Destination: "Portland", Arrival: "", Delay: true},
  {Name: "Runaway Train", Destination: "Seattle", Arrival: "", Delay: false},
  {Name: "Train Kept a Rollin'", Destination: "St. Louis", Arrival: "", Delay: true},
  {Name: "Train Ride Home", Destination: "New York", Arrival: "", Delay: true},
  {Name: "TrainWreck", Destination: "Philadelphia", Arrival: "", Delay: true},
  {Name: "Night Train", Destination: "Sacremento", Arrival: "", Delay: false},
  {Name: "Love Train", Destination: "Dallas", Arrival: "", Delay: true}
]

// then generate a table to display the info
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
let table = document.querySelector("table");
let data = Object.keys(trains[0]);
generateTableHead(table, data);

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
generateTable(table, trains);
