<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/promotions-nouvelles/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="grid grid-pad">
                <div class="titrepage">
                    <h1>Nouvelles</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <h2>Nouveau service de v&#233;rification m&#233;canique de la SAAQ</h2>
                        <p><em>4 avril 2014</em></p>
                        <p>Centre du Camion Beaudoin, succursale de Drummondville, est maintenant mandataire accrédité de la Société de 
                            l'assurance automobile du Québec en vérification mécanique pour les véhicules routiers ayant un PNBV de 4 500 kg ou plus.
                            En effet, depuis le 17 mars dernier, il vous est possible de bénéficier de ce service offert au Centre-du-Québec.
                        </p>
                        <h2>Mandataires en vérification de véhicules routiers</h2>
                        <p>En détenant le titre de mandataire en vérification de véhicules routiers, Centre du Camion Beaudoin est maintenant en mesure d'effectuer, entre autres :</p>
                        <ul>
                            <li>La vérification photométrique des vitres latérales avant des véhicules qui ont les vitres teintées.</li>
                            <li>La vérification mécanique ponctuelle des véhicules transformés ou modifiés, des véhicules de fabrication artisanale, des véhicules accidentés et reconstruits, des véhicules qui proviennent de l'extérieur du Québec et qui font l'objet d'une demande d'immatriculation au Québec ainsi que des véhicules remisés ou mis au rancart.</li>
                            <li>La vérification mécanique périodique des véhicules dont le poids nominal brut (PNBV) est de 4 500 kg ou plus, comme les gros camions, les remorques ou les autobus.</li>
                        </ul>
                        <p>
                            Contactez le
                            <a name="hyperlien" onclick="" href="<?php echo RD_PageLink::getHref(folder::NousJoindre,page::NousJoindreCentreduCamionBeaudoin); ?>" target="_self">&nbsp;Centre du Camion Beaudoin&nbsp;</a>
                            pour toute information ou prendre rendez-vous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    
</body>
</html>