=================================
django SHOP - Ajax
=================================

This app adds some nifty ajax functions you can use with django SHOP.

Installation
============

This requires jQuery (http://jquery.com/) and django SHOP to work (https://github.com/divio/django-shop)

* Add ``shop_ajax`` to your ``INSTALLED_APPS`` in your settings.py
* On your server run `python manage.py collectstatic` to collect all app's static files

Alternatively, you can just copy the content of shop.js in your javascript files.

Usage
=====

* Import the javascript files

::

  <script type="text/javascript" src="{{ STATIC_URL }}shop_ajax/shop.js"></script>


* Initialize the SHOP.cart somewhere on the top of your javascript code by providing it a `csrf_token` and urls to corresponding views

::

  SHOP.cart.init('{{ csrf_token }}', '{% url cart_item_add %}', '{% url cart_item_add %}', '{% url cart_delete %}');


* Use the provided functions in your templates

::

  <a href="#" onclick="SHOP.cart.addItem({{ product.id }})">Add to cart</a>
  ...

