import React from 'react';
import {
  View,
  Image,
  TouchableOpacityProps,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { CartIconOutline } from '@src/assets/icons';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface ComponentProps extends ListDerivedProps, TouchableOpacityProps {
  image: ImageSourcePropType;
  iconimage: ImageSourcePropType;
  name: string;
  type: string;
  price: string;
  onAddPress: (index: number) => void;
  onPress: (index: number) => void;
}

export type ProductListItemProps = ThemedComponentProps & ComponentProps;

class ProductListItemComponent extends React.Component<ProductListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  private onAddToBucket = () => {
    this.props.onAddPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, image, iconimage, name, type, price, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Image
          style={themedStyle.image}
          source={iconimage}
        />
        <View style={themedStyle.infoContainer}>
          <View>
            <Text
              style={themedStyle.nameLabel}
              category='s1'>
              {name}
            </Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Text
              style={themedStyle.costLabel}
              category='s1'>
              {price}
            </Text>            
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const ProductListItem = withStyles(ProductListItemComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 12,
    borderColor: '#996633',
    borderWidth: 0.5,
    flex: 1,
    maxHeight: 450,
    minWidth: 400,
    alignSelf: 'center',
  },
  infoContainer: {
    // flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  priceContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  nameLabel: {
    textAlign:'center',
    ...textStyle.subtitle,
  },
  typeLabel: textStyle.caption1,
  costLabel: {
    textAlign:'center',
    ...textStyle.subtitle,
    color:'#8b8b8b',
  },
  buyButton: {
    width: 32,
    height: 32,
  },
}));
