<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/page1.php">
    <div class="content" style="height: 80%">
        <div class="shrink">
            <div id="" class="titrePage">
                <h1 id=""><span>Inventaire complet</span></h1>
            </div>
            <?php
                try{
                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                        if (isset($_POST['btnShowTruck'])) {

                            $truckResults = getNewTruck($_POST['tbShowTruck']);
                            $truckInfo = "";

                            if(mysqli_num_rows($truckResults) > 0){
                                while($row = mysqli_fetch_assoc($truckResults)) {
                                    $truckInfo .= "Marque <b>" . $row['marque'] . "</b></br>";
                                    $truckInfo .= "Modèle <b>" . $row['Model'] . "</b></br>";
                                    $truckInfo .= "Année <b>" . $row['strAnnee'] . "</b></br>";
                                    $truckInfo .= "No inventaire <b>" . $row['stock'] . "</b></br>";
                                    $truckInfo .= "No Série <b>" . $row['serial'] . "</b></br>";
                                    $truckInfo .= "Empattement <b>" . $row['wb'] . "</b></br>";
                                    $truckInfo .= "Essieu avant <b>" . $row['frontaxle'] . "</b></br>";
                                    $truckInfo .= "Essieu arrière <b>" . $row['rearaxle'] . "</b></br>";
                                    $truckInfo .= "Suspension arrière <b>" . $row['rearsuspension'] . "</b></br>";
                                    $truckInfo .= "Transmission <b>" . $row['transtype'] . "</b></br>";
                                    $truckInfo .= "Moteur <b>" . $row['engine'] . "</b></br>";
                                    $truckInfo .= "HP <b>" . $row['hp'] . "</b></br>";
                                    $truckInfo .= "Ratio essieu arrière <b>" . $row['ratio'] . "</b></br>";
                                }
                            }
                            echo $truckInfo;
                        }
                    }
                    else
                    {
                        $fieldCriteria = $marque = $model = $transtype = $engine = "";

                        if(isset($_GET['marque'])){
                            $marque = $_GET['marque'];
                            $fieldCriteria = "marque";
                        }
                        if(isset($_GET['Model'])){
                            $model = $_GET['Model'];
                            $fieldCriteria = "Model";
                        }
                        if(isset($_GET['transtype'])){
                            $transtype = $_GET['transtype'];
                            $fieldCriteria = "transtype";
                        }
                        if(isset($_GET['engine'])){
                            $engine = $_GET['engine'];
                            $fieldCriteria = "engine";
                        }
                        
                        $truckResults = false;
                        if($marque != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $marque);
                        if($model != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $model);
                        if($transtype != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $transtype);
                        if($engine != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $engine);
                        
                        $truckInfo = "";

//                        if(mysqli_num_rows($truckResults) > 0){
//                            while($row = mysqli_fetch_assoc($truckResults)) {
//                                $truckInfo .= "Marque <b>" . $row['marque'] . " " . $row['Model'] . " " . $row['config'] ."</b></br>";
//                                $truckInfo .= "No inventaire <b>" . $row['stock'] . "</b></br>";
//                                $truckInfo .= "Marque <b>" . $row['marque'] . "</b></br>";
//                                $truckInfo .= "Modèle <b>" . $row['Model'] . "</b></br>";
//                                $truckInfo .= "Moteur <b>" . $row['engine'] . "</b></br>";
//                            }
//                        }
//                        echo $truckInfo;
                        ?>
                        <!--<div class="GpcFacetedResults defaultFacet">
                        <div class=" GpcPagedResultCount">
                        <div class="GpcResultItemWrapper">
                        <?PHP if( $truckResults && (mysqli_num_rows($truckResults) > 0)){
                            while($row = mysqli_fetch_assoc($truckResults)) { ?>
                                <div class="FacetedResultTemplate DefaultResultContainer" >
                                    <a data-link="product link" href="<?php echo RD_PageLink::getHref(folder::Root, page::Details) . "?k=" . urlencode($row['id']); ?>">TROCK</a>
                                    <div class="ResultImage">
                                        <img src="" title="" alt="TODO">
                                        <div class="imgPromo" style="display: none;"></div>
                                    </div>
                                    <div class="ResultContent">
                                        <div id="" class="ResultContentProductName">
                                            <h2>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['marque'] ?></span>
                                                <span>&nbsp;</span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['Model'] ?></span>
                                                <span>&nbsp;</span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['config'] ?></span>
                                            </h2>
                                        </div>
                                        <div class="customField">
                                            <div class="forBroker label zoneForBroker">
                                                <span class="forBroker label spanForBroker">No d'inventaire : </span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['stock'] ?></span>
                                            </div>
                                        </div>
                                        <div class="customField">
                                                <div class="forBroker label zoneForBroker">
                                                        <span class="forBroker label spanForBroker">Marque : </span>
                                                        <span class="ProductBrokerType_String"><?PHP echo $row['marque'] ?></span>
                                                </div>
                                        </div>
                                        <div class="customField">
                                            <div class="forBroker label zoneForBroker">
                                                <span class="forBroker label spanForBroker">Modèle : </span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['Model'] ?></span>
                                            </div>
                                        </div>
                                        <div class="customField">
                                            <div class="forBroker label zoneForBroker">
                                                <span class="forBroker label spanForBroker">Moteur : </span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['engine'] ?></span>
                                            </div>
                                        </div>
                                        <div class="inPromo">
                                            <span class="ProductBrokerType_Boolean">False</span>
                                        </div>
                                        <div class="imgPlus"></div>
                                    </div>
                                    </a>
                                </div>
                        <?PHP }}?>
                        </div>
                        </div>
                        </div>-->
                        <?PHP
                    }
                }
                catch (Exception $e) {
                    echo 'Caught exception: ',  $e->getMessage(), "\n";
                }
            ?>
            
            <div class="FacetedExplorer">
                <div class="GpcMenuWrapper">
                    <ul class="GpcMenu FacetedNavigation">
                        <!-- MARQUE -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Marque</a>
                            <ul style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('marque'); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle filter-link' data-field='marque' data-value='$key' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                        <!-- MODÈLE -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                            <ul style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('Model'); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?Model=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle filter-link' data-field='Model' data-value='$key' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                        <!-- TRANSMISSION -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Transmission</a>
                            <ul style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('transtype'); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?transtype=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle filter-link' data-field='transtype' data-value='$key' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                        <!-- MOTEUR -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Moteur</a>
                            <ul style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('engine'); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?engine=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle filter-link' data-field='engine' data-value='$key' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <!-- Results Content -->
                <div class="GpcFacetedResults defaultFacet">
                    
                    <div class="GpcPagedResultCount">
                        <span class="GpcCountPrefixText">Résultats</span>
                        <span class="GpcPagedResultCurrentCount">1 - 4</span>
                        <span class="GpcBetweenCountText">sur</span>
                        <span class="GpcPagedResultTotalCount">4</span>
                    </div>
                    <div class="GpcPagerCountSelector">
                        <span class="GpcItemsPerPageText">Afficher par page</span>
                        <div data-value="12" class="GpcDisplayOption selected">12</div>
                        <div data-value="24" class="GpcDisplayOption">24</div>
                        <div data-value="48" class="GpcDisplayOption">48</div>
                    </div>
                    <div class="GpcResultPager">
                        <a disabled="disabled" class="GpcPagerFirst">&lt;&lt;</a>
                        <a disabled="disabled" class="GpcPagerPrevious">Précédent</a>
                        <a class="selected">1</a>
                        <a disabled="disabled" class="GpcPagerNext">Suivant</a>
                        <a disabled="disabled" class="GpcPagerLast">&gt;&gt;</a>
                    </div>
                    <div class="orderBy clear">
                        <div class="libelle">
                            Classer par :
                        </div>
                        <div class="GpcResultOrderSelector">
                            <div class="GpcWrapFakeSelectBox">
                                <div class="GpcFakeSelectValue">Nom ascendant</div>
                                <div class="GpcFakeSelect" style="display: none;">
                                    <div class="GpcFakeSelectOption selected" data-value="{&quot;PropertyName&quot;:4096,&quot;IdentifierGuid&quot;:&quot;00000000-0000-0000-0000-000000000000&quot;,&quot;IsDesc&quot;:false,&quot;Text&quot;:&quot;Nom ascendant&quot;}">Nom ascendant</div>
                                    <div class="GpcFakeSelectOption" data-value="{&quot;PropertyName&quot;:4096,&quot;IdentifierGuid&quot;:&quot;00000000-0000-0000-0000-000000000000&quot;,&quot;IsDesc&quot;:true,&quot;Text&quot;:&quot;Nom descendant&quot;}">Nom descendant</div>
                                </div>
                            </div>
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
                            <a disabled="disabled" class="GpcPagerFirst">&lt;&lt;</a>
                            <a disabled="disabled" class="GpcPagerPrevious">Précédent</a>
                            <a class="selected">1</a>
                            <a disabled="disabled" class="GpcPagerNext">Suivant</a>
                            <a disabled="disabled" class="GpcPagerLast">&gt;&gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="FacetedExplorerClear GpcClear">
                </div>
    </div>
        exemples REST
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>
        <a href="_includes/objects/read.php?field=Model&value=4300">4300</a></br>
        <a href="_includes/objects/read.php?field=transtype&value=AISIN A460">AISIN A460</a></br>
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>
ID:<input type="text" id="tbShowTruck" name="tbShowTruck" value="" text="" />
<input type="submit" id="btnShowTruck" name="btnShowTruck" text="Afficher">
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    
    <div class="loading-overlay">Loading&#8230;</div>

<!-- Start : Javascript template -->
<script id="resultsTemplate" type="text/x-jquery-tmpl">
    
    <div class="FacetedResultTemplate DefaultResultContainer">
        <a href="details.php?id=${id}">
            <div class="ResultImage">
                <img src="http://www.reseaudynamique.com/gpc/_media/image/111000/N-3686_250x0.jpg" title="" alt="">
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
                        <span class="ProductBrokerType_String">${serial}</span>
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
</body>
</html>