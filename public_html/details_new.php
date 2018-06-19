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
<body class="body"><?php RD_Utils::write_Gtag() ?>
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
                <div class="contenu">
                    <div class="left">
                        <div class="toggle toggle-product clear">
                            <div>
                                <div class="specToggle selected" style="">
                                    Spécifications
                                </div>
                            </div>
                            <div >
                                <div class="picToggle" style="">
                                    Photos
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <div class="content-spec">
                                <div class="bref">
                                    <div class="left">
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
                                    <div class="right">
                                        <img data-categorizedconfig="null" brokeridentifier="InventoryProductBroker_DefaultImage" src="<?php echo $camion->pictures[0]; ?>" title="<?php echo $camion->beauTitre ?>" />
                                    </div>
                                </div>
                                <div class="caracteristiques">
                                    <div class="titre">
                                        <h2>Caractéristiques</h2>
                                    </div>


                                    <div class="forBroker">
                                        <span class="forBroker">Empattement</span>
                                        <span class="ProductBrokerType_Integer">126</span>
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
                            
                            <div class="content-pic" style="display:none;">
                                <div class=" GpcImageViewerHorizontal">
                                    <div class=" GpcLightBoxZone">
                                        
                                        <div class="GpcLightBox">
                                            <?php
                                            if(isset($camion->pictures[0]) && !empty($camion->pictures[0])) {
                                                echo '<img src="' . $camion->pictures[0] . '" class="lightbox-image" alt="" />';
                                            }
                                            ?>
                                        </div>
                                        
                                    </div>
                                    <div class="GpcCarouselAndButtons">
                                        <div class="GpcCarouselPrevious">
                                        </div>
                                        <div class="GpcCarouselWrapper">
                                            <div class="GpcCarousel">
                                                
                                                <?php
                                                $count = 0;
                                                foreach($camion->pictures as $pic)
                                                {
                                                    ?>
                                                    <div id="" class="GpcImageViewerItem">
                                                    <a href="#" class="lightbox-image-link <?php echo ($count == 0 ? 'lightbox-image-selected' : '') ?>" contenttype="Image" onclick="return false" >
                                                        <img class="ProductImage" src="<?php echo $pic; ?>"/></a></div>
                                                    <?php 
                                                    $count++;
                                                }
                                                ?>

                                            </div>
                                        </div>
                                        <div class="GpcCarouselNext">
                                        </div>
                                    </div>
                                    <div class="GpcClear">
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
ga('create', 'UA-120787761-1', 'auto');
/*
function NmsCarouselLoadOnDemandNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b() {
    window['bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']=$("#Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b").bxSlider( {
        nextSelector: "div[ItemID='GpcCarouselNextNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']", 
        prevSelector: "div[ItemID='GpcCarouselPreviousNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']", 
        speed: 200, 
        maxSlides: 4, 
        slideWidth: ($("#Nms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b").width()/4), 
        infiniteLoop: false, 
        //useCSS: (!(window.navigator.userAgent.indexOf('MSIE') > 0 || !!navigator.userAgent.match(/Trident.*rv\: 11\./))), 
        nextText: '', 
        prevText: '',
    }
    );
    $("div[ItemID='GpcCarouselNextNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']").click(function() {
        bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.goToNextSlide();
        bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.stopAuto();
        return false;
    }
    );
    $("div[ItemID='GpcCarouselPreviousNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b']").click(function() {
        bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.goToPrevSlide();
        bxNms1408540578531_Nms1408540578534_Nms1408540578535_Nms1408540578537_Nms1408540578538_N30cc730eb5cf488491c6832748930e4a_NmsZone1408544053528_N2e91e40d87cd4465b53f539486b158ec_GpcCarouselAndButtonsNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselWrapperNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b_GpcCarouselNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b.stopAuto();
        return false;
    }
    );
}

NmsWeightUnitEnum= {
    "None": 0, "G": 1, "Kg": 2, "Lb": 4, "Oz": 8, "Ton": 16
}

;
NmsLengthUnitEnum= {
    "None": 0, "Cm": 1, "M": 2, "Km": 4, "Ft": 8, "In": 16, "Yd": 32
}

;
NmsWeightUnitEnum= {
    "None": 0, "G": 1, "Kg": 2, "Lb": 4, "Oz": 8, "Ton": 16
}

;
NmsLengthUnitEnum= {
    "None": 0, "Cm": 1, "M": 2, "Km": 4, "Ft": 8, "In": 16, "Yd": 32
}

;
$(document).ready(function() {}

);*/ //]]>
</script>
</form>
</body>
</html>