<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>var _N = 2;</script>
<script src="../_assets/js/camions-rest.js" type="text/javascript"></script>
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
                </div><div class="FacetedExplorer">
                    <div class="GpcMenuWrapper">
                        <ul class="GpcMenu FacetedNavigation">
                            <!-- MARQUE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Marque</a>
                                <ul class="marque" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('marque', 'engine="-" AND marque="doepker" AND ', 'COUNT', 'DESC' ); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='marque' data-value='<?PHP echo $key ?>' data-custom-criteria='engine = "-" AND marque="doepker" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MODÈLE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                                <ul class="Model" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('Model', 'engine="-" AND marque="doepker" AND ', 'Model', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='Model' data-value='<?PHP echo $key ?>' data-custom-criteria='engine = "-" AND marque="doepker" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?Model=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <!-- Results Content -->
                    <div class="GpcFacetedResults defaultFacet">

                        <div class="GpcPagerCountSelector">
                            <span class="GpcItemsPerPageText">Afficher par page</span>
                            <div data-value="12" class="limit-per-page GpcDisplayOption selected">12</div>
                            <div data-value="24" class="limit-per-page GpcDisplayOption">24</div>
                            <div data-value="48" class="limit-per-page GpcDisplayOption">48</div>
                        </div>
                        <div class="GpcPagedResultCount">
                            <span class="GpcCountPrefixText">Résultats</span>
                            <span class="GpcPagedResultCurrentCount">1 - 4</span>
                            <span class="GpcBetweenCountText">sur</span>
                            <span class="GpcPagedResultTotalCount">4</span>
                        </div>
                        <div class="GpcResultPager">
                            <ul class="pagination" id="pagination"></ul>
                            <!--
                            <a disabled="disabled" class="GpcPagerFirst">&lt;&lt;</a>
                            <a disabled="disabled" class="GpcPagerPrevious">Précédent</a>
                            <a class="selected">1</a>
                            <a class="selected">1</a>
                            <a class="selected">1</a>
                            <a disabled="disabled" class="GpcPagerNext">Suivant</a>
                            <a disabled="disabled" class="GpcPagerLast">&gt;&gt;</a>
                            -->
                        </div>
                        <div class="orderBy clear">
                            <div class="libelle">
                                Classer par :
                            </div>
                            <div class="GpcResultOrderSelector">
                                <!--
                                <div class="GpcWrapFakeSelectBox">
                                    <div class="GpcFakeSelectValue">Nom ascendant</div>
                                    <div class="GpcFakeSelect">
                                        <div class="GpcFakeSelectOption selected" data-value="{&quot;PropertyName&quot;:4096,&quot;IdentifierGuid&quot;:&quot;00000000-0000-0000-0000-000000000000&quot;,&quot;IsDesc&quot;:false,&quot;Text&quot;:&quot;Nom ascendant&quot;}">Nom ascendant</div>
                                        <div class="GpcFakeSelectOption" data-value="{&quot;PropertyName&quot;:4096,&quot;IdentifierGuid&quot;:&quot;00000000-0000-0000-0000-000000000000&quot;,&quot;IsDesc&quot;:true,&quot;Text&quot;:&quot;Nom descendant&quot;}">Nom descendant</div>

                                    </div>
                                </div>
                                -->
                                <select name="SearchSorting" class="search-sorting" style="font-size: .8em; line-height: 3em; padding: .15em;">
                                    <option value="asc">Nom ascendant</option>
                                    <option value="desc">Nom descendant</option>
                                </select>
                            </div>
                        </div>

                        <div class="GpcResultItemWrapper results-container">

                            <!-- Template product -->

                        </div>
                        <div class="GpcFooter clear">
                            <div class="GpcPagedResultCount">
                                <span class="GpcCountPrefixText">Résultats</span>
                                <span class="GpcPagedResultCurrentCount">1 - 4</span>
                                <span  class="GpcBetweenCountText">sur</span>
                                <span class="GpcPagedResultTotalCount">4</span>
                            </div>
                            <div class="GpcResultPager">
                                <ul class="pagination" id="pagination"></ul>
                                <!--
                                <a disabled="disabled" class="GpcPagerFirst">&lt;&lt;</a>
                                <a disabled="disabled" class="GpcPagerPrevious">Précédent</a>
                                <div style="display: inline-block">
                                    <a class="selected actual-page">1</a>
                                </div>
                                <a disabled="disabled" class="GpcPagerNext">Suivant</a>
                                <a disabled="disabled" class="GpcPagerLast">&gt;&gt;</a>
                                -->
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="FacetedExplorerClear GpcClear"></div>
        </div>
    </div>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>    
    </form>
    
    <div class="loading-overlay">Loading&#8230;</div>
    
    <!-- Start : Javascript template -->
    <script id="resultsTemplate" type="text/x-jquery-tmpl">

        <div class="FacetedResultTemplate DefaultResultContainer">
            <a href="../details_new.php?id=${encodeURI(btoa(id))}">
                <div class="ResultImage">                
                    <img src="${pictures[0]}" title="" alt="">
                    <div class="imgPromo" style="display: none;"></div>
                </div>
                <div class="ResultContent">
                    <div class="ResultContentProductName">
                        <h2>
                            <span class="ProductBrokerType_String">${marque}</span>
                            <span>&nbsp;</span>
                            <span class="ProductBrokerType_String">${Model}</span>
                            <span>&nbsp;</span>
                            <span>
                                <span class="ProductBrokerType_String">6 x 4</span>
                            </span>
                        </h2>
                    </div>
                    <div class="customField">
                        <div class="forBroker label zoneForBroker">
                            <span class="forBroker label spanForBroker">No d'inventaire : </span>
                            <span class="ProductBrokerType_String">${stock}</span>
                        </div>
                    </div>
                    <div class="customField">
                        <div class="forBroker">
                            <span class="forBroker">Marque : </span>
                                <span>${marque}</span>
                        </div>
                    </div>
                    <div class="customField">
                        <div class="forBroker">
                            <span class="forBroker">Modèle : </span>
                            <span class="ProductBrokerType_String">${Model}</span>
                        </div>
                    </div>
                    <div class="customField">
                        <div class="forBroker">
                            <span class="forBroker">Moteur : </span>
                            <span class="ProductBrokerType_String">${engine}</span>
                        </div>
                    </div>
                    <div class="inPromo">
                        <span class="ProductBrokerType_Boolean">False</span>
                    </div>
                    <div class="imgPlus"></div>
                </div>
            </a>
        </div>
    </script>
    <!-- End : Javascript template -->
    
    <script>
    $( document ).ready(function() {
    
        // On page load, trigger corresponding menu item
        $("li[data-value='doepker']").trigger('click');
    });
    </script>
</body>
</html>