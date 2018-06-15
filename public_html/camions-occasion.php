<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>var _N = 0;</script>
<script src="_assets/js/camions-rest.js" type="text/javascript"></script>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Camions d'occasion</h1>
                </div>
                <br />
                <div class="FacetedExplorer">
                    <div class="GpcMenuWrapper">
                        <ul class="GpcMenu FacetedNavigation">
                            <!-- MARQUE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Marque</a>
                                <ul class="marque" style="">
                                    <?PHP $results = selectUsedTrucksDisctinctCriteria('marque', 'COUNT', 'DESC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='marque' data-value='<?PHP echo $key ?>' data-custom-criteria='' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MODÈLE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                                <ul class="modele" style="">
                                    <?PHP $results = selectUsedTrucksDisctinctCriteria('modele', 'modele', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='modele' data-value='<?PHP echo $key ?>' data-custom-criteria='' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?modele=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- TRANSMISSION -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Transmission</a>
                                <ul class="transmission" style="">
                                    <?PHP $results = selectUsedTrucksDisctinctCriteria('transmission', 'transmission', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='transmission' data-value='<?PHP echo str_replace('+', '%2B', $key) ?>' data-custom-criteria='' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?transmission=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MOTEUR -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Moteur</a>
                                <ul class="moteur" style="">
                                    <?PHP $results = selectUsedTrucksDisctinctCriteria('moteur', 'moteur', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='moteur' data-value='<?PHP echo $key ?>' data-custom-criteria='' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?moteur=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
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
        <div style="padding-left: 225px;padding:225px;">
            <p>Réseau Dynamique est la référence dans le domaine des camions lourds et des tracteurs terminaux d'occasion.</p>
            <h2>Pourquoi choisir un camion d'occasion chez Réseau Dynamique?</h2>
            <p>Avant d'être mis en vente, tous les véhicules d'occasion de Réseau Dynamique ont été inspectés minutieusement et réparés. Revendeur de camions de toutes classes, vous êtes assuré de trouver un camion de grande qualité répondant en tous points à vos besoins d'affaires.</p>
            <p>Détaillant de camions neufs de marque International, Réseau Dynamique offre des garanties prolongées du manufacturier sur les composants majeurs de ses véhicules. Les services d'experts des mécaniciens accrédités International offrent également la reconstruction complète des composants majeurs.</p>
            <h2>Le service après-vente : la force d'un réseau</h2>
            <p>Avec Réseau Dynamique, vous faites un choix sensé pour le présent et le futur. Les&nbsp;<a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>" target="_self">19 centres de pièces et services du Réseau</a> dispersés sur le territoire québécois assurent aux clients de Réseau Dynamique un service après-vente inégalable. Remettez l'entretien de votre camion ou de votre flotte entre les mains de techniciens formés directement par les fabricants.</p>
            <p>Disponibles en un seul endroit au Centre-du-Québec, venez faire l'essai de nos camions d'occasion.</p>
        </div>
    </div>        
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>    
    </form>
    
    <div class="loading-overlay">Loading&#8230;</div>
    
    <!-- Start : Javascript template -->
    <script id="resultsTemplate" type="text/x-jquery-tmpl">

        <div class="FacetedResultTemplate DefaultResultContainer">
            <a href="../details_used.php?id=${encodeURI(btoa(id))}">
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
        
        // On page load, fetch all records
        fetchRecords('', '', '', true, 0);
    });
    </script>
</body>
</html>