<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<?php $suc = new RD_Succursales(); $suc->load(nomSuccursale::Victoriaville); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content">
            <div class="shrink">
                <div class="content">
                    <h1>Service de Remorquage de Camions Lourds</h1>
                    <h2>24 heures sur 24</h2>
                    <h2>7 jours sur 7</h2>
                    <h3>Téléphone : 819 758-8271</h3>
                </div>
                <div class="contenu">
                    <h4>Retour à la page de la succursale</h4>
                    <div class="concession">
                        <div class="titre"><h3><span>Victoriaville</span></h3></div>
                        <div class="nom"><h4><span>Charest International</span></h4></div>
                        <div class="tel">T&#233;l : <span >819 758-8271</span></div>
                        <div class="voir"><span><a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCharestInternational); ?>" target="_self">Voir la fiche</a></span></div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    
</body>
</html>