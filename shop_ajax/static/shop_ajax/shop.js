SHOP = {};
jQuery(document).ready(function ($) {
	SHOP.cart = {
		init: function(csrf_token, add_item_url, update_item_url, cart_empty_url) {
			this.csrf_token = csrf_token;
			this.add_item_url = add_item_url;
			this.update_item_url = update_item_url;
			this.cart_empty_url = cart_empty_url;
		},
		updateItemQuantity: function(update_item_url, quantity, csrf_token, success_callback, error_callback){
			success_callback = (success_callback) ? success_callback : function(){};
			error_callback = (error_callback) ? error_callback : function(){};
			$.ajax({
				type: 'POST',
				url: update_item_url,
				data: {'item_quantity': quantity, 'csrfmiddlewaretoken': csrf_token},
				success: success_callback,
				error: error_callback
			});
		},
		getUpdateItemUrl: function(item_id) {
			return this.update_item_url + item_id;
		},
		setItem: function(item_id, quantity, success_callback, error_callback) {
			success_callback = (success_callback) ? success_callback : function(){};
			error_callback = (error_callback) ? error_callback : function(){};
			this.updateItemQuantity(this.getUpdateItemUrl(item_id), quantity, this.csrf_token, success_callback, error_callback);
		},
		removeItem: function(item_id, success_callback, error_callback) {
			success_callback = (success_callback) ? success_callback : function(){};
			error_callback = (error_callback) ? error_callback : function(){};
			this.setItem(item_id, 0, success_callback, error_callback)
		},
		addItem: function(item_id, quantity, success_callback, error_callback) {
			success_callback = (success_callback) ? success_callback : function(){};
			error_callback = (error_callback) ? error_callback : function(){};
			if(!quantity) {
				quantity = 1;
			}
			$.ajax({
				type: 'POST',
				url: this.add_item_url,
				data: {'add_item_id': item_id, 'csrfmiddlewaretoken': this.csrf_token, 'add_item_quantity': quantity},
				success: success_callback,
				error: error_callback
			});
		},
		empty: function(success_callback, error_callback) {
			success_callback = (success_callback) ? success_callback : function(){};
			error_callback = (error_callback) ? error_callback : function(){};
			$.ajax({
				url: this.cart_empty_url,
				success: success_callback,
				error: error_callback
			});
		}
	};
});
