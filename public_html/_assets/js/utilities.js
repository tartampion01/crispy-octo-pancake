$( document ).ready(function() {
    
    // Bind click on left side menu filters
    $('.GpcMenuCategoryTitle').on('click', function() {
        $(this).next('ul').slideToggle();
        $(this).parent('li').toggleClass('expanded');
    });
    
    $('.information-supplementaire').on('click', function() {
        $(this).toggleClass('open');
    });
    
    // Page détails - Images rotator
    $('.ProductImage').on('click', function() {
        $('.GpcImageViewerItem a').removeClass('lightbox-image-selected');
        $(this).parents('.lightbox-image-link').addClass('lightbox-image-selected');
        $('.lightbox-image').attr('src', $(this).attr('src'));
    });
});