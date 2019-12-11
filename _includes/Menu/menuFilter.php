<?php
$pageName = basename($_SERVER['SCRIPT_NAME']);
?>
<section id="menufiltre">
<div class="filterZone grid">
    <div id="zoneCriteria" class="grid-pad" style="height:30px;width:100%;" >
        <!-- class="" style="padding-top:5px;" -->
        <div>
            <span class="titlefilter">
                {{menu.Brand.title}}&nbsp;:&nbsp;
            </span>
        </div>
        <div v-for="(item,index) in menu.Brand.items">
            <span v-if="item.selected == 1" class="itemfilter"
                @click="changeSelection(item.code,0)"><!-- onclick="$(this).remove()"-->
                {{item.title}} <sup>x</sup>
            </span>
        </div>
        <div>
            <span class="titlefilter">
                {{menu.Transmission.title}}&nbsp;:&nbsp;
            </span>
        </div>
        <div v-for="(item,index) in menu.Transmission.items">
            <span v-if="item.selected == 1" class="itemfilter"
                @click="changeSelection(item.code,0)" >
                {{item.title}} <sup>x</sup>
            </span>
        </div>
        <div>
            <span class="titlefilter">
                {{menu.Engine.title}}&nbsp;:&nbsp;
            </span>
        </div>
        <div v-for="(item,index) in menu.Engine.items">
            <span v-if="item.selected == 1" class="itemfilter"
                @click="changeSelection(item.code,0)" >
                {{item.title}} <sup>x</sup>
            </span>
        </div>
    </div>
<nav  class="bgfiltre">
    <div class="menudestop grid-pad">
        <ul> 
            <li>
                <a href="#">{{menu.Brand.title}}</a>
                <ul class="hidden">
                    <li v-for="(item,index) in menu.Brand.items">
                        <a @click="changeSelection(item.code,1)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">{{menu.Transmission.title}}</a>
                <ul class="hidden" >
                    <li v-for="(item,index) in menu.Transmission.items">
                        <a @click="changeSelection(item.code,1)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">{{menu.Engine.title}}</a>
                <ul class="hidden" >
                    <li v-for="(item,index) in menu.Engine.items">
                        <a @click="changeSelection(item.code,1)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
</section>


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

                    let api = '/api/filters.php';

                    try {

                        const response = await fetch(api);
                        const data = await response.json()
                        // data.records[0].serial = "klsdj dslkf sd;fkjsd;lfj a;sdfj sd;fj sda;lf jsad;lfjds;lfk jsad;lkf sad;lkfj sdlk;f jsad;f jsda;fasd;sdf ";
                        this.menu = data;

                    } catch (error) {
                        console.error(error);
                        this.errorMessage = error.toString();
                    }

                },
                changeSelection(code, selection ) {
                    if(code){
                        switch (code.substring(0,1)) {
                        case "B":
                            this.menu.Brand.items.forEach(function(e){
                                if(e.code == code){ e.selected = selection; }
                            })
                            break;
                        case "T":
                            this.menu.Transmission.items.forEach(function(e){
                                if(e.code == code){ e.selected = selection; }
                            })
                            break;
                        case "E":
                            this.menu.Engine.items.forEach(function(e){
                                if(e.code == code){ e.selected = selection;}
                            })
                            break;
                        }
                    }
                }
            }
        })

    }
    </script>