$(document).ready(function() {
    $("#generateButton").click(function() {
      var mood = $("#mood").val();
      var verseType = $("#verseType").val();
      var verseLocation = $("#verseLocation").val();
      var userVerse = $("#userVerse").val();

      var generatedContent = $("<div></div>");

      if (verseType === "freeform") {
        generatedContent.text(userVerse);
      } else {
        if (mood === "upbeat") {
          generatedContent.prependTo("#generatedContent");
          generatedContent.before("I'm feeling happy, ");
        } else {
          generatedContent.prependTo("#generatedContent");
          generatedContent.before("In the quiet of the night, ");
        }

        if (verseLocation === "start") {
          generatedContent.append(userVerse);
        }

        if (verseLocation === "end") {
          generatedContent.after("and ").after(userVerse);
        }
      }

      generatedContent.appendTo("#generatedContent");
    });
  });