<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrePage">
                    <h1>Camions neufs International</h1>
                </div>
                <div class="contenu contenu2">
                    <div>
                        International compte le plus grand réseau de concessionnaires de camions lourds, moyens et services sévères en Amérique du Nord. Réseau Dynamique, fier membre de la famille International, offre une large sélection de camions lourds adaptés aux différents types d'industries et d'usages.
                    </div>
                    <div class="toggle">
                        <div class="btnToggle">
                            <a name="hyperlien" onclick="toggleInformationSupplementaire('divToggle');" href="javascript:void(0);">Informations supplémentaires</a>
                        </div>
                        <div id="divToggle" class="showedZone" data-staticclassnames="showedZone" style="display:none;">
                            <span>
                                <h2>La puissance de l'innovation</h2>
                                <p>Que vous soyez sur la route pour la semaine ou pour la fin de semaine, vous avez besoin d'un camion qui vous permettra d'atteindre vos objectifs d'affaires. Élaborés selon les plus hautes normes de qualité obtenues par une recherche constante de l'innovation, les camions International possèdent style et puissance. Avec la fiabilité et la productivité offertes par ces véhicules vous serez en mesure de faire face à tous les défis rencontrés sur la route. International vous aide à respecter vos engagements envers vos clients et à conserver leur confiance.</p>
                                <p>Peu importe la nature et le poids de votre chargement, vous trouverez parmi l'offre de International des camions dont la maniabilité, la durabilité et le rendement en carburant sont optimaux. Quelque que soit votre entreprise, prenez les rênes d'un camion avec le cerveau et les muscles capables de suivre vos ambitions.</p>
                                <h2>Prenez le volant de vos "affaires"</h2>
                                <p>Nul ne passe autant de temps que vous sur la route. Les roues, la mécanique et la structure des camions International ont été soumises à des tests qui se sont étendus sur des millions de kilomètres. Soyez assurés que votre véhicule n'expérimentera aucune nouvelle expérience entre vos mains qui n'ait pas été déjà testée par les ingénieurs d’International. En tout temps, vous pourrez compter sur votre camion à 100 % pour vous mener, vous et votre charge, à bon port.</p>
                                <p>Avec la qualité éprouvée des camions International et la force du Réseau Dynamique vous optez pour un véhicule fiable et un service professionnel et dévoué.</p>
                                <p>
                                    <a name="hyperlien" onclick="javascript:RegisterClick(this);" href="http://ca.internationaltrucks.com/" target="_blank">Visitez le site officiel de International Trucks</a>
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