odoo.define('point_of_sale.displayProductScreen', function (require){
    'use strict';

    const Registries = require('point_of_sale.Registries');
    const PosComponent = require('point_of_sale.PosComponent');


    class displayProductScreen extends PosComponent {
        setup(){
            super.setup()
            console.log("New Favorite Product Screen")
        }
    }

    displayProductScreen.template = 'displayProductScreen';
    Registries.Component.add(displayProductScreen)

    return displayProductScreen
})