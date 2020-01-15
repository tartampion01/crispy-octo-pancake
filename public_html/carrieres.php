<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="grid grid-pad">
            <div class="content">
                <div class="titrepage">                    
                </div>
                <div class="contenu">
                    <div class="contenu2 col-1-1">
                        <?php 
                            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                                if( isset($_POST['ddlSuccursales']))
                                {
                                    ?>
                                    <h1>Emplois disponibles</h1>                                    
                                    <?php
                                    // On récupère l'index sélectionné
                                    $succ = $_POST['ddlSuccursales'];
                                    // On remet le dropdown a l'index sélectionné
                                    echo RD_Utils::GetDropDownSuccursalesCarrieres($succ);
                                    echo "</br><hr>";
                                    
                                    // On va chercher les emplois pour cette succursale
                                    $emplois = RD_Emploi::getLinkEmploisCourants($succ);
                                    
                                    if( count($emplois) > 0){
                                        foreach($emplois as $emploi){?>
                                            <label>Titre :</label>
                                            <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres). '?emp=' . $emploi->lienEncode; ?>">
                                                <?php echo $emploi->titre;?></a>
                                            <?php if($succ == "Toutes"){ echo "&nbsp;(".$emploi->succursale.")";}?></br>
                                    <?php }
                                    }
                                    else {?>
                                            <label>Il n'y a pas d'emplois disponibles à cette succursale présentement</label>
                                    <?php
                                    }?>
                                    <hr/>
                                        <p>
                                            <label>
                                                Aucun poste ne correspond à votre profil? Vous êtes intéressés par une carrière chez nous?<br/>
                                                Soumettez votre candidature et nous vous contacterons lorsqu'un poste correspondra à votre profil.<br/>
                                                <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Postuler) . '?emp=' . urlencode(base64_encode("spontanee")) ?>">
                                                    Candidature spontanée
                                                </a>
                                            </label>
                                        </p>
                                    <?php
                                }
                            }
                            else
                            {
                                // emploi_id en paramètre dans l'url on affiche les détails de celui-ci
                                if (isset($_REQUEST['emp'])) {
                                    $emploi = RD_Emploi::getDetailEmploi($_REQUEST['emp']);
                                    
                                    ?><h1>Détails de l'emploi</h1>
                                    <h3><?php echo $emploi->titre;?></h3>
                                    <h5>Référence interne: <?php echo $emploi->referenceInterne;?></h5>
                                    
                                    <h4>Emplacement:</h4>
                                    <label><?php echo $emploi->succursaleObj->nomLong; ?></label><br />
                                    <label><?php echo $emploi->succursaleObj->adresse; ?></label><br />
                                    <label><?php echo $emploi->succursaleObj->ville . "&nbsp;(" . $emploi->succursaleObj->province . ")"; ?></label><br />
                                    
                                    <h4>Fonctions :</h4>
                                    <?php echo $emploi->fonctions; ?>
                                    
                                    <h4>Exigences et conditions :</h4>
                                        <ul class="">
                                            <?php 
                                                if( $emploi->niveauEtudes != "" ){?>
                                                <li><label>Niveau d'Études:&nbsp;
                                                    <b><?php echo $emploi->niveauEtudes; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->descCompetences != "" ){?>
                                                <li><label>Description des compétences:&nbsp;
                                                    <b><?php echo $emploi->descCompetences; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->anneesExperience != "" ){?>
                                                <li><label>Années d'expérience reliées à l'emploi:&nbsp;
                                                    <b><?php echo $emploi->anneesExperience; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->langues != "" ){?>
                                                <li><label>Langues requises:&nbsp;
                                                    <b><?php echo $emploi->langues; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->statutEmploi != "" ){?>
                                                <li><label>Statut d'emploi:&nbsp;
                                                    <b><?php echo $emploi->statutEmploi; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->salaire != "" ){?>
                                                <li><label>Salaire:&nbsp;
                                                    <b><?php echo $emploi->salaire; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->heuresSemaine != "" ){?>
                                                <li><label>Heures par semaine:&nbsp;
                                                    <b><?php echo $emploi->heuresSemaine; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->dateDebut != "" ){?>
                                                <li><label>Date de début:&nbsp;
                                                    <b><?php echo $emploi->dateDebut; ?></b></label></li><?php }?>
                                            <?php 
                                                if( $emploi->autres != "" ){?>
                                                <li><label>Autres:&nbsp;
                                                    <b><?php echo $emploi->autres; ?></b></label></li><?php }?>
                                        </ul>                 
                                    
                                    <h4>Contact</h4>
                                        <?php 
                                            if( $emploi->contactNom != "" ){?>
                                                <label><?php echo $emploi->contactNom; ?></label><br /><?php }?>
                                        <?php 
                                            if( $emploi->contactTitre != "" ){?>
                                                <label><?php echo $emploi->contactTitre; ?></label><br /><?php }?>
                                        <?php 
                                            if( $emploi->contactTel != "" ){?>
                                                <label><?php echo $emploi->contactTel; ?></label><br /><?php }?>
                                        <?php 
                                            if( $emploi->contactCourriel != "" ){?>
                                                <label><?php echo $emploi->contactCourriel; ?></label><br /><?php }?>
                                    
                                    <h4>
                                        <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Postuler) . '?emp=' . $emploi->lienEncode; ?>">Postulez en ligne!</a></h4><br/>
                                    <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres); ?>">Retour aux offres</a>
                                <?php
                                }
                                else {
                                    // Afficher tous les emplois courants
                                    ?><h1>Emplois disponibles</h1>
                                    <?php
                                    echo RD_Utils::GetDropDownSuccursalesCarrieres("Toutes");?>
                                    </br><hr>
                                    <?php $counteEmp=0; foreach(RD_Emploi::getLinkEmploisCourants(0) as $emploi):?>
                                        <label>
                                            <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Carrieres) . '?emp=' . $emploi->lienEncode; ?>">
                                                <?php echo $emploi->titre;$counteEmp+=1;?>
                                            </a>
                                                <?php echo "&nbsp;(".$emploi->succursale.")";?></br>
                                        </label>
                                        </br>
                                    <?php endforeach; if( $counteEmp == 0 ){
                                        echo "<label>Il n'y a pas d'emplois disponibles présentement</label>";
                                    }
                                        ?>
                                
                                    <hr/>
                                    <p>
                                        <label>
                                            Aucun poste ne correspond à votre profil? Vous êtes intéressés par une carrière chez nous?<br/>
                                            Soumettez votre candidature et nous vous contacterons lorsqu'un poste correspondra à votre profil.<br/>
                                            <a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::Postuler) . '?emp=' . urlencode(base64_encode("spontanee")) ?>">
                                                Candidature spontanée
                                            </a>
                                        </label>
                                    </p>
                                    <?php
                                }
                            }?>
                    </div>
                    <img class="mobile-col-1-1" src="_assets/images/menu_images/journee carriere.jpg" alt=""/>
                </div>
            </div>
            
        </div>
    </div>
    </form>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>