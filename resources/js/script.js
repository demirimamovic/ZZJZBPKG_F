/* ----------------------------   */
/*          NAVIGATION            */
/* ----------------------------   */

/*       Open Navigation          */
/* ----------------------------   */




function openNav_1() {
    document.getElementById("myNav_1").style.height = "450px";
    document.getElementById("myNav_1").style.transition = "0.1s";
    document.getElementById("myNav_2").style.height = "0%";
    document.getElementById("myNav_3").style.height = "0%";

}
function openNav_2() {
    document.getElementById("myNav_1").style.height = "0%";
    document.getElementById("myNav_2").style.height = "450px";
    document.getElementById("myNav_3").style.height = "0%";


}
function openNav_3() {
    document.getElementById("myNav_1").style.height = "0%";
    document.getElementById("myNav_2").style.height = "0%";
    document.getElementById("myNav_3").style.height = "450px";

}


/*      Close Navigation           */
/* ----------------------------   */

function closeNav_1() {
    document.getElementById("myNav_1").style.height = "0%";
}
function closeNav_2() {
    document.getElementById("myNav_2").style.height = "0%";
}

function closeNav_3() {
    document.getElementById("myNav_3").style.height = "0%";
}
/*      Close Navigation TOTAL    */
/* ----------------------------   */

var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
    if(mywindow.scrollTop() > mypos)
    {
        document.getElementById("myNav_1").style.height = "0%";
        document.getElementById("myNav_1").style.transition = "0s";
        document.getElementById("myNav_2").style.height = "0%";
        document.getElementById("myNav_2").style.transition = "0s";
        document.getElementById("myNav_3").style.height = "0%";
        document.getElementById("myNav_3").style.transition = "0s";
    
    }
    mypos = mywindow.scrollTop();
});



var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scrollTop(function() {
    if(mywindow.scrollTop() > mypos)
    {
        document.getElementById("dema11").style.position = "relative";
    
       
    
    }
    mypos = mywindow.scrollTop();
});


/*   First subcontainer show      */
/* ----------------------------   */

$(document).ready(function(){  
    $('#nc_r-1-1').show(); 
    $('#nc_r-1-2').hide();
    $('#nc_r-1-3').hide();
    $('#nc_r-1-4').hide();
    $('#nc_r-1-5').hide();

    $('#nc_l-1-1').hover(function(){
        $('#nc_r-1-1').show(); 
        $('#nc_r-1-2').hide();
        $('#nc_r-1-3').hide();
        $('#nc_r-1-4').hide();
        $('#nc_r-1-5').hide();    
    });

    $('#nc_l-1-2').hover(function(){
        $('#nc_r-1-1').hide(); 
        $('#nc_r-1-2').show();
        $('#nc_r-1-3').hide();
        $('#nc_r-1-4').hide();
        $('#nc_r-1-5').hide();        
    });

    $('#nc_l-1-3').hover(function(){
        $('#nc_r-1-1').hide(); 
        $('#nc_r-1-2').hide();
        $('#nc_r-1-3').show();
        $('#nc_r-1-4').hide();
        $('#nc_r-1-5').hide();        
    });
    $('#nc_l-1-4').hover(function(){
        $('#nc_r-1-1').hide(); 
        $('#nc_r-1-2').hide();
        $('#nc_r-1-3').hide();
        $('#nc_r-1-4').show();
        $('#nc_r-1-5').hide();        
    });

});
/*   Second subcontainer show     */
/* ----------------------------   */

$(document).ready(function(){  
    $('#nc_r-2-1').show(); 
    $('#nc_r-2-2').hide();
    $('#nc_r-2-3').hide();
    $('#nc_r-2-4').hide();
    $('#nc_r-2-5').hide();

    $('#nc_l-2-1').hover(function(){
        $('#nc_r-2-1').show(); 
        $('#nc_r-2-2').hide();
        $('#nc_r-2-3').hide();
        $('#nc_r-2-4').hide();
        $('#nc_r-2-5').hide();    
    });

    $('#nc_l-2-2').hover(function(){
        $('#nc_r-2-1').hide(); 
        $('#nc_r-2-2').show();
        $('#nc_r-2-3').hide();
        $('#nc_r-2-4').hide();
        $('#nc_r-2-5').hide();        
    });

    $('#nc_l-2-3').hover(function(){
        $('#nc_r-2-1').hide(); 
        $('#nc_r-2-2').hide();
        $('#nc_r-2-3').show();
        $('#nc_r-2-4').hide();
        $('#nc_r-2-5').hide();        
    });
    $('#nc_l-2-4').hover(function(){
        $('#nc_r-2-1').hide(); 
        $('#nc_r-2-2').hide();
        $('#nc_r-2-3').hide();
        $('#nc_r-2-4').show();
        $('#nc_r-2-5').hide();        
    });

});

/*   Third subcontainer show      */
/* ----------------------------   */

$(document).ready(function(){  
    $('#nc_r-3-1').show(); 
    $('#nc_r-3-2').hide();
    $('#nc_r-3-3').hide();
    $('#nc_r-3-4').hide();
    $('#nc_r-3-5').hide();

    $('#nc_l-3-1').hover(function(){
        $('#nc_r-3-1').show(); 
        $('#nc_r-3-2').hide();
        $('#nc_r-3-3').hide();
        $('#nc_r-3-4').hide();
        $('#nc_r-3-5').hide();    
    });

    $('#nc_l-3-2').hover(function(){
        $('#nc_r-3-1').hide(); 
        $('#nc_r-3-2').show();
        $('#nc_r-3-3').hide();
        $('#nc_r-3-4').hide();
        $('#nc_r-3-5').hide();        
    });

    $('#nc_l-3-3').hover(function(){
        $('#nc_r-3-1').hide(); 
        $('#nc_r-3-2').hide();
        $('#nc_r-3-3').show();
        $('#nc_r-3-4').hide();
        $('#nc_r-3-5').hide();        
    });
    $('#nc_l-3-4').hover(function(){
        $('#nc_r-3-1').hide(); 
        $('#nc_r-3-2').hide();
        $('#nc_r-3-3').hide();
        $('#nc_r-3-4').show();
        $('#nc_r-3-5').hide();        
    });

});

/*   Four subcontainer show      */
/* ----------------------------   */

$(document).ready(function(){  
    $('#nc_r-4-1').show(); 
    $('#nc_r-4-2').hide();
    $('#nc_r-4-3').hide();
    $('#nc_r-4-4').hide();
    $('#nc_r-4-5').hide();

    $('#nc_l-4-1').hover(function(){
        $('#nc_r-4-1').show(); 
        $('#nc_r-4-2').hide();
        $('#nc_r-4-3').hide();
        $('#nc_r-4-4').hide();
        $('#nc_r-4-5').hide();    
    });

    $('#nc_l-4-2').hover(function(){
        $('#nc_r-4-1').hide(); 
        $('#nc_r-4-2').show();
        $('#nc_r-4-3').hide();
        $('#nc_r-4-4').hide();
        $('#nc_r-4-5').hide();        
    });

    $('#nc_l-4-3').hover(function(){
        $('#nc_r-4-1').hide(); 
        $('#nc_r-4-2').hide();
        $('#nc_r-4-3').show();
        $('#nc_r-4-4').hide();
        $('#nc_r-4-5').hide();        
    });
    $('#nc_l-4-4').hover(function(){
        $('#nc_r-4-1').hide(); 
        $('#nc_r-4-2').hide();
        $('#nc_r-4-3').hide();
        $('#nc_r-4-4').show();
        $('#nc_r-4-5').hide();        
    });

});


/* ----------------------------   */
/*  MOBILE NAV FUNCIONALITY       */
/* ----------------------------   */

jQuery(function($){
    $( '.mobile-nav-icon' ).click(function(){
        $('.responsive-menu').toggleClass('expand')
    })
});

jQuery(function($){
    $( '.box25-m1' ).click(function(){
        $('.row-m1').toggleClass('expand1')
    })
});

jQuery(function($){
    $( '.box25-m2' ).click(function(){
        $('.row-m2').toggleClass('expand1')
    })
});

jQuery(function($){
    $( '.box25-m3' ).click(function(){
        $('.row-m3').toggleClass('expand1')
    })
});

jQuery(function($){
    $( '.box25-m4' ).click(function(){
        $('.row-m4').toggleClass('expand1')
    })
});

/* ----------------------------   */
/*      LOGIN FUNCIONALITY        */
/* ----------------------------   */

jQuery(function($){
    $( '.btn-log' ).click(function(){
        $('.login-ui').toggleClass('expand')
    })
});


