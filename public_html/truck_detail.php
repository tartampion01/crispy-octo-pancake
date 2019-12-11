<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<html  xmlns="http://www.w3.org/1999/xhtml" lang="fr-CA" xml:lang="fr-CA">

<body class="body"><?php RD_Utils::write_Gtag() ?>
<form role="form" method="POST" ><!-- <?php echo $NOMPAGE; ?> -->
        <div id="detail" class="produit">
            <div class="grid grid-pad">
                <!--top-->
                <section class="">
                    <div class="col-1-1">
                        <div class="topdivision topnavdetail col-1-1">
                            <h2 class="title mobile-col-1-1" style="margin-top:5px;">
                                <span v-html="item.beauTitre"></span> <!--Titre  de camion-->
                            </h2>        
                            <a name="hyperlien" onclick="window.print();" href="javascript:void(0);" target="_self"><img class="" style="display:inline-block; float:right; padding:5px;" src="_assets/images/wx3/printbtn.png" alt="print logo" /></a>
                            <a :href="getUrlObtenirPrix(item.id)" target="_self">
                                <button type="button" class="rightbutton buttonwebsite mobile-col-1-1" name="orange">Obtenir un prix</button>
                            </a>                            
                            <a :href="getUrlFinancement(item.id)" target="_self">
                                <button type="button" class="rightbutton buttonwebsite mobile-col-1-1" name="orange" >Demande de financement</button>
                            </a>                       

                            <hr class="hide-on-mobile" style="margin-top:50px;" />
                        <div class="col-1-1 topnavdetail mobile-col-1-1">
                            <h3 class="subnavdescription">
                                <a :href="getUrlDemandeInformation(item.id)" target="_self">Demande d'information</a>
                            </h3>
                            <h3 class="subnavdescription">
                                <a :href="getUrlPlanifierEssaiRoutier(item.id)" target="_self">Planifier un essai routier</a>
                            </h3>
                            <h3 class="subnavdescription ">
                                <a href="/nous-joindre.php">Trouver un concessionnaire</a>
                            </h3>
                            <h3 class="subnavdescription">
                                <a :href="getUrlEvaluerEchange(item.id)" target="_self">Évaluer mon échange</a>
                            </h3>
                        </div>
                    </div>
                </section>
                <!--content-->
                <section>
                    <div class="col-1-1 topdivision">
                        <!--left content-->
                        <div class="col-7-12 mobile-col-1-1 paddingright">
                            <!--section 1-->
                            <div class="col-1-1 mobile-col-1-1">
                                <h2 class="mobile-col-1-1">Description :</h2>
                                <p v-if="item.marque" class="col-1-1 mobile-col-1-1 Descriptionp">
                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur. </p>
                            </div>
                            <!--section 2-->
                            <div class="col-1-1 mobile-col-1-1 margesection">
                                <h2 class="col-1-1">Spécifications :</h2>
                                <div class="col-1-2 topdivision mobile-col-1-2">
                                    <!--marque-->
                                    <div class="col-1-1 mobile-col-1-1" v-if="item.marque">
                                        <img class="logoleft" src="_assets/images/wx3/marquelogo.png" alt="" />
                                        <div class="topdivision15">
                                            <h3 class="infotitle">Marque :</h3>
                                            <p class="infotext">{{ item.marque }}</p>
                                        </div>
                                    </div>
                                    <!--modele-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1" v-if="item.modele">
                                        <img class="logoleft" src="_assets/images/wx3/modeledetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle">Modèle  :</h3>
                                            <p class="infotext">{{ item.modele }}</p>
                                        </div>
                                    </div>
                                    <!--no serie-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1" v-if="item.noSerie">
                                        <img class="logoleft" src="_assets/images/wx3/noseriedetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle">No série  :</h3>
                                            <p class="infotext">{{ item.noSerie }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1-2 topdivision mobile-col-1-2">
                                    <!--no inventaire-->
                                    <div class="col-1-1 mobile-col-1-1" v-if="item.noInventaire">
                                        <img class="logoleft" src="_assets/images/wx3/noinventairedetails.png" alt="" />
                                        <div class="topdivision15">
                                            <h3 class="infotitle">No d'inventaire  :</h3>
                                            <p class="infotext">{{ item.noInventaire }}</p>
                                        </div>
                                    </div>
                                    <!--annee-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1" v-if="item.annee">
                                        <img class="logoleft" src="_assets/images/wx3/anneedetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle">Année  :</h3>
                                            <p class="infotext">{{ item.annee }}</p>
                                        </div>
                                    </div>
                                    <!--kilometrage-->
                                    <div class="col-1-1 topdivision15 mobile-col-1-1" v-if="item.intMillage">
                                        <img class="logoleft" src="_assets/images/wx3/kmdetails.png" alt="" />
                                        <div>
                                            <h3 class="infotitle">Kilométrage  :</h3>
                                            <p class="infotext">{{ item.intMillage }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--section 3-->
                            <div class="col-1-1 mobile-col-1-1 margesection">
                                <h2 class="mobile-col-1-1">Caractéristique</h2>
                                <div class="col-1-1 topdivision">
                                    <!--Empattement-->
                                    <div class="rowdetails" id="fld_empattement" v-if="item.empattement">
                                        <div class="infotitle column1details">
                                            Empattement
                                        </div>
                                        <div class="column3details">
                                            {{ item.empattement }}
                                        </div>
                                    </div>
                                    <!--Essieu avant-->
                                    <div class="rowdetails" id="fld_essieu_avant" v-if="item.essieu_avant">
                                        <div class="infotitle column1details">
                                            Essieu avant
                                        </div>
                                        <div class="column3details">
                                            {{ item.essieu_avant }}
                                        </div>
                                    </div>
                                    <!--Essieu arriere-->
                                    <div class="rowdetails" id="fld_essieu_arriere" v-if="item.essieu_arriere">
                                        <div class="infotitle column1details">
                                            Essieu arrière
                                        </div>
                                        <div class="column3details">
                                            {{ item.essieu_arriere }}
                                        </div>
                                    </div>
                                    <!--Suspension arrière-->
                                    <div class="rowdetails" id="fld_rearsuspension" v-if="item.rearsuspension">
                                        <div class="infotitle column1details">
                                            Suspension arrière
                                        </div>
                                       <div class="column3details">
                                            {{ item.rearsuspension }}
                                       </div>
                                    </div>
                                    <!--Transmission-->
                                    <div class="rowdetails" id="fld_transmission" v-if="item.transmission">
                                        <div class="infotitle column1details">
                                           Transmission
                                        </div>
                                       <div class="column3details">
                                            {{ item.transmission }}
                                       </div>
                                    </div>
                                    <!--Moteur-->
                                    <div class="rowdetails" id="fld_moteur" v-if="item.moteur">
                                        <div class="infotitle column1details">
                                            Moteur
                                        </div>
                                        <div class="column3details">
                                            {{ item.moteur }}
                                        </div>
                                    </div>
                                    <!--HP-->
                                    <div class="rowdetails" id="fld_hp" v-if="item.hp">
                                        <div class="infotitle column1details">
                                            HP
                                        </div>
                                        <div class="column3details">
                                            {{ item.hp }}
                                        </div>
                                    </div>
                                    <!--Ratio essieu arrière-->
                                    <div class="rowdetails" id="fld_ratio_ar" v-if="item.ratio_ar">
                                        <div class="infotitle column1details">
                                            Ratio essieu arrière
                                        </div>
                                        <div class="column3details">
                                            {{ item.ratio_ar }}
                                        </div>
                                    </div>
                                    <!--Dimension pneu-->
                                    <div class="rowdetails" id="fld_pneu_ar_dim" id="fld_pneu_av_dim" v-if="item.pneu_ar_dim" v-if="item.pneu_av_dim">
                                        <div class="infotitle column1details">
                                            Dimension pneu
                                        </div>
                                        <div class="column3details">
                                            {{ item.pneu_ar_dim }}  {{ item.pneu_av_dim }}
                                        </div>
                                    </div>
                                    <!--Wheel-->
                                    <div class="rowdetails" id="fld_wheel" v-if="item.wheel">
                                        <div class="infotitle column1details">
                                            Roue
                                        </div>
                                        <div class="column3details">
                                            {{ item.wheel }} 
                                        </div>
                                    </div>
                                    <!--freins-->
                                    <div class="rowdetails" id="fld_freins" v-if="item.freins">
                                        <div class="infotitle column1details">
                                            freins
                                        </div>
                                        <div class="column3details">
                                            {{ item.freins }} 
                                        </div>
                                    </div>
                                    <!--color-->
                                    <div class="rowdetails" id="fld_color" v-if="item.color">
                                        <div class="infotitle column1details">
                                            Couleur
                                        </div>
                                        <div class="column3details">
                                            {{ item.color }} 
                                        </div>
                                    </div>
                                    <!--équipement-->
                                    <div class="rowdetails" id="fld_equipements" v-if="item.equipment">
                                        <div class="infotitle column1details">
                                            Équipement
                                        </div>
                                        <div class="column3details">
                                            {{ item.equipment }} 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--right content-->
                        <div class="col-5-12 paddingleft mobile-col-1-1">
                            <div class="col-1-1">
                                <div class="col-1-1">
                                    <div>
                                        <img :src="MainPicture.src"  :alt="MainPicture.alt" style="width:100%">
                                    </div>
                                </div>
                                    <div v-if="item.pictures" v-for="(imgsrc,index) in item.pictures" >

                                        <div style="width:33%; float:left;overflow:hidden;" class="image-box" >                                           
                                            <img  :src="imgsrc" alt="" style=" object-fit:cover; height:150px; width:100%; margin: 2px 2px 0 2px;" class="" @click="setPicture(index);">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="errorMessage" ><h2>ERREUR</h2>{{errorMessage}}</div>
                    </div>
                </section>
            </div>                      
	    </div>
    </form>
    <!--multi-item special product-->
    <div class="margesection"></div>
    <div class="loading-overlay">Loading&#8230;</div>

    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_product.php'); ?>  
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>

    <script type="text/javascript">

$(document).ready(function () {
    init();      
});

function init(){
    var vm = new Vue({
        el: '#detail',
        data: {
            MainPicture: {src:null, alt:""},
            isNew : 0,
            errorMessage: "",
            item: {}
        },
        mounted: function() {
            try {

                this.readData();

            } catch (error) {
                console.error(error);
                this.errorMessage = error.toString();
            }
        },
        methods: {
            setPicture(index){

                this.MainPicture = {src:this.item.pictures[index],alt:"Reseau dynamique photo camion"}
            },
            getUrlFinancement(id) {
                    return "/demande-financement.php?id=" + encodeURI(btoa(id)) + "&n=" + encodeURI(btoa(this.isNew)) ;
                },
            getUrlObtenirPrix(id) {
                    return "/obtenir-prix.php?id=" + encodeURI(btoa(id)) + "&n=" + encodeURI(btoa(this.isNew)) ;
                },
            getUrlPlanifierEssaiRoutier(id) {
                    return "/planifier-essai-routier.php?id=" + encodeURI(btoa(id)) + "&n=" + encodeURI(btoa(this.isNew)) ;
                },
            getUrlDemandeInformation(id) {
                    return "/demande-information.php?id=" + encodeURI(btoa(id)) + "&n=" + encodeURI(btoa(this.isNew)) ;
                },
            getUrlEvaluerEchange(id) {
                    return "/evaluer-echange.php?id=" + encodeURI(btoa(id)) + "&n=" + encodeURI(btoa(this.isNew)) ;
                },                
            async readData() {

                let api = 'http://reseaudynamique.com/api/singleUsedTruck_.php';
                let isNew = (window.location.search.match(new RegExp('[?&]' + 'n' + '=([^&]+)')) || [,null])[1];
                if(isNew && isNew == 1){
                    api = 'http://reseaudynamique.com/api/singleNewTruck_.php';
                    this.isNew = 1;
                }

                let id = (window.location.search.match(new RegExp('[?&]' + 'id' + '=([^&]+)')) || [,null])[1];
                if (id) {
                    // Show loading spinner
                    $('.loading-overlay').show();

                    try {

                        const response = await fetch(api + '?id=' + id)
                        const data = await response.json()
                        this.item = data;
                        
                        this.setPicture(0);

                    } catch (error) {
                        console.error(error);
                        this.errorMessage = error.toString();
                    }

                    // Hide loading spinner
                    $('.loading-overlay').hide();
                }
            }
        }
    })

}
</script>
</body>
</html>