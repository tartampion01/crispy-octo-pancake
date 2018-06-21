<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>var _N = 1;</script>
<script src="../_assets/js/camions-rest.js" type="text/javascript"></script>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Camions neufs Ottawa Kalmar</h1>
                </div>
                <div class="contenu contenu2">
                    <div>
                        Réseau Dynamique, dépositaire Ottawa Kalmar, offre une large sélection de tracteurs de terminal aux différents types d'industries et d'usages.
                    </div>
                     <div class="toggle">
                        <div class="btnToggle">
                            <a class="information-supplementaire" href="javascript:void(0);">Informations supplémentaires</a>
                        </div>
                        <div id="divToggle" class="showedZone" data-staticclassnames="showedZone" style="display:none;">
                            <span>
                                <h2>Le meilleur tracteur de terminal pour vos opérations</h2>
                                <p>Ottawa Kalmar est chef de file dans la construction de tracteurs de terminal pour une bonne raison : aucun autre camion n'égale les propriétés ergonomiques, la fiabilité inébranlable et le soutien offert par Ottawa auprès de sa clientèle. Au sommet depuis plus de 50 ans, les camions Ottawa Kalmar continuent avec succès à déplacer les remorques autour des centres de distribution, des stations de transfert, des terminaux de camions ainsi que des ports et autres lieux d'entreposage de conteneurs.</p>
                                <p>En hiver et en été, de jour comme de nuit, vous avez besoin d'un tracteur de terminal polyvalent et précis au coût d'opération faible. Capables d'opérer dans tous les types de cours, les tracteurs de terminaux Ottawa déplacent des remorques de toutes les tailles, quels que soient leurs paramètres de pivot d'attelage et leur hauteur.</p>
                                <h2>L'ergonomie au service de la productivité</h2>
                                <p>Les tracteurs terminaux d'Ottawa Kalmar n'ont pas été construits pour leur beauté. Ils ont été pensés et bâtis pour travailler. En d'autres termes, un aspect du design sera privilégié seulement s'il rend le véhicule plus efficace, plus rapide et plus productif. L'innovation en continu des produits est possible grâce à un travail de recherche sans relâche avec l'appui de près de 50 concessionnaires en Amérique du Nord.</p>
                                <p>Testés et retestés, les camions Ottawa Kalmar sont conçus de sorte à offrir une performance ergonomique supérieure pour le conducteur. Ainsi, l'entière conception de la cabine spacieuse, commode et exceptionnellement confortable améliore grandement la productivité de l'opérateur. La grande surface vitrée offre une excellente visibilité permettant à l'opérateur de manœuvrer avec une vue imprenable sur tous les angles à l'avant, à l'arrière et sur les côtés.</p>
                                <p>Avec la qualité éprouvée des véhicules Ottawa Kalmar et la force du Réseau Dynamique vous optez pour un véhicule fiable et un service professionnel et dévoué.</p>
                                <p>Pour toutes informations au sujet des camions Kalmar Ottawa, veuillez communiquer avec Steeve Brousseau au 418 580-9049.</p>
                                <p>
                                    <a name="hyperlien" onclick="javascript:RegisterClick(this);" href="http://www.ottawatrucksna.com" target="_blank">Visitez le site officiel d'Ottawa Kalmar</a>
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
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('marque', ' marque="kalmar" AND ', 'COUNT', 'DESC' ); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='marque' data-value='<?PHP echo $key ?>' data-custom-criteria=' marque="kalmar" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MODÈLE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                                <ul class="Model" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('Model', ' marque="kalmar" AND ', 'Model', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='Model' data-value='<?PHP echo $key ?>' data-custom-criteria=' marque="kalmar" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?Model=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- TRANSMISSION -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Transmission</a>
                                <ul class="transtype" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('transtype', ' marque="kalmar" AND ', 'transtype', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='transtype' data-value='<?PHP echo str_replace('+', '%2B', $key) ?>' data-custom-criteria=' marque="kalmar" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?transtype=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MOTEUR -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Moteur</a>
                                <ul class="engine" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('engine', ' marque="kalmar" AND ', 'engine', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='engine' data-value='<?PHP echo $key ?>' data-custom-criteria=' marque="kalmar" AND ' data-selected="false">
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
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>    
    
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
                            <span class="ProductBrokerType_String">${config}</span>
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
        $("li[data-value='Kalmar']").trigger('click');
    });
    </script>
</body>
</html>