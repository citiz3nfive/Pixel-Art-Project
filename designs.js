$(document).ready(function() {});
$('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    const h = $('#inputHeight').val(); // Select size input
    const w = $('#inputWidth').val();
    for (var i = 1; i <= h; i++) {
        $('table').append('<tr></tr>');
        for (var x = 1; x <= w; x++) {
            $('td').attr('class', 'square');
            $('tr:last').append('<td></td>');
        }
    }
    grid.preventDefault();
    function makeGrid() {} // When size is submitted by the user, call makeGrid().
    $('.square').click(function(event) {
        var color = $('#colorPicker').val(); // Select color input.
        $(this).css('background-color', color);
    });
});