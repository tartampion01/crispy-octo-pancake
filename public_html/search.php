<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="wrap">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1><?php echo $NOMPAGE; ?></h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <p></p>
                        <?php 
                            if( isset($_POST['tbSearch']))
                            {
                                $searchTerm = $_POST['tbSearch'];
                                
                                //RECHERCHE FICHIERS
                                foreach( RD_Utils::GetSearchFiles() as $file )
                                {
                                    echo $file . "</br>";
                                }
                            }
                        ?>
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