(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
    if (window.innerWidth >= 768) {
      $('.header').css('display', 'block');
    }
    if (window.innerWidth < 768 && didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    
    if (st > lastScrollTop){
      // Scroll Down
      $('.header').css('display', 'none');
    } else {
      // Scroll Up
      $('.header').css('display', 'block');
    }
    
    lastScrollTop = st;
  }

  $(".navbar-nav > li").click(function() {
    if (window.innerWidth < 768) {
      var st = $(this).scrollTop();
      lastScrollTop = delta + st;
    }
  });
}());