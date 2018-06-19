$( document ).ready(function() {
    
    // Bind click on left side menu filters
    $('.GpcMenuCategoryTitle').on('click', function() {
        $(this).next('ul').slideToggle();
        $(this).parent('li').toggleClass('expanded');
    });
    
    $('.information-supplementaire').on('click', function() {
        $('.showedZone').toggle();
    });
    
    // Page détails - Images rotator
    $('.ProductImage').on('click', function() {
        $('.GpcImageViewerItem a').removeClass('lightbox-image-selected');
        $(this).parents('.lightbox-image-link').addClass('lightbox-image-selected');
        $('.lightbox-image').attr('src', $(this).attr('src'));
    });
    
    // Page détails - Toggle tab "Spécifications" - "Photos"
    $('.specToggle').on('click', function() {
        $('.picToggle').removeClass('selected');
        $(this).addClass('selected');
        $('.content-pic').hide();
        $('.content-spec').show();
    });
    $('.picToggle').on('click', function() {
        $('.specToggle').removeClass('selected');
        $(this).addClass('selected');
        $('.content-spec').hide();
        $('.content-pic').show();
    });
});