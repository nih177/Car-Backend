function updateRepaymentTerm(el, value) {

	$(document).ready(function() {

		$('.quote-details .repayment').text('$' + value);

		$(el).closest('.options-wrapper').find('input').removeAttr('checked');

		$(el).closest('.options-wrapper').find('input[value="' + $(el).val() + '"]').attr('checked', 'checked');

	});

}



function show_review(){



	var form = $('#form-get-a-quote');



	var loanamttxt = $('input[name="loanamttxt"]', form).val();

	var loantrmsselect = $('select[name="loantrmsselect"] option:selected', form).val();



	var vtype = $('input[name="vtype"]:checked', form).val();

	var vhclmkselect = $('select[name="vhclmkselect"] option:selected', form).val();

	var modeltxt = $('input[name="modeltxt"]', form).val();

	var yearselect = $('select[name="yearselect"] option:selected', form).val();

	var suptype = $('input[name="suptype"]:checked', form).val();



	var genderselect = $('select[name="genderselect"] option:selected', form).val();

	var usrfnametxt = $('input[name="usrfnametxt"]', form).val();

	var usrlnametxt = $('input[name="usrlnametxt"]', form).val();

	var eidtxt = $('input[name="eidtxt"]', form).val();

	var posttxt = $('input[name="posttxt"]', form).val();

	var mbltxt = $('input[name="mbltxt"]', form).val();

	var occupationtxt = $('input[name="occupationtxt"]', form).val();

	var phonetxt = $('input[name="phonetxt"]', form).val();

	if ( loanamttxt && loantrmsselect && vtype && vhclmkselect && suptype && genderselect && usrfnametxt && usrlnametxt && eidtxt  && mbltxt && occupationtxt && $("#form-get-a-quote").attr('action') === ''){

	

		var data = {

				action: 'first',

				loanamttxt: loanamttxt,

				loantrmsselect: loantrmsselect,

				vtype: vtype,

				vhclmkselect: vhclmkselect,

				modeltxt: modeltxt,

				yearselect: yearselect,

				suptype: suptype,

				genderselect: genderselect,

				usrfnametxt: usrfnametxt,

				usrlnametxt: usrlnametxt,

				eidtxt: eidtxt,

				posttxt: posttxt,

				mbltxt: mbltxt,

				occupationtxt: occupationtxt,

				phonetxt: phonetxt

			}
		$.post(

			'quote_form.php',

			data,

			function(response) {					

				if (response.err_flag == '0') {

					$('.amount-financed').text('$' + response['amtfncd']);

					$('.loan-terms').text(response['terms'] + ' Months');

					$('.repayment').text('$' + response['repayment']);

					$('.quote-details .residual').text(response['residual'] + '%');

					$('.repayment-term button').each(function() {

						if ($(this).val() == '1') {

							$(this).attr('onclick', 'updateRepaymentTerm(this, \'' + response['repayweek'] + '\');');

						} else if ($(this).val() == '2') {

							$(this).attr('onclick', 'updateRepaymentTerm(this, \'' + response['repayfort'] + '\');');

						} else {

							$(this).attr('onclick', 'updateRepaymentTerm(this, \'' + response['repayment'] + '\');');

						}

					});

					form.append('<input type="hidden" name="second" id="second" value="Next" />');

					form.attr('action', 'carfinance_second.php?id=' + response['id']);

				

					$('.quote-details, .finance-approval').show();

				} else {

					if (response.msg.loantrms !== '') {

						$('.get-a-quote form fieldset.fieldset-amount ul li .options-wrapper p').text(response.msg.loantrms);

						$('.get-a-quote form fieldset.fieldset-amount ul li .options-wrapper p').show();

					}

				}

			},

			'json'

		);



	}

}

$(document).ready(function() {

	$("#form-get-a-quote .loantrmsselect").each(function() {

		var select = $(this);

		$(this).parent().find('ul.main-options li button').click(function() {

			select.find('option').removeAttr('selected');

			select.find('option[value="' + $(this).val() + '"]').attr('selected', 'selected');

		});

	});

	$("#form-get-a-quote").find('.vehicle-type, .supplier').find('li button').click(function() {

		var button = $(this);

		$(this).closest('.options-wrapper').find('input[type="radio"]').each(function() {

			if ($(this).val() === button.val()) {

				$(this).attr('checked', 'checked');

			} else {

				$(this).removeAttr('checked');

			}

		});

	});
	

	$("#form-get-a-quote").submit(function(evt) {

		var form = $(this);

		/* Empty action means that we are still at the first step. */

		if ($(this).attr('action') === '') {

			evt.preventDefault();

	

			var loanamttxt = $('input[name="loanamttxt"]', form).val();

			var loantrmsselect = $('select[name="loantrmsselect"] option:selected', form).val();

		

			var vtype = $('input[name="vtype"]:checked', form).val();

			var vhclmkselect = $('select[name="vhclmkselect"] option:selected', form).val();

			var modeltxt = $('input[name="modeltxt"]', form).val();

			var yearselect = $('select[name="yearselect"] option:selected', form).val();

			var suptype = $('input[name="suptype"]:checked', form).val();


			var genderselect = $('select[name="genderselect"] option:selected', form).val();

			var usrfnametxt = $('input[name="usrfnametxt"]', form).val();

			var usrlnametxt = $('input[name="usrlnametxt"]', form).val();

			var eidtxt = $('input[name="eidtxt"]', form).val();

			var posttxt = $('input[name="posttxt"]', form).val();

			var mbltxt = $('input[name="mbltxt"]', form).val();

			var occupationtxt = $('input[name="occupationtxt"]', form).val();

			var phonetxt = $('input[name="phonetxt"]', form).val();

			

			var data = {

				action: 'first',

				loanamttxt: loanamttxt,

				loantrmsselect: loantrmsselect,

				vtype: vtype,

				vhclmkselect: vhclmkselect,

				modeltxt: modeltxt,

				yearselect: yearselect,

				suptype: suptype,

				genderselect: genderselect,

				usrfnametxt: usrfnametxt,

				usrlnametxt: usrlnametxt,

				eidtxt: eidtxt,

				posttxt: posttxt,

				mbltxt: mbltxt,

				occupationtxt: occupationtxt,

				phonetxt: phonetxt

			}

			

			$.post(

				'quote_form.php',

				data,

				function(response) {					

					if (response.err_flag == '0') {

						$('.amount-financed').text('$' + response['amtfncd']);

						$('.loan-terms').text(response['terms'] + ' Months');

						$('.repayment').text('$' + response['repayment']);

						$('.quote-details .residual').text(response['residual'] + '%');

						$('.repayment-term button').each(function() {

							if ($(this).val() == '1') {

								$(this).attr('onclick', 'updateRepaymentTerm(this, \'' + response['repayweek'] + '\');');

							} else if ($(this).val() == '2') {

								$(this).attr('onclick', 'updateRepaymentTerm(this, \'' + response['repayfort'] + '\');');

							} else {

								$(this).attr('onclick', 'updateRepaymentTerm(this, \'' + response['repayment'] + '\');');

							}

						});


						form.append('<input type="hidden" name="second" id="second" value="Next" />');

						form.attr('action', 'carfinance_second.php?id=' + response['id']);

					

						$('.quote-details, .finance-approval').show();

					} else {

						if (response.msg.loantrms !== '') {

							$('.get-a-quote form fieldset.fieldset-amount ul li .options-wrapper p').text(response.msg.loantrms);

							$('.get-a-quote form fieldset.fieldset-amount ul li .options-wrapper p').show();

						}

					}

				},

				'json'

			);

		}

	});

});