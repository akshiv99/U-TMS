window.onload = function(){
    $.ajax({
        type : "POST",
        url : "/getall",
        dataType : "html",
        data : "",
        success : function(rows) {
            rows = JSON.parse(rows);
                for (var i = 0; i < rows.length; i++){
                    $('#myUL').append('<li style="display:none;"><a href="#">' + rows[i].course_title + ' : ' + rows[i].subject_code + ' ' + parseInt(rows[i].course_number) + '<button type="button" class="btn btn-dark select-btn" style="float:right">Select</button></a> </li>');
                }
        }, 
        error : function(jgxHR, textStatus, error) {
                alert("Error: " + textStatus + " " + error); 
        }
});
}
