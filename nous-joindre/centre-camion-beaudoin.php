<?php require_once('../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo basename($_SERVER['PHP_SELF']); ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1><?php $suc = new Succursales();$suc->load(nomSuccursale::Drummondville); ?></h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <h2><?php echo $suc->nomLong; ?></h2>
                        <p><?php echo $suc->tel1; ?></p>
                        <p><?php echo $suc->adresse; ?></p>
                        <p><?php echo $suc->ville; ?></p>
                        <p><?php echo $suc->codePostal; ?></p>
                        <p><?php foreach($suc->contacts as $contact){
                                    foreach($contact as $details)
                                    {
                                        echo "" . $details[0] . "</br>";
                                        echo "" . $details[1] . "</br>";
                                        echo "" . $details[2] . "</br>";
                                    }
                                }
                            ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <?php require_once('../_includes/footer/_footer.php'); ?>
</body>
</html>