$( document ).ready(function() {
    
    $('.filter-link').each(function(){
        
        $(this).on('click', function() {
            
            // Manage selected class
            $('.filter-link').removeClass('selected');
            $(this).addClass('selected');

            // Get search params
            var field = $(this).data('field');
            var value = $(this).data('value');
            fetchRecords(field, value)
        });
    });
    
    // Bind click event on limit per page links
    $('.limit-per-page').on('click', function() {
        $('.limit-per-page').removeClass('selected');
        $(this).addClass('selected');
        
        var field = $('.GpcMenu').find('li.selected').data('field');
        var value = $('.GpcMenu').find('li.selected').data('value');
        fetchRecords(field, value, true);
    });
    
    // Bind click event on search sorting dropdown
    $('.search-sorting').on('change', function() {
        var field = $('.GpcMenu').find('li.selected').data('field');
        var value = $('.GpcMenu').find('li.selected').data('value');
        fetchRecords(field, value, true);
    });
    
    // On document load, let search on the first filter menu item
    $('.filter-link:first').trigger('click');
});

function fetchRecords(field, value, resetPage) {
    
    // Show loading spinner
    $('.loading-overlay').show();

    // Get actual page and limit per page
    //var currentPage = $('.actual-page').html();
    var currentPage = 1;
    if(typeof $pagination !== 'undefined' && resetPage == false)
        currentPage = $pagination.twbsPagination('getCurrentPage');
    else
        currentPage = 1;
    var limitPerPage = $('.GpcPagerCountSelector').children('div.selected').html();

    // Get sortBy value
    var sortBy = $('.search-sorting option:selected').val();
    
    var params = {
        'field' : field,
        'value' : value,
        'sortBy' : sortBy,
        //'currentPage' : currentPage,
        'currentPage' : currentPage,
        'limitPerPage' : limitPerPage
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

                    // Get total page count
                    var totalPages = Math.ceil(data.countRows / limitPerPage);
                    
                    // Set total records count
                    $('.GpcPagedResultTotalCount').html(data.countRows);
                    
                    // Set page results current count
                    var resultsRange = '';
                    if(currentPage == 1)
                        resultsRange = '1 - ' + limitPerPage;
                    else if(currentPage == totalPages)
                        resultsRange = parseInt(limitPerPage * currentPage - limitPerPage + 1) + ' - ' + parseInt(data.countRows);
                    else
                        resultsRange = parseInt(limitPerPage * currentPage - limitPerPage + 1) + ' - ' + parseInt(limitPerPage * currentPage);
                    
                    $('.GpcPagedResultCurrentCount').html(resultsRange);
                    
                    // Set paginator control
                    $pagination = $('.pagination')
                    $pagination.twbsPagination('destroy');
                    $pagination.twbsPagination($.extend({}, {
                        startPage: currentPage,
                        totalPages: totalPages,
                        visiblePages: 5,
                        first: '&lt;&lt;',
                        prev: 'Précédent',
                        next: 'Suivant',
                        last: '&gt;&gt;',
                        initiateStartPageClick: false,
                        onPageClick: function (event, page) {
                            
                            fetchRecords(field, value, false);
                        }
                    }));

                    //$('.pagination').twbsPagination("changeTotalPages", 50, 40);

                    $('html, body').animate({
                        scrollTop: $(".titrePage").offset().top
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
}

// Function that refresh the paginator control
function refreshPagination() {
    $('.pagination').empty();
    $('.pagination').removeData("twbs-pagination");
    $('.pagination').unbind("page");
}