<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<html  xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">

<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
        <div class="content produit">
            <div class="grid grid-pad">
                <!--top-->
                <section class="">
                    <div class="col-1-1">
                        <div class="topdivision topnavdetail col-1-1">
                            <h2 class="title mobile-col-1-2" style="margin-top:5px;">
                                Titre  de camion
                            </h2>        
                            <a name="hyperlien" onclick="window.print();" href="javascript:void(0);" target="_self"><img class="" style="display:inline-block; float:right; padding:5px;" src="_assets/images/wx3/printbtn.png" alt="print logo" /></a>
                            <a class="orange rightbutton buttonwebsite" name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root, page::ObtenirPrix) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>" target="_self">
                                Obtenir un prix
                            </a>                         
                            <a class="orange rightbutton buttonwebsite" name="orange" href="<?php echo RD_PageLink::getHref(folder::Root, page::DemandeFinancement) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>">
                                Demande de financement
                            </a>
                            <hr class="hide-on-mobile" style="margin-top:50px;" />
                        <div class="col-1-1 topnavdetail mobile-col-1-1">
                            <h3 class="subnavdescription">
                                <a href="<?php echo RD_PageLink::getHref(folder::Root, page::DemandeInformation) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>">Demande d'information</a>
                            </h3>
                            <h3 class="subnavdescription">
                                <a href="<?php echo RD_PageLink::getHref(folder::Root, page::PlanifierEssaiRoutier) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>">Planifier un essai routier</a>
                            </h3>
                            <h3 class="subnavdescription ">
                                <a href="<?php echo RD_PageLink::getHref(folder::Root, page::NousJoindre); ?>">Trouver un concessionnaire</a>
                            </h3>
                            <h3 class="subnavdescription">
                                <a href="<?php echo RD_PageLink::getHref(folder::Root, page::EvaluerEchange) . "?id=" . $camion->id_encode . "&n=" . base64_encode(1); ?>">Évaluer mon échange</a>
                            </h3>
                        </div>
                    </div>
                </section>
                <!--content-->
                <section>
                    <div class="col-1-1 topdivision">
                        <!--left content-->
                        <div class="col-7-12 mobile-col-1-1 paddingright">
                            <!--section 1-->
                            <div class="col-1-1 mobile-col-1-1">
                                <h2 class="uppercases mobile-col-1-1">Description :</h2>
                                <p class="mobile-col-1-1 Descriptionp">
                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur.  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                                    dolor sit amet, consectetur. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    eos qui ratione voluptatem sequi nesciunt
                                </p>
                            </div>
                            <!--section 2-->
                            <div class="col-1-1 mobile-col-1-1 margesection">
                                <h2 class="col-1-1 uppercases">Information :</h2>
                                <div class="col-1-2 topdivision mobile-col-1-2">
                                    <!--marque-->
                                    <div class="col-1-1 mobile-col-1-1">
                                        <img class="logoleft" src="_assets/images/wx3/marquelogo.png" alt="" />
                                        <div class="topdivision15">
                                            <h3 class="infotitle mobile-col-1-1">Marque :</h3>
                                            <p class="infotext mobile-col-1-1">Placer un ID pour la BD</p>
                                        </div>
                                    </div>
                                    <!--modele-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1">
                                        <img class="logoleft" src="_assets/images/wx3/modeledetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle mobile-col-1-1">Modèle  :</h3>
                                            <p class="infotext mobile-col-1-1"> Placer un ID pour la BD</p>
                                        </div>
                                    </div>
                                    <!--no serie-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1">
                                        <img class="logoleft" src="_assets/images/wx3/noseriedetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle mobile-col-1-1">No série  :</h3>
                                            <p class="infotext mobile-col-1-1"> Placer un ID pour la BD</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1-2 topdivision mobile-col-1-2">
                                    <!--no inventaire-->
                                    <div class="col-1-1 mobile-col-1-1">
                                        <img class="logoleft" src="_assets/images/wx3/noinventairedetails.png" alt="" />
                                        <div class="topdivision15">
                                            <h3 class="infotitle mobile-col-1-1">No d'inventaire  :</h3>
                                            <p class="infotext mobile-col-1-1">Placer un ID pour la BD</p>
                                        </div>
                                    </div>
                                    <!--annee-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1">
                                        <img class="logoleft" src="_assets/images/wx3/anneedetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle mobile-col-1-1">Année  :</h3>
                                            <p class="infotext mobile-col-1-1">Placer un ID pour la BD</p>
                                        </div>
                                    </div>
                                    <!--kilometrage-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1">
                                        <img class="logoleft" src="_assets/images/wx3/kmdetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle mobile-col-1-1">Kilométrage  :</h3>
                                            <p class="infotext mobile-col-1-1">Placer un ID pour la BD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--section 3-->
                            <div class="col-1-1 mobile-col-1-1 margesection">
                                <h2 class="uppercases topdivision50">Caractéristique</h2>
                                <div class="col-1-1 topdivision">
                                    <!--Empattement-->
                                    <div class="rowdetails">
                                        <div class="column1details">
                                            Empattement
                                        </div>
                                        <div class="column2details">

                                        </div>
                                        <div class="column3details">
                                            283
                                        </div>
                                    </div>
                                    <!--Transmission-->
                                    <div class="rowdetails">
                                        <div class="column1details">
                                           Transmission
                                        </div>
                                       <div class="column2details">
                                           <img class="hide-on-mobile" src="_assets/images/wx3/tansmissiondetails.png" alt="" />
                                       </div>
                                       <div class="column3details">
                                           allison 3000 rds
                                       </div>
                                    </div>
                                    <!--Moteur-->
                                    <div class="rowdetails">
                                        <div class="column1details">
                                            Moteur
                                        </div>
                                        <div class="column2details">

                                        </div>
                                        <div class="column3details">
                                            maxxforce 9
                                        </div>
                                    </div>
                                    <!--Ratio essieu arrière-->
                                    <div class="rowdetails">
                                        <div class="column1details">
                                            Ratio essieu arrière
                                        </div>
                                        <div class="column2details">

                                        </div>
                                        <div class="column3details">
                                            5.29
                                        </div>
                                    </div>
                                    <!--freins-->
                                    <div class="rowdetails">
                                        <div class="column1details">
                                            freins
                                        </div>
                                        <div class="column2details">
                                            <img class="hide-on-mobile" src="_assets/images/wx3/freinsdetails.png" alt="" />
                                        </div>
                                        <div class="column3details">
                                            air
                                        </div>
                                    </div>
                                    <!--équipement-->
                                    <div class="rowdetails">
                                        <div class="column1details">
                                            Équipement
                                        </div>
                                        <div class="column2details">
                                            <img class="hide-on-mobile" src="_assets/images/wx3/equipementdetails.png" alt="" />
                                        </div>
                                        <div class="column3details">
                                            BOITE, TRANSIT, 28', N/S : 1441217 REEFER, CARRIER, SUPRA, N/S: 000000PFV91371233 MTE CHARGE, MAXON, GPTLR-44, N/S: 0613253624  Bte 28' , Reefer & Mte-Chg & rampe
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--right content-->
                        <div class="col-5-12 paddingleft mobile-col-1-1">
                            <div class="col-1-1">
                                <div class="col-1-1">
                                    <div class="containerphoto">
                                        <img id="expandedImg" style="width:100%">
                                        <div id="imgtext"></div>
                                    </div>
                                </div>
                                <div class="col-1-1">
                                    <div class="rowphoto topdivision50">
                                        <div class="columnphoto">
                                            <img id="firstimg" src="_assets/images/wx3/CV-navigation.jpg" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/MV-navigation.jpg" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/lt-navigation.png" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/hx-navigation.jpg" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/CV-navigation.jpg" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/MV-navigation.jpg" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/lt-navigation.png" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/hx-navigation.jpg" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                        <div class="columnphoto">
                                            <img src="_assets/images/wx3/CV-navigation.jpg" alt="" style="width:100%" onclick="imagesdetails(this);">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--multi-item special product-->
                <div class="margesection"></div>
                <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_product.php'); ?>  
            </div>
            <!--
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
                    
                </div>
            </div>-->
	</div>
</form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>