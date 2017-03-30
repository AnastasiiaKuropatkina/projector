$(document).ready(function() {
    $('#btn-1').click(function () {
        TweenMax.to('.box', 1,{x:500, ease: Power3.easeOut})
    });
    $('#btn-2').click(function () {
        TweenMax.to('.box', 1,{x: '+=300', y: '+=300', rotation: '-=40deg', delay: .5})
    });
    $('#btn-3').click(function () {
        TweenMax.from('.box', 1,{x:500, rotation: '990deg', onComplete: function () {
            TweenMax.to('.box', 1, {backgroung: 'red'})
        }})
    });
    $('#btn-4').click(function () {
        TweenMax.fromTo('.box', 1,{x:100, y:100, autoAlpha:0},{x:10, y:10, autoAlpha:1})
    });
    $('#btn-5').click(function () {
        var tl = new TimelineLite();
        tl
            .from ('.box',1, {x: '300', y: '300', rotation: '800deg'})
            .to ('.box',.5, {x: '20', y: '300', rotation: '800deg'})
            .to ('.box',1.5, {x: '10', y: '600', rotation: '800deg'})
            .to ('.box',2.5, {scaleX: 4.5, ease: Power2.easeOut})
            .to ('.box',2.5, {scaleX: 1, ease: Power2.easeOut})
            ;
    });
    //
    var tt = new TimelineLite({paused: true});
    tt
        .add('fadeIn')
        .to ('.box',1, {x: '300', y: '300', rotation: '800deg'}, 'fadeIn')
        .to ('.box',.5, {x: '20', y: '300', rotation: '800deg'}, 'fadeIn')
        .add('fadeOut')
        .to ('.box',1.5, {backgroundColor: 'red'}, 'fadeOut') //, delay:-1.5 почнеться на 1,5с раніше
        .to ('.box',1.5, {x: '10', y: '600', rotation: '800deg', delay: 1}, 'fadeOut')
        .to ('.box',2.5, {scaleX: 4.5, ease: Power2.easeOut})
        .to ('.box',2.5, {scaleX: 1, ease: Power2.easeOut})


    $('#btn-7').click(function () {
        tt.play();
    });
    $('#btn-8').click(function () {
        tt.pause();
    });
    $('#btn-9').click(function () {
        tt.reverse();
    });
    $('#btn-10').click(function () {
        tt.timeScale();
    });
    $('#btn-11').click(function () {
        tt.seek('test');
    });
    $('#btn-12').click(function () {
        new TimelineMax
            .staggerTo('li', .5, {x: '+=50'},.2 )
    });
    $('.box').hover(function () {
        TweenMax.to(this, 2.5, {scaleX: 4.5, ease: Power2.easeOut})
    }, function () {
        TweenMax.to ('.box',2.5, {scaleX: 1, ease: Power2.easeOut})
    })
    //
    var obj = {myProp:0};
    TweenMax.to(obj, 2, {myProp: 100, else: Bounce.eseOut, onUpdate: function () {
        $('box').first().css('left', obj.myProp + 'px')
        console.log(obj.myProp)
    }});

    var obj = {posX:0, posY: 0};
    TweenMax.to(obj, 2, {posX: 100, posY: 50, else: Bounce.eseOut, onUpdate: function () {
        $('box').first().css('left', obj.posX + 'px', 'top', obj.posY + 'px')
        console.log(obj.myProp)
    }})
})