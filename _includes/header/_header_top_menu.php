<?php
$pageName = basename($_SERVER['SCRIPT_NAME']);
echo $_SERVER['SCRIPT_NAME'];
?>
<!-- TOP MENU -->
<div class="utilitaire clear">
    <div class="shrink">
        <div class="menuCss2">
            <ul class="MenuBar">
                <li class="item4 first rank0 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'accueil.php')) !== false ? 'selected' : '') ?>" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Accueil); ?>" class="first rank0 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'accueil.php')) !== false ? 'selected' : '') ?>">Accueil</a>
                </li>
                <li class="item13 rank1 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'a-propos.php')) !== false ? 'selected' : '') ?>" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::Apropos); ?>" class="rank1 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'a-propos.php')) !== false ? 'selected' : '') ?>">À propos</a>
                </li>
                <li class="item14 rank2 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'promotions.php')) !== false ? 'selected' : '') ?>" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::PromotionsNouvelles,page::PromotionsEtNouvellesPromotions); ?>" class="rank2 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'promotions.php')) !== false ? 'selected' : '') ?>">Promotions et nouvelles</a>
                </li>
                <li class="item12 rank3  <?php echo ((strpos($_SERVER['REQUEST_URI'], 'nous-joindre.php')) !== false ? 'selected' : '') ?>" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>" class="rank3 <?php echo ((strpos($_SERVER['REQUEST_URI'], 'nous-joindre.php')) !== false ? 'selected' : '') ?>">Nous joindre</a>
                </li>
                <li class="item12 rank3" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_boutiqueEnLigne); ?>" class="rank3" target="_blank">Boutique en ligne</a>
                </li>                
                <li class="item49 last rank4" expansionmode="HoverExpansion">
                    <a href="<?php echo RD_PageLink::getHref(folder::Root,page::UrgenceRoutiere24H); ?>" class="last rank4">Urgence routière 24h</a>
                </li>
            </ul>
        </div>
    </div>
</div>