<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/header/_header.php'); ?>
<?php
    $camion = new RD_Camion();
    $camion->load_new(urldecode($_GET["k"]));
?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
        <div id="" class="content produit">
            <div id="" class="shrink">
                <div id="" class="titrepage">
                    <h1 id="">
                        <!-- Titre camion/ remorque = Marque modele & empattement -->
                        <span><?php echo $camion->marque;?></span> - 
                        <span><?php echo $camion->modele;?></span>
                        &nbsp;<span><?php echo $camion->wb;?></span>
                    </h1>
                </div>
                <div id="" class="contenu">
                    <div id="" class="left">
                        <div id="" class="toggle clear">
                            <div id="" class="toggle12">
                                <div id="" class="specToggle" onclick="alternateDivDetailsPage('divSpec','divPics');" style="display: block;visibility: visible;" zonedescriptor="Default">Spécifications</div>
                                <div id="" class="picToggle" onclick="alternateDivDetailsPage('divPics','divSpec');" style="display: block;visibility: visible;" zonedescriptor="Default">Photos</div>
                            </div>
                            </br></br></br></br>
                            <div id="divSpec" class="" style="display: inline;" zonedescriptor="" >
                                <div id="" class="bref">
                                <div id="" class="left">
                                    <div id="" class="forBroker">
                                        <span id="" class="icon"><img id="" class="" name="image" title="" src="/_assets/images/menu_images/icon-marque.png" alt="Marque"></span>
                                        <span id="" class="forBroker marque">Marque :&nbsp;</span>
                                        <span class="ProductBrokerType_String"><?php echo $camion->marque ?></span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="icon"><img id="" name="image" title="" src="/_assets/images/menu_images/icon-modele.png" alt="Modèle"></span>
                                        <span id="" class="forBroker modele">Modèle :&nbsp;</span>
                                        <span class=""><?php echo $camion->modele ?></span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="icon"><img id="" name="image" title="" src="/_assets/images/menu_images/icon-annee.png" alt="Année"></span>
                                        <span id="" class="forBroker annee">Année :&nbsp;</span>
                                        <span><?php echo $camion->annee ?></span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="icon"><img id="" name="image" title="" src="/_assets/images/menu_images/icon-inventaire.png" alt="Inventaire"></span>
                                        <span id="" class="forBroker inventaire">No d'inventaire :&nbsp;</span>
                                        <span class=""><?php echo $camion->noInventaire ?></span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="icon"><img id="" name="image" title="" src="/_assets/images/menu_images/icon-serie.png" alt="Série"></span>
                                        <span id="" class="forBroker serie">No Série :&nbsp;</span>
                                        <span class=""><?php echo $camion->noSerie ?></span>
                                    </div>
                                    <div id="" class="forBroker" style="display:none;">
                                        <span id="" class="icon"><img id="" class="" name="image" title="" src="/_assets/images/menu_images/icon-kilometrage.png" alt="Kilometrage"></span>
                                        <span id="" class="forBroker kilometrage">Kilométrage :&nbsp;</span>
                                        <span class=""></span>
                                    </div>
                                    <div id="" class="forBroker lePrix isUsed-" style="display:none;">
                                        <span id="" class="icon"><img id="" class="" name="image" title="" src="/_assets/images/menu_images/icon-prix.png" alt="Prix"></span>
                                        <span id="" class="forBroker kilometrage">Prix :&nbsp;</span>
                                        <span class=""></span>
                                    </div>
                                </div>
                                <div id="" class="right">
                                    <img id="" data-categorizedconfig="null" src="/_assets/images/camions/N-4705-2.jpg" alt="img6520" title="">
                                </div>
                            </div>
                                <div id="" class="caracteristiques">
                                    <div id="" class="titre">
                                        <h2 id="">Caractéristiques</h2>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Empattement</span>
                                        <span class="ProductBrokerType_Integer">272</span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Essieu avant</span>
                                        <span class="ProductBrokerType_Integer">12&nbsp;000</span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Essieu arrière</span>
                                        <span >21&nbsp;000</span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Suspension arrière</span>
                                        <span>21 000</span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Transmission</span>
                                        <span class="ProductBrokerType_String">Allison</span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Moteur</span>
                                        <span class="ProductBrokerType_String">B6.7</span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">HP</span>
                                        <span class="ProductBrokerType_Integer">250</span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Ratio essieu arrière</span>
                                        <span class="ProductBrokerType_String">5.86</span>
                                    </div>
                                    <div id="" class="forBroker" style="display:none;">
                                        <span id="" class="forBroker">Dimension pneux (avant/arrière)</span>
                                        <span class="ProductBrokerType_String"></span><span id="">&nbsp;/ </span>
                                        <span class="ProductBrokerType_String" data-considerzeroasempty="">N.D.</span>
                                    </div><div id="" class="forBroker">
                                        <span id="" class="forBroker">Roue</span>
                                        <span class="ProductBrokerType_String" data-considerzeroasempty="">acier</span>
                                    </div>
                                    <div id="" class="forBroker" style="display:none;">
                                        <span id="" class="forBroker">Freins</span>
                                        <span class="ProductBrokerType_String" data-considerzeroasempty=""></span>
                                    </div>
                                    <div id="" class="forBroker" style="display:none;">
                                        <span id="" class="forBroker">Réservoirs</span>
                                        <span class="ProductBrokerType_String" data-considerzeroasempty=""></span>
                                    </div>
                                    <div id="" class="forBroker">
                                        <span id="" class="forBroker">Couleur extérieur</span>
                                        <span class="ProductBrokerType_String" data-considerzeroasempty="">BLANC-9219</span>
                                    </div>
                                    <div id="" class="forBroker" style="display:none;">
                                        <span id="" class="forBroker">Couleur intérieur</span>
                                        <span class="" data-considerzeroasempty="false"></span>
                                    </div>
                                    <div id="" class="forBroker" style="display:none;">
                                        <span id="" class="forBroker">Équipement</span>
                                        <span class="ProductBrokerType_String" data-considerzeroasempty=""></span>
                                    </div>
                                </div>
                                <div id="" class="forBroker autresCaracteristiques" style="display:none;">
                                    <span id="" class="forBroker title">
                                        <div id="" class="titre">
                                            <h2 id="">Autres caractéristiques</h2>
                                        </div>
                                    </span>
                                    <div class="ProductBrokerType_RichText"></div>
                                </div>
                            </div>
                                
                            <div id="divPics" class="" style="display: none;" zonedescriptor="">
                                <div id="" class="GpcImageViewerHorizontal" data-excludedefaultimage="false" data-maxresults="0">
                                    <div id="" class="GpcLightBoxZone">
                                        <div id="" class="GpcLightBox">
                                            <div class="jquery-overlay" style="display: none; top: 0px; width: 1263px; height: 1163px;"></div>
                                            <div class="jquery-lightbox " style="position: static; top: -10000px; height: 0px; width: 100px;">
                                                <div class="lightbox-container-image-box" style="width: 100%; height: 100%;">
                                                    <div class="lightbox-container-image" style="height: 0px; width: 0px; opacity: 1; overflow: auto;">
                                                        <img class="lightbox-image" style="width: 498px; height: 373px;" src="/_assets/images/camions/N-4705-2_498x0.jpg" width="498" height="373">
                                                        <div class="lightbox-video" style="display: none;"></div>
                                                        <div style="display: block; height: 0px; width: 0px;" class="lightbox-nav ItemIDlightboxNms_Designer_Web_UI_Widget_Inventory_ProductImageList421ba47aa702441f81eb0e811295af7b">
                                                            <a href="#" class="lightbox-nav-btnPrev" style="height: 100%; background: url(&quot;/_images/NmsLightBox/lightbox-blank.gif&quot;) no-repeat transparent; display: none;"></a>
                                                            <a href="#" class="lightbox-nav-btnNext" style="height: 100%; background: url(&quot;/_images/NmsLightBox/lightbox-btn-next.png&quot;) right 50% no-repeat;"></a>
                                                        </div>
                                                        <div class="lightbox-loading" style="display: none;">
                                                            <a href="#" class="lightbox-loading-link"><img src="/_images/NmsLightBox/lightbox-ico-loading.gif"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lightbox-container-image-data-box" style="display: block;">
                                                    <div class="lightbox-container-image-data">
                                                        <div class="lightbox-image-details">
                                                            <span class="lightbox-image-details-caption" style=""></span>
                                                            <span class="lightbox-image-details-currentNumber" style="">Image 1 de 4</span>
                                                        </div>
                                                        <div class="lightbox-secNav"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="" class="GpcCarouselAndButtons">
                                        <div id="" class="GpcCarouselPrevious">
                                            <a class="bx-prev disabled" href=""></a>
                                        </div>
                                        <div id="" class="GpcCarouselWrapper" >
                                            <span></span>
                                            <div class="bx-wrapper" style="max-width: 580px;">
                                                <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 2px;">
                                                    <div id="" class="GpcCarousel"  style="width: 4215%; position: relative; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                                                        <div id="" class="GpcImageViewerItem" aria-hidden="true" style="float: left; list-style: none; position: relative; width: 98px;">
                                                            <a href="/_assets/images/camions/N-4705-2_498x0.jpg" rel="" title="" contenttype="Image" onclick="return false" class="lightbox-image-selected">
                                                                <img id="" class="ProductImage" src="/_assets/images/camions/N-4705-2_110x0.jpg" alt="img6520">
                                                            </a>
                                                        </div>
                                                    <div id="" class="GpcImageViewerItem" aria-hidden="true" style="float: left; list-style: none; position: relative; width: 98px;">
                                                        <a href="/_assets/images/camions/N-4705-3_498x0.jpg" rel="" title="" contenttype="Image" onclick="return false">
                                                            <img id="" class="ProductImage" src="/_assets/images/camions/N-4705-3_110x0.jpg" alt="img6521">
                                                        </a>
                                                    </div>
                                                    <div id="" class="GpcImageViewerItem" aria-hidden="true" style="float: left; list-style: none; position: relative; width: 98px;">
                                                        <a href="/_assets/images/camions/N-4705-1_498x0.jpg" rel="" title="" contenttype="Image" onclick="return false">
                                                            <img id="" class="ProductImage" src="/_assets/images/camions/N-4705-1_110x0.jpg" alt="img6522">
                                                        </a>
                                                    </div>
                                                    <div id="" class="GpcImageViewerItem" aria-hidden="false" style="float: left; list-style: none; position: relative; width: 98px;">
                                                        <a href="/_assets/images/camions/N-4705_498x0.jpg" rel="" title="" contenttype="Image" onclick="return false">
                                                            <img id="" class="ProductImage" src="/_assets/images/camions/N-4705_110x0.jpg" alt="img6523">
                                                        </a>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="bx-controls bx-has-pager">
                                                    <div class="bx-pager bx-default-pager">
                                                        <div class="bx-pager-item">
                                                            <a href="" data-slide-index="0" class="bx-pager-link">1</a>
                                                        </div>
                                                        <div class="bx-pager-item">
                                                            <a href="" data-slide-index="1" class="bx-pager-link">2</a>
                                                        </div>
                                                        <div class="bx-pager-item">
                                                            <a href="" data-slide-index="2" class="bx-pager-link">3</a>
                                                        </div>
                                                        <div class="bx-pager-item">
                                                            <a href="" data-slide-index="3" class="bx-pager-link active">4</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="" class="GpcCarouselNext">
                                            <a class="bx-next disabled" href=""></a>
                                        </div>
                                    </div>
                                    <div id="" class="GpcClear"></div>
                                        <script id="" type="carouselImageTemplate" data-carousel="">
                                            <div id="" class="GpcImageViewerItem">
                                                <a href="/_assets/images/menu_images/TemplateImage_498x0.png" rel="" title="" contentType="Image" onclick="return false">
                                                    <img id="" class="ProductImage" src="/gpc/_media/Image/000111000/NmsTemplateImage_110x0.png" />
                                                </a>
                                            </div>
                                        </script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="" class="right">
                    <div id="" class="share">
                        <div class="btnShare">
                            <span id="" class="st_sharethis_custom" st_processed="yes">Partager la fiche</span>
                        </div>
                        <div id="" class="btnPrint">
                            <a id="" name="hyperlien" onclick="window.print();javascript:RegisterClick(this);" href="javascript:void(0);" target="_self">Imprimer la fiche</a>
                        </div>
                    </div>
                    <div id="" class="options">
                        <a id="" class="demandeDinfo" name="hyperlien" onclick="javascript:RegisterClick(this);" href="<?php RD_PageLink::getHref(folder::Root, page::DemandeInformation) ?>" target="_self">
                            Demande d'information
                        </a>
                        <a id="" class="essaiRoutier" name="hyperlien" onclick="javascript:RegisterClick(this);" href="/planifier-essai-routier" target="_self">
                            Planifier un essai routier
                        </a>
                        <a id="" class="trouverConcessionnaire" name="hyperlien" onclick="javascript:RegisterClick(this);" href="/nous-joindre" target="_self">
                            Trouver un concessionnaire
                        </a>
                        <a id="" class="orange" name="hyperlien" onclick="javascript:RegisterClick(this);" href="/obtenir-prix" target="_self">
                            Obtenir un prix
                        </a>
                        <a id="" class="orange" name="orange" onclick="javascript:RegisterClick(this);" href="/demande-financement">
                            Demande de financement
                        </a>
                        <a id="" class="orange" name="orange" onclick="javascript:RegisterClick(this);" href="/evaluer-echange">
                            Évaluer mon échange
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/footer/_footer.php'); ?>
    <!--<div id="stcpDiv" style="position: absolute; top: -1999px; left: -1988px;">ShareThis Copy and Paste</div>
    <div id="stwrapper" class="stwrapper stwrapper4x" style="display: block;">
        <iframe allowtransparency="true" id="stLframe" class="stLframe" name="stLframe" frameborder="0" scrolling="no" src="http://edge.sharethis.com/share4x/index.21388f3e693a1d91adb0b6241698348f.html"></iframe>
    </div>
    <div id="stOverlay" onclick="javascript:stWidget.closeWidget();"></div>
    <script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
    <script type="text/javascript">
        stLight.options({
            publisher: '12345',
        });
    </script>
    -->
</body>
</html>
<script type="text/javascript">
    alternateDivDetailsPage2('divSpec','divPics');
</script>