<section id="menufiltre">
<div class="filterZone grid">
    <div id="zoneCriteria" v-if="menu.Brand && menu.Transmission && menu.Engine" class="grid-pad" style="height:30px;width:100%;" >
        <div v-if="isAnySelected('B')">
            <span class="titlefilter" v-text="menu.Brand.title"></span>
        </div>
        <div v-for="(item,index) in menu.Brand.items">
            <span v-if="item.selected == 1" class="itemfilter"
                @click="changeSelection(item.code,0)" v-text="item.title">
            </span>
        </div>
        <div v-if="isAnySelected('T')">
            <span class="titlefilter" v-text="menu.Transmission.title"></span>
        </div>
        <div v-for="(item,index) in menu.Transmission.items">
            <span v-if="item.selected == 1" class="itemfilter"
                @click="changeSelection(item.code,0)" v-text="item.title" >
            </span>
        </div>
        <div v-if="isAnySelected('E')">
            <span class="titlefilter" v-text="menu.Engine.title"></span>
        </div>
        <div v-for="(item,index) in menu.Engine.items">
            <span v-if="item.selected == 1" class="itemfilter"
                @click="changeSelection(item.code,0)" v-text="item.title" >
            </span>
        </div>
    </div>
<nav  class="bgfiltre">
    <div v-if="menu.Brand && menu.Transmission && menu.Engine" class="menudestop grid-pad">
        <ul> 
            <li>
                <a href="#" v-text="menu.Brand.title"></a>
                <ul class="hidden">
                    <li v-for="(item,index) in menu.Brand.items">
                        <a @click="changeSelection(item.code,1)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" v-text="menu.Transmission.title"></a>
                <ul class="hidden" >
                    <li v-for="(item,index) in menu.Transmission.items">
                        <a @click="changeSelection(item.code,1)">{{item.title}}</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" v-text="menu.Engine.title"></a>
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

        menuFilterInit();

    });

    function menuFilterInit() {
        var vm = new Vue({
            el: '#menufiltre',
            data: {
                params: "",
                errorMessage: "",
                menu: {}
            },
            mounted: function() {
                try {

                    this.paramInit();
                    this.dataRead();

                } catch (error) {
                    console.error(error);
                    this.errorMessage = error.toString();
                }
            },
            methods: {
                paramInit(){
                    this.params = (window.location.search.match(new RegExp('[?&]' + 'params' + '=([^&]+)')) || [,null])[1];
                },
                async dataRead() {
                    let api = '/api/filters.php';

                    try {

                        let response = await fetch(api);
                        let data = await response.json()

                        this.menu = data;
                        this.paramSelection();
                    } catch (error) {
                        console.error(error);
                        this.errorMessage = error.toString();
                    }
                },
                paramSelection(){
                    if(this.params){
                        let codes = this.params.replace(";",",").split(",");
                        codes.forEach(param => {
                            let subItems = [];
                            switch (param.substring(0,1)) {
                                case "B": if(this.menu.Brand){ subItems = this.menu.Brand.items; } break;
                                case "T": if(this.menu.Transmission){subItems = this.menu.Transmission.items;} break;
                                case "E": if(this.menu.Engine){subItems = this.menu.Engine.items;} break;
                            }
                            subItems.some(function(e) {
                                if(e.code == param){ e.selected = 1; return true; }
                            })
                        });
                    }
                },
                changeSelection(code, selection ) {
                    if(code){

                        let subItems = [];
                        switch (code.substring(0,1)) {
                            case "B": if(this.menu.Brand){ subItems = this.menu.Brand.items; } break;
                            case "T": if(this.menu.Transmission){subItems = this.menu.Transmission.items;} break;
                            case "E": if(this.menu.Engine){subItems = this.menu.Engine.items;} break;
                        }
                        subItems.some(function(e) {
                            if(e.code == code){ e.selected = selection; return true; }
                        })
                            
                        let params = this.getSelectedCode();
                        $App.$emit("truck_selection_changed", params);
                    }
                },
                getSelectedCode(){
                    let codes = "";
                    if(this.menu.Brand){
                        this.menu.Brand.items.forEach(function(e){
                        if(e.selected == 1){ codes = codes + "," + e.code; }
                        });
                    }
                    if(this.menu.Transmission){
                        this.menu.Transmission.items.forEach(function(e){
                        if(e.selected == 1){ codes = codes + "," + e.code; }
                        });
                    }
                    if(this.menu.Engine){
                        this.menu.Engine.items.forEach(function(e){
                        if(e.selected == 1){ codes = codes + "," + e.code; }
                        });
                    }
                    
                    if(codes){ return codes.substring(1); }
                    else { return codes;}
                },
                isAnySelected(e){
                    let selected = false;

                    let subItems = [];
                    switch (e) {
                        case "B": if(this.menu.Brand){ subItems = this.menu.Brand.items; } break;
                        case "T": if(this.menu.Transmission){subItems = this.menu.Transmission.items;} break;
                        case "E": if(this.menu.Engine){subItems = this.menu.Engine.items;} break;
                    }
                    subItems.some(function(e) {
                        if(e.selected == 1){ selected = true; return true; }
                    })
                        
                    return selected;
                }
            }
        })

    }
    </script>