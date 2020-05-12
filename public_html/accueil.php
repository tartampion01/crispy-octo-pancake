<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<!--<script type='text/javascript' src='../../_assets/js/jquery.jshowoff.js'></script>  ** enlever FXGL diapo avant 10-30-19 -->
<?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <!--diapo-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/home_banner.php'); ?>  
    <div class="" data-staticClassNames="wrap">        
	</div>
    <!--Logo section-->
    <section class="grid grid-pad">
        <div class="col-1-1 logo mobile-col-1-1">
            <div class="col-1-4 mobile-col-1-2 item">
                <a class="" href="https://www.internationaltrucks.com/shopping-tools/build-your-own" target="_blank">
                    <img class="" src="_assets/images/wx3/icon-configuration.png" alt="" />
                    <h3>Configurer<br />votre véhicule</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item">
                <a href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires) ?>" target="_self">
                    <img src="_assets/images/wx3/icon-part.png" alt="" />
                    <h3>Pièces</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item" target="_blank">
                <a href="/trucks.php?n=1">
                    <img src="_assets/images/wx3/icon-inventory.png" alt="" />
                    <h3 class="topdivision15">Inventaire</h3>
                </a>
            </div>
            <div class="col-1-4 mobile-col-1-2 item" target="_blank">
                <a href="<?php echo RD_PageLink::getHref(folder::Root,page::ObtenirPrix); ?>">
                    <img src="_assets/images/wx3/icon-price.png" alt="" />
                    <h3>Demande<br />De Prix</h3>
                </a>
            </div>
        </div>
    </section>
    <!--Full image-->
    <section class="topdivision50">
        <div class="grid">
            <div class="col-1-1 mobile-col-1-1">
                <div class="col-1-2 mobile-col-1-2 image-box">
                    <a href="/trucks.php?n=1&params=B_Inte">
                        <img src="_assets/images/wx3/img-international.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box">
                    <a href="/trucks.php?n=1&params=B_Doep">
                        <img src="_assets/images/wx3/img-remorque.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="/trucks.php?n=1&params=B_Isuz">
                        <img src="_assets/images/wx3/img-isuzu.jpg" alt="" />
                    </a>
                </div>
                <div class="col-1-2 mobile-col-1-2 image-box" style="margin: -5px 0px 0px 0px;">
                    <a href="/trucks.php?n=1&params=B_Kalm">
                        <img src="_assets/images/wx3/img-inventaire.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!--multi-item build your own truck-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_build_truck.php'); ?>  

    <!--youtube video-->
    <section>
        <div class="grid grid-pad">
            <h2 class="">Le nouveau International CV515 2020 Classe 5</h1>
         </div>
         <style>
            .hytPlayerWrap{
                position: relative;
            }
            .hytPlayerWrap.ended::after{
                content:""; 
                position: absolute; 
                top: 0; 
                left: 0; 
                bottom: 0; 
                right: 0; 
                cursor: pointer;
                background-color: black; 
                background-repeat: no-repeat; 
                background-position: center; 
                background-size: 64px 64px; 
                background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNTEwIDUxMCI+PHBhdGggZD0iTTI1NSAxMDJWMEwxMjcuNSAxMjcuNSAyNTUgMjU1VjE1M2M4NC4xNSAwIDE1MyA2OC44NSAxNTMgMTUzcy02OC44NSAxNTMtMTUzIDE1My0xNTMtNjguODUtMTUzLTE1M0g1MWMwIDExMi4yIDkxLjggMjA0IDIwNCAyMDRzMjA0LTkxLjggMjA0LTIwNC05MS44LTIwNC0yMDQtMjA0eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==);
            }
            .hytPlayerWrap.paused::after{
                    content:""; 
                    position: absolute; 
                    top: 70px; 
                    left: 0; 
                    bottom: 50px; 
                    right: 0; 
                    cursor: pointer; 
                    background-color: black; 
                    background-repeat: no-repeat;
                    background-position: center; 
                    background-size: 40px 40px; 
                    background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHdpZHRoPSIxNzA2LjY2NyIgaGVpZ2h0PSIxNzA2LjY2NyIgdmlld0JveD0iMCAwIDEyODAgMTI4MCI+PHBhdGggZD0iTTE1Ny42MzUgMi45ODRMMTI2MC45NzkgNjQwIDE1Ny42MzUgMTI3Ny4wMTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
            }
        </style>
        <div class="hytPlayerWrapOuter"> 
            <div class="hytPlayerWrap"> 
            <iframe width="100%" height="600" id="widget2" src="https://www.youtube.com/embed/bxod0lSB-kg?rel=0&amp;enablejsapi=1&amp;mute=1" frameborder="0"></iframe>
            </div>
        </div>
        <script>"use strict"; document.addEventListener('DOMContentLoaded', function(){if (window.hideYTActivated) return; let onYouTubeIframeAPIReadyCallbacks=[]; for (let playerWrap of document.querySelectorAll(".hytPlayerWrap")){let playerFrame=playerWrap.querySelector("iframe"); let tag=document.createElement('script'); tag.src="https://www.youtube.com/iframe_api"; let firstScriptTag=document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); let onPlayerStateChange=function(event){if (event.data==YT.PlayerState.ENDED){playerWrap.classList.add("ended");}else if (event.data==YT.PlayerState.PAUSED){playerWrap.classList.add("paused");}else if (event.data==YT.PlayerState.PLAYING){playerWrap.classList.remove("ended"); playerWrap.classList.remove("paused");}}; let player; onYouTubeIframeAPIReadyCallbacks.push(function(){player=new YT.Player(playerFrame,{events:{'onStateChange': onPlayerStateChange}});}); playerWrap.addEventListener("click", function(){let playerState=player.getPlayerState(); if (playerState==YT.PlayerState.ENDED){player.seekTo(0);}else if (playerState==YT.PlayerState.PAUSED){player.playVideo();}});}window.onYouTubeIframeAPIReady=function(){for (let callback of onYouTubeIframeAPIReadyCallbacks){callback();}}; window.hideYTActivated=true;});</script>
    </section>

    <!--new 3 services-->
    <section class="grid">
        <div class="grid-pad topdivision50">
            <h2 class="titlesection">Nos meilleurs services</h2>
        </div>
        <div class="col-1-1 sectionservices">
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3serviceleft">
                    <a style="text-decoration:none;" class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre) ?>" target="_self">
                        <h2 class="titleservice">Localisez une succursales</h2>
                    </a>
                </div>
            </div>
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3servicecenter">  
                    <a style="text-decoration:none;" class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesPiecesEtAsccessoires) ?>" target="_self">
                        <h2 class="titleservice">Service de pièces</h2>
                    </a>
                </div>
            </div>
            <div class="col-1-3 mobile-col-1-1">
                <div class="bg3servicerigth">
                    <a style="text-decoration:none;" class="grid-pad" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H) ?>" target="_self">
                        <h2 class="titleservice">Urgence routière 24h</h2>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- promo main -->
    <?php 
     require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/promo/promo_main.php'); 
     ?>
    
    <!--Map
    <div>
        <iframe id="map" src="https://www.google.com/maps/d/embed?mid=1KQIM62X8067jYvP56CJLimUsJORkPfoH" width="100%" height="400"></iframe>
    </div>-->
    </form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>