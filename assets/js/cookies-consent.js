
C = {
    // Message banner title
    bannerTitle: '<i class="fas fa-cookie-bite"></i> ',

    // Message banner message
    bannerMessage: "Questo sito, unicamente a scopo di analisi del traffico, utilizza cookie tecnici anonimizzati di terze parti. " +
                   "Chiudendo questo banner o cliccando sul pulsante OK " +
                   "si accetta l'utilizzo dei cookies. Se preferisci puoi <a class=\"light\" href=\"javascript:optOut()\">negare il consenso</a>, oppure consultare la <a href='#cookies'>sezione apposita</a>.",

    // Message banner dismiss button
    bannerButton: "OK",

    // Link to your cookie policy.
    bannerLinkURL: "cookies.html",

    // Link text
    bannerLinkText: "Cookie Policy",
    
    // Link text
    buttonClass: "btn-light btn-xs",    

    // millisecs to wait for
    timeoutInterval: 5500,

    // js code for the close button
    closeBtnCb: function() {
        optIn();
        C.destroyDiv();
    },

    // js code for the Ok button
    okBtnCb: function() {
        optIn();
        C.destroyDiv();
    },

    // dismiss the banner
    destroyDiv: function() {
        $('#cookies-banner').remove();
    },

    createDiv: function () {
        var banner = $(
            '<div id="cookies-banner" class="cookies-alert" ' +
            'role="alert" style="position: fixed; bottom: 0; width: 100%; ' +
            'margin-bottom: 0">' +

            '<button class="btn btn-xs mr-0" onclick="C.closeBtnCb();" data-dismiss="alert" aria-label="Close" style="position: fixed; right: 10px;"><i class="fas fa-times"></i></button>'+

            '<div class="container text-center"><div class="row"><div class="col col-12"><strong>' + this.bannerTitle + '</strong> ' +
            this.bannerMessage +
            '</div></div><div class="row"><div class="col col-12"><button type="button" class="btn ' +
             this.buttonClass + '" onclick="C.okBtnCb();" data-dismiss="alert" aria-label="Accept">' +
            this.bannerButton + '</button></div></div></div></div>'
        );
        $("body").append(banner);
        
        // auto optIn
        // setTimeout(function(){
        //   if (!hasOptedIn() && !optedOut) {
        //     // console.log("opting in because not denying permission");
        //     optIn();
        //     banner.remove();
        //   } 
        // }, this.timeoutInterval);
    },

    init: function() {
        if (!hasOptedIn())
            this.createDiv();
    }
}

$(document).ready(function() {
    if(typeof hasOptedIn !== "undefined") {C.init();}
})