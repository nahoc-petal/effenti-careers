$(document).ready(function() {
    console.log('ready');

    $('.eff__tab').click(function(event) {
        $('.eff__tab').parent().removeClass('is-active');
        $(this).parent().addClass('is-active');
        $('.eff__section').hide();
        if(event.currentTarget.id == 'eff__tab--a-propos') {
            $('#a-propos').show();
        }
        if(event.currentTarget.id == 'eff__tab--carrieres') {
            $('#carrieres').show();
        }
        if(event.currentTarget.id == 'eff__tab--notre-equipe') {
            $('#equipe').show();
        }
        if(event.currentTarget.id == 'eff__tab--postuler') {
            $('#a-propos').show();
        }
    });
});