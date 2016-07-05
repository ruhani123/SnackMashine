function check() {

    try{

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
                                        + '<div class="col-md-12">Kod: ' + k.code + '</div>'
                                        +'<div count="'+k.count+'" class="col-md-12">Sayı: '+k.count+ '</div>'
                                        +'</div>'
                                   +' </div>'
                                +'</div>'
                            );

                    });
                }
            }
        })

        $('#amount').val('');
        $('#return_price').val('');
        var labelPrice = $('#label_price');


        $('div[number-div]').off('click').on('click', function () {
            var obj = $(this);
            var val = parseInt(obj.html().trim());

            var attr = obj.attr('disabled');
            if (typeof attr !== typeof undefined && attr !== false) {
                return false;
            }
            
            if ($('#label_number').html().length == 0) {
                if (val == 1) {
                    $('div[number-div]').not('#number_0,#number_1,#number_2').attr("disabled", "disabled");
                    $('#number_0').removeAttr('disabled');
                } else{
                    $('div[number-div]').attr("disabled", "disabled");
                }
            } else if ($('#label_number').html().length==1) {
                $('div[number-div]').attr("disabled", "disabled");
                
            }
                 $('#label_number').append(val);
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
            if (text.length > 0 && !$(this).is('disabled')) {
                var shortText = text.substr(0, (text.length - 1));
                $('#label_number').html(shortText);
                $('div[code]').removeClass('bg-info');
                $('div[code="' + shortText + '"]').addClass('bg-info');
                if (shortText.length == 0) {
                    $('#number_ok').attr("disabled", "disabled");
                    $('div[number-div]').not('#number_0').removeAttr('disabled');
                    $('#number_0').attr('disabled', 'disabled');
                } else {
                    if (shortText == 1) {
                        $('div[number-div]').not('#number_0,#number_1,#number_2').attr("disabled", "disabled");
                        $('#number_0,#number_1,#number_2').removeAttr('disabled');
                    }
                }

                
            }
        });


        $('#number_ok').off('click').on('click', function () {

            var attr = $(this).attr('disabled');
            if (typeof attr !== typeof undefined && attr !== false) {
                return false;
            }
            var text = $('#label_number').html();
            $('#number_cancel').attr("disabled", "disabled");
            $('#amount').removeAttr('disabled');
            
            if (text.length > 0) {
                labelPrice.html('');
                var price = $('div[code="' + text + '"]').find('div[price]').attr('price');
                labelPrice.html(price)
            }
        });


        $('#amount').off('focusout').on('focusout', function () {
            var amount = $('#amount').val();
            if (amount.length > 0) {
                $('#btn_ok').attr("disabled","disabled");
                if (amount < labelPrice.html()) {
                    alert('Daxil etdiyiniz məbləğ ödəniləcək məbləğdən kiçikdir');
                } else {
                  $('#btn_ok').removeAttr("disabled");
                }
                
            }
        });


        $('#btn_ok').off('click').on('click', function () {

            var count = $('div[code="' + code + '"]').find('div[count]').attr('count');
            if (parseInt(count) == 0) {
                alert('Bu məhsul bitib, digər məhsul seçin');
                return false;
            }

            
            var amount = $('#amount').val().trim();        
            var code = $('#label_number').html().trim();
            var price = $('#label_price').html().trim();


            var data = {
                "buyProduct": {
                    "code": code,
                    "amount": amount,
                    "price": price
                }

            };
            var jsondata = JSON.stringify(data);
            $.ajax({
                url:"http://localhost:28586/Service1.svc/Web/Buy",
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                data: jsondata,
                beforeSend:function(){
                    $('#btn_ok').attr("disabled", "disabled");
                },
                success: function (result) {
                    $('#return_price').val('');
                    $('b[message]').html('');
                    $('b[message]').html('Təşəkkür edirik! Qalıq məbləğ');
                    $('#return_price').val(result);
                }
            });
            
        });
    }catch(error){
        console.log(error);
    }
    

}



