<?php
class RD_Camions{
     // Nom Champ Objet // Nom dans DB en commentaire
    public $id = 0; // id
    public $marque = ''; // marque
    public $modele = ''; // Model
    public $annee = ''; // strAnnee
    public $noInventaire = ''; // stock
    public $noSerie = ''; // serial
    public $empattement = ''; // wb
    public $essieuAvant = ''; // frontaxle
    public $essieuArriere = ''; // rearaxle
    public $suspensionArriere = true; // rearsuspension
    public $transmission = ''; // transtype
    public $moteur = false; // engine
    public $hp = ''; // hp
    
    public function load($id = 0, $serial = ''){
        global $conn;
        
        if($id>0){
            $id = mysqli_real_escape_string($conn, $id);
            $sql = "SELECT * FROM inventory WHERE id=$id";
        }
        elseif($serial != ''){
            $serial = mysqli_real_escape_string($conn, $serial);
            $sql = "SELECT * FROM inventory WHERE serial='$serial'";
        }       
        else
            return false;

        $result = mysqli_query($conn, $sql);
        $r = mysqli_fetch_array($result);
    
        $this->id = $r['id'];
        $this->marque = $r['marque'];
        $this->modele = $r['Model'];
        $this->annee = $r['strAnnee'];
        $this->noInventaire = $r['stock'];
        $this->noSerie = $r['serial'];
        $this->empattement = $r['wb'];
        $this->essieuAvant = $r['frontaxle'];
        $this->essieuArriere = $r['rearaxle'];
        $this->suspensionArriere = $r['rearsuspension'];
        $this->transmission = $r['transtype'];
        $this->moteur = $r['engine'] == 0;        
        $this->hp = $r['hp'];

        return true;
    }

}
?>