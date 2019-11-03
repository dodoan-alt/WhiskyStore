import React from 'react';
import { View, ListRenderItemInfo, ViewProps } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Input,
  Text,
  List,
} from '@kitten/ui';
import { CommentsList1 } from '@src/components/articles';
import { ProductInfo, ProductListItem, ProductListItemProps } from '@src/components/ecommerce';
import {
  Product,
  Comment,
} from '@src/core/model';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

import { products, productsSingleMalt } from '@src/core/data/product';
import { productsHistory, productsMore } from '../../../../global/constants';

interface ComponentProps {
  product: Product;
  comments: Comment[];
  currentCommentText: string;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentMorePress: (index: number) => void;
  onCommentReplyMorePress: (index: number) => void;
  onCommentLikePress: (index: number) => void;
  onBuyPress: () => void;
}

interface State {
  selectedColorIndex: number;
  productState: Product;
}
type ListItemElement = React.ReactElement<ProductListItemProps>;
export type ProductDetailsProps = ThemedComponentProps & ComponentProps;

class ProductDetailsComponent extends React.Component<ProductDetailsProps, State> {

  public state: State = {
    selectedColorIndex: 0,
    productState: null,
  };

  componentWillMount = (): void =>{

    this.setState({productState:this.props.product});

    for (let index = 0; index < productsHistory.length; index++) {
      const element = productsHistory[index];
      if (element.name == this.props.product.name) {
        productsHistory.splice(index,1);
        break;
      }
    }
  }

  componentWillUnmount = ():void=>{
    productsHistory.push(this.state.productState);
  }

  private onBuyPress = (): void => {
    this.props.onBuyPress();
  };

  private onProductColorSelect = (selectedColorIndex: number): void => {
    this.setState({ selectedColorIndex });
  };

  private onCommentLikePress = (index: number) => {
    this.props.onCommentLikePress(index);
  };

  private onCommentMorePress = (index: number) => {
    this.props.onCommentMorePress(index);
  };

  private onCommentReplyMorePress = (index: number) => {
    this.props.onCommentReplyMorePress(index);
  };

  private onCommentTextChange = (text: string): void => {
    this.props.onCommentTextChange(text);
  };

  private handleTextSubmit = () => {
    this.props.onCommentSubmit();
  };

  private onHistoryProductAddPress = ()=>{}
  private onHistoryProductPress = (index:number)=>{
    this.setState({productState:productsHistory[index]});
  }

  private onMoreProductAddPress = ()=>{}
  private onMoreProductPress = (index:number)=>{
    const productsList = this.state.productState.type == 'BLENDED SCOTCH'? products: productsSingleMalt;
    this.setState({productState:productsList[index]});
  }

  private renderHistoryListItemElement = (item: Product): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <ProductListItem
        style={themedStyle.item}
        activeOpacity={0.75}
        image={item.photo.imageSource}
        name={item.name}
        type={item.type}
        price={`${item.cost} ${item.currency}`}
        onAddPress={this.onHistoryProductPress}
        onPress={this.onHistoryProductPress}
      />
    );
  };

  private renderHistoryItems = (info: ListRenderItemInfo<Product>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderHistoryListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  private renderPagerHistoryItems = (): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View>
        <List
          style={themedStyle.pagerContainer}
          horizontal={true}
          renderItem={this.renderHistoryItems}
          data={productsHistory}
          showsHorizontalScrollIndicator={false}
          // onScroll={this.onExerciseListScroll}
        />
        <View style={themedStyle.pagerIndicatorContainer}>
          {/* {this.props.exercises
               .map((item: Product, i: number) => this.renderPagerIndicator(i))} */}
        </View>
      </View>
    );
  };

  private renderMoreListItemElement = (item: Product): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <ProductListItem
        style={themedStyle.item}
        activeOpacity={0.75}
        image={item.photo.imageSource}
        name={item.name}
        type={item.type}
        price={`${item.cost} ${item.currency}`}
        onAddPress={this.onMoreProductPress}
        onPress={this.onMoreProductPress}
      />
    );
  };

  private renderMoreItems = (info: ListRenderItemInfo<Product>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderMoreListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  private renderPagerMoreItems = (): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;
    const productsList = this.state.productState.type == 'BLENDED SCOTCH'? products: productsSingleMalt;
    
    return (
      <View>
        <List
          style={themedStyle.pagerContainer}
          horizontal={true}
          renderItem={this.renderMoreItems}
          data={productsList}
          showsHorizontalScrollIndicator={false}
          // onScroll={this.onExerciseListScroll}
        />
        <View style={themedStyle.pagerIndicatorContainer}>
          {/* {this.props.exercises
               .map((item: Product, i: number) => this.renderPagerIndicator(i))} */}
        </View>
      </View>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, comments, currentCommentText } = this.props;
    const {productState} = this.state;
    return (
      <ContainerView style={themedStyle.container}>
        <ProductInfo
          image={productState.photo.imageSource}
          name={productState.name}
          type={productState.type}
          price={`${productState.cost} ${productState.currency}`}
          description={productState.description}
          size={productState.size}
          colors={productState.colors}
          selectedColorIndex={this.state.selectedColorIndex}
          onColorSelect={this.onProductColorSelect}
        />
     
        {/* <Button
          style={themedStyle.buyButton}
          textStyle={textStyle.button}
          size='giant'
          onPress={this.onBuyPress}>
          BUY
        </Button> */}
        <View style={themedStyle.commentsContainer}>
          {/* <Text
            style={themedStyle.inputLabel}
            category='s1'>
            Comments
          </Text>
          <Input
            style={themedStyle.input}
            textStyle={textStyle.paragraph}
            placeholder='Write your comment'
            value={currentCommentText}
            onChangeText={this.onCommentTextChange}
            onSubmitEditing={this.handleTextSubmit}
          />
          <CommentsList1
            data={comments}
            onLikePress={this.onCommentLikePress}
            onMorePress={this.onCommentMorePress}
            onReplyMorePress={this.onCommentReplyMorePress}
          /> */}
          <Text
            style={themedStyle.pagerLabel}
            appearance='hint'>
            HISTORY ITEMS
          </Text>
          {this.renderPagerHistoryItems()}
          <Text
            style={themedStyle.pagerLabel}
            appearance='hint'>
            MORE ITEMS
          </Text>
          {this.renderPagerMoreItems()}
        </View>
      </ContainerView>
    );
  }
}

export const ProductDetails = withStyles(ProductDetailsComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  commentsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: theme['background-basic-color-2'],
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  inputLabel: {
    marginBottom: 8,
    marginHorizontal: 16,
    ...textStyle.subtitle,
  },
  buyButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  pagerLabel: {
    marginVertical: 16,
    ...textStyle.paragraph,
  },
}));
