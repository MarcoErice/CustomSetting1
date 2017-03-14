

function getQueryStringParameter(urlParameterKey) {
    var params = document.URL.split('?')[1].split('&');
    var strParams = '';
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split('=');
        if (singleParam[0] == urlParameterKey)
            return decodeURIComponent(singleParam[1]);
    }
}

jQuery.noConflict();
(function ($) {

    // Create variables out of the param value
    var colorValue = getQueryStringParameter('MyEnum');
    var textValue = getQueryStringParameter('MyString');

    // Do something based on incoming param values
    if (colorValue == 1) {
        $("#myString").html(textValue).css("color", "red");
    };
    if (colorValue == 2) {
        $("#myString").html(textValue).css("color", "green");
    };
    if (colorValue == 3) {
        $("#myString").html(textValue).css("color", "blue");
    };
    if (colorValue == 4) {
        $("#myString").html(textValue).css("color", "pink");
    };

})(jQuery);