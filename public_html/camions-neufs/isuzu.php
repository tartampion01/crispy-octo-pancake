<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>var _N = 1;</script>
<script src="../_assets/js/camions-rest.js" type="text/javascript"></script>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrePage">
                    <h1>Camions neufs Isuzu</h1>
                </div>
                <div class="contenu contenu2">
                    <div>
                        Camions les plus vendus en Amérique du Nord depuis 1986, les camions Isuzu offrent une performance de haut niveau et des prix surprenants. Présents à travers le Québec, les concessionnaires de Réseau Dynamique sont dépositaires de la gamme complète de camions Isuzu : camion léger (série N), camion moyen (série F), camion lourd (série C&amp;E). Économiques, propres et respectueux de l'environnement, ils s'imposeront comme un atout majeur dans votre entreprise.
                    </div>
                     <div class="toggle">
                        <div class="btnToggle">
                            <a name="hyperlien" onclick="toggleInformationSupplementaire('divToggle');" class="information-supplementaire" href="javascript:void(0);">Informations supplémentaires</a>
                        </div>
                        <div id="divToggle" class="showedZone" data-staticclassnames="showedZone" style="display:none;">
                            <span>
                                <h2>Performance économique</h2>
                                <p>Reconnus pour leur puissance, leur fiabilité et leur durabilité, les camions Isuzu augmenteront votre productivité et le rendement de votre entreprise. Plus encore, ils changeront votre manière de faire des affaires. Grâce à 80 ans de recherche et développement, la marque peut aujourd'hui se targuer d'avoir conçu des moteurs au diesel performants des plus économiques et à faibles émissions.</p>
                                <h2>Maniabilité, robustesse et fiabilité</h2>
                                <p>Isuzu offre une grande variété de modèles correspondant à une tout aussi grande diversité d'usages et de domaines d'activité. Ainsi, ils seront performants tant dans les domaines du déménagement, de la construction, de l'antiparasitaire, du remorquage et du service alimentaire. Leur robustesse et leur fiabilité en feront votre meilleur partenaire d'affaires. Construits avec des technologies de pointe, des matériaux résistants de première qualité et une mécanique d'avant-garde, ils s'avèrent faciles d'entretien et requièrent peu de soins mécaniques.</p>
                                <h2>Confort à toute épreuve</h2>
                                <p>Isuzu a toujours prêté une attention particulière au confort dans la conception de ses véhicules. Que la route vous mène en terrain montagneux ou en milieu urbain, tous les modèles Isuzu vous offrent une maniabilité, une stabilité et une sécurité à toute épreuve.</p>
                                <p>Enfin, avec 80 % de la flotte toujours effective sur la route depuis 1984, les camions Isuzu représentent un investissement puisqu'ils conservent une valeur de revente élevée sur le marché des camions d'occasion.</p>
                                <p>Faites confiance aux camions Isuzu et à la force du Réseau Dynamique et optez pour un véhicule fiable et économique.</p>
                                <p>
                                    <a name="hyperlien" onclick="javascript:RegisterClick(this);" href="http://www.isuzutruck.ca/" target="_blank">Visitez le site officiel d'Isuzu</a>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="FacetedExplorer">
                    <div class="GpcMenuWrapper">
                        <ul class="GpcMenu FacetedNavigation">
                            <!-- MARQUE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Marque</a>
                                <ul class="marque" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('marque', 'engine <> "-" AND ', 'COUNT', 'DESC' ); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='marque' data-value='<?PHP echo $key ?>' data-custom-criteria='engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MODÈLE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                                <ul class="Model" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('Model', 'engine <> "-" AND ', 'Model', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='Model' data-value='<?PHP echo $key ?>' data-custom-criteria='engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?Model=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- TRANSMISSION -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Transmission</a>
                                <ul class="transtype" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('transtype', '', 'transtype', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='transtype' data-value='<?PHP echo str_replace('+', '%2B', $key) ?>' data-custom-criteria='' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?transtype=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MOTEUR -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Moteur</a>
                                <ul class="engine" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('engine', '', 'engine', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='engine' data-value='<?PHP echo $key ?>' data-custom-criteria='' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?engine=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
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
        $("li[data-value='Isuzu']").trigger('click');
    });
    </script>
</body>
</html>