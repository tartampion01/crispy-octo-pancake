<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$applicationConfig = parse_ini_file($_SERVER['DOCUMENT_ROOT'].'/../configs/application.ini');
require_once($_SERVER['DOCUMENT_ROOT'].'/../includes/dbConnect.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/../includes/dbFunctions.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/../includes/clients.php');

function validateRecaptcha($captchaResponse){
    global $applicationConfig;
    
    $postParams = array(
        'secret'=>$applicationConfig['google.recaptcha.privateKey'],
        'response'=>$captchaResponse,
        'remoteip'=>(isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'])
    );
    $peer_key = version_compare(PHP_VERSION, '5.6.0', '<') ? 'CN_name' : 'peer_name';
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($postParams, '', '&'),
            'verify_peer' => true,
            $peer_key => 'www.google.com',
        ),
    );
    $context = stream_context_create($options);
    
    $results = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context));
    if(!$results)
        return false;
    
    return $results->success;
}
?>
