$(document).ready(function() {
  // document is loaded and DOM is ready
  // alert('document is ready')

  setInterval(function() {
    $('.current-time').html(moment().format('hh:mm:ss A'))
  }, 1000)

  ;(function() {
    // instantiate a moment object
    var NowMoment = moment()

    // instantiate a JavaScript Date object
    var NowDate = new Date()

    // display value of moment object in #displayMoment div
    var eDisplayMoment = document.getElementById('displayMoment')
    eDisplayMoment.innerHTML = NowMoment
    // $("#displayMoment").text(nowMoment);

    //display value of Date object in #displayJsDate div
    var eDisplayDate = document.getElementById('displayJsDate')
    eDisplayDate.innerHTML = NowDate
    // $("#displayJsDate").text(NowDate);

    $('.current').text(moment())
    let now = moment()
    $('.current').text(`The time is ${now}`)
  })()
})
/* In this assignment, you'll create a train schedule application that incorporates Local Storage to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

 Setup
We'll leave that up to you -- however you like. Just make sure you're using Local Storage to store data, GitHub to backup your project, and GitHub Pages to host your finished site.

### Instructions

* Make sure that your app suits this basic spec:
  
  * When adding trains, administrators should be able to submit the following:
    
    * Train Name
    
    * Destination 
    
    * First Train Time -- in military time
    
    * Frequency -- in minutes
  
  * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
  * Users from many different machines must be able to view same train times.
  
  * Styling and theme are completely up to you. Get Creative! 
  
  ### Bonus (Extra Challenges)

* Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).

* Try adding `update` and `remove` buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).
*/

// if (Modernizr.localstorage) {

//   var txtname = document.getElementById('username'); // Get form elements
//   var txtAnswer = document.getElementById('answer');

//   txtUsername.value = localStorage.getItem('username');  // Elements populated
//   txtAnswer.value = localStorage.getItem('answer');      // by localStorage data

//   txtUsername.addEventListener('input', function () {    // Data saved on keyup
//     localStorage.setItem('username', txtUsername.value);
//   }, false);

//   txtAnswer.addEventListener('input', function () {      // Data saved on keyup
//     localStorage.setItem('answer', txtAnswer.value);
//   }, false);
// }
