$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row">' + 
                '<div class="col-3"><img src=' + data[i].photo + ' class="thumbnail" /></div>' +
                '<div class="col-3"><br><br>' + data[i].name + '</div>' +
                '<div class="col-2"><br><br>' + data[i].rating + '</div>' +
                '</div>' +
                '</a>' + '<br>';
                $('#searchresult').append(row);
            }
        });
    });    
});