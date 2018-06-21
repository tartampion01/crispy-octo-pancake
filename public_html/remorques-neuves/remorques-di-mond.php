<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>var _N = 3;</script>
<script src="../_assets/js/camions-rest.js" type="text/javascript"></script>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Remorques Di-Mond neuves à vendre</h1>
                </div>
                <div class="contenu contenu2">
                    <div>
                        Que vous transportiez de la marchandise standard ou de lourdes charges, les remorques fermées Di-Mond fabriquées sur mesure sont à la hauteur du défi.
                    </div>
                    <div class="toggle">
                        <div class="btnToggle">
                            <a class="information-supplementaire" href="javascript:void(0);">Informations supplémentaires</a>
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
            <div class="FacetedExplorer">
                    <div class="GpcMenuWrapper">
                        <ul class="GpcMenu FacetedNavigation">
                            <!-- MARQUE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Marque</a>
                                <ul class="marque" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('marque', ' engine="-" AND marque="di-mond" AND ', 'COUNT', 'DESC' ); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='marque' data-value='<?PHP echo $key ?>' data-custom-criteria=' engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MODÈLE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                                <ul class="Model" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('Model',  ' engine="-" AND marque="di-mond" AND ', 'Model', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='Model' data-value='<?PHP echo $key ?>' data-custom-criteria=' engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ' data-selected="false">
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
        //$("li[data-value='di-mond']").trigger('click');
        // On page load, fetch all records
        fetchRecords('', '', ' engine="-" AND marque="di-mond" AND ', true, 3);
    });
    </script>
</body>
</html>