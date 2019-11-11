$(document).ready(function(){
    //alert("Loaded");
    //alert(document.getElementById('btnGetStarted').validationMessage);
    bindEvents();
});
function bindEvents()
{
    $("#getStartedForm").submit(function(e){
        document.getElementById('modal-wrapper').style.display='block';
        e.preventDefault();
    });




    
}

