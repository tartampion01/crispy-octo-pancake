<?php
require_once('class.phpmailer.php');
require_once('class.smtp.php');

interface TypeEmail
{
    const DemandeInformation = 1;
    const PlanifierEssaiRoutier = 2;
    const ObtenirPrix = 3;
    const DemandFinancement = 4;
    const EvaluerEchange = 5;
    const InscriptionNextPart = 6;
}

interface TypeVehicule
{
    const CamionNeuf = 1;
    const CamionUsage = 2;
    const Remorque = 3;
}

Class RD_Email
{
    public $prenom = '';
    public $nom = '';
    public $ville = '';
    public $email = '';
    public $telephone = '';
    public $commentaire = '';
    public $adresse = '';
    public $province = '';
    public $codePostal = '';
    public $marque = '';
    public $modele = '';
    public $annee = '';
    public $km = '';
    public $etatInterieur = '';
    public $etatExterieur = '';
    public $idVehicule = '';
    public $mail = null;

    public function load($TypeEmail,$Prenom,$Nom,$Ville,$Email,$Telephone,$Commentaire,$Adresse,$Province,$CodePostal,$Marque,$Modele,$Annee,$Km,$EtatInterieur,$EtatExterieur, $IdVehicule, $TypeVehicule)
    {
        global $applicationConfig;
        $emailto = $toName = $subject = $body = "";
        
        switch($TypeEmail)
        {
            case TypeEmail::DemandeInformation:   $emailto = "ptourigny@servicesinfo.ca";
                                                  $toName  = "Philippe Tourigny";
                                                  $subject = "Demande d'information";
                                                  break;
            case TypeEmail::PlanifierEssaiRoutier:$emailto = "ptourigny@servicesinfo.ca";
                                                  $subject = "Demande de planification d'un essai routier";
                                                  $toName  = "Philippe Tourigny";                                                  
                                                  break;
            case TypeEmail::ObtenirPrix:          $emailto = "ptourigny@servicesinfo.ca";
                                                  $subject = "Obtenir un prix";
                                                  $toName  = "Philippe Tourigny";                                                  
                                                  break;
            case TypeEmail::DemandFinancement:    $emailto = "ptourigny@servicesinfo.ca";
                                                  $subject = "Demande de financement";
                                                  $toName  = "Philippe Tourigny";                                                  
                                                  break;
            case TypeEmail::EvaluerEchange:       $emailto = "ptourigny@servicesinfo.ca";
                                                  $subject = "Demande d'évaluation d'échange";
                                                  $toName  = "Philippe Tourigny";                                                  
                                                  break;
            case TypeEmail::InscriptionNextPart:  $emailto = "ptourigny@servicesinfo.ca";
                                                  $subject = "Inscription NextPart";
                                                  $toName  = "Philippe Tourigny";
                                                  break;
        }
        
        $this->prenom = $Prenom;
        $this->nom = $Nom;
        $this->ville = $Ville;
        $this->email = urldecode($Email);
        $this->telephone = $Telephone;
        $this->commentaire = $Commentaire;
        $this->adresse = $Adresse;
        $this->province = $Province;
        $this->codePostal = $CodePostal;
        $this->marque = $Marque;
        $this->modele = $Modele;
        $this->annee = $Annee;
        $this->km = $Km;
        $this->etatInterieur = urldecode(base64_decode($EtatInterieur));
        $this->etatExterieur = urldecode(base64_decode($EtatExterieur));
        $this->idVehicule = $IdVehicule;
        
        $this->mail = new PHPMailer;

        $this->mail->isSMTP();
        $this->mail->CharSet = 'UTF-8';
        $this->mail->Host = $applicationConfig['smtp.server.host'];
        $this->mail->SMTPAuth = true;
        $this->mail->Username = $applicationConfig['smtp.server.username'];
        $this->mail->Password = $applicationConfig['smtp.server.password'];
        $this->mail->SMTPSecure = false;
        $this->mail->Port = $applicationConfig['smtp.server.port'];
        $this->mail->setFrom('mailer@reseaudynamique.com', 'reseaudynamique.com');
        $this->mail->addAddress($emailto, $toName);
        $this->mail->addReplyTo($this->email, $this->prenom . " " . $this->nom);
        $this->mail->Subject = $subject;
                
        // Le body spécifique
        switch($TypeEmail)
        {
            case TypeEmail::DemandeInformation:
                $body = "Demande d'information de la part de: " . $this->prenom . " " . $this->nom . "</br>";
                $body .= "Ville: " . $this->ville . "</br>";
                $body .= "Telephone: " . $this->telephone . "</br>";
                $body .= "Courriel: " . $this->email . "</br>";
                if( $this->commentaire != "" )
                    $body .= "Commentaire: " . $this->commentaire . "</br></br>";
                $body .= "Infos demandées au sujet de: <a href='";
                $body .= RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_details) . "?id=" . $this->idVehicule;
                $body .= "'>" . urldecode(base64_decode($this->idVehicule)) . "</a>";
                break;
            case TypeEmail::PlanifierEssaiRoutier:
                $body = "Demande d'essai routier de la part de: " . $this->prenom . " " . $this->nom . "</br>";
                $body .= "Ville: " . $this->ville . "</br>";
                $body .= "Telephone: " . $this->telephone . "</br>";
                $body .= "Courriel: " . $this->email . "</br>";
                if( $this->commentaire != "" )
                    $body .= "Commentaire: " . $this->commentaire . "</br></br>";
                $body .= "Infos demandées au sujet de: <a href='";
                $body .= RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_details) . "?id=" . $this->idVehicule;
                $body .= "'>" . urldecode(base64_decode($this->idVehicule)) . "</a>";
                break;
            case TypeEmail::ObtenirPrix:
                $body = "Demande de prix de la part de: " . $this->prenom . " " . $this->nom . "</br>";
                $body .= "Ville: " . $this->ville . "</br>";
                $body .= "Telephone: " . $this->telephone . "</br>";
                $body .= "Courriel: " . $this->email . "</br>";
                if( $this->commentaire != "" )
                    $body .= "Commentaire: " . $this->commentaire . "</br></br>";
                $body .= "Infos demandées au sujet de: <a href='";
                $body .= RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_details) . "?id=" . $this->idVehicule;
                $body .= "'>" . urldecode(base64_decode($this->idVehicule)) . "</a>";
                break;
            case TypeEmail::DemandFinancement:
                $body = "Demande de financement de la part de: " . $this->prenom . " " . $this->nom . "</br>";
                $body .= "Adresse: " . $this->adresse . "</br>";
                $body .= "Ville: " . $this->ville . "</br>";
                $body .= "Code Postal: " . $this->codePostal . "</br>";
                $body .= "Province: " . base64_decode(urldecode($this->province)) . "</br>";
                $body .= "Telephone: " . $this->telephone . "</br>";
                $body .= "Courriel: " . $this->email . "</br>";
                if( $this->commentaire != "" )
                    $body .= "Commentaire: " . $this->commentaire . "</br></br>";
                $body .= "Infos demandées au sujet de: <a href='";
                $body .= RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_details) . "?id=" . $this->idVehicule;
                $body .= "'>" . urldecode(base64_decode($this->idVehicule)) . "</a>";
                break;
            case TypeEmail::EvaluerEchange:
                $body = "Demande de financement de la part de: " . $this->prenom . " " . $this->nom . "</br>";
                $body .= "Ville: " . $this->ville . "</br>";
                $body .= "Telephone: " . $this->telephone . "</br>";
                $body .= "Courriel: " . $this->email . "</br>";
                $body .= "Marque: " . $this->marque . "</br>";
                $body .= "Modèle: " . $this->modele . "</br>";
                $body .= "Année: " . $this->annee . "</br>";
                $body .= "KM: " . $this->km . "</br>";
                $body .= "État intérieur: " . $this->etatExterieur . "</br>";
                $body .= "État extérieur: " . $this->etatInterieur . "</br>";
                if( $this->commentaire != "" )
                    $body .= "Commentaire: " . $this->commentaire . "</br></br>";
                $body .= "Infos demandées au sujet de: <a href='";
                $body .= RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_details) . "?id=" . $this->idVehicule;
                $body .= "'>" . urldecode(base64_decode($this->idVehicule)) . "</a>";
                break;
            case TypeEmail::InscriptionNextPart:
                $body = "Demande d'information de la part de: " . $this->prenom . " " . $this->nom . "</br>";
                $body .= "Entreprise: " . $this->ville . "</br>";
                $body .= "Telephone: " . $this->telephone . "</br>";
                $body .= "Courriel: " . $this->email . "</br>";
                if( $this->commentaire != "" )
                    $body .= "Commentaire: " . $this->commentaire . "</br></br>";
                $body .= "Infos demandées au sujet de: <a href='";
                $body .= RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_details) . "?id=" . $this->idVehicule;
                $body .= "'>" . urldecode(base64_decode($this->idVehicule)) . "</a>";
                break;
            default:break;
        }
        
        $this->mail->Body = $body;
        $this->mail->AltBody = "-alt-";
    }
    
    public function send()
    {
        return $this->mail->send();
    }
}
