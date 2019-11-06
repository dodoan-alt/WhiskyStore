import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Product } from '@src/core/model';
import { productsSingleMalt } from '@src/core/data/product';
import { ProductsList } from './productsList.component';

interface State {
  products: Product[];
}

export class ProductsSingleMailListContainer extends React.Component<NavigationStackScreenProps, State> {
  private navigationKey: string = 'Products List';
  public state: State = {
    products: productsSingleMalt,
  };

  private onProductPress = (product: Product) => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Product Details',
      params: {
        productDetail: product,
      },
    });
  };

  private onTouchBack = ()=>{
    this.props.navigation.goBack(null);
  }
  private onProductAddPress = (product: Product) => {

  };

  public render(): React.ReactNode {
    return (
      <ProductsList
        products={this.state.products}
        onProductPress={this.onProductPress}
        onProductAddPress={this.onProductAddPress}
        onTouchBack={this.onTouchBack}
      />
    );
  }
}
