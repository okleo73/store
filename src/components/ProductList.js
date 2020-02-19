import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row" >
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map(
                                    product => {
                                        return <Product key={product.id} product={product} />
                                    }
                                )
                            }}
                            {/* arrow function returns value props from context. instead use functions */}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
            // <Product /> 
        )
    }
}
// how do we make sure all route share the same products and methods (adding/removing items from the cart). 
//solution=setting up state.
//solution=context api (similar to redux)