let cnt = 0;

$('#button-1').click(() => {
    cnt++;
    $('#counter').html(cnt);
})

$('#button-2').click(() => {
    if (cnt>0) {
        cnt--;
        $('#counter').html(cnt);
    }
})


