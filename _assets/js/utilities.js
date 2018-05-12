$( document ).ready(function() {
    
    // Bind click on left side menu filters
    $('.GpcMenuCategoryTitle').on('click', function() {
        $(this).next('ul').slideToggle();
        $(this).parent('li').toggleClass('expanded');
    });
});