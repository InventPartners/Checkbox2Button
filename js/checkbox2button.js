var checkbox2button = {

	init: function(selector){	
		$(selector).each(function(){
			var $parent = $(this);
			var $input = $parent.find('input[type="checkbox"]');
			if($input.length == 1){
				var value = $input.attr('value');
				var name = $input.attr('name');
				var checked = false;
				if($input.attr('checked')){
					checked = true;
				}
				var html = '<span><input type="hidden" name="' + name + '" value="" />';
				html += '<a class="btn btn-default btn-sm btn-checkbox2btn" data-value="' + value + '"><span class="glyphicon glyphicon-unchecked"></span> ' + $parent.text() + '</a></span>';
				$parent.html(html);
				if(checked){
					checkbox2button.checkCheckbox($parent.find('a'));
				}
			}
			var $input = $parent.find('input[type="radio"]');
			if($input.length == 1){
				var value = $input.attr('value');
				var name = $input.attr('name');
				var checked = false;
				if($input.attr('checked')){
					checked = true;
				}
				var html = '';
				if(!$('input[type="hidden"][name="' + name + '"]').length){
					html = '<input type="hidden" name="' + name + '" value="" />';
				}
				html += '<a class="btn btn-default btn-sm btn-radio2btn" data-name="' + name + '" data-value="' + value + '"><span class="glyphicon glyphicon-unchecked"></span> ' + $parent.text() + '</a>';
				$parent.html(html);
				if(checked){
					checkbox2button.checkRadioCheckbox($parent.find('a'));
				}
			}
		});
	
		$('body').on('click' , '.btn-checkbox2btn' , function(event){
			event.preventDefault();
			if($(event.target).hasClass('btn-checkbox-checked')){
				checkbox2button.unCheckCheckbox($(event.target));
			} else {
				checkbox2button.checkCheckbox($(event.target));
			}
			return false;
		});
	
		$('body').on('click' , '.btn-checkbox2btn .glyphicon' , function(event){
			event.preventDefault();
			target = $(event.target).parent('.btn-checkbox2btn');
			if(target){
				if($(target).hasClass('btn-checkbox-checked')){
					checkbox2button.unCheckCheckbox($(target));
				} else {
					checkbox2button.checkCheckbox($(target));
				}
			}
			return false;
		});
	
		$('body').on('click' , '.btn-radio2btn' , function(event){
			event.preventDefault();
			if($(event.target).hasClass('btn-checkbox-checked')){
				checkbox2button.unCheckRadioCheckbox($(event.target));
			} else {
				checkbox2button.checkRadioCheckbox($(event.target));
			}
			return false;
		});
	
		$('body').on('click' , '.btn-radio2btn .glyphicon' , function(event){
			event.preventDefault();
			target = $(event.target).parent('.btn-radio2btn');
			if(target){
				if($(target).hasClass('btn-checkbox-checked')){
					checkbox2button.unCheckRadioCheckbox($(target));
				} else {
					checkbox2button.checkRadioCheckbox($(target));
				}
			}
			return false;
		});
		
	} ,

	checkCheckbox: function (element){
		$(element).siblings('input').val($(element).attr('data-value'));
		$(element).addClass('btn-checkbox-checked');
		$(element).find('.glyphicon').removeClass('glyphicon-unchecked');
		$(element).find('.glyphicon').addClass('glyphicon-check');
	} ,
	
	unCheckCheckbox: function (element){
		$(element).siblings('input').val('');
		$(element).removeClass('btn-checkbox-checked');
		$(element).find('.glyphicon').addClass('glyphicon-unchecked');
		$(element).find('.glyphicon').removeClass('glyphicon-check');
	} ,

	checkRadioCheckbox: function (element){
		$('.btn-radio2btn[data-name="' + $(element).attr('data-name') + '"]').removeClass('btn-checkbox-checked');
		$('.btn-radio2btn[data-name="' + $(element).attr('data-name') + '"] .glyphicon').removeClass('glyphicon-uncheck');
		$('.btn-radio2btn[data-name="' + $(element).attr('data-name') + '"] .glyphicon').addClass('glyphicon-unchecked');
		$('input[type="hidden"][name="' + $(element).attr('data-name') + '"]').val($(element).attr('data-value'));
		$(element).addClass('btn-checkbox-checked');
		$(element).find('.glyphicon').removeClass('glyphicon-unchecked');
		$(element).find('.glyphicon').addClass('glyphicon-check');
	} ,

	unCheckRadioCheckbox: function (element){
		$('.btn-radio2btn[data-name="' + $(element).attr('data-name') + '"]').removeClass('btn-checkbox-checked');
		$('.btn-radio2btn[data-name="' + $(element).attr('data-name') + '"] .glyphicon').removeClass('glyphicon-uncheck');
		$('.btn-radio2btn[data-name="' + $(element).attr('data-name') + '"] .glyphicon').addClass('glyphicon-unchecked');
		$('input[type="hidden"][name="' + $(element).attr('data-name') + '"]').val('');
	}


}


$('document').ready(function(){
	checkbox2button.init('.checkbox2button');
});