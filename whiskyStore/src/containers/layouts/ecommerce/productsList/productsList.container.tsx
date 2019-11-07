import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Product } from '@src/core/model';
import { products } from '@src/core/data/product';
import { ProductsList } from './productsList.component';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
interface State {
  products: Product[];
}

export class ProductsListContainer extends React.Component<NavigationStackScreenProps, State> {
  private navigationKey: string = 'Products List';
  public state: State = {
    products: products,
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
      <View style={{flex:1,zIndex:1}}>
      <ProductsList
    products={this.state.products}
    onProductPress={this.onProductPress}
    onProductAddPress={this.onProductAddPress}
  />
      <View
        style={{width: 100,
        height: 100,
        top: 10,
        left: 10,
        opacity: 0.8,
        position: 'absolute',}}
      >
        <TouchableOpacity onPress={() => this.onTouchBack()} >
          <Ionicons name="ios-arrow-back"  size={24}   style = {{ color: 'white'}}/>
        </TouchableOpacity>
      </View>
  </View>
    );
  }
}
