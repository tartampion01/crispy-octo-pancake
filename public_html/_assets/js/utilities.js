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
    
    // Start Home page main rotator
    if($(".jshowoff").length > 0) {
        $(".jshowoff").jshowoff({
            hoverPause:false, 
            controls:false, 
            changeSpeed:300, links:true, 
            effect:'fade', 
            autoPlay:true, 
            speed:5000,
            controlText:{play:'Jouer',pause:'Pause',previous:'PrÃ©cÃ©dent',next:'Suivant'}, 
            controlZone:{ PlayPauseItemID:'', PreviousItemID:'previous-slide',NextItemID:'next-slide' }  
        });
    }
});