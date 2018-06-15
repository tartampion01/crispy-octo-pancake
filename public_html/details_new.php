<?php
    if( isset($_GET["id"])){
        require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php');        
    }
    else
        header("Location: accueil.php");
    
$camion = new RD_Camion(null);
$camion->load_new(base64_decode(urldecode($_GET["id"])));
?>
<html  xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">
<head>
    <!-- Ces deux scripts sont présents dans la page détails -->
    <script src="_assets/js/CUSTOMSCRIPTPAGEDETAILS.js" type="text/javascript"></script>
    <script src="_assets/js/AJAXPAGEDETAILS.js" type="text/javascript"></script>
</head>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
        <div class="content produit">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <!-- Titre camion/ remorque = Marque modele & empattement -->
                        <span>
                            <?php 
                                echo $camion->beauTitre;
                            ?>
                        </span>
                    </h1>
                </div>
                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537" class="Nms1408540578537 contenu" data-staticClassNames="Nms1408540578537 contenu">
                    <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538" class="Nms1408540578538 left" data-staticClassNames="Nms1408540578538 left">
                        <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539" class="Nms1408540578539 toggle clear" data-staticClassNames="Nms1408540578539 toggle clear">
                            <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N61ad43b3bd3d423b8713fb1e4aeee10a" class="N61ad43b3bd3d423b8713fb1e4aeee10a N61ad43b3bd3d423b8713fb1e4aeee10aCss" data-staticClassNames="N61ad43b3bd3d423b8713fb1e4aeee10a N61ad43b3bd3d423b8713fb1e4aeee10aCss">
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N61ad43b3bd3d423b8713fb1e4aeee10a_defaultZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27" class="defaultZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 specToggle" data-staticClassNames="defaultZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 specToggle" style="display:none;">
                                    Sp&#233;cifications
                                </div>
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N61ad43b3bd3d423b8713fb1e4aeee10a_hoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27" class="hoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 " data-staticClassNames="hoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 " style="display:none;">
                                </div>
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N61ad43b3bd3d423b8713fb1e4aeee10a_selectedZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27" class="selectedZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 specToggle selected" data-staticClassNames="selectedZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 specToggle selected">
                                    Sp&#233;cifications
                                </div>
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N61ad43b3bd3d423b8713fb1e4aeee10a_selectedHoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27" class="selectedHoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 " data-staticClassNames="selectedHoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZonea86c374723e64ec78f43b0e26fba6f27 " style="display:none;">
                                </div>
                            </div>
                            <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N4f26a07e93be4a3fb53619e9fb9322fa" class="N4f26a07e93be4a3fb53619e9fb9322fa toggle12" data-staticClassNames="N4f26a07e93be4a3fb53619e9fb9322fa toggle12">
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N4f26a07e93be4a3fb53619e9fb9322fa_defaultZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0" class="defaultZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 picToggle" data-staticClassNames="defaultZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 picToggle" style="display:;">
                                    Photos
                                </div>
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N4f26a07e93be4a3fb53619e9fb9322fa_hoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0" class="hoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 " data-staticClassNames="hoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 " style="display:none;">
                                </div>
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N4f26a07e93be4a3fb53619e9fb9322fa_selectedZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0" class="selectedZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 picToggle selected" data-staticClassNames="selectedZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 picToggle selected" style="display:none;">
                                    Photos
                                </div>
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_Nms1408540578539_N4f26a07e93be4a3fb53619e9fb9322fa_selectedHoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0" class="selectedHoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 " data-staticClassNames="selectedHoverZone_Nms_Designer_Web_UI_Widget_Zone_NmsToggleZone11684894dbca4a41b860e3aaeb25ced0 " style="display:none;">
                                </div>
                            </div>
                        </div>
                        <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a" class="N30cc730eb5cf488491c6832748930e4a info" data-staticClassNames="N30cc730eb5cf488491c6832748930e4a info">
                            <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feaf" class="MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feaf MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feafCss" data-staticClassNames="MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feaf MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feafCss" style="display:;">
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feaf_Nms1408544369806" class="Nms1408544369806 bref" data-staticClassNames="Nms1408544369806 bref">
                                    <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feaf_Nms1408544369806_Nms1408544369807" class="Nms1408544369807 left" data-staticClassNames="Nms1408544369807 left">
                                        <div class="forBroker">
                                            <span class="icon"><img class="" name="image" title="" src="/_assets/images/menu_images/icon-marque.png" alt="Marque"></span>
                                            <span class="forBroker marque">Marque :&nbsp;</span>
                                            <span class="ProductBrokerType_String"><?php echo $camion->marque ?></span>
                                        </div>
                                        <div class="forBroker">
                                            <span class="icon"><img name="image" title="" src="/_assets/images/menu_images/icon-modele.png" alt="Modèle"></span>
                                            <span class="forBroker modele">Modèle :&nbsp;</span>
                                            <span class=""><?php echo $camion->modele ?></span>
                                        </div>
                                        <div class="forBroker">
                                            <span class="icon"><img name="image" title="" src="/_assets/images/menu_images/icon-annee.png" alt="Année"></span>
                                            <span class="forBroker annee">Année :&nbsp;</span>
                                            <span><?php echo $camion->annee ?></span>
                                        </div>
                                        <div class="forBroker">
                                            <span class="icon"><img name="image" title="" src="/_assets/images/menu_images/icon-inventaire.png" alt="Inventaire"></span>
                                            <span class="forBroker inventaire">No d'inventaire :&nbsp;</span>
                                            <span class=""><?php echo $camion->noInventaire ?></span>
                                        </div>
                                        <div class="forBroker">
                                            <span class="icon"><img name="image" title="" src="/_assets/images/menu_images/icon-serie.png" alt="Série"></span>
                                            <span class="forBroker serie">No Série :&nbsp;</span>
                                            <span class=""><?php echo $camion->noSerie ?></span>
                                        </div>
                                        <div class="forBroker" style="display:none;">
                                            <span class="icon"><img class="" name="image" title="" src="/_assets/images/menu_images/icon-kilometrage.png" alt="Kilometrage"></span>
                                            <span class="forBroker kilometrage">Kilométrage :&nbsp;</span>
                                            <span class=""></span>
                                        </div>
                                        <div class="forBroker lePrix isUsed-" style="display:none;">
                                            <span class="icon"><img class="" name="image" title="" src="/_assets/images/menu_images/icon-prix.png" alt="Prix"></span>
                                            <span class="forBroker kilometrage">Prix :&nbsp;</span>
                                            <span class=""></span>
                                        </div>
                                    </div>
                                    <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_MultiZone_Nms_Designer_Web_UI_Widget_Zone_NmsMultiZone3304701d9c6d43d4a1ed1012bfe4feaf_Nms1408544369806_Nms1408544369814" class="Nms1408544369814 right" data-staticClassNames="Nms1408544369814 right">
                                        <img data-categorizedconfig="null" brokeridentifier="InventoryProductBroker_DefaultImage" src="<?php echo $camion->pictures[0]; ?>" title="<?php echo $camion->beauTitre ?>" />
                                    </div>
                                </div>
                                <div id="" class="caracteristiques" data-staticClassNames="caracteristiques">
                                    <div id="" class="titre" data-staticClassNames="titre">
                                        <h2 id="">Caract&#233;ristiques</h2>
                                    </div>


                                    <div id="" class="forBroker" data-staticClassNames="forBroker">
                                        <span id="" class="forBroker" data-staticClassNames="forBroker">Empattement</span>
                                        <span class="ProductBrokerType_Integer" >126</span>
                                    </div>

                                    <?php if($camion->empattement != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Empattement</span><span class='ProductBrokerType_Integer'>" . $camion->empattement . "</span></div>";?>
                                    <?php if($camion->essieu_avant != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Essieu avant</span><span class='ProductBrokerType_Integer'>" . $camion->essieu_avant . "</div>";?>
                                    <?php if($camion->essieu_arriere != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Essieu arrière</span><span class='ProductBrokerType_Integer'>" . $camion->essieu_arriere . "</div>";?>
                                    <?php if($camion->rearsuspension != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Suspension arrière</span><span class='ProductBrokerType_Integer'>" . $camion->rearsuspension . "</div>";?>
                                    <?php if($camion->transmission != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Transmission</span><span class='ProductBrokerType_Integer'>" . $camion->transmission . "</div>";?>
                                    <?php if($camion->moteur != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Moteur</span><span class='ProductBrokerType_Integer'>" . $camion->moteur . "</div>";?>
                                    <?php if($camion->hp != "")
                                        echo "<div class='forBroker'><span class='forBroker'>HP</span><span class='ProductBrokerType_Integer'>" . $camion->hp . "</div>";?>
                                    <?php if($camion->ratio_ar != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Ratio essieu arrière</span><span class='ProductBrokerType_Integer'>" . $camion->ratio_ar . "</div>";?>
                                    <?php if($camion->pneu_ar_dim != "" && $camion->pneu_av_dim != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Dimension pneux (avant/arrière)</span><span class='ProductBrokerType_Integer'>" . $camion->pneu_ar_dim . "/" . $camion->pneu_av_dim . "</div>";?>
                                    <?php if($camion->wheel != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Roue</span><span class='ProductBrokerType_Integer'>" . $camion->wheel . "</div>";?>
                                    <?php if($camion->freins != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Freins</span><span class='ProductBrokerType_Integer'>" . $camion->freins . "</div>";?>
                                    <?php if($camion->color != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Couleur</span><span class='ProductBrokerType_Integer'>" . $camion->color . "</div>";?>
                                    <?php if($camion->equipements != "")
                                        echo "<div class='forBroker'><span class='forBroker'>Équipement</span><span class='ProductBrokerType_Integer'>" . $camion->equipment . "</div>";?>
                                </div>
                            </div>
                            
                            <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528" class="NmsZone1408544053528 NmsZone1408544053528Css" data-staticClassNames="NmsZone1408544053528 NmsZone1408544053528Css" style="display:none;">
                                <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec" class="N2e91e40d87cd4465b53f539486b158ec GpcImageViewerHorizontal" data-excludeDefaultImage="false" data-maxResults="0" data-staticClassNames="N2e91e40d87cd4465b53f539486b158ec GpcImageViewerHorizontal">
                                    <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_lightboxZoneNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="lightboxZoneNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcLightBoxZone" data-staticClassNames="lightboxZoneNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcLightBoxZone">
                                        
                                        <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_lightboxZoneNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_lightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="lightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcLightBox ItemIDlightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" data-staticClassNames="lightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcLightBox">
                                        </div>
                                        
                                    </div>
                                    <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselAndButtons" data-staticClassNames="GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselAndButtons">
                                        <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselPreviousNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="GpcCarouselPreviousNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselPrevious" data-staticClassNames="GpcCarouselPreviousNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselPrevious">
                                        </div>
                                        <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselWrapper" data-staticClassNames="GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselWrapper">
                                            <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarousel" data-staticClassNames="GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarousel">
                                                
                                                <?php
                                                foreach($camion->pictures as $pic)
                                                {
                                                    ?>
                                                    <div id="" class="GpcImageViewerItem">
                                                    <a href="#" class="" contenttype="Image" onclick="return false" >
                                                        <img class="ProductImage" width="100" height="82" src="<?php echo $pic; ?>"/></a>&nbsp;</div>
                                                    <?php                                                                
                                                }
                                                ?>

                                            </div>
                                        </div>
                                        <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNextNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="GpcCarouselNextNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselNext" data-staticClassNames="GpcCarouselNextNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcCarouselNext">
                                        </div>
                                    </div>
                                    <div id="Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcClearNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b" class="GpcClearNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcClear" data-staticClassNames="GpcClearNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b GpcClear">
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="right">
                        <div class="share">
                            <div class="btnPrint">
                                <a name="hyperlien" onclick="window.print();" href="javascript:void(0);" target="_self">Imprimer la fiche</a>
                            </div>
                        </div>
                        <div class="options">
                            <a class="demandeDinfo" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root, page::DemandeInformation) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>" target="_self">
                                Demande d'information
                            </a>
                            <a class="essaiRoutier" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root, page::PlanifierEssaiRoutier) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>" target="_self">
                                Planifier un essai routier
                            </a>
                            <a class="trouverConcessionnaire" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root, page::NousJoindre); ?>" target="_self">
                                Trouver un concessionnaire
                            </a>
                            <a class="orange" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root, page::ObtenirPrix) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>" target="_self">
                                Obtenir un prix
                            </a>
                            <a class="orange" name="orange" href="<?php echo RD_PageLink::getHref(folder::Root, page::DemandeFinancement) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>">
                                Demande de financement
                            </a>
                            <a class="orange" name="orange" href="<?php echo RD_PageLink::getHref(folder::Root, page::EvaluerEchange) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>">
                                Évaluer mon échange
                            </a>
                        </div>
                    </div>
                </div>
            </div>
	</div>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
        <script type="text/javascript">
//<![CDATA[
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-55593676-1', 'auto', {'name': 'nms'});
ga('nms.send', 'pageview');window.ProductIdentifierGuid = 'da5baacd-2e5e-4039-be8f-715fa6c12fc5';$("img[src$='.png']").ready(function() {  if ($(this).height() > 0) { $(this).ifixpng(); }});$(document.body).bind('mouseover', function() { setTimeout(function() { $("img[src$='.png']").ifixpng(); }, 10); });$(document).HighlightSelector({QueryHashKeyName : 'qa',HighlightClass : 'qaHighlight'});NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};$(document).ready( function(){ $("a[rel*='ceac9f992bf643c59a3aff6a627b8f2f']").lightBox({BoxSelector:'#Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_lightboxZoneNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_lightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b',IsBoxed:true , dataMode:'None', txtImage:'Image', txtOf:'de', txtClose:'Fermer', itemID:'lightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b', cssClass:'ItemIDlightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b', loadOnStartup:'False', containerResizeSpeed:'400', showTitle:true, showLoading:true, showPagination:true, showNavigation:true, showThumbs:false, thumbImages:false, imageBestFit:true, GroupName:'ceac9f992bf643c59a3aff6a627b8f2f' }, "a[rel*='ceac9f992bf643c59a3aff6a627b8f2f']"); if($("a[rel*='ceac9f992bf643c59a3aff6a627b8f2f']").length > 0) { $("a[rel*='ceac9f992bf643c59a3aff6a627b8f2f']:first").click(); }});
function NmsCarouselLoadOnDemandNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b()
{window['bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b'] = 
            $("#Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b").bxSlider({
                nextSelector: "div[ItemID='GpcCarouselNextNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']",prevSelector: "div[ItemID='GpcCarouselPreviousNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']",speed: 200,maxSlides: 4,slideWidth: ($("#Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b").width()/4),infiniteLoop: false,useCSS: (!(window.navigator.userAgent.indexOf('MSIE') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))),nextText: '',prevText: '',});$("div[ItemID='GpcCarouselNextNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']").click(function(){bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.goToNextSlide();bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.stopAuto();return false;});$("div[ItemID='GpcCarouselPreviousNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']").click(function(){bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.goToPrevSlide();bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.stopAuto();return false;});}NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};NmsWeightUnitEnum = {"None":0,"G":1,"Kg":2,"Lb":4,"Oz":8,"Ton":16}; NmsLengthUnitEnum = {"None":0,"Cm":1,"M":2,"Km":4,"Ft":8,"In":16,"Yd":32};$(document).ready(function(){});//]]>
</script>
</form>
</body>
</html>