<?php
interface nomSuccursale
{
    const Joliette = 1;
    const Anjou = 2;
    const Boucherville = 3;
    const SaintHyacinthe = 4;
    const Drummondville = 5;
    const Victoriaville = 6;
    const TroisRivieres = 7;
    const ThetfordMines = 8;
    const SaintGeorges = 9;
    const RiviereDuLoup = 10;
    const Quebec = 11;
    const Shawinigan = 12;
    const Chicoutimi = 13;
    const Clermont = 14;
    const Forestville = 15;
    const Matane = 16;
    const Rimouski = 17;
    const RiviereAuRenard = 18;
    const SeptIles  = 19;
    const SainteMarieDeBeauce = 20;
}

class Contact{
    private $nom = '';
    private $email = '';
    private $titre = '';
    
    private $contacts = array();

    public function addItem($obj, $key = null) {
        if ($key == null) {
            $this->items[] = $obj;
        }
        else {
            if (isset($this->items[$key])) {
                throw new KeyHasUseException("Key $key already in use.");
            }
            else {
                $this->items[$key] = $obj;
            }
        }
    }

    public function deleteItem($key) {
        if (isset($this->items[$key])){
            unset($this->items[$key]);
        }
        else {
            throw new KeyInvalidException("Invalid key $key.");
        }
    }

    public function getItem($key) {
        if (isset($this->items[$key])) {
            return $this->items[$key];
        }
        else {
            throw new KeyInvalidException("Invalid key $key.");
        }
    }    
}

class Succursales{
    public $id = 0;
    public $nom = "";
    public $nomLong = "";
    public $telephones = "";
    public $adresse = "";
    public $ville = "";
    public $codePostal = "";
    public $province = "";
    public $isSuccursale = "0";
    public $isPointService = "1";
    public $imageBatisse;
    public $imageBatisseALT;
    public $contacts;
    public $heureOuvertureLundi = "";
    public $heureOuvertureMardi = "";
    public $heureOuvertureMercredi = "";
    public $heureOuvertureJeudi = "";
    public $heureOuvertureVendredi = "";
    public $heureOuvertureSamedi = "";
    public $heureOuvertureDimanche = "";
    public $servicesOfferts;
    public $serviceRoutierTitre = "";
    public $serviceRoutierTelephone = "";
    public $remorquageTitre = "";
    public $remorquageInfo = "";
    public $remorquageTelephones = "";
    public $parametreBonTravailNomSuccursale = "";
    public $parametreDemandePiecesNomSuccursale = "";
    
    public function load($succursale){
        
        switch($succursale)
        {
            case nomSuccursale::Drummondville:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Centre du Camion Beaudoin";
                $this->adresse = "5360, rue St-Roch";
                $this->ville = "Drummondville";
                $this->province = "Québec";
                $this->codePostal = "J2B 6V4";
                $this->telephones[] = "Téléphone : 819 478-8186";
                $this->telephones[] = "Sans frais : 800 463-8186";
                $this->telephones[] = "Télécopieur : 819 472-1484";
                $this->heureOuvertureLundi = "7:00 - 00:30";
                $this->heureOuvertureMardi = "7:00 - 00:30";
                $this->heureOuvertureMercredi = "7:00 - 00:30";
                $this->heureOuvertureJeudi = "7:00 - 00:30";
                $this->heureOuvertureVendredi = "7:00 - 00:30";
                $this->heureOuvertureSamedi = "7:00 - 12:00";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Steve Hallé", "Président Directeur Général", "shalle@camionbeaudoin.com"));
                $this->contacts->addItem(array("Pierre Lamothe", "Directeur des ventes", "plamothe@camionbeaudoin.com"));
                $this->contacts->addItem(array("Michel Marquis", "Directeur des pièces", "mmarquis@camionbeaudoin.com"));
                $this->contacts->addItem(array("Jean-François Taillon", "Directeur du services", "jftaillon@camionbeaudoin.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-centre-du-camion-beaudoin.jpg";
                $this->imageBatisseALT= "Centre du Camion Beaudoin";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Air climatisé";
                $this->servicesOfferts[] = "Produits de réfrigération Carrier";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "Service routier";
                $this->servicesOfferts[] = "Remorquage";
                $this->servicesOfferts[] = "Distributeur Ottawa Kalmar";
                $this->servicesOfferts[] = "Stationnement pour remorque";
                $this->servicesOfferts[] = "Réparation de remorque";
                $this->serviceRoutierTitre = "Service Routier";
                $this->serviceRoutierTelephone[] = "Dimanche 00:00 au samedi 8:00";
                $this->serviceRoutierTelephone[] = "Téléphone : 819 478-8186";
                $this->remorquageTitre = "Remorquage Québec Centre";
                $this->remorquageInfo[] = "5360, rue St-Roch";
                $this->remorquageInfo[] = "Drummondville (Québec)";
                $this->remorquageInfo[] = "J2B 6V4";
                $this->remorquageTelephones[] = "Pagette : 819 472-8784";
                $this->remorquageTelephones[] = "Cellulaire : 819 472-9498";
                $this->remorquageTelephones[] = "Cellulaire : 819 314-2152";
                $this->parametreBonTravailNomSuccursale = "Centre%20du%20Camion%20Beaudoin%20-%20Drummondville";
                $this->parametreDemandePiecesNomSuccursale = "Centre%20du%20Camion%20Beaudoin%20-%20Drummondville";
                break;
            case nomSuccursale::Joliette:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Camions Inter-Lanaudière";
                $this->adresse = "791, Samuel Racine";
                $this->ville = "Joliette";
                $this->province = "Québec";
                $this->codePostal = "J6E 0E8";
                $this->telephones[] = "Téléphone : 450 760-9996";
                $this->telephones[] = "Pièces : 450 760-3135";
                $this->telephones[] = "Services : 450 760-3510";
                $this->telephones[] = "Télécopieur : 450 760-3585";
                $this->heureOuvertureLundi = "7:00 - 0:00";
                $this->heureOuvertureMardi = "7:00 - 0:00";
                $this->heureOuvertureMercredi = "7:00 - 0:00";
                $this->heureOuvertureJeudi = "7:00 - 0:00";
                $this->heureOuvertureVendredi = "7:00 - 0:00";
                $this->heureOuvertureSamedi = "Fermé";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Sébastien Gagné", "Président","sebastieng@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Patrick Vig", "Directeur service","patrickv@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Benoit Blier", "Contremaître","benoitb@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Richard Lépine", "Directeur des pièces","richardl@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Pierre Harnois", "Représentant des pièces et service","pierreh@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Nadine Beauparlant", "Représentant des pièces et service","nadineb@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Guillaume Coutu", "Représentant des pièces et service","guillaumec@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Alex Calvé", "Représentant vente camion neuf, usagé et location","alexc@camionsinterlanaudiere.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-camions-inter-lanaudiere.jpg";
                $this->imageBatisseALT= "Camions Inter-Lanaudière";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Service routier";
                $this->servicesOfferts[] = "Remorquage";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Air climatisé";
                $this->servicesOfferts[] = "Stationnement pour remorque";
                $this->servicesOfferts[] = "Réparation de remorque";
                $this->serviceRoutierTitre = "Service Routier 24/7";
                $this->serviceRoutierTelephone[] = "Jour : 450 760-9996";
                $this->serviceRoutierTelephone[] = "Nuit : 1-844-427-6297";
                $this->remorquageTitre = "Remorquage";
                $this->remorquageInfo = "<b>Remorquage Rondeau</b>";
                $this->remorquageInfo = "450 887-2970";
                $this->parametreBonTravailNomSuccursale = "Camions%20Inter-Lanaudi%C3%A8re%20-%20Joliette";
                $this->parametreDemandePiecesNomSuccursale = "Camions%20Inter-Lanaudi%C3%A8re%20-%20Joliette";
                break;
            case nomSuccursale::Anjou:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Camions Inter-Anjou";
                $this->adresse = "8300, rue Edison";
                $this->ville = "Anjou";
                $this->province = "Québec";
                $this->codePostal = "H1J 1S8";
                $this->telephones[] = "Téléphone : 514 353-9720";
                $this->telephones[] = "Télécopieur : 514 353-3222";                
                $this->heureOuvertureLundi = "7:00 - 00:30";
                $this->heureOuvertureMardi = "7:00 - 00:30";
                $this->heureOuvertureMercredi = "7:00 - 00:30";
                $this->heureOuvertureJeudi = "7:00 - 00:30";
                $this->heureOuvertureVendredi = "7:00 - 00:30";
                $this->heureOuvertureSamedi = "Fermé";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Nathalie Hallé", "Présidente","nathalie.halle@camionsinteranjou.com"));
                $this->contacts->addItem(array("Malek Toursal", "Directeur des ventes","malek.toursal@camionsinteranjou.com"));
                $this->contacts->addItem(array("Sylvain Goulet", "Directeur des pièces","sylvain.goulet@camionsinteranjou.com"));
                $this->contacts->addItem(array("Frédéric Benoit", "Directeur du service","frederic.benoit@camionsinteranjou.com"));
                $this->contacts->addItem(array("Sylvain Lalumière", "Directeur Technique","sylvain.lalumiere@reseaudynamique.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-camions-inter-anjou.jpg";
                $this->imageBatisseALT= "Camions Inter-Anjou";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Atelier de carosserie";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "Service routier 24/7";
                $this->serviceRoutierTitre = "Service routier 24/7";
                $this->serviceRoutierTelephone[] = "Téléphone : 514 772-1456";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->parametreBonTravailNomSuccursale = "Camions%20Inter-Anjou%20-%20Anjou%C2%A0";
                $this->parametreDemandePiecesNomSuccursale = "Camions%20Inter-Anjou%20-%20Anjou%C2%A0";
                break;case nomSuccursale::Boucherville:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Inter-Boucherville";
                $this->adresse = "50, chemin du Tremblay";
                $this->ville = "Boucherville";
                $this->province = "Québec";
                $this->codePostal = "J4B 6Z5";
                $this->telephones[] = "Téléphone : 450 655-5050";
                $this->telephones[] = "Montréal : 514 523-5860";
                $this->telephones[] = "Télécopieur : 450 655-5649";
                $this->heureOuvertureLundi = " 	7:00 - 12:45 a.m.";
                $this->heureOuvertureMardi = " 	7:00 - 12:45 a.m.";
                $this->heureOuvertureMercredi = " 	7:00 - 12:45 a.m.";
                $this->heureOuvertureJeudi = " 	7:00 - 12:45 a.m.";
                $this->heureOuvertureVendredi = "7:00 - 19:00";
                $this->heureOuvertureSamedi = "7:00 - 17:00";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Nathalie Hallé", "Présidente","nathalie.halle@camionsinteranjou.com"));
                $this->contacts->addItem(array("Michel Cayer", "Directeur des pièces","michel.cayer@inter-boucherville.com"));
                $this->contacts->addItem(array("Pascal Adam Richard", "Directeur du service","pascaladam.richard@inter-boucherville.com"));
                $this->contacts->addItem(array("Sylvain Lalumière", "Directeur technique","sylvain.lalumiere@camionsinteranjou.com"));
                $this->contacts->addItem(array("Alain Bourgault", "Représentant pièces et service","514-918-5150","alain.bourgault@inter-boucherville.com"));
                $this->contacts->addItem(array("Michel Bélisle", "Représentant pièces et service","514-404-6622" ,"michel.belisle@inter-boucherville.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-inter-boucherville.jpg";
                $this->imageBatisseALT= "Inter-Boucherville";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Atelier de carosserie";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Service routier";
                $this->servicesOfferts[] = "Remorquage";
                $this->serviceRoutierTitre = "Nous offrons Service</br>Routier 24/7";
                $this->serviceRoutierTelephone[] = "Téléphone : 514 772-1456";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->parametreBonTravailNomSuccursale = "Inter-Boucherville%20-%20Boucherville";
                $this->parametreDemandePiecesNomSuccursale = "Inter-Boucherville%20-%20Boucherville";
                break;
            case nomSuccursale::SaintHyacinthe:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Les Camions Beaudoin";
                $this->adresse = "3255, rue Picard";
                $this->ville = "St-Hyacinthe";
                $this->province = "Québec";
                $this->codePostal = "J2S 1H3";
                $this->telephones[] = "Téléphone : 450 774-7213";
                $this->telephones[] = "Sans frais : 800 774-7213";
                $this->telephones[] = "Télécopieur : 450 774-3307";
                $this->heureOuvertureLundi = "7:30 - 00:30 a.m.";
                $this->heureOuvertureMardi = "7:30 - 00:30 a.m.";
                $this->heureOuvertureMercredi = "7:30 - 00:30 a.m.";
                $this->heureOuvertureJeudi = " 	7:30 - 00:30 a.m.";
                $this->heureOuvertureVendredi = "7:30 - 00:30 a.m.";
                $this->heureOuvertureSamedi = "8:00 à MIDI";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Roger Lachapelle", "Directeur général","rlachapelle@camionbeaudoin.com"));
                $this->contacts->addItem(array("Pierre Lamothe", "Directeur des ventes","plamothe@camionbeaudoin.com"));
                $this->contacts->addItem(array("Paul Royer", "Directeur des pièces","proyer@camionbeaudoin.com"));
                $this->contacts->addItem(array("Mario Julien", "Directeur du service","mjulien@camionbeaudoin.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-les-camions-beaudoin.jpg";
                $this->imageBatisseALT= "Les Camions Beaudoin";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Air climatisé";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "Ramassage et livraison";
                $this->servicesOfferts[] = "Remorquage";
                $this->servicesOfferts[] = "Stationnement pour remorque";
                $this->servicesOfferts[] = "Réparation de remorque";
                $this->serviceRoutierTitre = "Remorquage Québec Centre";
                $this->serviceRoutierTelephone[] = "Téléphone #1 : 819 472-9498";
                $this->serviceRoutierTelephone[] = "Téléphone #2 : 819 478-8186";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->parametreBonTravailNomSuccursale = "Les%20Camions%20Beaudoin%20-%20Saint-Hyacinthe";
                $this->parametreDemandePiecesNomSuccursale = "Les%20Camions%20Beaudoin%20-%20Saint-Hyacinthe";
                break;
//            case nomSuccursale::Joliette:
//                $this->isSuccursale = 1;
//                $this->isPointService = 0;
//                $this->nomLong = "";
//                $this->adresse = "";
//                $this->ville = "";
//                $this->province = "Québec";
//                $this->codePostal = "";
//                $this->telephones[] = "";
//                $this->telephones[] = "";
//                $this->telephones[] = "";
//                $this->heureOuvertureLundi = "";
//                $this->heureOuvertureMardi = "";
//                $this->heureOuvertureMercredi = "";
//                $this->heureOuvertureJeudi = "";
//                $this->heureOuvertureVendredi = "";
//                $this->heureOuvertureSamedi = "";
//                $this->heureOuvertureDimanche = "";
//                $this->contacts = new Contact();
//                $this->contacts->addItem(array("", "",""));
//                $this->imageBatisse = "../../_assets/images/batisse/.jpg";
//                $this->imageBatisseALT= "";
//                $this->servicesOfferts[] = "";
//                $this->serviceRoutierTitre = "Service Routier";
//                $this->serviceRoutierTelephone[] = "";
//                $this->remorquageTitre = "";
//                $this->remorquageInfo[] = "";
//                $this->remorquageTelephones[] = "";
//                $this->parametreBonTravailNomSuccursale = "";
//                $this->parametreDemandePiecesNomSuccursale = "";
                break;
            
            default:;
        }
    
        return true;
    }
}
?>