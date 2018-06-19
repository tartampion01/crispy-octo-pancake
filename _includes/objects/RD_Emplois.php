<?php
include_once 'database.php';

class RD_Emploi{
    // database connection and table name
    private $conn;
    private $table_name = "offresEmplois";
    
    public $id = 0;
    public $titre = "";
    public $fonctions = "";
    public $dateDebut = "";
    public $referenceInterne = "";
    public $succursale = ""; 
    public $succursaleObj = ""; // Contiendra l'objet
    public $lienEncode = "";
    public $niveauEtudes = "";
    public $statutEmploi = "";
    public $anneesExperience = "";
    public $descCompetences = "";
    public $langues = "";
    public $salaire = "";
    public $heuresSemaine = "";
    public $autres = "";
    public $contactNom = "";
    public $contactTitre = "";
    public $contactTel = "";
    public $contactCourriel = ""; 
    public $filled = 0;
    public $displayOnWeb = 0;
    
    // constructor with $db as database connection
    public function __construct($db){
        if($db != null)
            $this->conn = $db;
    }
    
    public function load($id = 0, $referenceInterne = ''){
        $conn = Database::getConn();
        
        if($id>0){
            $id = mysqli_real_escape_string($conn, $id);
            $sql = "SELECT * FROM offresEmplois WHERE emploi_id=$id";
        }
        elseif($serial != ''){
            $serial = mysqli_real_escape_string($conn, $referenceInterne);
            $sql = "SELECT * FROM offresEmplois WHERE referenceInterne='$referenceInterne'";
        }       
        else
            return false;

        $result = mysqli_query($conn, $sql);
        $r = mysqli_fetch_array($result);
    
        $this->id = $r['emploi_id'];
        $this->titre = $r['titre'];
        $this->fonctions = $r['fonctions'];
        $this->dateDebut = $r['dateDebut'];
        $this->displayOnWeb = $r['displayOnWeb'];
        $this->referenceInterne = $r['referenceInterne'];
        $this->succursale = $r['succursale'];
        $this->niveauEtudes = $r['niveauEtudes'];
        $this->statutEmploi = $r['statutEmploi'];
        $this->anneesExperience = $r['anneesExperience'];
        $this->descCompetences = $r['descCompetences'];
        $this->langues = $r['langues'];
        $this->salaire = $r['salaire'];
        $this->heuresSemaine = $r['heuresSemaine'];
        $this->autres = $r['autres'];
        $this->contactNom = $r['contactNom'];
        $this->contactTitre = $r['contactTitre'];
        $this->contactTel = $r['contactTel'];
        $this->contactCourriel = $r['contactCourriel'];
        $this->filled = $r['filled'];

        return true;
    }
    
    public static function getDetailEmploi($lienEncode)
    {
        $conn = Database::getConn();
        // Va chercher un seul emploi
        $lienDecode = urldecode(base64_decode($lienEncode));
        $emploi = new RD_Emploi(null);
        
        if($lienDecode == "spontanee")
        {
            $emploi->id = -1;
            $emploi->titre = "Candidature spontanée";
            $emploi->lienEncode = $lienEncode;
        }
        else
        {
            $sql = "SELECT * FROM offresEmplois WHERE emploi_id=" . $lienDecode;
            
            $results = mysqli_query($conn, $sql);
        
            if(mysqli_num_rows($results) > 0){
                while($row = mysqli_fetch_assoc($results)) {
                    //print_r($row);
                    extract($row);                
                    $emploi->id = $emploi_id;
                    $emploi->titre = $titre;
                    $emploi->fonctions = $fonctions;
                    $emploi->dateDebut = date("d/m/Y",strtotime($dateDebut));
                    $emploi->displayOnWeb = $displayOnWeb;
                    $emploi->filled = $filled;
                    $emploi->referenceInterne = $referenceInterne;
                    $emploi->succursaleId = $succursale;
                    $emploi->niveauEtudes = $niveauEtudes;
                    $emploi->statutEmploi = $statutEmploi;
                    $emploi->anneesExperience = $anneesExperience;
                    $emploi->descCompetences = $descCompetences;
                    $emploi->langues = $langues;
                    $emploi->salaire = $salaire;
                    $emploi->heuresSemaine = $heuresSemaine;
                    $emploi->autres = $autres;
                    $emploi->contactNom = $contactNom;
                    $emploi->contactTitre = $contactTitre;
                    $emploi->contactTel = $contactTel;
                    $emploi->contactCourriel = $contactCourriel;
                    $emploi->filled = $filled;
                    $emploi->lienEncode = $lienEncode;

                    $succ = new RD_Succursales();
                    $succ->loadFromVilleString($succursale);
                    $emploi->succursaleObj = $succ;
                }
            }
        }
        
        return $emploi;
    }
    
    /**
     * @param l'id de la succursale (interface nomSuccursale de RD_Succursales.php)
     * 0 = toutes les succursales
     * @return array Retourne des objets emploi avec Titre et lienEncode
     */
    public static function getLinkEmploisCourants($succ)
    {
        $conn = Database::getConn();
        
        if( $succ == "Toutes" )
            $sql = "SELECT * FROM offresEmplois WHERE displayOnWeb=1 AND filled=0";
        else
            $sql = "SELECT * FROM offresEmplois WHERE succursale LIKE '%$succ%' AND displayonWeb=1 AND filled=0";

        $results = mysqli_query($conn, $sql);
        
        $emplois = array();
        
        if(mysqli_num_rows($results) > 0){
            while($row = mysqli_fetch_assoc($results)) {
                
                extract($row);

                $emploi = new RD_Emploi(null);
                $emploi->lienEncode = urlencode(base64_encode($emploi_id));
                $emploi->succursale = $succursale;
                $emploi->titre = $titre;
                
                array_push($emplois, $emploi);
            }
        }
        
        return $emplois;
    }
    
}