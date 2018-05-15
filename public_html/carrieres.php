<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">                    
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <?php 
                            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                                if( isset($_POST['ddlSuccursales']))
                                {
                                    ?>
                                    <h1>Emplois disponibles</h1>                                    
                                    <?php
                                    // On récupère l'index sélectionné
                                    $succ_id = $_POST['ddlSuccursales'];
                                    // On remet le dropdown a l'index sélectionné
                                    echo RD_Utils::GetDropDownSuccursalesCarrieres($succ_id[0]);
                                    echo "</br><hr>";
                                    
                                    // On va chercher les emplois pour cette succursale
                                    $emplois = RD_Emploi::getLinkEmploisCourants($succ_id[0]);
                                    
                                    if( count($emplois) > 0){
                                        foreach($emplois as $emploi){?>
                                            <label>Titre :</label>
                                            <a name="hyperlien" href="<?php RD_PageLink::getHref(folder::Root,page::Carrieres); echo '?emp=' . $emploi->lienEncode; ?>">
                                                <?php echo $emploi->titre;?>
                                            </a></br>
                                    <?php }
                                    }
                                    else {?>
                                            <label>Il n'y a pas d'emplois disponibles à cette succursale présentement</label>
                                    <?php
                                    }
                                }
                            }
                            else
                            {
                                // emploi_id en paramètre dans l'url on affiche les détails de celui-ci
                                if (isset($_REQUEST['emp'])) {
                                    $emploi = RD_Emploi::getDetailEmploi($_REQUEST['emp']);
                                    
                                    // TODO FORMATTER CETTE PAGE POUR QUE CE SOIT BEAU ET JOVIAL!!
                                    ?><h1>Détails de l'emploi</h1>
                                    <h3><?php echo $emploi->titre; ?></h3>
                                    <h5>Référence interne: <?php echo $emploi->referenceInterne;?></h5>
                                    
                                    <h4>Emplacement:</h4>
                                    <ul class="">
                                        <li class="label">
                                            <?php echo $emploi->succursales->nomLong; ?>
                                        </li>
                                        <li class="">
                                            <?php echo $emploi->succursales->adresse; ?>
                                        </li>
                                        <li class="">
                                            <?php echo $emploi->succursales->ville . "&nbsp;(" . $emploi->succursales->province . ")"; ?>
                                        </li>
                                        <li class="">
                                            <?php echo $emploi->succursales->codePostal; ?>
                                        </li>
                                    </ul>
                                    
                                    <h4>Fonctions :</h4>
                                    <?php echo $emploi->fonctions; ?>
                                    
                                    <h4>Exigences et conditions :</h4>
                                        <ul class=""><?php
                                        foreach($emploi->exigences as $key => $value){ ?>
                                            <li class="">
                                                <?php echo $key . "&nbsp;<b>" . $value . "</b>";} ?>
                                            </li>
                                        </ul>
                                    
                                    <h4>Contact</h4>
                                        <?php echo $emploi->contact; ?>
                                    
                                    <h4>Postulez</h4>
                                    <a name="hyperlien" href="<?php RD_PageLink::getHref(folder::Root,page::Postuler); echo '?emp=' . $emploi->lienEncode; ?>">Postulez en ligne!</a>
                                <?php
                                }
                                else {
                                    // Afficher tous les emplois courants
                                    ?><h1>Emplois disponibles</h1>
                                    <?php
                                    echo RD_Utils::GetDropDownSuccursalesCarrieres(0);
                                    echo "</br><hr>";
                                    foreach(RD_Emploi::getLinkEmploisCourants(0) as $emploi){?>
                                        <label>
                                            <a name="hyperlien" href="<?php RD_PageLink::getHref(folder::Root,page::Carrieres); echo '?emp=' . $emploi->lienEncode; ?>">
                                                <?php echo $emploi->titre;?>
                                            </a></label>
                                        </br>
                                <?php }}} ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>