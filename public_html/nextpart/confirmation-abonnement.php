<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="grid grid-pad">
            <div class="content">
                <div class="titrepage">
                    <h1><?php echo $NOMPAGE; ?></h1>
                </div>
                <div class="contenu">
                    <div class="contenu2 col-1-1">
                        <p>Abonnement réussi. Merci pour votre abonnement!</p>
                        <h2></h2>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>