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
    const NousJoindreCamionsInterLanaudiere = 20;
    const NousJoindreCamionsInterAnjou = 21;
    const NousJoindreInterBoucherville = 22;
    const NousJoindreLesCamionsBeaudoin = 23;
    const NousJoindreCentreduCamionBeaudoin = 24;
    const NousJoindreCharestInternational = 25;
    const NousJoindreGarageCharestetFreres = 26;
    const NousJoindreLeCentreduCamionAmiante = 27;
    const NousJoindreLeCentreduCamionBeauce = 28;
    const NousJoindreLeCentreRoutier1994 = 29;
    const NousJoindreCamionsInternationalElite = 30;
    const NousJoindreGarageRobert = 31;
    const Apropos = 32;
    const PromotionsEtNouvellesPromotions = 33;
    const PromotionsEtNouvellesNouvelles = 34;
    const PromotionsEtNouvellesConcours = 35;
    const PromotionsEtNouvellesPromoPieces = 36;
    const UrgenceRoutiere24H = 37;
    const InscriptionNextPartAbonnement = 38;
    const MentionsLegales = 39;
}

class pageLink
{
    private $_folder="";
    private $_page="";
    
    //public static function getLink(folder $folder, page $page)
    public static function getHref($folder, $page)
    {
        switch($folder)
        {
            case folder::CamionsNeufs:$_folder = "camions-neufs/";break;
            case folder::Nextpart:$_folder = "nextpart/";break;
            case folder::NousJoindre:$_folder = "nous-joindre/";break;
            case folder::PiecesService:$_folder = "pieces-services/";break;
            case folder::PromotionsNouvelles:$_folder = "promotions-nouvelles/";break;
            case folder::RemorquesNeuves:$_folder = "remorques-neuves/";break;            
            case folder::Service:$_folder = "service/";break;
            case folder::VehiculesUtilitaires:$_folder = "vehicules-utilitaires/";break;
            case folder::Root:$_folder = "";break;
            default:$_folder = "";break;
        }
        
        switch ($page) {
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
            case page::InscriptionNextPartAbonnement:$_page = "confirmation-abonnement";break;
            case page::MentionsLegales:$_page = "mentions-legales";break;
            default: $_page = "accueil";
        }
        
        echo $_folder . $_page . ".php";
    }
}
?>