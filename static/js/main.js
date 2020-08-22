$("#download").hide()
$("#make").click(function () {
    $("#make").hide()
    html2canvas(document.querySelector("#capture"), {
        useCORS: true,
        scale: 10,
        alowTaint: true
    }).then(canvas => {
        $(canvas).css("border", "none")
        document.getElementById("control").innerHTML += '<a href="' + canvas.toDataURL() + '" download="" id="download" class="btn btn-primary col">Download</a>'
    });
})
$("#bg").click(function () {
    if ($('#capture').hasClass('body')) {
        $("#capture").removeClass('body')
    } else {
        $("#capture").addClass('body')
    }
})
$("#color").click(function () {
    if ($('#name').hasClass('text-dark')) {
        $('#name').removeClass('text-dark')
        $('#option').removeClass('text-dark')
        $('#quote').removeClass('text-dark')
        $('#name').addClass('text-light')
        $('#option').addClass('text-light')
        $('#quote').addClass('text-light')
    } else {
        $('#name').addClass('text-dark')
        $('#option').addClass('text-dark')
        $('#quote').addClass('text-dark')
        $('#name').removeClass('text-light')
        $('#option').removeClass('text-light')
        $('#quote').removeClass('text-light')
    }
})