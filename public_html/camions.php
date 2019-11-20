<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>var _N = 0;</script>
<script src="_assets/js/camions-rest.js" type="text/javascript"></script>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content camions-occasions">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Camions</h1>
                </div>
                <br />
                <div class="FacetedExplorer">


                    <!-- Results Content -->
                    <div  class="GpcFacetedResults defaultFacet">

                        <div class="GpcPagerCountSelector">
                            <span class="GpcItemsPerPageText">Afficher par page</span>
                            <div data-value="12" class="limit-per-page GpcDisplayOption selected">12</div>
                            <div data-value="24" class="limit-per-page GpcDisplayOption">24</div>
                            <div data-value="48" class="limit-per-page GpcDisplayOption">48</div>
                        </div>
                        <div class="GpcPagedResultCount" style="display: none;">
                            <span class="GpcCountPrefixText">Résultats</span>
                            <span class="GpcPagedResultCurrentCount">1 - 4</span>
                            <span class="GpcBetweenCountText">sur</span>
                            <span class="GpcPagedResultTotalCount">4</span>
                        </div>
                        <div class="GpcResultPager">
                            <ul class="pagination" id="pagination"></ul>
                        </div>
                        <div class="orderBy clear">
                            <div class="libelle">
                                Classer par :
                            </div>
                            <div class="GpcResultOrderSelector">
                                <select name="SearchSorting" class="search-sorting" style="font-size: .8em; line-height: 3em; padding: .15em;">
                                    <option value="asc">Nom ascendant</option>
                                    <option value="desc">Nom descendant</option>
                                </select>
                            </div>
                        </div>

                        <div id="list" class="GpcResultItemWrapper results-container">

                            <div v-for="(record,index) in item.records" class="FacetedResultTemplate DefaultResultContainer">
                                <a href="../details_new.php?id=Mjc3Ng==">
                                    <div class="ResultImage">                
                                        <img :src="record.pictures[0]" title="" alt="">
                                    </div>
                                    <div class="ResultContent">
                                        <div class="ResultContentProductName">
                                            <h2>
                                                <span class="ProductBrokerType_String">{{record.marque}}</span>
                                                <span>&nbsp;</span>
                                                <span class="ProductBrokerType_String">{{record.Model}}</span>
                                                <span>&nbsp;</span>
                                                <span>
                                                    <span class="ProductBrokerType_String">6 x 4</span>
                                                </span>
                                            </h2>
                                        </div>
                                        <div class="customField">
                                            <div class="forBroker label zoneForBroker">
                                                <span class="forBroker label spanForBroker">No d'inventaire : </span>
                                                <span class="ProductBrokerType_String">{{record.stock}}</span>
                                            </div>
                                        </div>
                                        <div class="customField">
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
                            </div>


                        </div>

                        <div class="GpcFooter clear">
                            <div class="GpcPagedResultCount" style="display: none;">
                                <span class="GpcCountPrefixText">Résultats</span>
                                <span class="GpcPagedResultCurrentCount">1 - 4</span>
                                <span  class="GpcBetweenCountText">sur</span>
                                <span class="GpcPagedResultTotalCount">4</span>
                            </div>
                            <div class="GpcResultPager">
                                <ul class="pagination" id="pagination"></ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="FacetedExplorerClear GpcClear"></div>
                <div class="bottom-info" style="margin-top: 2em;">
                    <p>Réseau Dynamique est la référence dans le domaine des camions lourds et des tracteurs terminaux d'occasion.</p>
                    <h2>Pourquoi choisir un camion d'occasion chez Réseau Dynamique?</h2>
                    <p>Avant d'être mis en vente, tous les véhicules d'occasion de Réseau Dynamique ont été inspectés minutieusement et réparés. Revendeur de camions de toutes classes, vous êtes assuré de trouver un camion de grande qualité répondant en tous points à vos besoins d'affaires.</p>
                    <p>Détaillant de camions neufs de marque International, Réseau Dynamique offre des garanties prolongées du manufacturier sur les composants majeurs de ses véhicules. Les services d'experts des mécaniciens accrédités International offrent également la reconstruction complète des composants majeurs.</p>
                    <h2>Le service après-vente : la force d'un réseau</h2>
                    <p>Avec Réseau Dynamique, vous faites un choix sensé pour le présent et le futur. Les&nbsp;<a name="hyperlien" href="<?php echo RD_PageLink::getHref(folder::Root,page::NousJoindre); ?>" target="_self">19 centres de pièces et services du Réseau</a> dispersés sur le territoire québécois assurent aux clients de Réseau Dynamique un service après-vente inégalable. Remettez l'entretien de votre camion ou de votre flotte entre les mains de techniciens formés directement par les fabricants.</p>
                    <p>Disponibles en un seul endroit au Centre-du-Québec, venez faire l'essai de nos camions d'occasion.</p>
                </div>
            </div>
            <div class="FacetedExplorerClear GpcClear"></div>
            
        </div>
    </div>
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>    
    
    <div class="loading-overlay">Loading&#8230;</div>
   
    
    <script type="text/javascript">

$(document).ready(function () {
    //fetchRecords('', '', '', true, 0);  
    init();      
});

function init(){
    var vm = new Vue({
        el: '#list',
        data: {
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
                let isNew = (window.location.search.match(new RegExp('[?&]' + 'new' + '=([^&]+)')) || [,null])[1];
                if(isNew){
                    n = 1;
                }

                // Show loading spinner
                $('.loading-overlay').show();

                try {
                    let params = '{"customCriteria":"","sortBy":"asc","currentPage":1,"limitPerPage":"12","arrayFilters":[{"field":"marque","value":"International"},{"field":"modele","value":"Prostar"}]}';

                    const response = await fetch(api + '?n=' + n + '&params=' + encodeURI(params) );
                    const data = await response.json()
                    this.item = data;

                } catch (error) {
                    console.error(error);
                    this.errorMessage = error.toString();
                }

                // Hide loading spinner
                $('.loading-overlay').hide();
            }
        }
    })

}
</script>


</body>
</html>