const $App = new Vue( { data : { name : "Réseau Dynamique!" } } ); 

Vue.filter('NA', function(value) {
    if (value) {
        return value;
    } else {
        return 'N/A';
    }
});
