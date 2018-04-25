<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <span>ÉVALUER MON ÉCHANGE</span>
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
                                <h5 id="">Marque * :
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Modèle * :
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Année * :
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">Km * :
                                    <input name="" type="text" id="" class=""></h5>
                                <h5 id="">État intérieur du véhicule * :
                                    <select id="" class="valid" name="">
					<option selected="selected" value="UGV1dC3DqnRyZSB2ZW5kdSB0ZWwgcXVlbA==">Peut-être vendu tel quel</option>
                                        <option value="UsOpcGFyYXRpb24gcmVxdWlzZQ==">Réparation requise</option>
                                        <option value="UsOpcGFyYXRpb24gbWFqZXVyZSByZXF1aXNl">Réparation majeure requise</option>
                                    </select></h5>
                                <h5 id="">État extérieur * :
                                    <select id="" class="valid" name="">
                                        <option selected="selected" value="UGV1dC3DqnRyZSB2ZW5kdSB0ZWwgcXVlbA==">Peut-être vendu tel quel</option>
                                        <option value="UsOpcGFyYXRpb24gcmVxdWlzZQ==">Réparation requise</option>
                                        <option value="UsOpcGFyYXRpb24gbWFqZXVyZSByZXF1aXNl">Réparation majeure requise</option>
                                    </select></h5>
                                <p>
                                    <input type="submit" name="btnSendMail" id="btnSendMail" value="Envoyer" id="" class="">
                                </p>
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