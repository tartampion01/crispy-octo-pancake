<?php
$pageName = basename($_SERVER['SCRIPT_NAME']);
$section = '';

if(strpos($_SERVER['REQUEST_URI'], 'camions-neufs/') !== false) {
    $section = 'camion-neufs';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'camions-occasion.php') !== false) {
    $section = 'camions-occasion';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'remorques-neuves/') !== false) {
    $section = 'remorques-neuves';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'vehicules-utilitaires/') !== false) {
    $section = 'vehicules-utilitaires';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'location-camions.php') !== false) {
    $section = 'location-camions';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'pieces-services/') !== false) {
    $section = 'pieces-services';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'promotions-nouvelles') !== false) {
    $section = 'promotions-nouvelles';
}
elseif(strpos($_SERVER['REQUEST_URI'], 'carrieres.php') !== false) {
    $section = 'carrieres';
}
?>
     <!--Footer-->
     <footer>
        <div class="blacklinefooter">
            <div class="grid grid-pad"> 
                <div class="blackfootertop">
                    <div class="col-1-5 mobile-col-1-3">
                        <a href="/accueil.php">
                          <img src="../../_assets/images/wx3/logo_footer.png" alt="Réseau Dynamique" />
                        </a>
                    </div>
                    <div class="col-1-5 ">
                        <p></p>
                    </div>
                    <div class="col-1-5 mobile-col-1-3">
                       <p class="footercenter">&copy; Réseau Dynamique, 2020</p>
                    </div>
                    <div class="col-1-5 ">
                    <p  class="footerright"></p>
                    </div>
                    <div class="col-1-5 mobile-col-1-3">
                    <p class="footerright">
                        <a name="hyperlien" onclick="" href="/mentions-legales.php" target="_self">Mentions légales</a>&nbsp;| 
                        <a name="hyperlien" onclick="" href="/plan-site.php" target="_self">Plan du site</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    
    </body>
</html>
