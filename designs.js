$(document).ready(function() {});
/**
* @description Creating a grid that will allow you to fill the squares up with different colors.
* @param int $inputWidth - This will be the number of squares representing the width of your grid.
* @param int $inputHeight - And this will represent the number of squares for the height of your grid.
*/
$('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    const h = $('#inputHeight').val();
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