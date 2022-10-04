/* REGISTER */
$('#closeFormReg').on('click', e=>{
    e.preventDefault();
    $('#register').hide('blind', 200);
    $('body').css('overflow', 'auto');
    $('#alert').text(' ');
    $('#inpLogin').val('');
    $('#inpPassword').val('');
})
$('#loginLink').on('click', e=>{
    e.preventDefault();
    $('#login').hide('blind', 200);
    $('#register').show('blind', 200);
})
/* LOGIN */
$('#registerrLink').on('click', e=>{
    e.preventDefault();
    $('#login').show('blind', 200);
    $('#register').hide('blind', 200);
})
$('#logLink').on('click', e=>{
    e.preventDefault();
    $('#login').show('blind', 200);
    $('body').css('overflow', 'hidden');
})
$('#login, #register').on('click', e=>{
    if($(e.target).hasClass('login-wrapper')){
        $('body').css('overflow', 'auto');

        $('#login').hide('blind', 200);
        $('#alertLog').text(' ');
        $('#inpLoginLog').val('');
        $('#inpPasswordLog').val('');

        $('#register').hide('blind', 200);
        $('#alertReg').text(' ');
        $('#inpLogin').val('');
        $('#inpPassword').val('');
    }  
})
$('#closeForm').on('click', e=>{
    e.preventDefault();
    $('#login').hide('blind', 200);
    $('body').css('overflow', 'auto');
    $('#alert').text(' ');
    $('#inpLogin').val('');
    $('#inpPassword').val('');
})
$('#formLogin').submit( e=>{
    e.preventDefault();
    if($('#inpLogin').val() === '' || $('#inpPassword').val() === ''){
        $('#alert').effect('shake').text('* Заполните все поля');
        if($('#inpLogin').val() === '') 
            $('#inpLogin').css('background', 'white').effect('shake').css('background', 'red');
        if($('#inpPassword').val() === '') 
            $('#inpPassword').css('background', 'white').effect('shake').css('background', 'red');
        return
    }
    if($('#alert').css('color') === 'rgb(247, 65, 65)') 
        $('#alert').css('color', 'white');
    var lg = $('#formLogin').serializeArray();
    console.log(lg[0].value + ' ' + lg[1].value);
})