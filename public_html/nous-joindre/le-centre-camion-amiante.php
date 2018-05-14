<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<?php $suc = new RD_Succursales(); $suc->load(nomSuccursale::ThetfordMines); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="left">
                    <div class="titrepage">
                        <h1><span><?php echo $suc->nomLong; ?></span></h1>
                    </div>
                    <div class="blocCoordonnees">
                        <div class="contenu">
                            <h2>Coordonnées</h2>
                            <p>
                                <?php echo $suc->adresse; ?></br>
                                <?php echo $suc->ville; ?>&nbsp;(<?php echo $suc->province; ?>)</br>
                                <?php echo $suc->codePostal; ?></br>
                            </p>
                            <p>
                                <?php foreach($suc->telephones as $telephone): ?>
                                <?php echo $telephone; ?></br>
                                <?php endforeach;?>
                            </p>

                            <div class="blocMap contenu">
                                <div><iframe src="<?php echo $suc->GoogleMapSRC; ?>" width="455" height="300" frameborder="0" style="border:0"></iframe></div>
                            </div>

                            <div class="blocHeuresDouverture contenu">
                                <div class="titre">
                                    <h2>Heures d'ouverture</h2>
                                    <div class="heures">
                                        <table style="width: 100%;" mappingtype="Page" editorselectedelement="true" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr></tr>
                                            <tr><th></th><th>Services</th></tr>
                                            <tr>
                                                <td>Lundi :</td>
                                                <td><?php echo $suc->heureOuvertureLundi; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Mardi :</td>
                                                <td><?php echo $suc->heureOuvertureMardi; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Mercredi :</td>
                                                <td><?php echo $suc->heureOuvertureMercredi; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Jeudi :</td>
                                                <td><?php echo $suc->heureOuvertureJeudi; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Vendredi :</td>
                                                <td><?php echo $suc->heureOuvertureVendredi; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Samedi :</td>
                                                <td><?php echo $suc->heureOuvertureSamedi; ?></td>
                                            </tr>
                                            <tr>
                                                <td>Dimanche :</td>
                                                <td><?php echo $suc->heureOuvertureDimanche; ?></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="content"><div class="titre">
                            <h3>Contact</h3>
                                <?php foreach($suc->contacts as $contact):
                                    foreach($contact as $details):?> 
                                        <h5><?php echo $details[0]; ?></h5>
                                        <p><?php echo $details[1]; ?></br>
                                            <a href='mailto:<?php echo $details[2]; ?>'><?php echo $details[2]; ?></a>
                                        </p>
                                <?php endforeach;endforeach; ?>
                            </div></div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="blocPhoto">
                        <img name="image" title="" src="<?php echo $suc->imageBatisse; ?>" alt="<?php echo $suc->imageBatisseALT; ?>">
                    </div>
                    <div class="contenu">
                        <h2>Services offerts</h2>
                        <ul>
                            <?php foreach($suc->servicesOfferts as $serviceOffert): ?>
                                <li><?php echo $serviceOffert; ?></li>
                            <?php endforeach;?>
                        </ul>
                        <h3><?php echo $suc->serviceRoutierTitre ?></h3>
                        <p>
                            <?php foreach($suc->serviceRoutierTelephone as $telephone): ?>
                                <?php echo $telephone; ?></br>
                            <?php endforeach;?>
                        </p>
                        <h3><?php echo $suc->remorquageTitre ?></h3>
                        <p>
                            <?php foreach($suc->remorquageInfo as $remInfo): ?>
                                <?php echo $remInfo; ?></br>
                            <?php endforeach;?>
                        </p>
                        <p>
                            <?php foreach($suc->remorquageTelephones as $telephone): ?>
                                <?php echo $telephone; ?></br>
                            <?php endforeach;?>
                        </p>
                        <div class="btnBon" style="display:block;">
                            <h2><a class="buttonBon" name="hyperlien" href="<?php RD_PageLink::getHref(folder::Root,page::BonDeTravail); echo "?succursale=" . $suc->getSuccursaleBonTravail(); ?>" target="_self">Ouvrez un bon de travail</a></h2>
                        </div>
                        <div class="btnPieces" style="display:block;">
                            <h2><a class="buttonBon" name="hyperlien" href="<?php RD_PageLink::getHref(folder::Root,page::DemandePieces); echo "?succursale=" . $suc->getSuccursaleDemandePieces(); ?>" target="_self">Faites une demande de pièces</a></h2>
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