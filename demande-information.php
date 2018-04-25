<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/header/_header.php'); ?>
<body class="body">
    <form name="form" role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <span>Demande d'information</span>
                    </h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div id="" class="contenu2">
                            <div id="" class="formulaire">
                                <p><font size="1">Les champs marqués d'un astérisque (*) sont obligatoires.</font></p>
                                <h5 id="">Prénom *&nbsp;:<br>
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Nom *&nbsp;:<br>
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Ville *&nbsp;:<br>
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Courriel *&nbsp;:<br>
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Téléphone * :
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Commentaire :<br>
                                    <textarea name="" rows="2" cols="20" id="" style="width: 100%;height: 150px;"></textarea></h5>
                                <p>
                                    <input type="submit" name="btnSendMail" id="btnSendMail" value="Envoyer" id="" class="">
                                </p>
                            </div>
                            <div id="" class="nomProduit">
                                <input type="hidden" name="" id="" itemid="" value=""><!-- Marque Model Config EX: INTERNATIONAL - 4300 4 X 2 -->
                                <input type="hidden" name="" id="" itemid="" value=""><!-- SKU -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/footer/_footer.php'); ?>
</body>
</html>