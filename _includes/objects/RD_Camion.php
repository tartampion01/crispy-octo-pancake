<?php
class RD_Camion{
    // database connection and table name
    private $conn;
    private $table_name = "products";
    
    public $new = 1;
    /* CHAMPS INVENTORY -> Camions neufs */
    public $id = 0;
    public $modele = '';
    public $config = '';
    public $serial = '';
    public $noInventaire = '';
    public $ordernumber = ''; 
    public $ordersold = ''; 
    public $clientsold = ''; 
    public $initialsold = ''; 
    public $invoicedate = ''; 
    public $receivedate = ''; 
    public $bonus = 0;
    public $credit = 0;
    public $nointerestDate = 0;
    public $checkprice = 0;
    public $reqspa = 0;
    public $salesprogram = '';
    public $salesterm = 0;
    public $dealernet = 0;
    public $profit = 0;
    public $profit_type = 0;
    public $retailprice = 0;
    public $wb = ''; // empattement
    public $equipment = 0;
    public $demo = '';
    public $frontaxle = '';
    public $rearaxle = '';
    public $rearsuspension = '';
    public $tiresize = 0;
    public $wheel = '';
    public $transmission = '';
    public $transtype = '';
    public $ratio = '';
    public $engine = '';
    public $hp = 0;
    public $sleeper = '';
    public $specialequipment = '';
    public $color = '';
    public $dealer_id = 0;
    public $location = '';
    public $resuserid = 0;
    public $resdatetime = '';
    public $resclient = '';
    public $special1 = '';
    public $specialprice1 = 0;
    public $special2 = '';
    public $specialprice2 = 0;
    public $special3 = '';
    public $specialprice3 = 0;
    public $special4 = '';
    public $specialprice4 = 0;
    public $special5 = '';
    public $specialprice5 = 0;
    public $marque = '';
    public $strAnnee = ''; // strAnnee
    public $transoption = '';
    public $DisplayOnWebSite = 0;
    public $intCarburantAlt = 0;
    /* CHAMPS TRUCKS -> Camions usagés */
    public $intStatus = 0;    
    public $unite = '';
    public $succursale = '';
    public $intAnnee = 0;
    public $noSerie = '';
    public $intMillage = 0;
    public $empattement = '';
    public $essieu_avant = '';
    public $essieu_arriere = '';
    public $suspension_ar = '';
    public $moteur = '';
    public $ratio_ar = '';
    public $pneu_av_dim = '';
    public $pneu_ar_dim = '';
    public $pneu_av_etat = '';
    public $pneu_ar_etat = '';
    public $freins = '';
    public $reservoirs = '';
    public $couleur_in = '';
    public $couleur_ex = '';
    public $equipements = '';
    public $equipement2 = '';
    public $essieux = '';
    public $km_moteur = '';
    public $prix = '';
    public $bonis = '';
    public $promo = '';
    public $notes = '';
    public $ancien_client = '';
    public $resUsers_ID = 0;
    public $resDateHeure = '';
    public $dateAchat = '';
    public $Pneu32_AvG = '';
    public $Pneu32_AvD = '';
    public $Pneu32_AvAvG = '';
    public $Pneu32_AvAvD = '';
    public $Pneu32_ArGInt = '';
    public $Pneu32_ArGExt = '';
    public $Pneu32_ArDInt = '';
    public $Pneu32_ArDExt = '';
    public $Pneu32_ArArGInt = '';
    public $Pneu32_ArArGExt = '';
    public $Pneu32_ArArDInt = '';
    public $Pneu32_ArArDExt = '';
    
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    public function load_new($id = 0, $serial = ''){
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
    
        $this->new = 1;
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

    public function load_used($id = 0, $serial = ''){
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
    
        $this->new = 0;
        $this->id = $r['id'];
        $this->marque = $r['marque'];
        $this->modele = $r['modele'];
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

    public function test()
    {
        echo json_encode($this);
    }
    
    function read(){
        // select all query
        $query = ($this->new == 1 ? "SELECT * FROM inventory" : "SELECT * FROM trucks");
 
        // prepare query statement
        $stmt = $this->conn->prepare($query);
 
        // execute query
        $stmt->execute();
 
        return $stmt;
    }
    
    function readTest($params){
        
        // decode search parameters
        $params = json_decode($params);
        
        // select all query
        $query = "SELECT * FROM inventory WHERE $params->field = '$params->value' ORDER BY marque, Model ".$params->sortBy." LIMIT ". ( ( $params->currentPage - 1 ) * $params->limitPerPage ) . ", $params->limitPerPage";
 
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        
        return $stmt;
    }
    function readTestCount($params){
        
        // decode search parameters
        $params = json_decode($params);
        
        // select all query
        $queryCount = "SELECT * FROM inventory WHERE $params->field = '$params->value' ORDER BY marque, Model ".$params->sortBy;
        
        // prepare query statement
        $stmtCount = $this->conn->prepare($queryCount);
        // execute query
        $stmtCount->execute();
        
        return $stmtCount;
    }
}

/* CHAMPS TABLE INVENTORY
id
Model
config
serial
stock
ordernumber
ordersold
clientsold
initialsold
invoicedate
receivedate
bonus
credit
nointerestDate
checkprice
reqspa
salesprogram
salesterm
dealernet
profit
profit_type
retailprice
wb
equipment
demo
frontaxle
rearaxle
rearsuspension
tiresize
wheel
transmission
transtype
ratio
engine
hp
sleeper
specialequipment
color
dealer_id
location
resuserid
resdatetime
resclient
special1
specialprice1
special2
specialprice2
special3
specialprice3
special4
specialprice4
special5
specialprice5
marque
strAnnee
transoption
DisplayOnWebSite
intCarburantAlt

CHAMPS TABLE TRUCKS
ID
intStatus
marque
modele
unite
succursale
intAnnee
noSerie
intMillage
empattement
essieu_avant
essieu_arriere
suspension_ar
transmission
moteur
ratio_ar
pneu_av_dim
pneu_ar_dim
pneu_av_etat
pneu_ar_etat
freins
reservoirs
couleur_in
couleur_ex
equipements
equipement2
essieux
km_moteur
prix
bonis
promo
notes
ancien_client
resUsers_ID
resDateHeure
dateAchat
config
Pneu32_AvG
Pneu32_AvD
Pneu32_AvAvG
Pneu32_AvAvD
Pneu32_ArGInt
Pneu32_ArGExt
Pneu32_ArDInt
Pneu32_ArDExt
Pneu32_ArArGInt
Pneu32_ArArGExt
Pneu32_ArArDInt
Pneu32_ArArDExt
*/
?>