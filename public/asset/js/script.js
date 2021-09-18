$(document).ready(function () {

    $("#testimonials").orbit({

        directionalNav: false,

        animation: 'fade',

        advanceSpeed: 5000

    });

    /* Form submission on home page */

    $("#submit-enter-amount").click(function () {

        $("#submitted-form").val("enter-amount");

    });

    $("#submit-loan-calculator").click(function () {
        $("#submitted-form").val("loan-calculator");

    });



    /* Quotes form validation */
    if ($("#form-get-a-quote").length > 0)
        $("#form-get-a-quote").validate();



    $(".nav-bar li.has-flyout > a").click(function (e) {

        e.preventDefault();

    });



    $(".get-a-quote form .main-options button").click(function () {
    
        $(this).parentsUntil('ul').parent().find('button').removeClass('checked');
     
        $(this).addClass('checked');
     
        $(this).parentsUntil('.options-wrapper').parent().find('p').slideUp();
      
        $(this).parentsUntil('.options-wrapper').parent().find('.sub-options').addClass('hidden');

        var subOptionsId = 'options-' + $(this).attr('name');
        $('#' + subOptionsId).removeClass('hidden');


        $(this).closest('ul').next('input[type=hidden]').val($(this).attr('id'));
    });



    $(".get-a-quote form .sub-options button").click(function () {

     

        $(this).parentsUntil('ul').parent().find('button').removeClass('checked');



        $(this).addClass('checked');

    });



    (

        function () {

            var changed = false;

            $(".enter-amount input[type=text]").change(function () {

                changed = true;

            });

            $(".enter-amount input[type=text]").focus(function () {

                if (!changed)

                    $(this).val('');

            });

            $(".enter-amount input[type=text]").blur(function () {

                if (!changed)

                    $(this).val('Enter amount');

            });

        }

        )();



    (

        function () {
            if ( $("#amount-slider").length > 0) {
                $("#amount-slider").slider({

                    min: 0,

                    max: 100000,

                    step: 1000,

                    animate: true,

                    slide: function (event, ui) {

                        $(this).siblings('.slider-value').text('$ ' + ui.value);

                        calculateLoan();

                    },

                    stop: function (event, ui) {

                        $(this).siblings('.slider-value').text('$ ' + ui.value);

                        calculateLoan();

                    }

                }

                );
            }

            $("#residual-slider").slider({

                min: 0,

                max: 60,

                step: 0.05,

                animate: true,

                slide: function (event, ui) {

                    $(this).siblings('.slider-label').text('Residual: ' + ui.value + '%');

                    calculateLoan();

                },

                stop: function (event, ui) {

                    $(this).siblings('.slider-label').text('Residual: ' + ui.value + '%');

                    calculateLoan();

                }

            }

            );

            $("#interest-slider").slider({

                min: 1,

                max: 20,

                step: 0.1,

                animate: true,

                slide: function (event, ui) {

                    $(this).siblings('.slider-value').text(ui.value + '%');

                    calculateLoan();

                },

                stop: function (event, ui) {

                    $(this).siblings('.slider-value').text(ui.value + '%');

                    calculateLoan();

                }

            }

            );

            $("#term-of-lease-slider").slider({

                min: 1,

                max: 7,

                step: 1,

                animate: true,

                slide: function (event, ui) {

                    $(this).siblings('.slider-value').text(ui.value + ' Year(s)');

                    calculateLoan();

                },

                stop: function (event, ui) {

                    $(this).siblings('.slider-value').text(ui.value + ' Year(s)');

                    calculateLoan();

                }

            }

            );



            function calculateLoan() {

                var amount = $("#amount-slider").slider("value");

                var residual = $("#residual-slider").slider("value") * amount / 100;

                var interest = $("#interest-slider").slider("value") / 1200;

                var time = $("#term-of-lease-slider").slider("value") * 12;



                residual = Math.round(residual * 100) / 100;

                var resi = Math.round(residual * 100) / 100;



                $("#residual-slider-amount").text('($' + resi + ')');



                if (amount == 1) {

                    var wholerate = 0.0;

                } else {

                    wholerate = _calculate_pmt(interest, time, -(amount * 1.03), residual, 1);

                }

                /* var rate = (amount*1.03) * ( Math.pow(1+interest,time)-residual) / ((1+interest)*(Math.pow(1+interest,time)-1))/interest;*/



                $("#monthly-repayment").text(wholerate.toFixed(2));



                $("#amount1").val(amount);

                $("#resi").val(resi);

                $("#intrst").val($("#interest_slider").slider("value"));

                $("#tim").val(time);

                $("#wrate").val(wholerate.toFixed(2));

            }



            function _calculate_pmt(interest, nper, pv, fv, type) {

       

                pvif = _calculate_pvif(interest, nper);

                fvifa = _calculate_fvifa(interest, nper);



                return ((-pv * pvif - fv) / ((1.0 + interest * type) * fvifa));

            }



            function _calculate_pvif(interest, nper) {

                return (Math.pow(1 + interest, nper));

            }



            function _calculate_fvifa(interest, nper) {

  

                if (interest == 0)

                    return nper;

                else {

    

                    return (Math.pow(1 + interest, nper) - 1) / interest;

                }

            }

        }

        )();







    /* Contact form dialog */

    (

        function () {


            $dialog = $('.contact form').dialog({

                autoOpen: false,

                title: "We will call you shortly",

                resizable: false

            });

            $('.contact button').click(function () {

                $dialog.dialog("open");

            });

            $('#contact-form').submit(function (evt) {
                $("#contactquery").hide();
                $("#processing_email").html("Please wait..Your query is being sent");

                evt.preventDefault();



                var $form = $(this).closest("form");

     

                var firstname = $.trim($("#first-name", $form).val());

                var surname = $.trim($("#surname", $form).val());

                var email = $.trim($("#email", $form).val());

                var phone = $.trim($("#phone", $form).val());



                var msg = '';

                if (firstname === '') {

                    msg = "Please fill in your first name";

                } else if (surname === '') {

                    msg = "Please fill in your surname";

                } else if (email === '') {

                    msg = "Please fill in your email address";

                }else if (phone === '') {

                    msg = "Please fill in your phone number";

                }



                if (msg === '') {



                    $.post(

                        'enquiry.php',
               

                        {

                            firstname: firstname,

                            surname: surname,

                            email: email,

                            phone: phone

                        },


                        function (response) {
                  
                            if (response == '0') {

                                msg = "Your e-mail address was not valid.";

                                $('.msg', $form).removeClass('success').addClass('error').text(msg);

                            } else {

                                msg = "Your enquiry has been sent.";

                                $('.msg', $form).addClass('success').removeClass('error').text(msg);
                                $("#formdata").hide();




                            }

                        },

                        'json'

                        );

                } else {

            

                    $('.msg', $form).removeClass('success').addClass('error').text(msg);

                }

            });

        }

        )();

});