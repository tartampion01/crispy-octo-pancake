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
    const Isuzu = 21;
    
}

class Contact{
    private $nom = "";
    private $email = "";
    private $titre = "";
    
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

class RD_Succursales{
    public $id = 0;
    public $nom = "";
    public $nomLong = "";
    public $telephones;
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
    public $serviceRoutierTelephone;
    public $remorquageTitre = "";
    public $remorquageInfo;
    public $remorquageTelephones;
    public $emailOffreEmploi;
    private $parametreBonTravailNomSuccursale = "";
    private $parametreDemandePiecesNomSuccursale = "";
    public $GoogleMapSRC = "";
    
    public function getSuccursaleBonTravail()
    {
        return base64_encode($this->parametreBonTravailNomSuccursale);
    }
    
    public function getSuccursaleDemandePieces()
    {
        return base64_encode($this->parametreDemandePiecesNomSuccursale);
    }
    
    public static function getEmailDemandePieces($NomSuccursaleBase64)
    {
        $emails = '';

        switch ($NomSuccursaleBase64)
        {
            // Camions Inter-Lanaudière
            case "Q2FtaW9ucyBJbnRlci1MYW5hdWRpw6hyZQ==":$emails = "ericb@camionsinterlanaudiere.com";break;
            // Camions Inter-Anjou
            case "Q2FtaW9ucyBJbnRlci1BbmpvdQ==":$emails = "pieces@camionsinteranjou.com";break;
            // Inter-Boucherville
            case "SW50ZXItQm91Y2hlcnZpbGxl": $emails = "michel.cayer@inter-boucherville.com"; break;
            // Les Camions Beaudoin
            case "TGVzIENhbWlvbnMgQmVhdWRvaW4=": $emails = "proyer@camionbeaudoin.com,jpepin@camionbeaudoin.com,gagnonb@camionbeaudoin.com"; break;
            // Centre du Camion Beaudoin
            case "Q2VudHJlIGR1IENhbWlvbiBCZWF1ZG9pbg==": $emails = "flachapelle@camionbeaudoin.com"; break;
            // Charest International
            case "Q2hhcmVzdCBJbnRlcm5hdGlvbmFs": $emails = "stephanelambert@charestinter.ca"; break;
            // Garage Charest et Frères
            case "R2FyYWdlIENoYXJlc3QgZXQgRnLDqHJlcw==": $emails = "pierrepoudrette@garagecharest.qc.ca"; break;
            // Le Centre du Camion (Amiante)
            case "TGUgQ2VudHJlIGR1IENhbWlvbiAoQW1pYW50ZSk=": $emails = "eroy@camionamiante.com"; break;
            // Le Centre Routier 1994
            case "TGUgQ2VudHJlIFJvdXRpZXIgMTk5NA==": $emails = "jfraser@centreroutier.com"; break;
            // Le Centre du Camion (Beauce)
            case "TGUgQ2VudHJlIGR1IENhbWlvbiAoQmVhdWNlKQ==": $emails = "eroy@camionbeauce.com"; break;
            // Camions International Élite
            case "Q2FtaW9ucyBJbnRlcm5hdGlvbmFsIMOJbGl0ZQ==": $emails = "pdesrosiers@inter-quebec.com"; break;
            // Garage Robert
            case "R2FyYWdlIFJvYmVydA==": $emails = "proyer@camionbeaudoin.com,jpepin@camionbeaudoin.com,gagnonb@camionbeaudoin.com"; break;
            default:break;
        }

        return $emails;
    }
    
    public static function getEmailBonTravail($NomSuccursaleBase64)
    {
        $emails = '';

        switch ($NomSuccursaleBase64)
        {
            // Camions Inter-Lanaudière
            case "Q2FtaW9ucyBJbnRlci1MYW5hdWRpw6hyZQ==":$emails = "services@camionsinterlanaudiere.com";break;
            // Camions Inter-Anjou
            case "Q2FtaW9ucyBJbnRlci1BbmpvdQ==":$emails = "service@camionsinteranjou.com";break;
            // Inter-Boucherville
            case "SW50ZXItQm91Y2hlcnZpbGxl": $emails = "servicecib@inter-boucherville.com"; break;
            // Les Camions Beaudoin
            case "TGVzIENhbWlvbnMgQmVhdWRvaW4=": $emails = "mjulien@camionbeaudoin.com"; break;
            // Centre du Camion Beaudoin
            case "Q2VudHJlIGR1IENhbWlvbiBCZWF1ZG9pbg==": $emails = "service@camionbeaudoin.com"; break;
            // Charest International
            //case "Q2hhcmVzdCBJbnRlcm5hdGlvbmFs": $emails = "service@charestinter.ca"; break;
            // Garage Charest et Frères
            case "R2FyYWdlIENoYXJlc3QgZXQgRnLDqHJlcw==": $emails = "helene.chauvette@garagecharest.qc.ca"; break;
            // Le Centre du Camion (Amiante)
            case "TGUgQ2VudHJlIGR1IENhbWlvbiAoQW1pYW50ZSk=": $emails = "services@centrecamionamiante.com"; break;
            // Le Centre Routier 1994
            case "TGUgQ2VudHJlIFJvdXRpZXIgMTk5NA==": $emails = "service@centreroutier.com"; break;
            // Le Centre du Camion (Beauce)
            case "TGUgQ2VudHJlIGR1IENhbWlvbiAoQmVhdWNlKQ==": $emails = "service@centrecamionbeauce.com"; break;
            // Camions International Élite
            case "Q2FtaW9ucyBJbnRlcm5hdGlvbmFsIMOJbGl0ZQ==": $emails = "service@inter-quebec.com"; break;
            // Garage Robert
            case "R2FyYWdlIFJvYmVydA==": $emails = "pierrepoudrette@garagecharest.qc.ca"; break;
            default:break;
        }
        //echo $NomSuccursaleBase64;
        //$emails = "ptourigny@servicesinfo.ca,ptourigny@servicesinfo.ca";
        
        return $emails;
    }
    
    public function loadFromVilleString($ville)
    {
        $succEnum = -1;
        switch($ville)
        {
            case "Anjou": $succEnum=nomSuccursale::Anjou;break;
            case "Boucherville": $succEnum=nomSuccursale::Boucherville;break;
            case "Drummondville": $succEnum=nomSuccursale::Drummondville;break;
            case "Joliette": $succEnum=nomSuccursale::Joliette;break;
            case "Québec": $succEnum=nomSuccursale::Quebec;break;
            case "Rivière-du-Loup": $succEnum=nomSuccursale::RiviereDuLoup;break;
            case "Saint-Georges": $succEnum=nomSuccursale::SaintGeorges;break;
            case "Saint-Hyacinthe": $succEnum=nomSuccursale::SaintHyacinthe;break;
            case "Shawinigan": $succEnum=nomSuccursale::Shawinigan;break;
            case "Thetford Mines": $succEnum=nomSuccursale::ThetfordMines;break;
            case "Trois-Rivières": $succEnum=nomSuccursale::TroisRivieres;break;
            case "Victoriaville": $succEnum=nomSuccursale::Victoriaville;break;
            default:break;
        }

        $this->load($succEnum);
    }
    
    public function loadFromSuccursaleString($succursale)
    {
        $succEnum = -1;
        switch($succursale)
        {
            case "Q2FtaW9ucyBJbnRlci1BbmpvdQ==": $succEnum=nomSuccursale::Anjou;break;
            case "SW50ZXItQm91Y2hlcnZpbGxl": $succEnum=nomSuccursale::Boucherville;break;
            case "Q2VudHJlIGR1IENhbWlvbiBCZWF1ZG9pbg==": $succEnum=nomSuccursale::Drummondville;break;
            case "Q2FtaW9ucyBJbnRlci1MYW5hdWRpw6hyZQ==": $succEnum=nomSuccursale::Joliette;break;
            case "Q2FtaW9ucyBJbnRlcm5hdGlvbmFsIMOJbGl0ZQ==": $succEnum=nomSuccursale::Quebec;break;
            case "TGUgQ2VudHJlIFJvdXRpZXIgMTk5NA==": $succEnum=nomSuccursale::RiviereDuLoup;break;
            case "TGUgQ2VudHJlIGR1IENhbWlvbiAoQmVhdWNlKQ==": $succEnum=nomSuccursale::SaintGeorges;break;
            case "TGVzIENhbWlvbnMgQmVhdWRvaW4=": $succEnum=nomSuccursale::SaintHyacinthe;break;
            case "R2FyYWdlIFJvYmVydA==": $succEnum=nomSuccursale::Shawinigan;break;
            case "TGUgQ2VudHJlIGR1IENhbWlvbiAoQW1pYW50ZSk=": $succEnum=nomSuccursale::ThetfordMines;break;
            case "R2FyYWdlIENoYXJlc3QgZXQgRnLDqHJlcw==": $succEnum=nomSuccursale::TroisRivieres;break;
            case "Q2hhcmVzdCBJbnRlcm5hdGlvbmFs": $succEnum=nomSuccursale::Victoriaville;break;
            default:break;
        }

        $this->load($succEnum);
    }
   
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
                $this->emailOffreEmploi = "rh_dr@camionbeaudoin.com";
                $this->parametreBonTravailNomSuccursale = "Centre du Camion Beaudoin";
                $this->parametreDemandePiecesNomSuccursale = "Centre du Camion Beaudoin";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11106.822165113635!2d-72.53330098323865!3d45.89720200737321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc813b0527f597b%3A0x1be13eca5cb42f3e!2s5360+Rue+Saint+Roch+Sud%2C+Drummondville%2C+QC%2C+Canada!5e0!3m2!1sfr!2sfr!4v1409326316710";
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
                $this->contacts->addItem(array("Roger Lachapelle", "Directeur Général","rlachapelle@camionbeaudoin.com"));
                $this->contacts->addItem(array("Jean-Philippe Guévremont", "Directeur du service","jpguevremont@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Benoit Blier", "Directeur du Service","benoitb@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Simon Dallaire", "Aviseur Technique","simond@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Bruno Demers", "Aviseur Technique","brunod@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Éric Boudreau", "Directeur des pièces","ericb@camionsinterlanaudiere.com"));
                $this->contacts->addItem(array("Pierre Harnois", "Représentant des pièces et service","pierreh@camionsinterlanaudiere.com"));                
                $this->contacts->addItem(array("Ghislain Piché", "Représentant des pièces et service","ghislainp@camionsinterlanaudiere.com"));                
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
                //$this->serviceRoutierTitre = "Service Routier 24/7";
                //$this->serviceRoutierTelephone[] = "Jour : 450 760-9996";
                //$this->serviceRoutierTelephone[] = "Nuit : 1-844-427-6297";
                $this->remorquageTitre = "Remorquage";
                $this->remorquageInfo[] = "<b>Remorquage Rondeau</b>";
                $this->remorquageInfo[] = "450 887-2970";
                $this->emailOffreEmploi = "info@camionsinterlanaudiere.com";
                $this->parametreBonTravailNomSuccursale = "Camions Inter-Lanaudière";
                $this->parametreDemandePiecesNomSuccursale = "Camions Inter-Lanaudière";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22163.018849870517!2d-73.40596211499049!3d46.02361877120809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8bd890a98260f%3A0xbf44a24df56dd942!2s791+Rue+Samuel-Racine%2C+Joliette%2C+QC+J6E+0E8%2C+Canada!5e0!3m2!1sfr!2sfr!4v1408893246410";
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
                $this->heureOuvertureLundi = "7:00 - minuit";
                $this->heureOuvertureMardi = "7:00 - minuit";
                $this->heureOuvertureMercredi = "7:00 - minuit";
                $this->heureOuvertureJeudi = "7:00 - minuit";
                $this->heureOuvertureVendredi = "7:00 - 22:00";
                $this->heureOuvertureSamedi = "Fermé";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Nathalie Hallé", "Présidente","nathalie.halle@camionsinteranjou.com"));
                $this->contacts->addItem(array("Malek Toursal", "Directeur des ventes","malek.toursal@camionsinteranjou.com"));
                $this->contacts->addItem(array("Sylvain Goulet", "Directeur des pièces","sylvain.goulet@camionsinteranjou.com"));
                $this->contacts->addItem(array("Éric Morin", "Directeur de Service","eric.morin@camionsinteranjou.com"));
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
                $this->emailOffreEmploi = "";
                $this->parametreBonTravailNomSuccursale = "Camions Inter-Anjou";
                $this->parametreDemandePiecesNomSuccursale = "Camions Inter-Anjou";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d11163.844011680309!2d-73.564711!3d45.611426!3m2!1i1024!2i768!4f13.1!2m1!1s8300,+rue+Edison,+Anjou,,+H1J+1S8!6i15!3m1!1sfr";
                break;
            case nomSuccursale::Boucherville:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Inter-Boucherville";
                $this->adresse = "50, chemin du Tremblay";
                $this->ville = "Boucherville";
                $this->province = "Québec";
                $this->codePostal = "J4B 6Z5";
                $this->telephones[] = "Téléphone : 450 655-5050";
                $this->telephones[] = "Sans frais : 1-844-960-5050";
                $this->telephones[] = "Télécopieur : 450 655-5649";
                $this->heureOuvertureLundi = "7:00 - 12:00 a.m.";
                $this->heureOuvertureMardi = "7:00 - 12:00 a.m.";
                $this->heureOuvertureMercredi = "7:00 - 12:00 a.m.";
                $this->heureOuvertureJeudi = " 	7:00 - 12:00 a.m.";
                $this->heureOuvertureVendredi = "7:00 - 19:00";
                $this->heureOuvertureSamedi = "Fermé";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Nathalie Hallé", "Présidente","nathalie.halle@camionsinteranjou.com"));
                $this->contacts->addItem(array("Michel Cayer", "Directeur des pièces","michel.cayer@inter-boucherville.com"));
                $this->contacts->addItem(array("Pascal Adam Richard", "Directeur du service","pascaladam.richard@inter-boucherville.com"));
                $this->contacts->addItem(array("Sylvain Lalumière", "Directeur technique","sylvain.lalumiere@camionsinteranjou.com"));
                $this->contacts->addItem(array("Alain Bourgault", "Représentant pièces et service","514-918-5150","alain.bourgault@inter-boucherville.com"));
                $this->contacts->addItem(array("François Goudreau", "Représentant pièces et service","514-966-6454" ,"francois.goudreau@inter-boucherville.com"));
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
                $this->emailOffreEmploi = "rh@inter-boucherville.com";
                $this->parametreBonTravailNomSuccursale = "Inter-Boucherville";
                $this->parametreDemandePiecesNomSuccursale = "Inter-Boucherville";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.664724181342!2d-73.43226168421735!3d45.557069735262516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90313cf5751b1%3A0x467f2a404e4b0b50!2sLe+R%C3%A9seau+Dynamique+-+Inter-Boucherville!5e0!3m2!1sen!2sca!4v1450368469108";
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
                $this->heureOuvertureLundi = "7:30 a.m. - 12:00 (minuit)";
                $this->heureOuvertureMardi = "7:30 a.m. - 12:00 (minuit)";
                $this->heureOuvertureMercredi = "7:30 a.m. - 12:00 (minuit)";
                $this->heureOuvertureJeudi = " 	7:30 a.m. - 12:00 (minuit)";
                $this->heureOuvertureVendredi = "7:30 a.m. - 12:00 (minuit)";
                $this->heureOuvertureSamedi = "Fermé";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Roger Lachapelle", "Directeur général","rlachapelle@camionbeaudoin.com"));
                $this->contacts->addItem(array("Pierre Lamothe", "Directeur des ventes","plamothe@camionbeaudoin.com"));
                $this->contacts->addItem(array("Joël Pépin", "Adjoint aux commis de pièces","jpepin@camionbeaudoin.com"));
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
                $this->emailOffreEmploi = "rh_sthya@camionbeaudoin.com";
                $this->parametreBonTravailNomSuccursale = "Les Camions Beaudoin";
                $this->parametreDemandePiecesNomSuccursale = "Les Camions Beaudoin";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11158.484498255408!2d-72.972822!3d45.638347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc84e18d82e8d13%3A0x6052de6f5ffc43d6!2s3255+Rue+Picard%2C+Saint-Hyacinthe%2C+QC+J2S%2C+Canada!5e0!3m2!1sfr!2s!4v1409326228145";
                break;
            case nomSuccursale::Victoriaville:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Charest International";
                $this->adresse = "275, boulevard Pierre Roux Est";
                $this->ville = "Victoriaville";
                $this->province = "Québec";
                $this->codePostal = "G6T 1S9";
                $this->telephones[] = "Téléphone : 819 758-8271";
                $this->telephones[] = "Sans frais : 800 567-2519";
                $this->telephones[] = "Télécopieur : 819 758-9900";
               $this->heureOuvertureLundi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureMardi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureMercredi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureJeudi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureVendredi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureSamedi = "8:00 - midi Pièces seulement";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Claude Larochelle", "Directeur général","bill@charestinter.qc.ca"));
                $this->contacts->addItem(array("Pierre Lamothe", "Directeur des ventes","plamothe@camionbeaudoin.com"));
                $this->contacts->addItem(array("Stéphane Lambert", "Directeur des pièces","stephanelambert@charestinter.qc.ca"));
                $this->contacts->addItem(array("Pierre Goulet", "Directeur du service","pierregoulet@charestinter.qc.ca"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-charest-international.jpg";
                $this->imageBatisseALT= "Charest International";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Remorquage de camions lourds 24/7";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Atelier de carrosserie";
                $this->servicesOfferts[] = "Refrigération";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "Air climatisé";
                $this->servicesOfferts[] = "Réparation de remorque";
                $this->servicesOfferts[] = "Service routier";
                $this->serviceRoutierTitre = "Service de <a href='remorquage/charest-international.php'>remorquage</a> 24/7";
                $this->serviceRoutierTelephone[] = "Remorquage en tout temps au Canada.";
                $this->serviceRoutierTelephone[] = "Téléphone : 819 758-8271";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->emailOffreEmploi = "rh@charestinter.qc.ca";
                $this->parametreBonTravailNomSuccursale = "";
                $this->parametreDemandePiecesNomSuccursale = "Charest International";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11072.196225602798!2d-71.966232!3d46.070062999999934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb80140b34d77f7%3A0x5ffda7dc99d7f478!2s275+Boulevard+Pierre-Roux+Est%2C+Victoriaville%2C+QC+G6T%2C+Canada!5e0!3m2!1sfr!2sfr!4v1409326486269";
                break;
            case nomSuccursale::TroisRivieres:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Garage Charest et Frères";
                $this->adresse = "2250, rue Royale";
                $this->ville = "Trois-Rivières";
                $this->province = "Québec";
                $this->codePostal = "G9A 4L5";
                $this->telephones[] = "Téléphone : 819 376-3754";
                $this->telephones[] = "Sans frais : 800 465-4252";
                $this->telephones[] = "Télécopieur : 819 376-1256";
                $this->heureOuvertureLundi = "7:00 - 12:30 a.m.";
                $this->heureOuvertureMardi = "7:00 - 12:30 a.m.";
                $this->heureOuvertureMercredi = "7:00 - 12:30 a.m.";
                $this->heureOuvertureJeudi = "7:00 - 12:30 a.m.";
                $this->heureOuvertureVendredi = "7:00 - 10:00 p.m.";
                $this->heureOuvertureSamedi = "8:00 - 12:00 (midi)";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Serge Thibodeau", "Président","serge.thibodeau@garagecharest.qc.ca"));
                $this->contacts->addItem(array("Pierre Poudrette", "Directeur général","pierrepoudrette@garagecharest.qc.ca"));
                $this->contacts->addItem(array("Pierre Lamothe", "Directeur des ventes","plamothe@camionbeaudoin.com"));
                $this->contacts->addItem(array("Jean-Pierre Duguay", "Directeur des pièces","jeanpierre.duguay@garagecharest.qc.ca"));
                $this->contacts->addItem(array("André Boisvert", "Directeur du service","andreboisvert@garagecharest.qc.ca"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-charest-freres.jpg";
                $this->imageBatisseALT= "Charest et freres";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Remorquage";
                $this->serviceRoutierTitre = "Service routier 24/7";
                $this->serviceRoutierTelephone[] = "Téléphone : 819 376-3754";
                $this->remorquageTitre = "Remorquage Québec Centre";
                $this->remorquageInfo[] = "Téléphone : 819 472-9498";
                $this->remorquageTelephones[] = "";
                $this->parametreBonTravailNomSuccursale = "";
                $this->emailOffreEmploi = "pierrepoudrette@garagecharest.qc.ca";
                $this->parametreBonTravailNomSuccursale = "Garage Charest et Frères";
                $this->parametreDemandePiecesNomSuccursale = "Garage Charest et Frères";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22040.283407664505!2d-72.54211346996249!3d46.32899089635898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7c5ff023d1761%3A0xf01c688e04d66dfb!2s2250+Rue+Royale%2C+Trois-Rivi%C3%A8res%2C+QC+G9A+4L5%2C+Canada!5e0!3m2!1sfr!2sfr!4v1409326570152";
                break;
            case nomSuccursale::ThetfordMines:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Le Centre du Camion (Amiante)";
                $this->adresse = "4680, boul. Frontenac Est";
                $this->ville = "Thetford Mines";
                $this->province = "Québec";
                $this->codePostal = "G6H 4G5";
                $this->telephones[] = "Téléphone : 418 338-8588";
                $this->telephones[] = "Sans frais : 800 260-8588";
                $this->telephones[] = "Télécopieur : 418 338-2360";
                $this->heureOuvertureLundi = "7:30-12:00 13:00-1:00 a.m.";
                $this->heureOuvertureMardi = "7:30-12:00 13:00-1:00 a.m.";
                $this->heureOuvertureMercredi = "7:30-12:00 13:00-1:00 a.m.";
                $this->heureOuvertureJeudi = "7:30-12:00 13:00-1:00 a.m.";
                $this->heureOuvertureVendredi = "7:30-12:00 13:00-1:00 a.m.";
                $this->heureOuvertureSamedi = "8:00 - Midi";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Jean-François Poulin", "Directeur des ventes","jfpoulin@centrecamionamiante.com"));
                $this->contacts->addItem(array("Éric Roy", "Directeur des pièces","eroy@centrecamionbeauce.com"));
                $this->contacts->addItem(array("Eric Marois", "Directeur du service","emarois@centrecamionamiante.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-le-centre-du-camion-amiante.jpg";
                $this->imageBatisseALT= "Le Centre du Camion (Amiante)";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Atelier de carosserie";
                $this->servicesOfferts[] = "Réfrigération";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "Service routier 24/7";
                $this->servicesOfferts[] = "Remorquage";
                $this->serviceRoutierTitre = "Service routier 24/7";
                $this->serviceRoutierTelephone[] = "Remorquage et dépannage d'urgence au Québec.";
                $this->serviceRoutierTelephone[] = "Téléphone : 418 338-8588";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->emailOffreEmploi = "agilbert@centrecamionamiante.com";
                $this->parametreBonTravailNomSuccursale = "Le Centre du Camion (Amiante)";
                $this->parametreDemandePiecesNomSuccursale = "Le Centre du Camion (Amiante)";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44248.510441026425!2d-71.21615704602989!3d46.120233668091934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb836afcbac657b%3A0xf1391e007d68512!2s4680+Boulevard+Frontenac+Est%2C+Thetford+Mines%2C+QC+G6H+4G5%2C+Canada!5e0!3m2!1sfr!2sfr!4v1409326651313";
                break;
            case nomSuccursale::SaintGeorges:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Le Centre du Camion (Beauce)";
                $this->adresse = "8900, 25e Avenue";
                $this->ville = "Saint-Georges";
                $this->province = "Québec";
                $this->codePostal = "G6A 1K5";
                $this->telephones[] = "Téléphone : 418 228-8005";
                $this->telephones[] = "Sans frais : 1 866 428-8005";
                $this->telephones[] = "Télécopieur: 418 228-3559";
                $this->heureOuvertureLundi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureMardi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureMercredi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureJeudi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureVendredi = "7:30 - 1:00 a.m.";
                $this->heureOuvertureSamedi = "8:00 - Midi";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Donald Pellerin", "Directeur des ventes","dpellerin@centrecamionbeauce.com"));
                $this->contacts->addItem(array("Éric Roy", "Directeur des pièces","eroy@centrecamionbeauce.com"));
                $this->contacts->addItem(array("François Jacques", "Directeur du service","fjacques@centrecamionbeauce.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-le-centre-du-camion-beauce.jpg";
                $this->imageBatisseALT= "Le Centre du Camion (Beauce)";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "Remorquage 24/7";
                $this->servicesOfferts[] = "Mandataire SAAQ";
                $this->serviceRoutierTitre = "Remorquage et dépannage d'urgence au Canada et aux États-Unis.";
                $this->serviceRoutierTelephone[] = "Téléphone : 418 228-8005";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->emailOffreEmploi = "agilbert@centrecamionamiante.com";
                $this->parametreBonTravailNomSuccursale = "Le Centre du Camion (Beauce)";
                $this->parametreDemandePiecesNomSuccursale = "Le Centre du Camion (Beauce)";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44234.28546235947!2d-70.66052790789594!3d46.13794390165895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb9bfb2d0bb2569%3A0xe16a57df5a27951b!2s8900+25e+Avenue%2C+Saint-Georges%2C+QC+G6A+1M8%2C+Canada!5e0!3m2!1sfr!2sfr!4v1409326747414";
                break;
            case nomSuccursale::RiviereDuLoup:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Le Centre Routier 1994";
                $this->adresse = "375, Temiscouata";
                $this->ville = "Rivière-du-Loup";
                $this->province = "Québec";
                $this->codePostal = "G5R 3Z5";
                $this->telephones[] = "Téléphone : 418 862-7231";
                $this->telephones[] = "Télécopieur : 418 862-1938";
                $this->heureOuvertureLundi = "7:30 - 00:30";
                $this->heureOuvertureMardi = "7:30 - 00:30";
                $this->heureOuvertureMercredi = "7:30 - 00:30";
                $this->heureOuvertureJeudi = "7:30 - 00:30";
                $this->heureOuvertureVendredi = "7:30 - 00:30";
                $this->heureOuvertureSamedi = "8:00 - 12:00";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Serge Boucher", "Directeur général et Directeur des ventes","sboucher@centreroutier.com"));
                $this->contacts->addItem(array("Jean Fraser", "Directeur des pièces","jfraser@centreroutier.com"));
                $this->contacts->addItem(array("Mathieu Madore", "Directeur du service","mmadore@centreroutier.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-le-centre-routier-1994.jpg";
                $this->imageBatisseALT= "Le Centre Routier 1994";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Air climatisé";
                $this->servicesOfferts[] = "Produits de réfrigération Carrier";
                $this->servicesOfferts[] = "Produits de réfrigération ThermalKing";
                $this->servicesOfferts[] = "Transmission Allison";
                $this->servicesOfferts[] = "Produits Caterpillar";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Nettoyage de réservoir à carburant";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "OnCommand Prev Maint";
                $this->servicesOfferts[] = "Service de partenaire";
                $this->servicesOfferts[] = "VIS Check";
                $this->servicesOfferts[] = "Detroit";
                $this->servicesOfferts[] = "Service routier";
                $this->servicesOfferts[] = "Remorquage";
                $this->servicesOfferts[] = "Stationnement pour remorque";
                $this->servicesOfferts[] = "Réparation de remorque";
                $this->serviceRoutierTitre = "Service routier 24/7";
                $this->serviceRoutierTelephone[] = "Location, remorquage et dépannage d'urgence disponibles en tout temps.";
                $this->serviceRoutierTelephone[] = "Téléphone : 418 862-7231";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->emailOffreEmploi = "rh@centreroutier.com";
                $this->parametreBonTravailNomSuccursale = "Le Centre Routier 1994";
                $this->parametreDemandePiecesNomSuccursale = "Le Centre Routier 1994";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42861.92243504292!2d-69.50780766765017!3d47.82273376675654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbe409656ae6dbd%3A0xa4becb558dca0615!2s375+Rue+T%C3%A9miscouata%2C+Rivi%C3%A8re-du-Loup%2C+QC+G5R+2Y9%2C+Canada!5e0!3m2!1sfr!2sfr!4v1409326819559";
                break;
            case nomSuccursale::Quebec:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Camions International Élite";
                $this->adresse = "265, Étienne-Dubreuil";
                $this->ville = "Québec";
                $this->province = "Québec";
                $this->codePostal = "G1M 4A6";
                $this->telephones[] = "Téléphone : 418 687-9510";
                $this->telephones[] = "Sans frais : 877 687-9510";
                $this->telephones[] = "Télécopieur : 418 687-9518";
                $this->heureOuvertureLundi = "Ouverture à 7h30";
                $this->heureOuvertureMardi = "24h";
                $this->heureOuvertureMercredi = "24h";
                $this->heureOuvertureJeudi = "24h";
                $this->heureOuvertureVendredi = "24h";
                $this->heureOuvertureSamedi = "0h00 à 7h30";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Steve Hallé", "Président Directeur Général","shalle@camionbeaudoin.com"));                
                $this->contacts->addItem(array("Pierre Desrosiers", "Directeur des pièces","pdesrosiers@inter-quebec.com"));
                $this->contacts->addItem(array("François Després", "Directeur du service","fdespres@inter-quebec.com"));
                $this->contacts->addItem(array("Steeve Brousseau", "Directeur des ventes","sbrousseau@inter-quebec.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-camions-international-elite.jpg";
                $this->imageBatisseALT= "Camions International Élite";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Heures de service prolongées";
                $this->servicesOfferts[] = "Air climatisé";
                $this->servicesOfferts[] = "Alignement";
                $this->servicesOfferts[] = "Transmission Allison";
                $this->servicesOfferts[] = "Atelier de carosserie";
                $this->servicesOfferts[] = "Produits Caterpillar";
                $this->servicesOfferts[] = "Cummins ISX";
                $this->servicesOfferts[] = "Cummins ISB";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Fleet Charge";
                $this->servicesOfferts[] = "Nettoyage de réservoir de carburant";
                $this->servicesOfferts[] = "Équipement Huck Bolt";
                $this->servicesOfferts[] = "Idealease";
                $this->servicesOfferts[] = "OnCommand Prev Maint";
                $this->servicesOfferts[] = "Service partenaire";
                $this->servicesOfferts[] = "Remorquage";
                $this->servicesOfferts[] = "Stationnement pour remorque";
                $this->servicesOfferts[] = "Réparation de remorque";
                $this->servicesOfferts[] = "ViS Check";
                $this->serviceRoutierTitre = "";
                $this->serviceRoutierTelephone[] = "";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->emailOffreEmploi = "rh@inter-quebec.com";
                $this->parametreBonTravailNomSuccursale = "Camions International Élite";
                $this->parametreDemandePiecesNomSuccursale = "Camions International Élite";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43677.303696618874!2d-71.25924050704916!3d46.82731947110966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897c9b2487949%3A0xf512afa9a00fc899!2s265+Rue+%C3%89tienne+Dubreuil%2C+Qu%C3%A9bec%2C+QC+G1M+4A6%2C+Canada!5e0!3m2!1sfr!2sfr!4v1409326911563";
                break;
            case nomSuccursale::Shawinigan:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Garage Robert";
                $this->adresse = "9850, boul des Hêtres ";
                $this->ville = "Shawinigan";
                $this->province = "Québec";
                $this->codePostal = "G9N 4Y3";
                $this->telephones[] = "Téléphone : 819 539-6417";
                $this->telephones[] = "Sans frais : 800 663-0107";
                $this->telephones[] = "Télécopieur : 819 539-3536";
                $this->heureOuvertureLundi = "8:00 - 17:00";
                $this->heureOuvertureMardi = "8:00 - 17:00";
                $this->heureOuvertureMercredi = "8:00 - 17:00";
                $this->heureOuvertureJeudi = "8:00 - 17:00";
                $this->heureOuvertureVendredi = "8:00 - 17:00";
                $this->heureOuvertureSamedi = "Fermé";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Serge Thibodeau", "Président"));
                $this->contacts->addItem(array("Pierre Poudrette", "Vice-président"));
                $this->contacts->addItem(array("Marc Lebrun", "Directeur du service","grobert-service@cgocable.ca"));
                $this->contacts->addItem(array("Claude Davidson", "Directeur des pièces","grobert-pièces@cgocable.ca"));
                $this->contacts->addItem(array("Marc André Gamelin", "Représentant des ventes","magamelin@camionbeaudoin.com"));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-garage-robert.png";
                $this->imageBatisseALT= "Garage Robert";
                $this->servicesOfferts[] = "Service routier 24/7";
                $this->servicesOfferts[] = "Service accéléré";
                $this->servicesOfferts[] = "Cummins";
                $this->servicesOfferts[] = "CAT";
                $this->servicesOfferts[] = "Nettoyage DPF";
                $this->servicesOfferts[] = "Service routier"; 
                $this->servicesOfferts[] = "Service de carrosserie complet";
                $this->servicesOfferts[] = "Réparation boite de camion";
                $this->serviceRoutierTitre = "";
                $this->serviceRoutierTelephone[] = "";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->emailOffreEmploi = "pierrepoudrette@garagecharest.qc.ca";
                $this->parametreBonTravailNomSuccursale = "Garage Robert";
                $this->parametreDemandePiecesNomSuccursale = "Garage Robert";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.5253671513356!2d-72.71138334836269!3d46.596619579028236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc64df0b295b3d9%3A0xf26322fa98abd028!2sGarage+Robert+Inc!5e0!3m2!1sfr!2sca!4v1487884811377";
                break;
            case nomSuccursale::Isuzu:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Camions Isuzu Montréal Ouest";
                $this->adresse = "888 Montée de Liesse, Saint-Laurent";
                $this->ville = "Saint-Laurent";
                $this->province = "Québec";
                $this->codePostal = "H4T 1N8";
                $this->telephones[] = "Téléphone: (514) 737-5845";
                $this->telephones[] = "";
                $this->telephones[] = "";
                 $this->heureOuvertureLundi = "7:00 - 12:00";
                $this->heureOuvertureMardi = "7:00 - 12:00";
                $this->heureOuvertureMercredi = "7:00 - 12:00";
                $this->heureOuvertureJeudi = "7:00 - 12:00";
                $this->heureOuvertureVendredi = "7:00 - 17:00";
                $this->heureOuvertureSamedi = "Fermé";
                $this->heureOuvertureDimanche = "Fermé";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("", "",""));
                $this->imageBatisse = "../../_assets/images/batisse/batisse-garage-robert.jpg";
                $this->imageBatisseALT= "";
                $this->servicesOfferts[] = "";
                $this->serviceRoutierTitre = "Service Routier";
                $this->serviceRoutierTelephone[] = "";
                $this->remorquageTitre = "";
                $this->remorquageInfo[] = "";
                $this->remorquageTelephones[] = "";
                $this->parametreBonTravailNomSuccursale = "";
                $this->parametreDemandePiecesNomSuccursale = "";
                $this->parametreBonTravailNomSuccursale = "";
                $this->parametreDemandePiecesNomSuccursale = "";
                $this->emailOffreEmploi = "";
                $this->GoogleMapSRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.5253671513356!2d-72.71138334836269!3d46.596619579028236!2m3!"
                        . "1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc64df0b295b3d9%3A0xf26322fa98abd028!2sGarage+Robert+Inc!5e0!3m2!1sfr!2sca!4v1487884811377";
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
//                $this->parametreBonTravailNomSuccursale = "";
//                $this->parametreDemandePiecesNomSuccursale = "";
//                $this->GoogleMapSRC = "";
                break;
            
            default:;
        }
    
        return true;
    }
}
?>