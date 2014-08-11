//JSHint Validated Custom JS Code by Designova

/*global $:false */
/*global window: false */

(function(){
  "use strict";

//TWITTER INIT (Updated with compatibility on Twitter's new API):
//PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
$(function ($) {
    $('#ticker').tweet({
        modpath: './twitter/',
        count: 5,
        loading_text: 'loading twitter feed flame...',
        username:'designovastudio'
        /* etc... */
    });
  }); 




//MASONRY PORTFOLIO INIT:
$(function () {

    var $container = $('#container');

    $container.isotope({
        itemSelector: '.element',
        layoutMode: 'masonry'
    });


    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        var changeLayoutMode;
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options);
        } else {
            // creativewise, apply new options
            $container.isotope(options);
        }

        return false;
    });


});





/*===========================================================*/
/*  Colorbox
/*===========================================================*/
$(function () {
    
    var viewportHeight = $(window).height();
    var introMargin = (viewportHeight / 3) - (viewportHeight / 12);
    $('#intro').height(viewportHeight);
    $('.promo-one').css('margin-top', introMargin);
    //Examples of how to assign the ColorBox event to elements
    $(".zoom-info").colorbox({
        rel: 'group1',
        transition: "fade",
        speed: 1700,
        onComplete: function () {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true

            });
        }
    });

    


    $('.band').mouseenter(function () {
        var pageInd = $(this).attr('id');
        $('#navigation ul li > a').removeClass('lighted');
        $('#' + pageInd + '-linker').addClass('lighted');
    });

    $('#navigation ul li > a').click(function () {
        $('#navigation ul li > a').removeClass('lighted');
        $(this).addClass('lighted');
    });



    //Triggering Scroll-down Navigation
    $('#navigation ul').localScroll(9500);


    $('.carousel').carousel({
        interval: false
    });

    $('#testimonials').easytabs({
          animationSpeed: 500,
          updateHash: false,
          cycle: 5000
      });

     $('.tabs').easytabs({
        animationSpeed: 300,
        updateHash: false
    });

    //=======================
    //WAYPOINTS - INTERACTION
    //=======================

    //Triggering Navigation BG colors:
    $('.page').waypoint(function (event, direction) {
        var colSwatch = $(this).attr('data-live-color');
        if (direction === 'down') {
            $('#navigation').addClass('bg-'+colSwatch);
        } else {
            $('#navigation').removeClass('bg-'+colSwatch);
        }
    }, { offset: 50 });



    //Showing Tool Tip on Menu Item MouseOver
    $("[data-rel=tooltip]").tooltip({placement: 'left'});


    //Showing Navigation Tool Tip on Entering Each Page:
    $('.band').mouseenter(function(){
        var pageInIndex = $(this).attr('id');
        $('#'+pageInIndex+'-linker').tooltip('show');
    });
    $('.band').mouseleave(function(){
        var pagesOutIndex = $(this).attr('id');
        $('#'+pagesOutIndex+'-linker').tooltip('hide');
    });

    

    $('.folio-item').mouseenter(function () {
        $(this).find('img').css('opacity', '0.2');
        $(this).find('.folio-trigger-icon').fadeIn();
        $(this).find('.titles').fadeIn();
    });

    $('.folio-item').mouseleave(function () {
        $('.folio-item').find('.titles').fadeOut();
        $(this).find('.folio-trigger-icon').fadeOut();
        $('.folio-item').find('img').css('opacity', '1');
    });


    $('.element > img, .service-item, .about-feat').mouseleave(function () {
        $(this).addClass('remove-zoom');
    });
});


})();