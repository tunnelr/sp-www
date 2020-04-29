/*
  custom javascript
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

// called in main.js when article is getting closed (at line:~257, )
const transactToVisited = function(id) {
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
}

