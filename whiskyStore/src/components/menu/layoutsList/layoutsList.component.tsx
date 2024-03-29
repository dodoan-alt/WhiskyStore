import React from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListProps,
} from '@kitten/ui';
import {
  LayoutsListItem,
  LayoutsListItemProps,
} from './layoutsListItem.component';
import { LayoutsListItemData } from './type';

var {height, width} = Dimensions.get('window');
const itemWidth: number = width / 2 - 32;
const itemHeight: number = height / 2 - 50;

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: LayoutsListItemData[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListItemElementInfo) => ListItemElement;
}

export type LayoutsListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<LayoutsListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<LayoutsListItemData>;

class LayoutsListComponent extends React.Component<LayoutsListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <LayoutsListItem
        style={this.props.themedStyle.item}
        data={info.item}
        onPress={this.onItemPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <List
        style={themedStyle.container}
        numColumns={2}
        renderItem={this.renderItem}
        {...restProps}
      />
    );
  }
}

export const LayoutsList = withStyles(LayoutsListComponent, (theme: ThemeType) => ({
  container: {
  },
  item: {
    flex: 1,
    maxHeight: itemHeight,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
    
  },
}));
