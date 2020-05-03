/*
  custom javascript
*/
const MAILTO_ADDR = "n.angelini@live.it";
const MAILTO_SUBJECT = "Messaggio di ";

// prevent default #contatti form
$(document).ready(function() {
  $('#contatti form').on('submit', function(e){
    e.preventDefault();
  });
});

/**
* NAV ICONS
*/
// apply nav icons accordingly
// if already visited
let btn_ids = ["innovazione","strumenti","crescita","contatti"];
btn_ids.forEach(function(n){
  let x = localStorage.getItem("visited_" + n);
  if (x) {
    let $img = $('a[href="#' + n + '"] img.nav-btn-icon'),
        src = $img.attr("src").replace(".svg","");
    $img.attr("src",src + "-visited.svg");
  }
})
// mouse over and out
$('.nav-btn').on('mouseover',function(){
  let $t = $(this).find("a img.nav-btn-icon"),
      src = $t.attr("src").replace(".svg","");
  $t.attr("src",src + "-msovr.svg");
});
$('.nav-btn').on('mouseout',function(){
  let $t = $(this).find("a img.nav-btn-icon"),
      src = $t.attr("src").replace("-msovr.svg","");
  $t.attr("src",src + ".svg");
});

/**
*   functions
*/

// build mailto link with fields embedded
const contactFormMailTo = function() {
  let euc = encodeURIComponent;
  let username = euc($('#contact-form-name').val()) || "<nessun nome>";
  let usermsg = euc($('#contact-form-message').val()) || "<messaggio vuoto>";
  let recipient = MAILTO_ADDR;
  let subject = MAILTO_SUBJECT + username;
  let msg = euc("Gentile Sales & Promotions srls,\n\n") + usermsg + euc("\nCordiali saluti,\n") + username;
  let mts = "mailto:" + recipient + "?subject=" + subject + "&body=" + msg;
  window.location = mts;
}


// called in main.js when article is getting closed (at line:~257, )
const transactToVisited = function(id) {
  if (id === "cookies") {
    // dont trigger
    return
  }
  if (window.localStorage.getItem("visited_" + id)){
    // already ok
    return
  }
  
  // store the fact when user visited a section
  window.localStorage.setItem("visited_" + id,true);
  
  // animate the transaction

  // replace with the static source
  let $img = $('a[href="#' + id + '"] img.nav-btn-icon'),
    src = $img.attr("src").replace(".svg","");
  $img.attr("src",src + "-visited.svg");
};

// called in main.js on page load
const pageLoad = function() {
  window.setTimeout(function() {
    $body = $('body');
    $body.removeClass('is-preload');

    // progress bar logic
    $progressBar = $('<div id="progressBar" class="progress"><div class="progress-value"></div></div>');
    $progressBar.insertBefore($('#header .content .inner'));
    window.setTimeout(function() {
      // hide with easing
      $('#progressBar').animate({height:"0px"},
        {
          duration:1000,
          // remove after animation ends
          complete:function(){ $(this).remove(); }
        }
      );
      // let the loading animation play for this ms
    }, 1500);


  }, 100)
};