$(document).ready(function(){
  resetContentPadding();

  initialDisplay();

  changeSection();
  
  $(window).resize(function(){
    resetContentPadding();
  });


});

var resetContentPadding = function(){
  var headerHgt = $("header").height();
  var footerHgt = $("footer").height();
  $(".content").css('padding-top',headerHgt + "px")
  $(".content").css('padding-bottom',footerHgt + "px")
}

var initialDisplay = function(){
  $('.section').hide();
  $('#home').show();
}

var changeSection = function(){
  $('header a').click(function(e){
    var self = this;
    $('.section').fadeOut("fast");
    $('.section').promise().done(function(){
      $(self.hash).fadeIn("fast");
    });
    e.preventDefault();
  });
}
