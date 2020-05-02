const gtagProperty = "UA-155462219-2";
const disableString = "ga-disable-" + gtagProperty;
const enableString = "ga-enable-" + gtagProperty;

// cookies radio buttons
window.onload = function() {
    $('input[type=radio][name=tracking-enable]').change(function() {
        if (this.value == 'y') {
            optIn();
        }
        else if (this.value == 'n') {
            optOut();
        }
    });
};

// protect users from being tracked before accepting
window[disableString] = true;
var gtag = function(){
  console.log("Tracking prevented!");
};

// to check if user manually opted-out
var optedOut = false;

const hasOptedIn = function() {
  return (document.cookie.indexOf(enableString+  "=true") > -1)
}

const optIn = function() {
  document.cookie = enableString + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
  window[disableString] = false;
  track();
}

const optOut = function() {
  document.cookie = enableString + "=false; Max-Age=-99999999999; path=/";
  window[disableString] = true;
  gtag = function(){console.log("Tracking opted out")};
  optedOut = true;
}

const track = function() {
  window.dataLayer = window.dataLayer || [];
  gtag = function(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', gtagProperty,{ 'anonymize_ip': true });
}


if (hasOptedIn()) {
  track();
} 
