
let deleteLink=document.querySelectorAll('.Delete');




for (var i = 0; i < deleteLink.length; i++) {
    deleteLink[i].addEventListener('click', function(event) {

        if (!confirm("sure u want to delete Larry " )) {
            event.preventDefault();
            //we should here have a linked data base and make the function resononve to all data base 
        }
    });
}