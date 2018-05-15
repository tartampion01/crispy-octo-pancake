<?php
include_once 'database.php';

class RD_Emploi{
    // database connection and table name
    private $conn;
    private $table_name = "offresEmplois";
    
    public $id = 0;
    public $titre = '';
    public $fonctions = '';
    public $dateDebut = '';
    public $displayOnWeb = '';
    public $contact = ''; 
    public $referenceInterne = ''; 
    public $succursales = array();
    public $exigences = array();
    public $lienEncode = "";
    
    // constructor with $db as database connection
    public function __construct($db){
        if($db != null)
            $this->conn = $db;
    }
    
    public function load($id = 0, $referenceInterne = ''){
        global $conn;
        
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
    
        $this->id = $r['id'];
        $this->titre = $r['titre'];
        $this->fonctions = $r['fonctions'];
        $this->dateDebut = $r['dateDebut'];
        $this->displayOnWeb = $r['displayOnWeb'];
        $this->contact = $r['contact'];
        $this->referenceInterne = $r['referenceInterne'];        

        return true;
    }
    
    public static function getDetailEmploi($lienEncode)
    {
        global $conn;
        
        // Va chercher un seul emploi
        $sql = "SELECT * FROM offresEmplois WHERE emploi_id=" . base64_decode(urldecode($lienEncode));
        $results = mysqli_query($conn, $sql);
        
        $emploi = new RD_Emploi(null);
        
        if(mysqli_num_rows($results) > 0){
            while($row = mysqli_fetch_assoc($results)) {
                
                extract($row);                
                $emploi->id = $emploi_id;
                $emploi->titre = $titre;
                $emploi->fonctions = $fonctions;
                $emploi->dateDebut = date("d/m/Y",$dateDebut);
                $emploi->displayOnWeb = $displayOnWeb;
                $emploi->filled = $filled;
                $emploi->contact = $contact;
                $emploi->referenceInterne = $referenceInterne;
                
                // GET SUCCURSALE(S)
                $succ = new RD_Succursales();
                foreach(explode(",",$succursales) as $IdSuc)
                {
                    $succ->load($IdSuc);
                    $emploi->succursales = $succ;
                }
                
                // EXIGENCES EMPLOI
                $sqlExigences = "SELECT * FROM exigences_emploi AS ee INNER JOIN exigences AS e on ee.exigence_id = e.exigence_id WHERE emploi_id = $emploi_id ORDER BY e.exigence_id";
                $exigences = mysqli_query($conn, $sqlExigences);

                $exigenceTextArray = array();
                $exigenceValue = array();
                    
                if(mysqli_num_rows($exigences) > 0){
                    while($row = mysqli_fetch_assoc($exigences)) {
                        array_push($exigenceTextArray, $row['exigence_text']);
                        array_push($exigenceValue, $row['exigence_value']);
                    }
                    //$emploi->exigences = array_combine($exigenceTextArray, $exigenceValue);
                    $emploi->exigences = array_combine($exigenceTextArray, $exigenceValue);
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
    public static function getLinkEmploisCourants($succ_id = 0)
    {
        global $conn;
        
        if( $succ_id == 0 )
            $sql = "SELECT * FROM offresEmplois WHERE displayOnWeb=1 AND filled=0";
        else
            $sql = "SELECT * FROM offresEmplois WHERE succursales LIKE '%$succ_id%' AND displayonWeb=1 AND filled=0";
        
        $results = mysqli_query($conn, $sql);
        
        $emplois = array();
        
        if(mysqli_num_rows($results) > 0){
            while($row = mysqli_fetch_assoc($results)) {
                
                extract($row);

                $emploi = new RD_Emploi(null);
                $emploi->lienEncode = urlencode(base64_encode($emploi_id));
                $emploi->titre = $titre;
                
                array_push($emplois, $emploi);
            }
        }
        
        return $emplois;
    }
    
}