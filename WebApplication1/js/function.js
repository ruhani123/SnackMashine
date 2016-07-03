function check() {
    $.ajax({
        url: "http://localhost:28586/Service1.svc/Web/GetData",
        type: "POST",
        dataType: "json",
           
        success: function (result) {
            if (result && result.length>0) {
                $('div[products]').html();
                $.each(result, function (i, k) {
                    $('div[products]').append(
                         '<div class="col-lg-4">'
                              + ' <div class="btn btn-block product-div" style="margin-top: 5px" >'
                               +     '<center><h4><b></b></h4></center><br>'
                                +    '<div class="row">'
                                  +      '<div class="col-lg-12" >Adı:  <label>'+k.name+'</label></div>'
                                   +    ' <div class="col-lg-12">Çəki(ÖlçÜ):  <label>'+k.size+' '+k.Type1.name+'</label></div>'
                                    +    '<div class="col-lg-12">Qiymət: '+k.price+' <label>(AZN)</label></div>'
                                    +'</div>'
                               +' </div>'
						    +'</div>'
                        );
                    console.log(k.name);
                    console.log(k.price);
                });
            }
        }
    })
}



