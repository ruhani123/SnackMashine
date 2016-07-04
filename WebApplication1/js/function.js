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
                         '<div class="col-md-4">'
                              + ' <div code="'+k.code+'" class="btn btn-block product-div" style="margin-top: 5px" >'
                               +     '<center><h4><b></b></h4></center><br>'
                                +    '<div class="row">'
                                  +      '<div class="col-md-12" >Adı:  <label>'+k.name+'</label></div>'
                                   +    ' <div class="col-md-12">Çəki(Ölçü):  <label>'+k.size+' '+k.Type1.name+'</label></div>'
                                    + '<div price="'+k.price+'" class="col-md-12">Qiymət: ' + k.price + ' <label>(AZN)</label></div>'
                                    +'<div class="col-md-12">Kod: '+k.code+'</div>'
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

    
    var labelPrice = $('#label_price');

    $('#number_1,#number_2,#number_3,#number_4,#number_5,#number_6,#number_7,#number_8,#number_9,#number_0').off('click').on('click', function () {
        var $obj = $(this);
        
        if ($('#label_number').html() <= 12 && $('#label_number').html() < 2 && $obj.html() == 1) {
            $('#label_number').append('1');
            $('#number_3,#number_4,#number_5,#number_6,#number_7,#number_8,#number_9').attr('disabled', 'disabled')
        } else if ($obj.html() != 1 && $obj.html() != 'C' && $obj.html() != 'OK' && $obj.attr('disabled') == undefined) {
            $('#label_number').append($obj.html());
        }
        var text = $('#label_number').html();
        if (text.length > 0) {
            $('#number_ok').removeAttr('disabled');
        } else {
            $('#number_ok').attr("disabled", "disabled");
        }
        
        
        $('div[code]').removeClass('bg-info');
        $('div[code="' + text + '"]').addClass('bg-info');
    });

    $('#number_cancel').off('click').on('click', function () {
        var text = $('#label_number').html();
        if (text.length > 0) {
            console.log(text.length);
            var shortText = text.substr(0, (text.length - 1));
            $('#label_number').html(shortText);
            $('div[code]').removeClass('bg-info');
            $('div[code="' + shortText + '"]').addClass('bg-info');
            if (shortText.length == 0) {
                $('#number_ok').attr("disabled", "disabled");
            }
        }
    });

    $('#number_ok').off('click').on('click', function () {
        var text = $('#label_number').html();
        $('#number_cancel').attr("disabled", "disabled");
        if (text.length > 0) {
            labelPrice.html('');
            var price = $('div[code="' + text + '"]').find('div[price]').attr('price');
            labelPrice.html(price)
        }
    });

}



