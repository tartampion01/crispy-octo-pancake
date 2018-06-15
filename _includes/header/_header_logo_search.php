<!-- LOGO AND SEARCH -->
<div class="entete clear">
    <div class="shrink clear">
        <div class="mMenu icoMenuMobile">
            <img name="image" title="" src="../../_assets/images/menu_images/spacer.png" alt="image">
        </div>
        <div class="logo">
            <a class="" name="hyperlien" onclick="javascript:RegisterClick(this);" href="<?php echo RD_PageLink::getHref(folder::Root,page::Accueil); ?>" target="_self">
                <img class="" name="image" title="" src="../../_assets/images/menu_images/reseau-dynamique.png" alt="Camions, Remorques et Véhicules">
            </a>
        </div>
        <div class="recherche">
            <div class="SearchMainDiv">
                <form role="form" method="POST" action="../search.php">
                    <input id="tbSearch" name="tbSearch" title="Rechercher" class="SearchTextBox" placeholder="Rechercher" type="text">
                    <input type="image" id="imgSearch" name="imgSearch" class="SearchImage" src="../../_assets/images/menu_images/spacer.png" alt="Rechercher" style="cursor:pointer;">
                </form>
            </div>
        </div>
    </div>
</div>