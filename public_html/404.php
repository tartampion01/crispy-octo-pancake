<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Oups!</h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <p></p>
                        <h2>La page demandée n'a pas été trouvée</h2>
                        <h4>Cliquez ici pour retourner à la page d'<a href="<?php echo RD_PageLink::getHref(folder::Root,page::Accueil) ?>" class="rank1" target="_self">accueil</a></h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>