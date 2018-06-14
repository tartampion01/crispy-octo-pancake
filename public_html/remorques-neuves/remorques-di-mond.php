<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrePage">
                    <h1>Remorques Di-Mond neuves à vendre</h1>
                </div>
                <div class="contenu contenu2">
                    <div>
                        Que vous transportiez de la marchandise standard ou de lourdes charges, les remorques fermées Di-Mond fabriquées sur mesure sont à la hauteur du défi.
                    </div>
                    <br/>
                    <div>
                        <div class="btnToggle">
                            <a name="hyperlien" onclick="toggleInformationSupplementaire('divToggle');" class="information-supplementaire" href="javascript:void(0);">Informations supplémentaires</a>
                        </div>
                        <div id="divToggle" class="showedZone" style="display:none;">
                            <span>
                                <h2>Remorques fermées robustes en acier galvanisé</h2>
                                <p>Contrairement à la concurrence, les remorques fermées Di-Mond reçoivent un traitement d'acier galvanisé complet plutôt qu'un simple traitement de peinture ou ciblé à certaines pièces. Ce procédé vous permet de prévenir la rouille et la corrosion, tout en prolongeant la durée de vie de la remorque : vous pouvez l'utiliser pendant 10 ans sans problème.</p>
                                <h2>Remorques sur mesure pour transporter tous vos matériaux</h2>
                                <p>La longueur, le poids ou la nature de votre marchandise n'est pas un obstacle : si nous n'avons pas la remorque qu'il vous faut, nous en construisons une selon vos besoins en transport. 
                                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre)?>">Contactez-nous</a>
                                    pour nous fournir les caractéristiques de votre remorque que nous fabriquerons sur mesure.
                                </p>
                                <p>Tous les modèles de remorques Di-Mond sont offerts par Réseau Dynamique à des prix concurrentiels. Visitez votre concessionnaire local pour voir les modèles et discuter des nombreux avantages et options des Di-Mond.</p>
                                <p>
                                    <a name="" href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_DiMond)?>">Visitez le site officiel de Di-Mond</a> (en anglais seulement)
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    </form>
    
</body>
</html>