/* CUMMON FUNCTIONS */

function deleteDefaultAction(e){
    e.preventDefault();
};

/* FILTER */

$(() =>{
    const filter = $("[data-filter]");

    filter.on("click", function (event) {
        deleteDefaultAction(event);

        const cat = $(this).data('filter');
        

        if(cat == "all"){
            $("[data-cat]").show();
        }
        else{
           $("[data-cat]").each(function(){
               let curCat = $(this).data('cat');

               if(curCat != cat){
                   $(this).hide();
               }
               else{
                    $(this).show();
               }
           });
        }
    });
});

/* MODAL */

const modalCall = $("[data-modal]");

const modalClose = $(".modal__close");

modalCall.on("click", function (event) { //show
    deleteDefaultAction(event);

    let curButton = $(this);
    let curButtonId = $(this).data("modal");

    $(curButtonId).addClass('show');
    $("body").addClass("no-scroll");
    setTimeout(() => {
        $(curButtonId).find(".modal__dialog").css({
            transform: "scale(1)"
        }, 200);
    }  
);

    modalClose.on('click', function(event){ //hide on close button click
        deleteDefaultAction(event);
        
        $(curButtonId).find(".modal__dialog").css({
            transform: "scale(0)"
        })
        setTimeout(() => {
            $(curButtonId).removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200)
     });
    $(".modal").on("click", function(){ //hide on modal wrapper click
        $(curButtonId).find(".modal__dialog").css({
            transform: "scale(0)"
        })
        setTimeout(() => {
            $(this).removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200)
    });
    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
    });
 });


 /* MODAL WORKS SLIDER: https://kenwheeler.github.io/slick/ */

 $('[data-slider="works__slider"]').slick({
     infinte: true, 
     slidesToShow: 1,
     slidesToScroll: 1,
     fade: true,
     arrows: false,
     dots: true
 });
 $(".slick-prev").on('click', function(event){
    event.preventDefault();

    let current_slider = $(this).parents('.modal').find('[data-slider="works__slider"]');

    current_slider.slick("slickPrev");
 });

 $(".slick-next").on('click', function(event){
    event.preventDefault();

    let current_slider = $(this).parents('.modal').find('[data-slider="works__slider"]');

    current_slider.slick("slickNext");
 });

 /* MOBILE NAVIGATION */

 const navToggle = $('#navToggle');
 const nav = $('#headerNav');

 navToggle.on('click', () => {
    event.preventDefault();

    nav.toggleClass('show');
 });