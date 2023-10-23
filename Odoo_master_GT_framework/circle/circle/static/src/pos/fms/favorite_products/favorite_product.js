/** @odoo-module */

import Registries from "point_of_sale.Registries"
import ProductScreen from "point_of_sale.ProductScreen"
const { onWillStart } = owl

const ProductScreenInherit = (product_screen) => class extends product_screen {
    setup(){
        super.setup()
        //To load all the product from local database
        //console.log('pos DB', this.env.pos.db)

        console.log('pos DB', this.env.pos.db)
      // alert("Payment Screen Loaded ");
    }

            //to get favorite products
            //        <div class="favorite-products" >
            //                    <div t-esc="favoriteProducts"></div>
            //               </div>

                get favoriteProducts(){
                let product= this.env.pos.db.get_product_by_category(2);
                console.log('products',product)
                return product;
                }


}

Registries.Component.extend(ProductScreen, ProductScreenInherit)