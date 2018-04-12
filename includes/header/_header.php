<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">
    
<?PHP
    $nomPage = basename($_SERVER['PHP_SELF']);
    
    // REQUIRED BY ALL PAGES
    // COMMON INCLUDES --> DB / FUNCTIONS / OBJECTS
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/commonIncludes.php');
?>
    
<head>
    <title>
        Réseau Dynamique | Concessionnaire Camions International
    </title>

    <script type='text/javascript' src='assets/js/jquery-3.2.1.js'></script>
    <script type='text/javascript' src='assets/js/ajax.js'></script>
    <script type="text/javascript" src="assets/js/rotator.js" ></script>
    <script type="text/javascript">var ShortCultureID = 'fr'; var LongCultureID = 'fr-CA';</script>
    <script type="text/javascript">(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','../www.google-analytics.com/analytics.js','ga');ga('create', 'UA-3192388-1');ga('require','displayfeatures');ga('send', 'pageview');</script>

    <link href="assets/css/main.css" rel="stylesheet" type="text/css"/>
    <link type="text/css" rel="stylesheet" media="All" href="_css/HighLightSelector.css" />

    <link rel='canonical' href='<?PHP echo $nomPage ?>' />
    <meta content="<?PHP getMetaContent($nomPage); ?>" name="description" />
    <meta  http-equiv="Content-type"  content="text/html;charset=UTF-8" />
</head>
    
<?PHP    
    // TOP MENU
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/header/_header_top_menu.php');
    // SUB HEADER LOGO + RECHERCHE
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/header/_header_logo_search.php');
    // SUB Header MENU PRINCIPAL
    require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/header/_header_main_menu.php');
?>