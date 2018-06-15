<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">
<?PHP
    $NOMPAGE = htmlspecialchars(basename($_SERVER['PHP_SELF']));
    // REQUIRED BY ALL PAGES
    // COMMON INCLUDES --> DB / FUNCTIONS / OBJECTS
    require_once(dirname(__DIR__).'/commonIncludes.php');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
?>
<head>
    <title>
        <?PHP RD_Header::getPageTitle($NOMPAGE); ?>
    </title>

    <!-- Start Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-569RKDC');</script>
    <!-- End Google Tag Manager -->

    <script type='text/javascript' src='../../_assets/js/jquery-3.2.1.js'></script>
    <script type="text/javascript" src="../../_assets/js/jquery-bxslider.js" ></script>
    <script type='text/javascript' src='../../_assets/js/ajax.js'></script>
    <script type='text/javascript' src='../../_assets/js/rotator.js'></script>
    <script type='text/javascript' src='../../_assets/js/utilities.js'></script>    
    <script type='text/javascript' src='../../_assets/js/jquery.tmpl.js'></script>
    <script type='text/javascript' src='../../_assets/js/jquery.twbsPagination.js'></script>
    
    <!-- Bootstrap CDN includes -->    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/defaultGpcframe.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/HighLightSelector.css" media="All" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/main.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/font-awesome.css" />
    
    <link rel='canonical' href='<?PHP echo $NOMPAGE ?>' />
    <meta content="<?PHP RD_Header::getMetaContent($NOMPAGE); ?>" name="description" />
    <meta  http-equiv="Content-type"  content="text/html;charset=UTF-8" />
</head>
<?PHP
    // TOP MENU
    require_once(dirname(__DIR__).'/header/_header_top_menu.php');
    // SUB HEADER LOGO + RECHERCHE
    require_once(dirname(__DIR__).'/header/_header_logo_search.php');
    // SUB Header MENU PRINCIPAL
    require_once(dirname(__DIR__).'/header/_header_main_menu.php');
?>
