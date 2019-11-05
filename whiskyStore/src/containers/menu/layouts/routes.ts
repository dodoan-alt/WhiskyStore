import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  MenuIconAuth,
  MenuIconArticles,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconMessaging,
  MenuIconSocial,
  MenuIconAuthDark,
  MenuIconSocialDark,
  MenuIconArticlesDark,
  MenuIconMessagingDark,
  MenuIconDashboardsDark,
  MenuIconEcommerceDark,
  MenuIconBlendedScotch,
  MenuIconSingleMalt,
  MenuIconCustomization,
  MenuIconWhiskyMap,
} from '@src/assets/icons';
import {
  ThemeKey,
  ThemeService,
} from '@src/core/themes';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [
  // {
    // title: 'Auth',
    // icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      // return ThemeService.select({
        // 'Eva Light': MenuIconAuth(style),
        // 'Eva Dark': MenuIconAuthDark(style),
      // }, theme);
    // },
    // route: 'Auth',
  // },
  // {
    // title: 'Social',
    // icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      // return ThemeService.select({
        // 'Eva Light': MenuIconSocial(style),
        // 'Eva Dark': MenuIconSocialDark(style),
      // }, theme);
    // },
    // route: 'Social',
  // },
  // {
    // title: 'Articles',
    // icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      // return ThemeService.select({
        // 'Eva Light': MenuIconArticles(style),
        // 'Eva Dark': MenuIconArticlesDark(style),
      // }, theme);
    // },
    // route: 'Articles',
  // },
  // {
    // title: 'Messaging',
    // icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      // return ThemeService.select({
        // 'Eva Light': MenuIconMessaging(style),
        // 'Eva Dark': MenuIconMessagingDark(style),
      // }, theme);
    // },
    // route: 'Messaging',
  // },
  // {
  //   title: 'Dashboards',
  //   icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
  //     return ThemeService.select({
  //       'Eva Light': MenuIconDashboards(style),
  //       'Eva Dark': MenuIconDashboardsDark(style),
  //     }, theme);
  //   },
  //   route: 'Dashboards',
  // },
  // {
  //   title: 'Ecommerce',
  //   icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
  //     return ThemeService.select({
  //       'Eva Light': MenuIconEcommerce(style),
  //       'Eva Dark': MenuIconEcommerceDark(style),
  //     }, theme);
  //   },
  //   route: 'Ecommerce',
  // },
  {
    title: 'BLENDED SCOTCH',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconBlendedScotch(style),
        'Eva Dark': MenuIconBlendedScotch(style),
      }, theme);
    },
    route: 'BLENDED SCOTCH',
  },
  {
    title: 'SINGLE MALT',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconSingleMalt(style),
        'Eva Dark': MenuIconSingleMalt(style),
      }, theme);
    },
    route: 'SINGLE MALT',
  },
  {
    title: 'CUSTOMIZATION',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconCustomization(style),
        'Eva Dark': MenuIconCustomization(style),
      }, theme);
    },
    route: 'CUSTOMIZATION',
  },
  {
    title: 'WHISKY MAP',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconWhiskyMap(style),
        'Eva Dark': MenuIconWhiskyMap(style),
      }, theme);
    },
    route: 'WHISKY MAP',
  },
];
