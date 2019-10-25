<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">
<?PHP

    // Don't show errors on webpage
    error_reporting(0);
    // Show errors on webpage
    //error_reporting(E_ALL);

    $NOMPAGE = htmlspecialchars(basename($_SERVER['PHP_SELF']));
    // REQUIRED BY ALL PAGES
    // COMMON INCLUDES --> DB / FUNCTIONS / OBJECTS
    require_once(dirname(__DIR__).'/commonIncludes.php');
    header("Access-Control-Allow-Origin: *");    
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
?>
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PS9XTZC');</script>
    <!-- End Google Tag Manager -->
    
    <title><?PHP RD_Header::getPageTitle($NOMPAGE); ?></title>
    <meta content="<?PHP RD_Header::getMetaContent($NOMPAGE); ?>" name="description" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />    
    <meta http-equiv="Content-type"  content="text/html;charset=UTF-8" />    
    <link rel='canonical' href='<?php echo 'http://'. $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>' />
        
    <!-- Global Site Tag (gtag.js) - Googlemas-age Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-3192388-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){
          dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-3192388-2');
    </script>
    <!--javascript-->
    <script type='text/javascript' src='../../_assets/js/jquery-3.2.1.js'></script>
    <script type="text/javascript" src="../../_assets/js/jquery-bxslider.js" ></script>

    <script type='text/javascript' src='../../_assets/js/utilities.js'></script>  
    <script type="text/javascript" src="../../_assets/js/object.values.polyfill.js"></script>
    <script type='text/javascript' src='../../_assets/js/jquery.tmpl.js'></script>
    <script type='text/javascript' src='../../_assets/js/jquery.twbsPagination.js'></script>
    <!--** integration js
    <script type='text/javascript' src='../../_assets/js/jquery-1.12.4.min.js'></script>  
    <script type="text/javascript" src="../../_assets/js/jquery.min.js"></script>
    <script type='text/javascript' src='../../_assets/js/modernizr.custom.js'></script>
    <script type='text/javascript' src='../../_assets/js/jquery.dlmenu.js'></script>
    <script type='text/javascript' src='../../_assets/js/slick.js'></script>-->
    
    <!-- Bootstrap CDN includes --> <!--css-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/defaultGpcframe.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/HighLightSelector.css" media="All" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/main.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/font-awesome.css" />
    
    <link rel="stylesheet" type="text/css" href="../../_assets/css/grid.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/slick.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/wx3.css" />

    
    <!-- A CHANGER LORS DE L'IMPLANTATION DU RECAPTCHA v3 sur tout le site -->
    <?php if($NOMPAGE == "demande-bon-travail_v2.php")
        //echo "<script src='https://www.google.com/recaptcha/api.js?render=" .  RD_Utils::getRecaptchaSiteKey() . "'></script>";
    ?>
    <!--<script src='https://www.google.com/recaptcha/api.js?render=6LdryFoUAAAAADpVaDt5XQYrZIt7DTNXLVvXPJw7'></script>-->
</head>
            <!--header-->
            <div class="bghead">
                <div class="grid grid-pad">
                    <div class="col-1-2 mobile-col-1-2">
                        <a href="index.html">
                            <img class="marginmedia" src="Resources/Images/logo-header.png" alt="logo depart" />
                        </a>
                    </div>
                    <div class="col-1-2 mobile-col-1-2">
                        <div class="col-1-1 mobile-col-1-1">
                            <a href="https://www.facebook.com" target="_blank"><img class="floatright marginmedia" src="Resources/Images/facebook_footer.png" alt="facebook" /></a>
                            <a href="#">
                                <img class="floatright marginmedia" src="Resources/Images/logo-tel.png" alt="phone" />
                                <p class="floatright bold marginmedia topdivision20 ">Urgence Routière</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
<?PHP
    // TOP MENU
    //require_once(dirname(__DIR__).'/header/_header_top_menu.php'); a enlever FX 25-10-2019
    // SUB HEADER LOGO + RECHERCHE
    //require_once(dirname(__DIR__).'/header/_header_logo_search.php'); a enlever FX 25-10-2019
    // SUB Header MENU PRINCIPAL
    require_once(dirname(__DIR__).'/header/_header_main_menu.php');
?>
