<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">
<?PHP
    $NOMPAGE = basename($_SERVER['PHP_SELF']);
    // REQUIRED BY ALL PAGES
    // COMMON INCLUDES --> DB / FUNCTIONS / OBJECTS
    require_once(dirname(__DIR__).'/commonIncludes.php');
?>
<head>
    <title>
        <?PHP RD_Header::getPageTitle($NOMPAGE); ?>
    </title>

    <script type='text/javascript' src='../../_assets/js/jquery-3.2.1.js'></script>
    <script type='text/javascript' src='../../_assets/js/ajax.js'></script>
    <script type='text/javascript' src='../../_assets/js/rotator.js'></script>
    <script type='text/javascript' src='../../_assets/js/utilities.js'></script>
    
    <!-- Bootstrap CDN includes -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    
    <script type="text/javascript">var ShortCultureID = 'fr'; var LongCultureID = 'fr-CA';</script>
    <script type="text/javascript">(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','../www.google-analytics.com/analytics.js','ga');ga('create', 'UA-3192388-1');ga('require','displayfeatures');ga('send', 'pageview');</script>

    <link rel="stylesheet" type="text/css" href="../../_assets/css/default/defaultGpcframe.css" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/HighLightSelector.css" media="All" />
    <link rel="stylesheet" type="text/css" href="../../_assets/css/main.css" />
    
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