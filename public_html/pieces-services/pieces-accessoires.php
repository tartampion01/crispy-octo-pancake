<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="grid grid-pad">
        <div class="content search-result">
            <div class="">
                <div class="titrepage">
                    <h1>PIÈCES ET ACCESSOIRES</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2 col-1-1">
                        <p>Votre camion est aussi important pour nous que pour vous. Ainsi, chaque fois que vous vous rendez dans l'un des points de service de Réseau Dynamique vous êtes reçus par des spécialistes hautement formés ayant à cœur le succès de vos affaires.</p>
                        <h2>Service d'entretien et de réparation</h2>
                        <p>Que ce soit pour un entretien, une réparation, la carrosserie ou l'esthétique, les départements de pièces et accessoires ont l'expertise et l'équipement technologique pour les camions International et toutes autres marques de camions lourds et tracteurs de terminal.</p>
                        <p>Grâce à une connaissance inégalée des camions International, entretenue par une formation en continu, les professionnels sont en mesure de trouver l'origine d'un problème rapidement. Leur efficacité combinée aux installations technologiques vous permettra de reprendre la route rapidement.</p>
                        <h2>Pièces</h2>
                        <p>Chaque soin apporté sur votre véhicule est exécuté avec la plus grande minutie et seules des pièces de qualité conçues pour votre modèle de camion lourd ou tracteur de terminal seront utilisées. Les succursales Réseau Dynamique disposent d'un grand inventaire de pièces d'origine de grande qualité. Dans l'éventualité où votre pièce n'est pas en stock, elle sera commandée et vous la recevrez dans les plus brefs délais.</p>
                        <p><a class="btnOrange" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Fournisseurs); ?>">Nos fournisseurs</a></p>
                        <h2>Commande de pièces</h2>
                        <p>Commandez rapidement vos pièces en ligne avec notre outil de commande NextPart ou composez le numéro de téléphone de 
                            <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>">votre succursale </a>
                             et un des techniciens du département des pièces de Réseau Dynamique vous aidera à trouver ce dont vous avez besoin.</p>
                        <p>
                            <a class="btnOrange" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_fleetrite); ?>" target='_blank' >Nos pièces Fleetrite</a>
                            <a class="btnOrange" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Nextpart,page::InscriptionNextPart); ?>">S'inscrire à NextPart</a>
                            <a class="btnOrange" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>">Contactez votre succursale</a>
                        </p>
                        <h2>Accessoires</h2>
                        <p>Profitez d'un choix complet d'accessoires et d'articles d'origine pour personnaliser votre véhicule. Personnalisation de l'intérieur et de l'extérieur, audio, confort, loisir, commodité, etc. Vous avez un besoin ? Vous raffolerez des fonctionnalités et du design de nos accessoires!</p>
                        <h2>Service routier partout au Québec</h2>
                        <p>Réseau Dynamique comprend les conséquences d'un problème routier sur votre entreprise. C'est pourquoi vous pouvez faire appel au 
                            <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::PiecesService,page::PiecesEtServicesServiceRoutier); ?>">Service routier </a>
                            pour toute réparation mineure partout au Québec.</p>
                        <p>
                            <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>">Prenez rendez-vous </a>
                            avec le service de mécanique de Réseau Dynamique le plus près dès aujourd'hui!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    
</body>
</html>
