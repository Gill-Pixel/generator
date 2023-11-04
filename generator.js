$(document).ready(function() {
    $('#generate').click(function() {
        var genre = $('#genre').val();
        var verse = $('#verse').val();
        var location = parseInt($('#location').val());

        if (!verse || isNaN(location) || location < 1) {
            alert("Please enter a valid verse and location.");
            return;
        }

        var output = genre === "upbeat" ? "🎵 Upbeat Song: " : "😔 Melancholy Song: ";
        var verses = verse.split('\n');
        for (var i = 0; i < verses.length; i++) {
            if (i === location - 1) {
                output += verses[i] + " ";
            }
            else {
                output += verses[i] + "\n";
            }
        }

        $('#output').html(output);
    });
});