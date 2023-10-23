odoo.define('point_of_sale.CircleHomeScreen', function (require){
    'use strict';

    const Registries = require('point_of_sale.Registries');
    const PosComponent = require('point_of_sale.PosComponent');


    class CircleHomeScreen extends PosComponent {
        setup(){
            super.setup()
            console.log("New Favorite Product Screen")
        }
    }

    CircleHomeScreen.template = 'CircleHomeScreen';
    Registries.Component.add(CircleHomeScreen)

    return CircleHomeScreen
})