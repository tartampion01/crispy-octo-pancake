<?php
function _getMetaContent($pageName = '')
{
    $metaContent = "Réseau Dynamique est concessionnaire panquébécois de camions International et détaillant de camions et véhicules routiers Ottawa Kalmar, Isuzu et Yanmar.";

    switch($pageName)
    {
        case "a-propos.php":   $metaContent = "Le Réseau Dynamique est le plus important réseau de concessionnaires International au Québec. Plus de 19 points de service répartis sur le territoire québécois.";break;
        case "accueil.php":    $metaContent = "Réseau Dynamique est concessionnaire panquébécois de camions International et détaillant de camions et véhicules routiers Ottawa Kalmar, Isuzu et Yanmar.";break;
        case "promotions.php": $metaContent = "Profitez de promotions avantageuses à l&#39;achat d&#39;un ou plusieurs camions lourds International chez votre concessionnaire Réseau Dynamique.";break;
        case "nous-joindre.php": $metaContent = "Trouvez les coordonnées des succursales Réseau Dynamique au Québec.";break;
        case "urgence-routiere-24h.php": $metaContent = "Pour toute urgence sur la route, contactez la succursale la plus près de votre emplacement et profitez d&#39;une assistance routière ou un remorquage 24 h.";break;
        default:;
    }
    
    /* APPELÉ AINSI DANS LA PAGE _header.php : 
     * <meta content="<?PHP getMetaContent($nomPage); ?>" name="description" /> */
    echo $metaContent;
}
?>