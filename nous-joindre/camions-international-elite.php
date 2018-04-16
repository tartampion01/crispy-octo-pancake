<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo basename($_SERVER['PHP_SELF']); ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1><?php echo basename($_SERVER['PHP_SELF']); ?></h1>
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
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/_includes/footer/_footer.php'); ?>
</body>
</html>