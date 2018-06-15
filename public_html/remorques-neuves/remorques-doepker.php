<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrePage">
                    <h1>Remorques Doepker</h1>
                </div>
                <div class="contenu contenu2">
                    <div>
                        Conçues pour offrir une performance inégalée, les remorques DOEPKER offrent un rendement supérieur sur la route. Fabriquées dans des matériaux durables et de qualité, elles sont fortes, légères et représentent les remorques les plus profitables de l'industrie.
                    </div>
                    <br/>
                    <div>
                        <div class="btnToggle">
                            <a name="hyperlien" onclick="toggleInformationSupplementaire('divToggle');" class="information-supplementaire" href="javascript:void(0);">Informations supplémentaires</a>
                        </div>
                        <div id="divToggle" class="showedZone" style="display:none;">
                            <span>
                                <h2>Remorques agricoles</h2>
                                <p>Plus légères et plus fortes remorques en aluminium sur le marché, les remorques agricoles de DOEPKER sont couvertes par une garantie structurelle de 5 ans à 100 %. Élaborées avec une combinaison de métaux uniques et un design exceptionnel, elles pèsent jusqu'à une 1 tonne de moins que leurs homologues sur le marché. Le revêtement extérieur ne fait pas exception d'innovation. Le mélange de zinc pur à 100 % et l'acier contribuent à préserver la remorque des contaminants des routes canadiennes. Munies d'une chute de déchargement au-dessus et de valves en dessous, elles sont simples d'utilisation au chargement et au déchargement.</p>
                                <h2>Ponts plats</h2>
                                <p>Offerts en longueurs variées, les ponts plats de DOEPKER possèdent une haute résistance et un faible poids, leur permettant ainsi de maximiser leur charge et leur durée de vie sur la route. Conçus à partir des meilleurs matériaux, ils présentent une mécanique parfaite et un design à toute épreuve. Selon vos conditions de travail, les ponts plats en acier galvanisé protégeront votre investissement de la corrosion.
                                <h2>Remorques huile et gaz</h2>
                                <p>Alors que les charges se font de plus en plus lourdes et de plus en plus coûteuses, vous avez besoin d'une remorque fiable et sécuritaire. Grâce à la robustesse et la stabilité des remorques-citernes de DOEPKER vous pouvez avoir la conscience tranquille, votre marchandise arrivera à bon port.</p>
                                <h2>Remorques pour bois d'œuvre</h2>
                                <p>Légères, fortes et novatrices les remorques de transport de bois d'œuvre de DOEPKER sont les plus avancées dans leurs catégories sur le marché. Disponibles en modèles pour la route et hors route, ces remorques sont conçues pour recevoir une charge maximale. Rentabilisez vos livraisons maintenant et plus tard avec leur valeur de revente élevée.</p>
                                <h2>Remorques à gravier</h2>
                                <p>Les quatre modèles de remorques à gravier de DOEPKER offrent chacun des particularités qui sauront répondre précisément à vos besoins en matière de transport de gravier. Alors que certaines offrent une grande résistance aux agents extérieurs, d'autres permettent d'augmenter l'empattement pour transporter une plus grande charge ou encore un déchargement contrôlable.</p>
                                <p>Tous les modèles de remorques Doepker sont disponibles chez Réseau Dynamique à des prix compétitifs. Visitez votre concessionnaire local pour voir les modèles et discuter des nombreux avantages et options des DOEPKER.</p>
                                <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_Doepker)?>">Visitez le site officiel de Doepker</a>
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