<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<?php
    $camion = new RD_Camion(null);
    $camion->load_new(base64_decode(urldecode($_GET["id"])));
?>
<script type="text/javascript">
    function switchMe(ceci)
    {
        document.getElementById("divBig").src = ceci.src;
    }
</script>
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
                        <div class="toggle clear">
                            <div class="toggle12">
                                <div class="specToggle" onclick="alternateDivDetailsPage('divSpec','divPics');" style="display: block;visibility: visible;" zonedescriptor="Default">Spécifications</div>
                                <?php 
                                    if( $camion->HAS_picures )
                                        echo '<div class="picToggle" onclick="alternateDivDetailsPage(\'divPics\',\'divSpec\');" style="display: block;visibility: visible;" zonedescriptor="Default">Photos</div>';
                                ?>
                            </div>
                            </br></br></br></br>
                            <div id="divSpec" class="" style="display: inline;" zonedescriptor="" >
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
                                        <span><?php echo $camion->strAnnee ?></span>
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
                                    <!-- TODO PHOTO ONGLET SPÉCIFICATIONS -->
                                    <img data-categorizedconfig="null" src="<?php echo $camion->pictures[0]; ?>" title="" />
                                </div>
                            </div>
                            <div class="caracteristiques">
                                <div class="titre">
                                    <h2>Caractéristiques</h2>
                                </div>
                                <div>
                                    <?php if($camion->empattement != "")
                                        echo "<div class='caracteristiquesTexte'>Empattement<div><div class=caracteristiquesValue>" . $camion->empattement . "</div>";?>
                                    <?php if($camion->essieu_avant != "")
                                        echo "<div class='caracteristiquesTexte'>Essieu avant</div><div class=caracteristiquesValue>" . $camion->essieu_avant . "</div>";?>
                                    <?php if($camion->essieu_arriere != "")
                                        echo "<div class='caracteristiquesTexte'>Essieu arrière</div><div class=caracteristiquesValue>" . $camion->essieu_arriere . "</div>";?>
                                    <?php if($camion->rearsuspension != "")
                                        echo "<div class='caracteristiquesTexte'>Suspension arrière</div><div class=caracteristiquesValue>" . $camion->rearsuspension . "</div>";?>
                                    <?php if($camion->transmission != "")
                                        echo "<div class='caracteristiquesTexte'>Transmission</div><div class=caracteristiquesValue>" . $camion->transmission . "</div>";?>
                                    <?php if($camion->moteur != "")
                                        echo "<div class='caracteristiquesTexte'>Moteur</div><div class=caracteristiquesValue>" . $camion->moteur . "</div>";?>
                                    <?php if($camion->hp != "")
                                        echo "<div class='caracteristiquesTexte'>HP</div><div class=caracteristiquesValue>" . $camion->hp . "</div>";?>
                                    <?php if($camion->ratio_ar != "")
                                        echo "<div class='caracteristiquesTexte'>Ratio essieu arrière</div><div class=caracteristiquesValue>" . $camion->ratio_ar . "</div>";?>
                                    <?php if($camion->pneu_ar_dim != "" && $camion->pneu_av_dim != "")
                                        echo "<div class='caracteristiquesTexte'>Dimension pneux (avant/arrière)</div><div class=caracteristiquesValue>" . $camion->pneu_ar_dim . "/" . $camion->pneu_av_dim . "</div>";?>
                                    <?php if($camion->wheel != "")
                                        echo "<div class='caracteristiquesTexte'>Roue</div><div class=caracteristiquesValue>" . $camion->wheel . "</div>";?>
                                    <?php if($camion->freins != "")
                                        echo "<div class='caracteristiquesTexte'>Freins</div><div class=caracteristiquesValue>" . $camion->freins . "</div>";?>
                                    <?php if($camion->color != "")
                                        echo "<div class='caracteristiquesTexte'>Couleur</div><div class=caracteristiquesValue>" . $camion->color . "</div>";?>
                                    <?php if($camion->equipements != "")
                                        echo "<div class='caracteristiquesTexte'>Équipement</div><div class=caracteristiquesValue>" . $camion->equipment . "</div>";?>
                                </div>
                                <div id="divPics" class="" style="display: none;" zonedescriptor="">
                                <div class="GpcImageViewerHorizontal" data-excludedefaultimage="false" data-maxresults="0">
                                    <div class="GpcLightBoxZone">
                                        <div class="GpcLightBox">
                                            <div class="jquery-overlay" style="display: none; top: 0px; width: 1263px; height: 1163px;"></div>
                                            <div class="jquery-lightbox " style="position: static; top: -10000px; height: 0px; width: 100px;">
                                                <div class="lightbox-container-image-box" style="width: 100%; height: 100%;">
                                                    <div class="lightbox-container-image" style="height: 0px; width: 0px; opacity: 1; overflow: auto;">

                                                        <!-- TODO PHOTO PRINCIPALE ONGLET PHOTOS -->
                                                        <img class="lightbox-image" id="divBig" style="width: 498px; height: 373px;" src="<?php echo $camion->pictures[0]; ?>" width="498" height="373">
                                                        <!--<img class="lightbox-image" style="width: 498px; height: 373px;" src="/_assets/images/camions/N-4705-2_498x0.jpg" width="498" height="373">-->


                                                        <div class="lightbox-video" style="display: none;"></div>
                                                        <div style="display: block; height: 0px; width: 0px;" class="lightbox-nav">
                                                            <a href="#" class="lightbox-nav-btnPrev" style="height: 100%; background: url(&quot;/_images/menu_images/lightbox-blank.gif&quot;) no-repeat transparent; display: none;"></a>
                                                            <a href="#" class="lightbox-nav-btnNext" style="height: 100%; background: url(&quot;/_images/menu_images/lightbox-btn-next.png&quot;) right 50% no-repeat;"></a>
                                                        </div>
                                                        <div class="lightbox-loading" style="display: none;">
                                                            <a href="#" class="lightbox-loading-link"><img src="/_images/menu_images/lightbox-ico-loading.gif"></a>
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
                                    <div class="GpcCarouselAndButtons">
                                        <div class="GpcCarouselPrevious">
                                            <a class="bx-prev disabled" href=""></a>
                                        </div>
                                        <div class="GpcCarouselWrapper" >
                                            <span></span>
                                            <div class="bx-wrapper" style="max-width: 580px;">
                                                <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 2px;">
                                                    <div class="GpcCarousel"  style="width: 4215%; position: relative; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">

                                                        <!-- TODO THUMBNAILS -->
                                                        <?php
                                                            foreach($camion->pictures as $pic)
                                                            {
                                                                ?><a href="#" class="" contenttype="Image" onclick="return false" ><img class="ProductImage" onclick="switchMe(this);" width="100" height="82" src="<?php echo $pic; ?>"/></a>&nbsp;<?php                                                                
                                                            }
                                                        ?>

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
                                        <div class="GpcCarouselNext">
                                            <a class="bx-next disabled" href=""></a>
                                        </div>
                                    </div>
                                    <div class="GpcClear"></div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="share">
                    <div class="btnShare">
                        <span class="st_sharethis_custom" st_processed="yes">Partager la fiche</span>
                    </div>
                    <div class="btnPrint">
                        <a name="hyperlien" onclick="window.print();javascript:RegisterClick(this);" href="javascript:void(0);" target="_self">Imprimer la fiche</a>
                    </div>
                </div>
                <div class="options">
                    <a class="demandeDinfo" name="hyperlien" onclick="javascript:RegisterClick(this);" href="<?php echo RD_PageLink::getHref(folder::Root, page::DemandeInformation) . "?id=" . $camion->id_encode . "&n=1"; ?>" target="_self">
                        Demande d'information
                    </a>
                    <a class="essaiRoutier" name="hyperlien" onclick="javascript:RegisterClick(this);" href="<?php echo RD_PageLink::getHref(folder::Root, page::PlanifierEssaiRoutier) . "?id=" . $camion->id_encode . "&n=1"; ?>" target="_self">
                        Planifier un essai routier
                    </a>
                    <a class="trouverConcessionnaire" name="hyperlien" onclick="javascript:RegisterClick(this);" href="<?php echo RD_PageLink::getHref(folder::Root, page::NousJoindre); ?>" target="_self">
                        Trouver un concessionnaire
                    </a>
                    <a class="orange" name="hyperlien" onclick="javascript:RegisterClick(this);" href="<?php echo RD_PageLink::getHref(folder::Root, page::ObtenirPrix) . "?id=" . $camion->id_encode . "&n=1"; ?>" target="_self">
                        Obtenir un prix
                    </a>
                    <a class="orange" name="orange" onclick="javascript:RegisterClick(this);" href="<?php echo RD_PageLink::getHref(folder::Root, page::DemandeFinancement) . "?id=" . $camion->id_encode . "&n=1"; ?>">
                        Demande de financement
                    </a>
                    <a class="orange" name="orange" onclick="javascript:RegisterClick(this);" href="<?php echo RD_PageLink::getHref(folder::Root, page::EvaluerEchange) . "?id=" . $camion->id_encode . "&n=1"; ?>">
                        Évaluer mon échange
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>

    
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