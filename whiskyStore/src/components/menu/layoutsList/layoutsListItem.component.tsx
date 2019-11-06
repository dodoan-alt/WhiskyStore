import React from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { LayoutsListItemData } from './type';
import {
  ThemeContext,
  ThemeKey,
} from '@src/core/themes';

interface ComponentProps {
  data: LayoutsListItemData;
}

export type LayoutsListItemProps = ThemedComponentProps & ListItemProps & ComponentProps;

class LayoutsListItemComponent extends React.Component<LayoutsListItemProps> {

  private renderIconElement = (style: StyleType, theme: ThemeKey): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = this.props.data.icon(style, theme);

    return React.cloneElement(iconElement, { style });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, data, ...restProps } = this.props;

    return (
      <ThemeContext.Consumer>{({ currentTheme }) => (
        <ListItem
          {...restProps}
          style={[themedStyle.container, style]}>
          {this.renderIconElement(themedStyle.icon, currentTheme)}         
        </ListItem>
      )}</ThemeContext.Consumer>
    );
  }
}

export const LayoutsListItem = withStyles(LayoutsListItemComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // borderRadius: 8,
    // borderColor: '#996633',
    // borderWidth: 0.5,
    // paddingHorizontal: 20,
    // paddingVertical: 20,
  },
  icon: {
    resizeMode: 'contain',
    // alignSelf: 'center',
    width: 450,
    height: 250,
  },
  title: {
    marginTop: 8,
    ...textStyle.subtitle,
  },
}));
