$(function(){

  $('.removeComment').on('click', function(e) {
    e.preventDefault();
    var delBtn = $(this);
    var myUrl = $(this).attr('href');
    console.log(myUrl);
    $.ajax({
      method: 'DELETE',
      url: myUrl
    }).done(function(data){
      delBtn.closest('div').fadeOut('slow', function(){
        $(this).remove();
      });
    })
  })

  $('#removeButton').on('click', function(e) {
    e.preventDefault();
    var delBtn = $(this);
    var myUrl = $(this).attr('value');
    console.log(myUrl);
    $.ajax({
      method: 'DELETE',
      url: myUrl
    }).done(function(data){
      $('#removeButton').fadeOut(500, function(){
        $('#favoriteButton').removeClass('hidden').fadeIn();
      });
    })
  })

  $('.addForm').on('submit', function(e) {
    e.preventDefault();
    var myUrl = $(this).attr('action');
    var myData = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: myUrl,
      data: myData
    }).done(function(data){
      $('#favoriteButton').fadeOut(500, function(){
        $('#removeButton').removeClass('hidden').fadeIn();
      });
    })
  });

  $('.xButton').on('click', function(e) {
    e.preventDefault();
    var delBtn = $(this);
    var myUrl = $(this).attr('value');
    console.log(myUrl);
    $.ajax({
      method: 'DELETE',
      url: myUrl
    }).done(function(data){
      delBtn.closest('div').fadeOut('slow', function(){
        $(this).remove();
      })
    })
  })



//POTATO ANIMATION
  $('.sofa').load(function() {
    $('.potato').delay(400).animate({left:'430px',top:'460px'},1000).animate({left:'400px',top:'254px'},600).animate({left:'400px',top:'290px'},300).effect("shake", { direction: "right", times: 1, distance: 3}, 400);
  });


// ENABLES DIV SCROLLING FROM ANYWHERE IN BODY
  $(function() {
    var $target = $('#favorites-container');
    $("body").mousewheel(function(event, delta) {
      $target.scrollLeft($target.scrollLeft() - (delta * 1));
      event.preventDefault();
    });
  });
  $(function() {
    var $target = $('#info');
    $("body").mousewheel(function(event, delta) {
      $target.scrollTop($target.scrollTop() - (delta * 1));
      event.preventDefault();
    });
  });
  $(function() {
    var $target = $('#commentList');
    $("body").mousewheel(function(event, delta) {
      $target.scrollTop($target.scrollTop() - (delta * 1));
      event.preventDefault();
    });
  });



// DISABLES TWO-FINGER 'GO BACK' FUNCTION on SCROLL + ENABLES VERTICAL SCROLL EQUIVALENT
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

    //debug output when the page is ready
    console.log('page is ready');

  })