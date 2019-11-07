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

export type ProductListItemMoreProps = ThemedComponentProps & ComponentProps;

class ProductListItemMoreComponent extends React.Component<ProductListItemMoreProps> {

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
        </View>
      </TouchableOpacity>
    );
  }
}

export const ProductListItemMore = withStyles(ProductListItemMoreComponent, (theme: ThemeType) => ({
  container: {
    minHeight: 150,
    borderRadius: 12,
    borderColor: '#996633',
    borderWidth: 0.5,
    // overflow: 'hidden',
    width: 300,
    // padding: 100,
  },
  infoContainer: {
    // flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    height: 150,
    width: 250,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  nameLabel: {
    textAlign:'center',
    ...textStyle.subtitle,
  },
  typeLabel: textStyle.caption1,
  costLabel: textStyle.subtitle,
  buyButton: {
    width: 32,
    height: 32,
  },
}));