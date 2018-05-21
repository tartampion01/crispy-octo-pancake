<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>SERVICE ROUTIER</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <p>Un problème sur la route avec votre camion ? Économisez temps et coûts de remorquage pour tout souci de mécanique mineur grâce au service routier de Réseau Dynamique.</p>
                        <h2>Service mobile pour camions lourds</h2>
                        <p>Tous nos véhicules de dépannage sont bien équipés pour répondre à vos urgences routières partout au Québec, que ce soit en termes d'outils spécialisés, de pièces ou de technologies pour effectuer plusieurs types de réparations routières. Un service routier 24h est offert dans certaines des succursales Réseau Dynamique afin de vous assister en cas de problème de jour comme de nuit.</p>
                        <p>En confiant votre camion lourd aux professionnels hautement certifiés de Réseau Dynamique vous serez en mesure de reprendre la route dans un délai rapide.Vous miserez également sur un service courtois, fiable et sécuritaire effectué par un technicien comprenant les contraintes et exigences de votre domaine d'activités.</p>
                        <h2>Remorquage et location de camion</h2>
                        <p>Dans le cas où votre camion a besoin de soins plus pointus, celui-ci et sa cargaison seront remorqués jusqu'à la succursale Réseau Dynamique la plus près. L'éventail de véhicules de service est bien équipé pour rapatrier votre chargement de façon sécuritaire quelque soit sa taille et sa nature. Afin de vous aider dans la poursuite de vos activités, vous pourrez profiter de notre service de 
                            <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::LocationsDeCamions); ?>">location de camion</a> en attendant la réparation de votre véhicule.</p>
                        <p>Consultez votre <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>">concessionnaire le plus près</a> pour demander le service de dépannage routier.</p>
                        <p>* La disponibilité du service routier est la même que celle des heures d'ouverture du département des pièces et services.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    </form>
    
</body>
</html>