odoo.define('point_of_sale.displayProductByIdBtn', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    class displayProductByIdBtn extends PosComponent {
        setup() {
            super.setup();
        }
         showFavProduct(){
            this.showScreen('displayProductScreen')
           }
    }
    displayProductByIdBtn.template = 'displayProductByIdBtn';

    ProductScreen.addControlButton({
        component: displayProductByIdBtn,
        position:['before', 'OrderlineCustomerNoteButton'],
        condition: function (){
        //this.env.pos
        //this.rpc
        return true}
    });

    Registries.Component.add(displayProductByIdBtn);

    return displayProductByIdBtn;
});
