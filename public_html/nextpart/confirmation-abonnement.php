<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1><?php echo $NOMPAGE; ?></h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <p></p>
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
    
</body>
</html>
