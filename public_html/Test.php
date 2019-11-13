<!-- reseaudynamique.com/api/singleNewTruck_.php?id=NjIyNQ== -->
<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->

<!-- https://github.com/pagekit/vue-resource -->
<!-- <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>  -->

<!DOCTYPE html>
<html>

<head>
<title>Test Json</title>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->

<script type="text/javascript">

document.addEventListener("DOMContentLoaded", function(event) { init(); });

function init(){

  var vm = new Vue({
  el: '#detail',
  data: {
    message: 'Hello Vue!',
    item: {}
  },
  mounted : function() {
    this.message = "Ho !";
    try {

        this.readData();

        } catch (error) {
            console.error('Error:', error);
        }
  },
  methods:{
      async readData(){

        let id = (window.location.search.match(new RegExp('[?&]' + 'id' + '=([^&]+)')) || [, null])[1] ;
        if(id) {

        // fetch('http://reseaudynamique.com/api/singleNewTruck_.php?id=NjIyNQ==')
        // .then(response => response.json())
        // .then(data => { this.item = data; });

        const response = await fetch('http://reseaudynamique.com/api/singleNewTruck_.php?id=' + id)
        const data = await response.json()
        this.item = data;
        console.log(data);

        }
      }
  }
})
}

</script>

</head>

<body>
<!-- <?php echo "allo"; /*phpinfo();*/ ?> -->

<div id="detail">
{{ message }}<br /><br />

<span v-html="item.beauTitre" ></span>

</div>

</body>

</html>

