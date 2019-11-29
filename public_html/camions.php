<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>
var _N = 0;
</script>
<script src="_assets/js/camions-rest.js" type="text/javascript"></script>
<<<<<<< HEAD
=======
<style>
.bgfiltre {
    background-color: dimgray;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
}

.filterZone h1 {
    margin: 0;
}

.container-filter {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.filter-item {
    width: 30%;
    float: left;
    display: inline;
    padding: 50px 20px 50px 20px;
}

.filter-item a {
    color: black;
    text-decoration: none;
}

.resultsearch {
    padding: 10px;
    float: left;
}

.pagination {
    display: inline-block;
    float: right;
    padding-top: 5px;
    padding-bottom: 5px;
  } 

.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    position:relative;
     top:10px;

}

.pagination button {
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
}

.pagination a.active {
    background-color: rgb(213, 94, 36);
    color: white;
}

.pagination a:hover:not(.active) {
    background-color: rgb(213, 94, 36);
}
</style>
>>>>>>> 73a3c9940b0cc91096b03b66142f111857f9d395

<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
        <div class="">
            <div class="content camions-occasions">
                <div class="grid>
                    <div class="bottom-info grid" style="margin-top: 2em; ">
                        <div class="grid-pad">
                            <h3 class="orange"
                                style="text-align:center; margin-bottom:40px; text-transform:uppercase; font-weight:700; ">
                                Réseau Dynamique est la référence dans le domaine des camions lourds et des tracteurs
                                terminaux d'occasion&#8239;!</h3>
                            <h2>Pourquoi choisir un camion d'occasion chez Réseau Dynamique?</h2>
                            <p>Avant d'être mis en vente, tous les véhicules d'occasion de Réseau Dynamique ont été
                                inspectés minutieusement et réparés. Revendeur de camions de toutes classes, vous êtes
                                assuré de trouver un camion de grande qualité répondant en tous points à vos besoins
                                d'affaires.</p>
                            <p>Détaillant de camions neufs de marque International, Réseau Dynamique offre des garanties
                                prolongées du manufacturier sur les composants majeurs de ses véhicules. Les services
                                d'experts des mécaniciens accrédités International offrent également la reconstruction
                                complète des composants majeurs.</p>
                            <h2>Le service après-vente : la force d'un réseau</h2>
                            <p>Avec Réseau Dynamique, vous faites un choix sensé pour le présent et le futur.
                                Les&nbsp;<a name="hyperlien"
                                    href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>"
                                    target="_self">19 centres de pièces et services du Réseau</a> dispersés sur le
                                territoire québécois assurent aux clients de Réseau Dynamique un service après-vente
                                inégalable. Remettez l'entretien de votre camion ou de votre flotte entre les mains de
                                techniciens formés directement par les fabricants.</p>
                            <p>Disponibles en un seul endroit au Centre-du-Québec, venez faire l'essai de nos camions
                                d'occasion.</p>
                        </div>
                    </div>
                    <div class="FacetedExplorerClear GpcClear"></div>

                    <!-- <div class="titrepage">
                        <h1>Inventaire Complet</h1>
                    </div> -->

                    <div class="filterZone grid">
                        <div id="zoneCriteria" class="grid-pad  hide-on-mobile" style="height:75px;width:100%;">
                            <h1>Outils de recherche : </h1> <!-- class="" style="padding-top:5px;" -->
                            <span style="color:rgb(213,94,36); float:left; display:inline-block;"
                                onclick="$(this).remove()">
                                AISIN A460 <sup>x</sup>
                            </span>
                        </div>
                        <!--Menu filtre-->
                        <nav class="bgfiltre hide-on-mobile">
                            <div class="menudestop grid-pad">
                                <ul>
                                    <li>
                                        <a href="#">Marque</a>
                                        <ul class="hidden">
                                            <li>
                                                <a href="#">International</a>
                                                <ul class="hidden">
                                                    <li>
                                                        <a href="#">série CV</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/CV-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE CV EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série HV</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/HV-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE HV EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série HX</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/hx-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE HX EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série LT</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/lt-navigation.png" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE LT EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série MV</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/MV-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE MV EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Isuzu</a>
                                            </li>
                                            <li>
                                                <a href="#">Kalmar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Modele</a>
                                        <ul class="hidden">
                                            <li>
                                                <a href="#">International</a>
                                                <ul class="hidden">
                                                    <li>
                                                        <a href="#">série CV</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/CV-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE CV EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série HV</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/HV-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE HV EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série HX</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/hx-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE HX EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série LT</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/lt-navigation.png" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE LT EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">série MV</a>
                                                        <ul class="hidden">
                                                            <li>
                                                                <img src="Resources/images/MV-navigation.jpg" alt="" />
                                                                <p class="col-1-1 padding orange center">
                                                                    LE MV EST RÉSILIENT POUR TOUTES LES SAISONS POUR
                                                                    VOTRE ENTREPRISE EN CROISSANCE !
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Isuzu</a>
                                            </li>
                                            <li>
                                                <a href="#">Kalmar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Transmission</a>
                                        <ul class="hidden">
                                            <li><a href="#" onclick="addFilterCriteria()">AISIN A460</a></li>
                                            <li><a href="#">AISIN A465</a></li>
                                            <li><a href="#">ALLISON</a></li>
                                            <li><a href="#">EATON ENDURANT</a></li>
                                            <li><a href="#">FULLER</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Moteur</a>
                                        <ul class="hidden">
                                            <li><a href="#">6HK1-TC</a></li>
                                            <li><a href="#">4JJ1-TC</a></li>
                                            <li><a href="#">A26</a></li>
                                            <li><a href="#">B6.7</a></li>
                                            <li><a href="#">GMPT-V8</a></li>
                                            <li><a href="#">L9</a></li>
                                            <li><a href="#">N13</a></li>
                                            <li><a href="#">X15</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Prix</a>
                                        <ul class="hidden" style="min-width:230px;">
                                            <li><a href="#">0&#8239;$ à 100 000&#8239;$</a></li>
                                            <li><a href="#">100 000&#8239;$ à 200 000&#8239;$</a></li>
                                            <li><a href="#">200 000&#8239;$ à 300 000&#8239;$</a></li>
                                            <li><a href="#">300 000&#8239;$ à 400 000&#8239;$</a></li>
                                            <li><a href="#">400 000&#8239;$ à 500 000&#8239;$</a></li>
                                            <li><a href="#">Plus de 500 000&#8239;$</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <br />
                    <div class="FacetedExplorer grid-pad">
                        <!-- Results Content -->
                        <div class="GpcFacetedResults defaultFacet">

                            <div class="GpcPagerCountSelector col-1-1 grid-pad">
                                <div data-value="48" class="limit-per-page GpcDisplayOption" style="float:right;">48</div>
                                <div data-value="24" class="limit-per-page GpcDisplayOption" style="float:right;">24</div>
                                <div data-value="12" class="limit-per-page GpcDisplayOption selected" style="float:right;">12</div>
                                <span class="GpcItemsPerPageText" style="float:right;">Afficher par page</span>
                            </div>
                            <div class="GpcPagedResultCount" style="display: none;">
                                <span class="GpcCountPrefixText">Résultats</span>
                                <span class="GpcPagedResultCurrentCount">1 - 4</span>
                                <span class="GpcBetweenCountText">sur</span>
                                <span class="GpcPagedResultTotalCount">4</span>
                            </div>
                            <div class="GpcResultPager col-1-1">
                                <ul class="pagination" id="pagination"></ul>
                            </div>
                            <div class="orderBy clear col-1-1">
                                <div class="GpcResultOrderSelector" style="float:right;">
                                    <select name="SearchSorting" class="search-sorting"
                                        style="font-size: .8em; line-height: 3em; padding: .15em;">
                                        <option value="asc">Nom ascendant</option>
                                        <option value="desc">Nom descendant</option>
                                    </select>
                                </div>
                                <div class="libelle" style="float:right;">
                                    Classer par :
                                </div>
                            </div>

                            <div id="list" style="" class=""> <!-- GpcResultItemWrapper results-container -->

                                <div class="grid">
                                    <div v-for="(record,index) in item.records" class="container-filter">
                                        <!--item -->
                                        <div class="filter-item col-1-3">
                                            <a :href="getHref(record.id)">
                                                <div class="rectangle"></div>
                                                <div class="image-box">
                                                    <img 
                                                        :src="record.pictures[0]"
                                                        :title="record.marque + ' - ' + record.Model"
                                                        :alt="record.marque + ' - ' + record.Model"
                                                        class="imagespec col-1-1"
                                                    />
                                                </div>

                                                <div class="topdivision40" style="margin-top:15px;">
                                                    <h2 style="font-weight:700;">{{ record.marque }} - {{ record.Model }}</h2>
                                                </div>
                                            </a>

                                            <div class="inline col-1-1 borderdown" style="margin-top:30px;">
                                                <h4 class="inline topdivision20 nobold col-1-2">numéro série :</h4>
                                                <p class="resultatbdfilter">{{ record.serial }}</span>
                                            </div>
                                            <!--correction width-->
                                            <div class=" col-1-1 topdivision30 mobile-col-1-1" style="margin-top:40px;">
                                                <h3 class="mobile-col-1-1" style="font-weight:700;">
                                                    Description :
                                                </h3>
                                                <p class="mobile-col-1-1 justify">
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                    accusantium doloremque laudantium. Sed ut perspiciatis unde omnis
                                                    iste natus
                                                    error sit.
                                                </p>
                                                <div class="col-1-1 topdivision15 mobile-col-1-1">
                                                    <div class="uppercases inline floatleft col-1-1">
                                                        <h4 class="col-1-2">Modèle :</h4> 
                                                        <p class="resultatbdfilter">{{ record.Model }}</p>
                                                    </div>
                                                    <div class="uppercases inline floatleft col-1-1">
                                                        <h4 class="col-1-2">No d'inventaire :</h4> 
                                                        <p class="resultatbdfilter">{{ record.stock }}</p>
                                                    </div>
                                                    <div class="uppercases inline floatleft col-1-1">
                                                        <h4 class="col-1-2">Moteur :</h4> 
                                                        <p class="resultatbdfilter"> {{record.engine}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div v-for="(record,index) in item.records"
                                    class="FacetedResultTemplate DefaultResultContainer">
                                    <a :href="getHref(record.id)">
                                        <div class="rectangle"></div>
                                        <div class="ResultImage">
                                            <img :src="record.pictures[0]" class="imagespec" title="" alt="">
                                        </div>
                                        <div class="ResultContent">
                                            <div class="ResultContentProductName">
                                                <h2>{{ record.marque }}<br />{{ record.Model }}
                                                </h2>
                                            </div>
                                            <div class="customField">
                                                <div class="forBroker label zoneForBroker">
                                                    <span class="forBroker label spanForBroker">No série : </span>
                                                    <span class="ProductBrokerType_String">{{ record.serial }}</span>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="customField">
                                                <div class="forBroker label zoneForBroker">
                                                    <span class="forBroker label spanForBroker">Modèle : </span>
                                                    <span class="ProductBrokerType_String">{{ record.Model }}</span>
                                                </div>
                                            </div>
                                            <div class="customField">
                                                <div class="forBroker label zoneForBroker">
                                                    <span class="forBroker label spanForBroker">No d'inventaire :
                                                    </span>
                                                    <span class="ProductBrokerType_String">{{ record.stock }}</span>
                                                </div>
                                            </div>
                                            <div class="customField" v-if="record.engine">
                                                <div class="forBroker">
                                                    <span class="forBroker">Moteur : </span>
                                                    <span class="ProductBrokerType_String">{{record.engine}}</span>
                                                </div>
                                            </div>
                                            <div class="inPromo">
                                                <span class="ProductBrokerType_Boolean">False</span>
                                            </div>
                                            <div class="imgPlus"></div>
                                        </div>
                                    </a>
                                </div> -->

                            </div>

                            <!-- <div class="GpcFooter clear">
                                <div class="GpcPagedResultCount" style="display: none;">
                                    <span class="GpcCountPrefixText">Résultats</span>
                                    <span class="GpcPagedResultCurrentCount">1 - 4</span>
                                    <span class="GpcBetweenCountText">sur</span>
                                    <span class="GpcPagedResultTotalCount">4</span>
                                </div>
                                <div class="GpcResultPager">
                                    <ul class="pagination" id="pagination"></ul>
                                </div>
                            </div> -->

                    <!--resultat section-->
                    <div class="GpcFooter clear" > <!-- recuperer le style... -->
                        <div>
                            <div class="resultsearch">
                                Resultat 1-12 sur 100
                            </div>
                            <div class="pagination">
                                <button class="buttonwebsite">Precedent</button>
                                <a href="#">1</a>
                                <a href="#" class="active">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <button class="buttonwebsite">Suivant</button>
                            </div>
                        </div>
                    </div>
                    
                    
                        </div>
                    </div>

                    <div class="FacetedExplorerClear GpcClear"></div>

                </div>
            </div>
    </form>
    <!--multi-item special product-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/slider/multi_item_product.php'); ?>
    <!--footer-->
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>

    <div class="loading-overlay">Loading&#8230;</div>


    <script type="text/javascript">
    $(document).ready(function() {
        //fetchRecords('', '', '', true, 0);  
        init();
    });

    function init() {
        var vm = new Vue({
            el: '#list',
            data: {
                isNew: 0,
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
                async readData() {

                    let api = 'http://reseaudynamique.com/api/read.php';
                    let n = 0;
                    let isNew = (window.location.search.match(new RegExp('[?&]' + 'new' + '=([^&]+)')) || [,
                        null
                    ])[1];
                    if (isNew) {
                        this.isNew = 1;
                        n = 1;
                    }

                    let marque = "";
                    let m = (window.location.search.match(new RegExp('[?&]' + 'marque' + '=([^&]+)')) || [,
                        null
                    ])[1];
                    if (m) {
                        switch (m.trim().toLowerCase()) {
                            case "international":
                                marque = "International";
                                break;
                            case "kalmar":
                                marque = "Kalmar";
                                break;
                            case "isuzu":
                                marque = "Isuzu";
                                break;
                            default:
                                break;
                        }
                    }

                    // Show loading spinner
                    $('.loading-overlay').show();

                    try {

                        let params =
                            '{"field":"","value":"","customCriteria":" (marque=\\\"international\\\" AND DisplayOnWebSite=1) or (marque=\\\"isuzu\\\" AND DisplayOnWebSite=1) or marque=\\\"kalmar\\\" AND ","sortBy":"asc","currentPage":1,"limitPerPage":"12","arrayFilters":[]}'; //,{"field":"modele","value":"Prostar"}

                        if (marque) {
                            params =
                                '{"customCriteria":"","sortBy":"asc","currentPage":1,"limitPerPage":"12","arrayFilters":[{"field":"marque","value":"' +
                                marque + '"}]}'; //,{"field":"modele","value":"Prostar"}
                        }

                        const response = await fetch(api + '?n=' + n + '&params=' + encodeURI(params));
                        const data = await response.json()
                        this.item = data;

                    } catch (error) {
                        console.error(error);
                        this.errorMessage = error.toString();
                    }

                    // Hide loading spinner
                    $('.loading-overlay').hide();
                },
                getHref(id) {
                    let url = "/details_new.php?"
                    if (this.isNew == 1) {
                        url = url + "new=1&"
                    }
                    return url + "id=" + encodeURI(btoa(id));
                }
            }
        })

    }
    </script>


</body>

</html>