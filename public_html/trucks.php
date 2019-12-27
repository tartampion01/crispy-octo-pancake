<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>

<script type='text/javascript' src='/_assets/js/App.js'></script>  

<!-- <script src="_assets/js/camions-rest.js" type="text/javascript"></script> -->


<body class="body">
    <form role="form" method="POST" >
        <div class="">
            <div class="content camions-occasions">
                <div class="grid">
                    <h1 class="titlefilterzone grid-pad">Outils de recherche : </h1>
                    <!--Menu filtre-->
                    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/Menu/menuFilter.php'); ?>
                    <br />
                    <div class="grid-pad">
                        <!-- Results Content -->
                        <!-- class="FacetedExplorer grid-pad" -->
                        <!-- <div class="GpcFacetedResults defaultFacet"></div> -->
                        <!-- <div class="FacetedExplorerClear GpcClear"></div> -->
                            
                            <div id="list" style="" class="">

                                <div class="grid">
                                    <div v-for="(record,index) in item.records" class="container-filter">
                                        <!--item -->
                                        <div class="filter-item col-1-3">
                                            <a :href="getHref(record.id)">
                                                <div class="rectangle"></div>
                                                <div class="bgtrucks image-box">
                                                    <img :src="getSrc(record.picture_id)"
                                                        :title="record.marque + ' - ' + record.Model"
                                                        :alt="record.marque + ' - ' + record.Model"
                                                        class="col-1-1" />
                                                </div>
                                                <div class="topdivision40" style="margin-top:15px;">
                                                    <h2 style="font-weight:700;">{{ record.marque }} - {{ record.Model }}</h2>
                                                </div>
                                            </a>
                                            <div class="inline col-1-1 borderdown mobile-col-1-1" style="margin-top:30px;">
                                                <h4 class="inline topdivision20 nobold col-1-2 mobile-col-1-2">Numéro série :</h4>
                                                <p class="resultatbdfilter">{{ record.serial | NA }}</span>
                                            </div>
                                            <!--correction width-->
                                            <div class=" col-1-1 topdivision30 mobile-col-1-1" style="margin-top:40px;">
                                                <div class="col-1-1 topdivision15 mobile-col-1-1">
                                                    <div class="uppercases inline floatleft col-1-1 mobile-col-1-1">
                                                        <h4 class="col-1-2 mobile-col-1-2">Modèle :</h4>
                                                        <p class="resultatbdfilter">{{ record.Model | NA }}</p>
                                                    </div>
                                                    <div class="uppercases inline floatleft col-1-1 mobile-col-1-1">
                                                        <h4 class="col-1-2 mobile-col-1-2">No d'inventaire :</h4>
                                                        <p class="resultatbdfilter">{{ record.stock | NA }}</p>
                                                    </div>
                                                    <div class="uppercases inline floatleft col-1-1 mobile-col-1-1">
                                                        <h4 class="col-1-2 mobile-col-1-2">Moteur :</h4>
                                                        <p class="resultatbdfilter">{{record.engine | NA }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--resultat section -->
                                <!-- recuperer le style... -->
                                <div v-if="paging" class="grid" style="border-top: 1px #cfcfcf solid; border-bottom: 1px #cfcfcf solid; " >
                                    <div class="resultsearch mobile-col-1-1">Resultat {{paging.message}}</div>
                                    <div v-if="paging.available" class="pagination mobile-col-1-1">
                                        <button type="button" class="buttonwebsite mobile-col-1-1" @click="paging.prev()">Precedent</button>
                                        <div v-for="page in paging.pages" class="mobilepagination mobile-col-1-1">
                                            <a v-bind:class="{ active: page.current }" @click="paging.move(page.index)" >{{page.title}}</a>
                                        </div>                                                                                
                                        <button type="button" class="buttonwebsite mobile-col-1-1" @click="paging.next()" >Suivant</button>
                                    </div>
                                </div>


                            </div>

                        </div>
                    

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
        trucksInit();
    });

    function trucksInit() {
        var vm = new Vue({
            el: '#list',
            data: {
                isNew: 0,
                params: "",
                errorMessage: "",
                item: {},
                paging: null
            },
            mounted: function() {
                try {
                    this.paramInit();
                    this.pagingInit();
                    this.dataRead();
                    $App.$on("truck_selection_changed", this.paramChanged );

                } catch (error) {
                    console.error(error);
                    this.errorMessage = error.toString();
                }
            },
            methods: {
                paramInit(){
                    let isNew = (window.location.search.match(new RegExp('[?&]' + 'n' + '=([^&]+)')) || [,null])[1];
                    if (isNew && isNew == 1) { this.isNew = 1; }

                    this.params = (window.location.search.match(new RegExp('[?&]' + 'params' + '=([^&]+)')) || [,null])[1];
                        //let params = '{"field":"","value":"","customCriteria":" (marque=\\\"international\\\" AND DisplayOnWebSite=1) or (marque=\\\"isuzu\\\" AND DisplayOnWebSite=1) or marque=\\\"kalmar\\\" AND ","sortBy":"asc","currentPage":1,"limitPerPage":"12","arrayFilters":[]}'; //,{"field":"modele","value":"Prostar"}
                        //params = '{"customCriteria":"","sortBy":"asc","currentPage":1,"limitPerPage":"12","arrayFilters":[{"field":"marque","value":"' + marque + '"}]}'; //,{"field":"modele","value":"Prostar"}

                    },
                pagingInit(){

                    this.paging = {
                        available: true, 
                        current: 0,
                        size: 0,
                        message: "",
                        pages: [], 
                        indexFirst: 0,
                        indexCount: 0,
                        indexAll: 0,
                        changed: function(paging){},
                        reset: function() { 
                            this.current = this.size = this.indexFirst = this.indexCount = this.indexAll = 0;
                            this.message = "";
                            this.pages = [];
                        },
                        set: function(data){
                            this.size = data.max;
                            this.indexFirst = data.first;
                            this.indexCount = data.count;
                            this.indexAll = data.total;
                            this.message = data.first  + " - " + Math.max(data.first + data.count - 1, 0) + " sur " + data.total;
                            this.available = ( data.total > data.count );
                            if(this.available){
                                this.pages = [];
                                let q = Math.floor(this.indexAll / this.size);
                                for (let i = 1; i <= q ; i++) {
                                    this.pages.push( { index: i, title:i.toString(), current: ( i == this.current) } );
                                }
                            }
                        },
                        next: function(){ 
                            let result = true;
                            this.current++;
                            if( ( this.current * this.size ) >= this.indexAll ){
                                this.current--;
                                result = false;
                            } else { 
                                this.changed(this);
                            }
                            return result;
                            },
                        prev: function(){ this.current = Math.max(this.current - 1, 0); this.changed(this); return true; },
                        move: function(index){ this.current = index; this.changed(this); return true; }
                        };
                        this.paging.changed = this.pagingChanged;
                },
                paramChanged(params){
                    this.params = params;

                    if(this.paging){ this.paging.reset(); }

                    this.dataRead();
                },
                pagingChanged(paging){
                    this.dataRead();
                },
                async dataRead() {

                    let api = 'http://raisindynamique.reseaudynamique.com/api/trucks.php';

                    // Show loading spinner
                    $('.loading-overlay').show();

                    try {
                        let page = 0;
                        if(this.paging){page = this.paging.current;}

                        let response = await fetch(api + '?n=' + this.isNew + '&p='+ page + '&params=' + encodeURI(this.params));
                        let data = await response.json()

                        this.item = data;

                        if(this.paging){ this.paging.set(data); }

                    } catch (error) {
                        console.error(error);
                        this.errorMessage = error.toString();
                    }

                    // Hide loading spinner
                    $('.loading-overlay').hide();
                },
                getHref(id) {
                    let url = "/truck_detail.php?"
                    if (this.isNew == 1) {
                        url = url + "n=1&"
                    }
                    return url + "id=" + encodeURI(btoa(id));
                },
                getSrc(id) {
                    if (id) {
                        let url = "http://raisindynamique.reseaudynamique.com/api/pictures.php?";
                        url = url + "n=" + this.isNew + "&id=" + id; //encodeURI(btoa(id))
                        return url;
                    } else {
                        return "../../_assets/images/camions/noimage.png";
                    }
                }
            }
        })

    }
    </script>


</body>

</html>