<?PHP
interface folder
{
    const Root = 1;
    const CamionsNeufs = 2;
    const Nextpart = 3;
    const NousJoindre = 4;
    const PiecesService = 5;
    const PromotionsNouvelles = 6;
    const RemorquesNeuves = 7;
    const Service = 8;
    const VehiculesUtilitaires = 9;
    const EXTERNAL = 10;
}

interface page
{
    const Accueil = 1;
    const CamionsInventaireComplet = 2;
    const CamionsInternational = 3;
    const CamionsOttawaKalmar = 4;
    const CamionsIsuzu = 5;
    const CamionsOccasion = 6;
    const RemorqesNeuvesInventaireComplet = 7;
    const RemorquesDiMond = 8;
    const RemorquesDoepker = 9;
    const VehiculesUtilitairesMiniExcavatrices = 10;
    const VehiculesUtilitairesTransporteursToutTerrain = 11;
    const VehiculesUtilitairesSkidSteerEtChargeurAChenilles = 12;
    const VehiculesUtilitairesChargeuseV3EtV4 = 13;
    const LocationsDeCamions = 14;
    const PiecesEtServicesPiecesEtAsccessoires = 15;
    const PiecesEtServicesServiceRoutier = 16;
    const PiecesEtServicesServiceApresVente = 17;
    const PiecesEtServicesFinancement = 18;
    const PiecesEtServicesPromoPieces = 19;
    const NousJoindre = 20;
    const NousJoindreCamionsInterLanaudiere = 21;
    const NousJoindreCamionsInterAnjou = 22;
    const NousJoindreInterBoucherville = 23;
    const NousJoindreLesCamionsBeaudoin = 24;
    const NousJoindreCentreduCamionBeaudoin = 25;
    const NousJoindreCharestInternational = 26;
    const NousJoindreGarageCharestetFreres = 27;
    const NousJoindreLeCentreduCamionAmiante = 28;
    const NousJoindreLeCentreduCamionBeauce = 29;
    const NousJoindreLeCentreRoutier1994 = 30;
    const NousJoindreCamionsInternationalElite = 31;
    const NousJoindreGarageRobert = 32;
    const Apropos = 33;
    const PromotionsEtNouvellesPromotions = 34;
    const PromotionsEtNouvellesNouvelles = 35;
    const PromotionsEtNouvellesConcours = 36;
    const PromotionsEtNouvellesPromoPieces = 37;
    const UrgenceRoutiere24H = 38;
    const InscriptionNextPart = 39;
    const InscriptionNextPartAbonnement = 40;
    const MentionsLegales = 41;
    const DemandePieces = 42;
    const BonDeTravail = 43;
    const Fournisseurs = 44;
    const PlanSite = 45;
    const EXTERNAL_nextPartLogin = 46;
}

class RD_PageLink
{
    private $_folder = "";
    private $_page = "";
    
    //public static function getLink(folder $folder, page $page)
    public static function getHref($folder, $page)
    {
        switch($folder){
            case folder::CamionsNeufs:$_folder = "/camions-neufs/";break;
            case folder::Nextpart:$_folder = "/nextpart/";break;
            case folder::NousJoindre:$_folder = "/nous-joindre/";break;
            case folder::PiecesService:$_folder = "/pieces-services/";break;
            case folder::PromotionsNouvelles:$_folder = "/promotions-nouvelles/";break;
            case folder::RemorquesNeuves:$_folder = "/remorques-neuves/";break;            
            case folder::Service:$_folder = "/service/";break;
            case folder::VehiculesUtilitaires:$_folder = "/vehicules-utilitaires/";break;
            case folder::Root:$_folder = "/";break;
            default:$_folder = "";break;
        }
        
        switch($page){
            case page::Accueil:$_page="accueil";break;
            case page::CamionsInventaireComplet:$_page = "inventaire-camion-neufs";break;
            case page::CamionsInternational:$_page = "camions-lourds-neufs-international";break;
            case page::CamionsOttawaKalmar:$_page = "ottawa-kalmar";break;
            case page::CamionsIsuzu:$_page = "isuzu";break;
            case page::CamionsOccasion:$_page = "camions-occasion";break;
            case page::RemorqesNeuvesInventaireComplet:$_page = "inventaire-remorques";break;
            case page::RemorquesDiMond:$_page = "remorques-di-mond";break;
            case page::RemorquesDoepker:$_page = "remorques-doepker";break;
            case page::VehiculesUtilitairesMiniExcavatrices:$_page = "mini-excavatrices";break;
            case page::VehiculesUtilitairesTransporteursToutTerrain:$_page = "transporteurs-tout-terrain";break;
            case page::VehiculesUtilitairesSkidSteerEtChargeurAChenilles:$_page = "skid-steer-chargeur-chenilles";break;
            case page::VehiculesUtilitairesChargeuseV3EtV4:$_page = "chargeuses-yanmar-v3-v4";break;
            case page::LocationsDeCamions:$_page = "location-camions";break;
            case page::PiecesEtServicesPiecesEtAsccessoires:$_page = "pieces-accessoires";break;
            case page::PiecesEtServicesServiceRoutier:$_page = "service-routier";break;
            case page::PiecesEtServicesServiceApresVente:$_page = "apres-vente";break;
            case page::PiecesEtServicesFinancement:$_page = "financement";break;
            case page::PiecesEtServicesPromoPieces:$_page = "promo-pieces";break;
            case page::NousJoindre:$_page = "nous-joindre";break;
            case page::NousJoindreCamionsInterLanaudiere:$_page = "inter-lanaudiere";break;
            case page::NousJoindreCamionsInterAnjou:$_page = "camions-inter-anjou";break;
            case page::NousJoindreInterBoucherville:$_page = "inter-boucherville";break;
            case page::NousJoindreLesCamionsBeaudoin:$_page = "les-camions-beaudoin";break;
            case page::NousJoindreCentreduCamionBeaudoin:$_page = "centre-camion-beaudoin";break;
            case page::NousJoindreCharestInternational:$_page = "charest-international";break;
            case page::NousJoindreGarageCharestetFreres:$_page = "garage-charest-freres";break;
            case page::NousJoindreLeCentreduCamionAmiante:$_page = "le-centre-camion-amiante";break;
            case page::NousJoindreLeCentreduCamionBeauce:$_page = "le-centre-camion-beauce";break;
            case page::NousJoindreLeCentreRoutier1994:$_page = "centre-routier-1994";break;
            case page::NousJoindreCamionsInternationalElite:$_page = "camions-international-elite";break;
            case page::NousJoindreGarageRobert:$_page = "garage-robert";break;
            case page::Apropos:$_page = "a-propos";break;
            case page::PromotionsEtNouvellesPromotions:$_page = "promotions";break;
            case page::PromotionsEtNouvellesNouvelles:$_page = "nouvelles";break;
            case page::PromotionsEtNouvellesConcours:$_page = "concours";break;
            case page::PromotionsEtNouvellesPromoPieces:$_page = "promo-pieces";break;
            case page::UrgenceRoutiere24H:$_page = "urgence-routiere-24h";break;
            case page::InscriptionNextPart:$_page = "abonnement-nextpart";break;
            case page::InscriptionNextPartAbonnement:$_page = "confirmation-abonnement";break;
            case page::MentionsLegales:$_page = "mentions-legales";break;
            case page::DemandePieces:$_page = "demande-pieces";break;
            case page::BonDeTravail:$_page = "demande-bon-travail";break;
            case page::Fournisseurs:$_page = "fournisseurs";break;
            case page::PlanSite:$_page = "plan-site";break;
            case page::EXTERNAL_nextPartLogin: $_page = "https://www.nexpart.com/login.php";
            default: $_page = "accueil";
        }
        
        echo $_folder . $_page . ".php";
    }
}

class RD_Header{
     /*
     * public static function getMetaContent($pageName)
     */  
    public static function getMetaContent($pageName)
    {   
        $metaContent = "";
        switch($pageName){
            case "a-propos.php":$metaContent = "Le Réseau Dynamique est le plus important réseau de concessionnaires International au Québec. Plus de 19 points de service répartis sur le territoire québécois.";break;
            case "accueil.php":$metaContent = "Réseau Dynamique est concessionnaire panquébécois de camions International et détaillant de camions et véhicules routiers Ottawa Kalmar, Isuzu et Yanmar.";break;
            case "promotions.php":$metaContent = "Profitez de promotions avantageuses à l&#39;achat d&#39;un ou plusieurs camions lourds International chez votre concessionnaire Réseau Dynamique.";break;
            case "nous-joindre.php":$metaContent = "Trouvez les coordonnées des succursales Réseau Dynamique au Québec.";break;
            case "urgence-routiere-24h.php":$metaContent = "Pour toute urgence sur la route, contactez la succursale la plus près de votre emplacement et profitez d&#39;une assistance routière ou un remorquage 24 h.";break;
            case "camions-lourds-neufs-international.php":$metaContent = "Trouvez un grand inventaire de camions lourds International neufs dans les divisions de Réseau Dynamique. Plus de 11 concessionnaires partout au Québec.";break;
            case "inventaire-camion-neufs.php":$metaContent = "Réseau Dynamique possède une grande flotte de camions neufs International, Ottawa Kalmar et Isuzu. Consultez notre inventaire en ligne pour voir nos modèles.";break;
            case "isuzu.php":$metaContent = "Présents à travers le Québec, les concessionnaires de Réseau Dynamique sont dépositaires de la gamme complète de camions Isuzu.";break;
            case "ottawa-kalmar.php.php":$metaContent = "Trouvez un grand inventaire de camions Ottawa Kalmar neufs dans les divisions de Réseau Dynamique. Plus de 11 concessionnaires présents partout au Québec.";break;
            case "les-camions-beaudoin.php":$metaContent = "Rendez-vous à la succursale Les Camions Beaudoin pour un vaste choix de camions International et l&#39;entretien ou la réparation de votre camion lourd.";break;
            case "inter-lanaudiere.php":$metaContent = "Rendez-vous à la succursale Inter-Lanaudière pour un vaste choix de camions International et l&#39;entretien ou la réparation de votre camion lourd.";break;
            case "camions-inter-anjou.php":$metaContent = "Inter-Anjou à Anjou offre un vaste choix de camions International en plus d&#39;offrir l&#39;entretien et la réparation de votre camion lourd.";break;
            case "inter-boucherville.php":$metaContent = "Rendez-vous à la succursale Inter-Boucherville pour un vaste choix de camions International et l&#39;entretien ou la réparation de votre camion lourd.";break;
            case "centre-camion-beaudoin.php":$metaContent = "Rendez-vous à la succursale Centre du Camion Beaudoin ou pour un vaste choix de camions International et l&#39;entretien ou la réparation de votre camion lourd.";break;
            case "charest-international.php":$metaContent = "Rendez-vous à la succursale Charest International pour un vaste choix de camions International et l&#39;entretien ou la réparation de votre camion lourd.";break;
            case "garage-charest-freres.php":$metaContent = "Garage Charest et Frères à Trois-Rivières offre un vaste choix de camions International en plus d&#39;offrir l&#39;entretien et la réparation de votre camion lourd.";break;
            case "le-centre-camion-amiante.php":$metaContent = "Le Centre du Camion à Thetford Mines offre un vaste choix de camions International en plus d&#39;offrir l&#39;entretien et la réparation de votre camion lourd.";break;
            case "le-centre-camion-beauce.php":$metaContent = "Le Centre du Camion de St-Georges offre un vaste choix de camions International en plus d&#39;offrir l&#39;entretien et la réparation de votre camion lourd.";break;
            case "centre-routier-1994.php":$metaContent = "Le Centre Routier 1994 à Rivière-du-Loup offre un vaste choix de camions International en plus d&#39;offrir l&#39;entretien et la réparation de votre camion lourd.";break;
            case "camions-international-elite.php":$metaContent = "Camions International Élite à Québec offre un vaste choix de camions International en plus d&#39;offrir l&#39;entretien et la réparation de votre camion lourd.";break;
            case "garage-robert.php":$metaContent = "Rendez-vous à la succursale Les Camions Beaudoin pour un vaste choix de camions International et l&#39;entretien ou la réparation de votre camion lourd.";break;
            case "confirmation-abonnement.php":$metaContent = "Merci de vous être abonné à NextPart. Nous espérons que votre expérience avec Réseau Dynamique en soit bonifiée!";break;
            case "abonnement-nextpart.php":$metaContent="Inscrivez-vous au service NextPart.";break;
            case "service-routier.php":$metaContent = "Économisez temps et coûts de remorquage grâce au service routier pour camions lourds de Réseau Dynamique. Service disponible partout au Québec.";break;
            case "pieces-accessoires.php":$metaContent = "Réseau Dynamique offre un large inventaire de pièces et accessoires pour les camions de toutes tailles et de toutes marques.";break;
            case "financement.php":$metaContent = "Pour un camion neuf ou d&#39;occasion ou encore un lot de camions, vous trouverez satisfaction parmi notre gamme de produits de financement concurrentiels.";break;
            case "apres-vente.php":$metaContent = "Profitez d&#39;un service après-vente incomparable sur votre camion lourd avec Réseau Dynamique grâce à un réseau composé de 19 points de service au Québec.";break;
            case "promotions.php":$metaContent = "Profitez de promotions avantageuses à l&#39;achat d&#39;un ou plusieurs camions lourds International chez votre concessionnaire Réseau Dynamique.";break;
            case "promo-pieces.php":$metaContent = "";break;
            case "nouvelles.php":$metaContent = "Consultez les nouvelles et découvrez les événements à venir du Réseau Dynamique.";break;
            case "concours.php":$metaContent = "";break;
            case "remorques-doepker.php":$metaContent = "Découvrez nos modèles haute performance de remorques agricoles, ponts plats, remorques-citernes, remorques pour bois d&#39;oeuvre et remorques à gravier Doepker.";break;
            case "remorques-di-mond.php":$metaContent = "";break;
            case "inventaire-remorques.php":$metaContent = "Réseau Dynamique possède une grande flotte de remorques et ponts plats. Consultez notre inventaire en ligne pour voir nos modèles.";break;
            case "transporteurs-tout-terrain.php":$metaContent = "Offrez-vous des performances supérieures et respectez l&#39;environnement avec les transporteurs tout-terrain de Yanmar. Découvrez les modèles maintenant!";break;
            case "skid-steer-chargeur-chenilles.php":$metaContent = "Découvrez la polyvalence et la puissance des Skeed Steer et chargeur à Chenilles Yanmar disponibles chez Réseau Dynamique dès maintenant!";break;
            case "mini-excavatrices.php":$metaContent = "Les mini-excavatrices de Yanmar sont synonymes de puissance, durabilité et efficacité. Retrouvez-les chez votre dépositaire Réseau Dynamique dès maintenant.";break;
            case "chargeuses-yanmar-v3-v4.php":$metaContent = "Découvrez dès maintenant les avantages des chargeuses V3 et V4 de Yanmar, les véhicules utilitaires idéaux pour vos travaux extérieurs et intérieurs.";break;
            case "fournisseurs.php":$metaContent = "Le Réseau Dynamique est le plus important réseau de concessionnaires International au Québec. Plus de 19 points de service répartis sur le territoire québécois.";break;
            case "plan-site.php":$metaContent = "Consultez le plan du site pour en savoir plus sur les produits et services de Réseau Dynamique.";break;
            case "mentions-legales.php":$metaContent = "Pour toute information d’ordre légal concernant le site Web de Réseau Dynamique, consultez les mentions légales.";break;
            case "location-camions.php":$metaContent = "Réseau Dynamique offre un service de location de camions lourds International et Ottawa Kalmar, neufs et usagés louables à court ou à long terme.";break;
            case "demande-pieces.php":$metaContent = "";break;
            case "demande-bon-travail.php":$metaContent = "";break;
            case "camions-occasion.php":$metaContent = "Trouvez un grand inventaire de camions lourds d&#39;occasion dans les divisions de Réseau Dynamique. Plus de 11 concessionnaires présents partout au Québec.";break;
            //case "":$metaContent = "";
            default:;
        }
        
        echo $metaContent == "" ? "Réseau Dynamique est concessionnaire panquébécois de camions International et détaillant de camions et véhicules routiers Ottawa Kalmar, Isuzu et Yanmar." : $metaContent;
    }
    
    /*
     * public static function getPageTitle($pageName)
     */    
    public static function getPageTitle($pageName)
    {   
        $title = "";
        switch($pageName){
            case "a-propos.php":$title = "À Propos Réseau Camion International | Réseau Dynamique";break;
            case "accueil.php":$title = "";break;
            case "promotions.php":$title = "";break;
            case "nous-joindre.php":$title = "Nous joindre | Réseau Dynamique";break;
            case "urgence-routiere-24h.php":$title = "Urgence Routière 24 h Camions Lourds Canada et États-Unis";break;
            case "camions-lourds-neufs-international.php":$title = "Camions Neufs International | Réseau Dynamqiue";break;
            case "inventaire-camion-neufs.php":$title = "Camion neufs | Réseau Dynamique";break;
            case "isuzu.php":$title = "Camions Neufs Isuzu | Réseau Dynamique";break;
            case "ottawa-kalmar.php.php":$title = "Camions Lourds Neufs Ottawa Kalmar | Réseau Dynamique";break;
            case "les-camions-beaudoin.php":$title = "Camions International Saint-Hyacinthe | Les Camions Beaudoin";break;
            case "inter-lanaudiere.php":$title = "Camions International Joliette | Inter-Launaudiere";break;
            case "camions-inter-anjou.php":$title = "Camions International Anjou | Inter-Anjou";break;
            case "inter-boucherville.php":$title = "Camions International Boucherville | Inter-Boucherville";break;
            case "centre-camion-beaudoin.php":$title = "Camions International Drummondville | Centre du Camion Beaudoin";break;
            case "charest-international.php":$title = "Camions International Victoriaville | Charest International";break;
            case "garage-charest-freres.php":$title = "Camions International Trois-Rivières | Garage Charest et Frères";break;
            case "le-centre-camion-amiante.php":$title = "Camions International Thetford Mines | Le Centre du camion";break;
            case "le-centre-camion-beauce.php":$title = "Camions International St-Georges | Le Centre du Camion";break;
            case "centre-routier-1994.php":$title = "Camions International Rivière-du-Loup | Centre Routier 1994";break;
            case "camions-international-elite.php":$title ="Camions International Québec | Camions International Élite";break; 
            case "garage-robert.php":$title = "Garage Robert Shawinigan | Réseau Dynamique";break;
            case "confirmation-abonnement.php":$title = "";break;
            case "abonnement-nextpart.php":$title = "Inscription à NextPart | Réseau Dynamique";break;
            case "service-routier.php":$title = "Service Routier Mécanique Camion Lourd | Réseau Dynamique";break;
            case "pieces-accessoires.php":$title = "Pièces et Accessoires pour Camions | Réseau Dynamique";break;
            case "financement.php":$title = "Financement Camions Lourds Neufs & Usagés | Réseau Dynamique";break;
            case "apres-vente.php":$title = "Service Après-Vente Camions Lourds | Réseau Dynamique";break;
            case "promotions.php":$title = "Promotions sur Camions Lourds | Réseau Dynamique";break;
            case "promo-pieces.php":$title = "Promo pièces | Réseau Dynamique";break;
            case "nouvelles.php":$title = "ouvelles et Événements | Réseau Dynamique";break;
            case "concours.php":$title = "Concours | Réseau Dynamique";break;
            case "remorques-doepker.php":$title = "Remorques Doepker | Réseau Dynamique";break;
            case "remorques-di-mond.php":$title = "Remorques Di-Mond | Réseau Dynamique";break;
            case "inventaire-remorques.php":$title = "Inventaire complet de remorques | Réseau Dynamique";break;
            case "transporteurs-tout-terrain.php":$title = "Transporteurs Tout Terrain Yanmar | Réseau Dynamique";break;
            case "skid-steer-chargeur-chenilles.php":$title = "Skeed Steer & Chargeur à Chenilles Yanmar | Réseau Dynamique";break;
            case "mini-excavatrices.php":$title = "Mini-Excavatrices Yanmar | Réseau Dynamique";break;
            case "chargeuses-yanmar-v3-v4.php":$title = "Chargeuses Yanmar V3 et V4 | Réseau Dynamique";break;
            case "fournisseurs.php":$title = "Fournisseurs | Réseau Dynamique";break;
            case "plan-site.php":$title = "Plan du site | Réseau Dynamique";break;
            case "mentions-legales.php":$title = "Mentions légales | Réseau Dynamique";break;
            case "location-camions.php":$title = "Location de Camions Lourds | Réseau Dynamique";break;
            case "demande-pieces.php":$title = "Demande de pièces | Réseau dynamique";break;
            case "demande-bon-travail.php":$title = "Demande de bon de travail | Réseau dynamique";break;
            case "camions-occasion.php":$title = "Camions Lourds d'Occasion | Réseau Dynamique";break;
            //case "":$title = "";
            default:;
        }
        
        echo $title == "" ? "Réseau Dynamique | Concessionnaire Camions International" : $title;
    }
}
?>