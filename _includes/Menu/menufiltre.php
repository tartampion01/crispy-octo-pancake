<?php
$pageName = basename($_SERVER['SCRIPT_NAME']);
?>
<nav id="menufiltre" class="bgfiltre">
    <div class="menudestop grid-pad">
        <ul> 
            <li>
                <a href="#">{{menu.Brand.title}}</a>
                <ul class="hidden">
                    <li v-for="(item,index) in menu.Brand.items">
                        <a @click="selected(item.code)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">{{menu.Transmission.title}}</a>
                <ul class="hidden" >
                    <li v-for="(item,index) in menu.Transmission.items">
                        <a @click="selected(item.code)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">{{menu.Engine.title}}</a>
                <ul class="hidden" >
                    <li v-for="(item,index) in menu.Engine.items">
                        <a @click="selected(item.code)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>


<script type="text/javascript">
    $(document).ready(function() {
        initmenufiltre();
    });

    function initmenufiltre() {
        var vm = new Vue({
            el: '#menufiltre',
            data: {
                isNew: 0,
                errorMessage: "",
                menu: {}
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

                    let api = '/menufiltertest.json';

                    // Show loading spinner
                    $('.loading-overlay').show();

                    try {

                        const response = await fetch(api);
                        const data = await response.json()
                        // data.records[0].serial = "klsdj dslkf sd;fkjsd;lfj a;sdfj sd;fj sda;lf jsad;lfjds;lfk jsad;lkf sad;lkfj sdlk;f jsad;f jsda;fasd;sdf ";
                        this.menu = data;

                    } catch (error) {
                        console.error(error);
                        this.errorMessage = error.toString();
                    }

                    // Hide loading spinner
                    $('.loading-overlay').hide();
                },
                selected(code) {
                    console.log(code);                   
                }
            }
        })

    }
    </script>