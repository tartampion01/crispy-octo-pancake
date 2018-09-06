<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form name="form" role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content">
            <div class="shrink">
                <div class="titrepage">
                    <h1>
                        <span>Votre camion</span>
                    </h1>
                </div>
                <div class="contenu">
                    <div class="contenu2">
                        <div id="build-container">
                            <div id="build-selection">
                                <label for="select-type">
                                    Choose your truck:</label>
                                <select name="select-type" id="select-type" class="input-text">
                                    <option value="LT%20Series">LT Series</option>
                                    <option value="RH">RH Series</option>
                                    <option value="HX">HX</option>
                                    <option value="HV">HV</option>
                                    <option value="LoneStar">LoneStar</option>
                                </select>
                            </div>
                            <iframe id="build-frame" src="https://www.internationaltrucks.com/configurator/embedded?truckName=LT%20Series&amp;iframe=1&amp;hideForm=1" width="100%" height="950" frameborder="0">
                                Your browser does not support iframes. Please <a href="http://www.google.com/chrome" target="_blank">upgrade to a modern web browser.</a>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
</body>
</html>