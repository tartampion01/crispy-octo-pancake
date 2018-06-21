<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>    
    <form role="form" method="POST" action="/promotions-nouvelles/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrepage">
                    <h1>PROMO PIÈCES</h1>
                </div>
                <div class="contenu">
                <div class="contenu2">
                    <div class="bxslider">
                        <span>
                            <div class="carrousel">
                                <div class="">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p01.jpg" alt="Promo Mai-Juin 2018-01" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p02.jpg" alt="Promo Mai-Juin 2018-02" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p03.jpg" alt="Promo Mai-Juin 2018-03" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p04.jpg" alt="Promo Mai-Juin 2018-04" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p05.jpg" alt="Promo Mai-Juin 2018-05" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p06.jpg" alt="Promo Mai-Juin 2018-06" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p07.jpg" alt="Promo Mai-Juin 2018-07" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p08.jpg" alt="Promo Mai-Juin 2018-08" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p09.jpg" alt="Promo Mai-Juin 2018-09" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p10.jpg" alt="Promo Mai-Juin 2018-10" />
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p11.jpg" alt="Promo Mai-Juin 2018-11" /></a>
                                </div>
                                <div class="" style="display:none;">
                                    <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p12.jpg" alt="Promo Mai-Juin 2018-12" /></a>
                                </div>
                                <div class="" style="display:none;">
                                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre)?>">
                                        <img name="image" title="" src="../../_assets/images/promo/promo-mai-juin-2018-p13.jpg" alt="Promo Mai-Juin 2018-13" />
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div>
                    <script>
                        //<![CDATA[

                        var newCarrousel = "";
                        newCarrousel = $('.bxslider .carrousel').bxSlider({
                          useCSS: false,
                          auto: false,
                          autoStart: true,
                          mode: "fade",
                          pager: true,
                          controls: true,
                          responsive: true,
                    //      prevSelector: $(".flecheGauche"),
                    //      nextSelector: $(".flecheDroite"),
                          speed: 500,
                          pause: 5000,
                    //     adaptiveHeight: true,
                    //      touchEnabled: true,
                    //      slideWidth: 944,
                          prevText: "prev",
                          nextText: "next"

                        }); 

                        //]]>
                    </script>
                </div>
            </div>
                        
            <script type="text/javascript">    //<![CDATA[
$(document).ready(function () {

  $("body").attr("ontouchstart", "");
  $("body").attr("onmouseover", "");

  var $menuMobile = $(".menuMobile");
  if ($(window).width() < 641) {
    $menuMobile.css("left", -$menuMobile.outerWidth());
  } else {
    $menuMobile.hide();
  }

  $(".icoMenuMobile").click(function () {
    $(this).toggleClass("open");

    $menuMobile.animate({
      left: parseInt($menuMobile.css('left'), 10) == 0 ?
          -$menuMobile.outerWidth() :
          0
    });
    $(".wrap").animate({
      left: parseInt($menuMobile.css('left'), 10) == 0 ?
        0 :
        +$menuMobile.outerWidth()
    });
    $(".pied").animate({
      left: parseInt($menuMobile.css('left'), 10) == 0 ?
        0 :
        +$menuMobile.outerWidth()
    });
  });

  $(".menuCss5").find(".parent > a").click(function () {
    var open = $(this).parent();
    if (open.hasClass("expanded")) {
      open.removeClass("expanded");
      open.children("div").slideUp();
    } else {
      open.addClass("expanded");
      open.children("div").slideDown("fast", function () {
        $('html, body').animate({
          scrollTop: open.offset().top
        }, 1000);
      });
    }
  });
  //Faire afficher les filtres
  $(".toggleFilters").bind("click", openFilters);
  $(".viewResults a").bind("click", closeFilters);
  function openFilters() {
    $(".GpcMenuWrapper").slideDown();
    $(".toggleFilters").addClass("selected").unbind("click").find(".openClose").bind("click", closeFilters);
  }
  function closeFilters() {
    $(".GpcMenuWrapper").slideUp();
    $(".toggleFilters").removeClass("selected");
    setTimeout(function () {
      $(".toggleFilters").bind("click", openFilters).find(".openClose").unbind("click")
    }, 250)
  }
});

var magicTimeout = "";

$(window).resize(function () {
  if (magicTimeout != null) {
    clearTimeout(magicTimeout);
    magicTimeout = null;
  }
  magicTimeout = setTimeout(function () {
    var $menuMobile = $(".menuMobile");
    if ($(window).width() < 641) {
      $menuMobile.show();
      if (parseInt($menuMobile.css("left")) < 0) {
        $menuMobile.css("left", -$menuMobile.outerWidth())
      } else {
        if ($menuMobile.is(":visible")) {
          $(".wrap").css("left", $menuMobile.outerWidth());
          $(".pied").css("left", $menuMobile.outerWidth());
        }
      }
    } else {
      $menuMobile.hide();
    }
  }, 100);
});
    //]]>  </script>
</div></div></div>
<img alt="" src="#" style="position:absolute;left:-10px;top:-10px;width:1px;height:1px;" />

<script type="text/javascript">
//<![CDATA[
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-120787761-1', 'auto');
</script>
</form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>