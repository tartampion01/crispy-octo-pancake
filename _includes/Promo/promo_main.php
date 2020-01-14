<section id="promoMain" class="grid ">
    <div class="grid-pad">
        <h2 class="titlesection">Nos Promotions</h2>
    </div>
    <div id="slk_PromoMain" v-if="promotions.length > 0" class="promo_cnt">
        <div v-for="(promo,index) in promotions" class="promo_box">
            <a v-if="promo.Brochure" :href="promo.Brochure.url" title="">
                <div class="promo_top_orange"></div>
                <div class="promo_img promo_cover">
                    <img class="promo_fit" :src="promo.Brochure.imgSource" alt="">   
                </div>
                <h2 class="uppercases">{{promo.Brochure.title}}</h2> 
            </a>                
            <a v-if="promo.Truck" :href="getHref(promo.Truck.id)" title="">
                <div class="promo_top_orange"></div>
                <div class="promo_img promo_cover">
                    <img class="promo_fit" :src="getSrc(promo.Truck.picture_id)" alt="">   
                    <div class="promo_box_triangle"></div>
                    <div class="promo_price">{{promo.Truck.Price}}</div>
                </div>
                <h2 class="uppercases">{{promo.Truck.title}}</h2>
            </a>
        </div>            
    </div>
</section>

<script type="text/javascript">
    $(document).ready(function() {

        promo_main_Init();

    });
    function apply_slk_PromoMain(){
        $('#slk_PromoMain').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });

    }
    function promo_main_Init() {
        var vm = new Vue({
            el: '#promoMain',
            data: {
                errorMessage: "",
                promotions: []
            },
            mounted: function() {
                try {
                    this.dataRead();
                    
                } catch (error) {
                    console.error(error);
                    this.errorMessage = error.toString();
                }
            },updated: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been re-rendered
                apply_slk_PromoMain();
            })
            },
            methods: {
                async dataRead() {
                    let api = '/api/promotions.php';

                    try {

                        let response = await fetch(api);
                        let data = await response.json()
                        
                        this.promotions =  data;

                    } catch (error) {
                        console.error(error);
                        this.errorMessage = error.toString();
                    }
                },
                getHref(id) {
                    let url = "/truck_detail.php?"
                    let isNew = 1;
                    if (isNew == 1) {
                        url = url + "n=1&"
                    }
                    return url + "id=" + encodeURI(btoa(id));
                },
                getSrc(id) {
                    if (id) {
                        let url = "http://raisindynamique.reseaudynamique.com/api/pictures.php?";
                        let isNew = 1;
                        url = url + "n=" + isNew + "&id=" + id; //encodeURI(btoa(id))
                        return url;
                    } else {
                        return "../../_assets/images/camions/noimage.png";
                    }
                }
            }
        })

    }
    </script>