/*

Title:		jShowOff: a jQuery Content Rotator Plugin
Author:		Erik Kallevig
Version:	0.1.2
Website:	http://ekallevig.com/jshowoff
License: 	Dual licensed under the MIT and GPL licenses.

jShowOff Options

animatePause :		whether to use 'Pause' animation text when pausing [boolean, defaults to true]
autoPlay :			whether to start playing immediately [boolean, defaults to true]
changeSpeed :		speed of transition [integer, milliseconds, defaults to 600]
controls :			whether to create & display controls (Play/Pause, Previous, Next) [boolean, defaults to true]
controlText :		custom text for controls [object, 'play', 'pause', 'previous' and 'next' properties]
cssClass :			custom class to add to .jshowoff wrapper [string]
effect :			transition effect [string: 'fade', 'slideLeft' or 'none', defaults to 'fade']
hoverPause :		whether to pause on hover [boolean, defaults to true]
links :				whether to create & display numeric links to each slide [boolean, defaults to true]
speed :				time each slide is shown [integer, milliseconds, defaults to 3000]

*/
jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();
(function($) {


    $.fn.jshowoff = function (settings) {

    // default global vars
    var config = {
      animatePause: true,
      autoPlay: true,
      changeSpeed: 600,
      controls: true,
      controlText: {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous'
      },
      controlZone: { PlayPauseItemID: '', PreviousItemID: '', NextItemID: '' },
      effect: 'fade',
      hoverPause: true,
      links: true,
      speed: 3000
    };

    // merge default global variables with custom variables, modifying 'config'
    if (settings) $.extend(true, config, settings);

    // make sure speed is at least 20ms longer than changeSpeed
    if (config.speed < (config.changeSpeed + 20)) {
      alert('jShowOff: Make speed at least 20ms longer than changeSpeed; the fades aren\'t always right on time.');
      return this;
    };

    // create slideshow for each matching element invoked by .jshowoff()
    this.each(function (i) {

      // declare instance variables
      var $cont = $(this);
      var gallery = $(this).children().remove();
      var timer = '';
      var counter = 0;
      var preloadedImg = [];
      var howManyInstances = $('.jshowoff').length + 1;
      var uniqueClass = 'jshowoff-' + howManyInstances;
      var cssClass = config.cssClass != undefined ? config.cssClass : '';
      var fromButton = false;
      $(document).ready(function () {

        for (var i = 0; i < gallery.length; i++) {
          var multiZone = $("div[MultiZoneInnerId$='" + $(gallery[i]).attr("ItemID") + "']");
          if (multiZone.length > 0) {
            if ($cont.is("div[ItemID='" + multiZone.attr("MultiZoneId") + "']")) {
              multiZone.attr("customIdx", i);
              multiZone.click(function () {
                fromButton = true;
                goToAndPause(parseInt($(this).attr("customIdx")));
                fromButton = false;

              });

              if (i == 0) {
                jQuery.data(multiZone[0], "SwapFunction")();
              }
            }
          }

        }
      });

      // Note(Slepine) : J'ai enlever les positions relatives directement sur les 2 contr�les ci-dessous.
      //                 Ceci causait des probl�mes CSS lors des animations

      // set up wrapper
      $cont.wrap('<div class="jshowoff ' + uniqueClass + '" />');
      var $wrap = $('.' + uniqueClass);
      $wrap.addClass(cssClass);



      // add first slide to wrapper
      var firstClone = $(gallery[0]).clone();
      firstClone.appendTo($cont);
      if (firstClone[0].getAttribute("NmsMultiZoneContentScript") != null) {

        eval(firstClone[0].getAttribute("NmsMultiZoneContentScript"));
        firstClone.removeAttr("NmsMultiZoneContentScript");
      }
      // preload slide images into memory
      preloadImg();


      if (config.controlZone.PlayPauseItemID) {
        if (config.autoPlay) {
          $("[ItemID='" + config.controlZone.PlayPauseItemID + "']").addClass("isNmsPlay");
        }
        $("[ItemID='" + config.controlZone.PlayPauseItemID + "']").click(function () {

          if ($(this).hasClass("isNmsPlay")) {
            nmsPause();
            $(this).removeClass("isNmsPlay");

          }
          else {
            play();
            $(this).addClass("isNmsPlay");

          }
          return false;
        });
      }

      if (config.controlZone.PreviousItemID) {
        $("[ItemID='" + config.controlZone.PreviousItemID + "']").click(function () { previous(); return false; });
      }

      if (config.controlZone.NextItemID) {
        $("[ItemID='" + config.controlZone.NextItemID + "']").click(function () { next(); return false; });
      }

      // add controls
      if (config.controls) {
        addControls();
        if (config.autoPlay == false) {
          $('.' + uniqueClass + '-play').addClass(uniqueClass + '-paused jshowoff-paused').text(config.controlText.play);
        };
      };

      // add slide links
      if (config.links) {
        addSlideLinks();
        $('.' + uniqueClass + '-slidelinks a').eq(0).addClass(uniqueClass + '-active jshowoff-active');
      };

      // pause slide rotation on hover
      if (config.hoverPause) {
        $cont.hover(
                function () { if (isPlaying()) pause('hover'); },
                function () { if (isPlaying()) resumePlay('hover'); }
            );
      };

      // determine autoPlay
      if (config.autoPlay && gallery.length > 1) {
        //Ajout du setTimeout pour corriger un bug dans chrome version 25.xx.xx qui fesait rentr� en conflit 2 caroussel dans la meme page.
        setTimeout(function () {
          timer = setInterval(function () {
            play();
          }, config.speed);
        }, 100);
      };

      // display error message if no slides present
      if (gallery.length < 1) {
        $('.' + uniqueClass).append('<p>For jShowOff to work, the container element must have child elements.</p>');
      };


      // utility for loading slides
      function transitionTo(gallery, index) {


        var oldCounter = counter;
        if ((counter >= gallery.length) || (index >= gallery.length)) { counter = 0; var e2b = true; }
        else if ((counter < 0) || (index < 0)) { counter = gallery.length - 1; var b2e = true; }
        else { counter = index; }

        if (!fromButton) {
          var multiZone = $("div[MultiZoneInnerId$='" + $(gallery[counter]).attr("ItemID") + "']");
          if (multiZone.length > 0) {
            if ($cont.is("div[ItemID='" + multiZone.attr("MultiZoneId") + "']")) {

              jQuery.data(multiZone[0], "SwapFunction")();
            }
          }
        }
        var clone = $(gallery[counter]).clone();

        if (config.effect == 'slideLeft') {
          var newSlideDir, oldSlideDir;
          function slideDir(dir) {
            newSlideDir = dir == 'right' ? 'left' : 'right';
            oldSlideDir = dir == 'left' ? 'left' : 'right';
          };


          counter >= oldCounter ? slideDir('left') : slideDir('right');

          clone.appendTo($cont).slideIt({ direction: newSlideDir, changeSpeed: config.changeSpeed });
          if ($cont.children().length > 1) {
            $cont.children().eq(0).css('position', 'absolute').slideIt({ direction: oldSlideDir, showHide: 'hide', changeSpeed: config.changeSpeed }, function () { $(this).remove(); });
          };
        } else if (config.effect == 'fade') {

          clone.appendTo($cont).hide().fadeIn(config.changeSpeed, function () { if ($.browser.msie) this.style.removeAttribute('filter'); });
          if ($cont.children().length > 1) {
            $cont.children().eq(0).css('position', 'absolute').fadeOut(config.changeSpeed, function () { $(this).remove(); });
          };
        } else if (config.effect == 'none') {
          clone.appendTo($cont);

          if ($cont.children().length > 1) {
            $cont.children().eq(0).css('position', 'absolute').remove();
          };
        };
        if (clone[0].getAttribute("NmsMultiZoneContentScript") != null) {

          eval(clone[0].getAttribute("NmsMultiZoneContentScript"));
          clone.removeAttr("NmsMultiZoneContentScript");
        }

        // update active class on slide link
        if (config.links) {
          $('.' + uniqueClass + '-active').removeClass(uniqueClass + '-active jshowoff-active');
          $('.' + uniqueClass + '-slidelinks a').eq(counter).addClass(uniqueClass + '-active jshowoff-active');
        };
      };

      // is the rotator currently in 'play' mode
      function isPlaying() {
        if (config.controlZone.PlayPauseItemID != "") {
          if ($("[ItemID='" + config.controlZone.PlayPauseItemID + "']").hasClass("isNmsPlay")) {
            return true;
          }
          else {
            return false;
          }
        }
        else {
          return $('.' + uniqueClass + '-play').hasClass('jshowoff-paused') ? false : true;
        }

      };

      function resumePlay(src) {
        if (!isBusy()) {
          //NOTE (blefebvre) : Pour les caroussels qui ont l'option HoverPause, appeler transitionTo cause un bug  qui fait revenir la m�me slide � chaque fois qu'on mouseOut du caroussel (plus voyant avec slideLeft)
          //transitionTo(gallery, counter);
          if (src == 'hover' || !isPlaying()) {
            timer = setInterval(function () { play(); }, config.speed);
          }
          if (!isPlaying()) {
            $('.' + uniqueClass + '-play').text(config.controlText.pause).removeClass('jshowoff-paused ' + uniqueClass + '-paused');
          }
        };
      }

      // start slide rotation on specified interval
      function play(src) {

        if (!isBusy()) {
          counter++;
          transitionTo(gallery, counter);
          if (src == 'hover' || !isPlaying()) {
            timer = setInterval(function () { play(); }, config.speed);
          }
          if (!isPlaying()) {
            $('.' + uniqueClass + '-play').text(config.controlText.pause).removeClass('jshowoff-paused ' + uniqueClass + '-paused');
          }
        };
      };

      function nmsPause() {
        clearInterval(timer);
      }

      // stop slide rotation
      function pause(src) {
        clearInterval(timer);
        if (!src || src == 'playBtn') $('.' + uniqueClass + '-play').text(config.controlText.play).addClass('jshowoff-paused ' + uniqueClass + '-paused');
        if (config.animatePause && src == 'playBtn') {
          $('<p class="' + uniqueClass + '-pausetext jshowoff-pausetext">' + config.controlText.pause + '</p>').css({ fontSize: '62%', textAlign: 'center', position: 'absolute', top: '40%', lineHeight: '100%', width: '100%' }).appendTo($wrap).addClass(uniqueClass + 'pauseText').animate({ fontSize: '600%', top: '30%', opacity: 0 }, { duration: 500, complete: function () { $(this).remove(); } });
        }
      };

      // load the next slide
      function next() {
        goToAndPause(counter + 1);
      };

      // load the previous slide
      function previous() {
        goToAndPause(counter - 1);
      };

      // is the rotator in mid-transition
      function isBusy() {
        return $cont.children().length > 1 ? true : false;
      };

      // load a specific slide
      function goToAndPause(index) {
        $cont.children().stop(true, true);
        if ((counter != index) || ((counter == index) && isBusy())) {
          if (isBusy()) $cont.children().eq(0).remove();
          transitionTo(gallery, index);
          pause();
        };
      };

      // load images into memory
      function preloadImg() {
        $(gallery).each(function (i) {
          $(this).find('img').each(function (i) {
            preloadedImg[i] = $('<img>').attr('src', $(this).attr('src'));
          });
        });
      };

      // generate and add play/pause, prev, next controls
      function addControls() {
        $wrap.append('<p class="jshowoff-controls ' + uniqueClass + '-controls"><a class="jshowoff-play ' + uniqueClass + '-play" href="#null">' + config.controlText.pause + '</a> <a class="jshowoff-prev ' + uniqueClass + '-prev" href="#null">' + config.controlText.previous + '</a> <a class="jshowoff-next ' + uniqueClass + '-next" href="#null">' + config.controlText.next + '</a></p>');
        $('.' + uniqueClass + '-controls a').each(function () {
          if ($(this).hasClass('jshowoff-play')) $(this).click(function () { isPlaying() ? pause('playBtn') : play(); return false; });
          if ($(this).hasClass('jshowoff-prev')) $(this).click(function () { previous(); return false; });
          if ($(this).hasClass('jshowoff-next')) $(this).click(function () { next(); return false; });

        });
      };

      // generate and add slide links
      function addSlideLinks() {
        $wrap.append('<p class="jshowoff-slidelinks ' + uniqueClass + '-slidelinks"></p>');
        $.each(gallery, function (i, val) {
          var linktext = ($(this).attr('title') != '' && typeof ($(this).attr('title')) != 'undefined') ? $(this).attr('title') : i + 1;
          $('<a class="jshowoff-slidelink-' + i + ' ' + uniqueClass + '-slidelink-' + i + '" href="#null">' + linktext + '</a>').bind('click', { index: i }, function (e) { goToAndPause(e.data.index); return false; }).appendTo('.' + uniqueClass + '-slidelinks');
        });
      };


      // end .each
    });

    return this;

    // end .jshowoff
  };

// end closure
})(jQuery);




(function($) {

	$.fn.slideIt = function(settings,callback) {
	
		// default global vars
		var config = {
			direction : 'left',
			showHide : 'show',
			changeSpeed : 600
		};
		
		// merge default global variables with custom variables, modifying 'config'
		if (settings) $.extend(config, settings);
		
		this.each(function(i) {	
			$(this).css({left:'auto',right:'auto',top:'auto',bottom:'auto'});
			var measurement = (config.direction == 'left') || (config.direction == 'right') ? $(this).outerWidth() : $(this).outerHeight();
			var startStyle = {};
			startStyle['position'] = $(this).css('position') == 'static' ? 'relative' : $(this).css('position');
			startStyle[config.direction] = (config.showHide == 'show') ? '-'+measurement+'px' : 0;
			var endStyle = {};
			endStyle[config.direction] = config.showHide == 'show' ? 0 : '-'+measurement+'px';
			$(this).css(startStyle).animate(endStyle,config.changeSpeed,callback);
		// end .each
		});
	
		return this;
		
	// end .slideIt
	};

// end closure
})(jQuery);