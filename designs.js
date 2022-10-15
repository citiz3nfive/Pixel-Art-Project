$(document).ready(function() {});
$('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    const h = $('#inputHeight').val();
    const w = $('#inputWidth').val();
    for (var i = 1; i <= h; i++) {
        $('table').append('<tr></tr>');
        for (var x = 1; x <= w; x++) {
            $('tr:last').append('<td></td>');
            $('td').attr('class', 'cell');
        }
    }
    grid.preventDefault();
    function makeGrid() {} 
    $('.cell').click(function(event) {
        var color = $('#colorPicker').val();
        $(this).css('background-color', color);
    });
});