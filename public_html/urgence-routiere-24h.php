<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
    <div class="grid grid-pad">
        <div class="content col-1-1">
        <div class="titrepage"><h1>Urgence Routière 24h pour camions lourds</h1></div>
        <div class="contenu ">Pour toute urgence sur la route, contactez rapidement la succursale la plus près de votre emplacement et profitez d'une assistance routière ou un remorquage.</div>
            <div class="col-1-2">
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCamionsInterAnjou); ?>'>Camions Inter-Anjou</a></h2>
                    <h4>Anjou</h4>
                    <p>Service routier et remorquage</br>514 772-1456</p>
                </div>
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreInterBoucherville); ?>'>Inter-Boucherville</a></h2>
                    <h4>Boucherville</h4>
                    <p>Service routier et remorquage</br>514 772-1456</p>
                </div>
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreLeCentreduCamionAmiante); ?>'>Le Centre du Camion (Amiante)</a></h2>
                    <h4>Thetford Mines</h4>
                    <p>Service routier et remorquage Canada et États-Unis</br>800 260-8588</p>
                </div>
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreLeCentreRoutier1994); ?>'>Le Centre routier 1994</a></h2>
                    <h4>Rivière-du-Loup</h4>
                    <p>Service routier et remorquage</br>418 862-7231</p>
                </div>
            </div>
            <div class="col-1-2">
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCamionsInterLanaudiere); ?>'>Camions Inter-Lanaudière</a></h2>
                    <h4>Joliette</h4>
                    <p>Service routier et remorquage</br>Jour : 450 760-9996</br>Nuit : 514 803-1538</p>
                </div>
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCharestInternational); ?>'>Charest International</a></h2>
                    <h4>Victoriaville</h4>
                    <p>Remorquage Canada et États-Unis</br>819 758-8271</p>
                </div>
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreLeCentreduCamionBeauce); ?>'>Le Centre du Camion (Beauce)</a></h2>
                    <h4>Saint-Georges</h4>
                    <p>Service routier et remorquage Canada et États-Unis</br>418 228-8005</p>
                </div>
                <div class="contenu">
                    <h2><a href='<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCentreduCamionBeaudoin); ?>'>Le Centre du Camion Beaudoin</a></h2>
                    <h4>Drummondville</h4>
                    <p>819 478-8186</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>