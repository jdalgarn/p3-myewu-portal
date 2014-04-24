// My Scripts
$(document).foundation();

(function ( $ ) {
 
  function updateTicker(element) {
    var settings = element.data("settings");
    
    setTimeout(function(){
      $(element).children("li").first().animate(
        { marginTop: "-" + settings.height},   
        settings.animationSpeed, 
        function() {
          $(this).detach().appendTo(element)
            .removeAttr('style')
            .height(settings.height);
        }
    );
    updateTicker(element);
    }, settings.refreshRate);
  }
  
  function setSize(element) {
    var settings = element.data("settings");
    
    $(element).height(settings.height*settings.elementsToShow);
    $(element).children("li").height(settings.height);
  }
   
  $.fn.ticker = function( options ) {
     
    var settings = $.extend({
      height: 200,
      elementsToShow: 1,
      refreshRate: 4000,
      animationSpeed: 1000
    }, options );
    
    this.data("settings",settings);
    
    setSize(this);
    
    return updateTicker(this);
 
  };
}( jQuery ));

$('#ticker').ticker({
  height: 180,
  elementsToShow: 1,
  refreshRate: 5000,
  animationSpeed: 1500
});
