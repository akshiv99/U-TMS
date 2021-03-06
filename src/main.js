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
                    e();
                }
        }, 
        error : function(jgxHR, textStatus, error) {
                alert("Error not working"); 
        }
});
}


function generate(arr){

    if (arr.length == 0) {
        console.log('no items added!');
        return false;
    }

    var time = '';
    if ($("input[name='time']:checked").val() == "early") {
        time = '< 1800';
    } else {
        time = '>= 1000';
    }
    var classList = "";
    for (var i=0;i<arr.length - 1;i++){
        classList += 'course_title = "' + arr[i].substring(0, arr[i].indexOf(':') - 1 ) + '" OR ';
    }

    classList += 'course_title = "' + arr[i].substring(0, arr[i].indexOf(':') - 1 ) + '"';

    $.ajax({
        type : "POST",
        url : "/create",
        dataType : "html",
        data : {times: time, classes : classList},
        success : function(rows) {
            rows = JSON.parse(rows);
            console.log(rows);
            eventCreation(rows);
        }, 
        error : function(jgxHR, textStatus, error) {
                alert("Error: " + textStatus + " " + error); 
        }
    });
}
