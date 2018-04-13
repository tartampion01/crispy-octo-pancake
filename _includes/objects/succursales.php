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
    public $nom = '';
    public $nomLong = '';
    public $tel1 = '';
    public $tel2 = '';
    public $telSansFrais = '';
    public $fax = '';
    public $adresse = '';
    public $ville = '';
    public $codePostal = '';
    public $province = '';
    public $isSuccursale = '0';
    public $isPointService = '1';
    public $contacts;
    
    public function load($succursale){
        
        switch($succursale)
        {
            case nomSuccursale::Drummondville:
                $this->isSuccursale = 1;
                $this->isPointService = 0;
                $this->nomLong = "Centre du Camion Beaudoin";
                $this->tel1 = "819 478-8186";
                $this->tel2 = "";
                $this->telSansFrais = "800 463-8186";
                $this->fax = "819 472-1484";
                $this->adresse = "5360, rue St-Roch";
                $this->ville = "Drummondville";
                $this->codePostal = "J2B 6V4";
                $this->province = "Québec";
                $this->contacts = new Contact();
                $this->contacts->addItem(array("Steve Hallé", "Président Directeur Général", "shalle@camionbeaudoin.com"));
                $this->contacts->addItem(array("Pierre Lamothe", "Directeur des ventes", "plamothe@camionbeaudoin.com"));
                break;
            default:;
        }
    
        return true;
    }
}
?>