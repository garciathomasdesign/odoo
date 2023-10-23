odoo.define('point_of_sale.CircleHomeScreenbtn', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    class CircleHomeScreenbtn extends PosComponent {
        setup() {
            super.setup();
        }
         showFavProduct(){
            this.showScreen('CircleHomeScreen')
           }
    }
    CircleHomeScreenbtn.template = 'CircleHomeScreenbtn';

    ProductScreen.addControlButton({
        component: CircleHomeScreenbtn,
        position:['before', 'OrderlineCustomerNoteButton'],
        condition: function (){
        //this.env.pos
        //this.rpc
        return true}
    });

    Registries.Component.add(CircleHomeScreenbtn);

    return CircleHomeScreenbtn;
});
