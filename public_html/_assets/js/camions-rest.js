$( document ).ready(function() {
    
    $('.filter-link').each(function(){
        
        $(this).on('click', function() {
            
            // Show loading spinner
            $('.loading-overlay').show();
            
            var field = $(this).data('field');
            var value = $(this).data('value');
            
            // Get actual page
            var actualPage = $('.actual-page').html();
            //var limit = $('.limit-per-page').html();
            var limitPerPage = 12;
            var params = {
                'field' : field,
                'value' : value,
                'actualPage' : actualPage,
                'maxPages' : limitPerPage
            };
            
            $.ajax({
                url: 'http://reseaudynamique.com/api/read.php',
                type: "GET",
                data: 'params='+JSON.stringify(params),
                dataType: 'json',
                success: function(data){

                    console.log(data);
                    
                    if(data.records != null) {
                        if(data.records.length > 0) {
                            
                            // Empty out the div that will hold the generated content
                            $(".results-container").empty();
                            // Call the tmpl function, pass in the data and have it append to resultsTemplate
                            $("#resultsTemplate").tmpl( data.records ).appendTo(".results-container");
                            
                            $('html, body').animate({
                                scrollTop: $(".GpcFacetedResults").offset().top
                            }, 750);
                        }
                        else {
                            $('.results-container').html('AUCUN PRODUIT');
                        }
                    }
                    else {
                        $('.results-container').html('PROBLÈME AVEC LES DONNÉES');
                    }
                    
                    // Hide loading spinner
                    $('.loading-overlay').hide();
                },
                error: function(xhr, status, error) {
                    $('.results-container').html('ERREUR DU SERVEUR');
                }
            });
        });
    });
});