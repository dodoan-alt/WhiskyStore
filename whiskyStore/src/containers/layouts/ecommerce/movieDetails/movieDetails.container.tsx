import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { movie1 } from '@src/core/data/movie';
import { Movie as MovieModel } from '@src/core/model';
import { Movie } from './movieDetails.component';
import {
  ContainerView,
} from '@src/components/common';
import {imageWhiskyMap1, imageWhiskyMap2} from '@src/assets/images/'
import { Image, View, ImageBackground } from 'react-native';
interface State {
  movie: MovieModel;
}

export class MovieDetailsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    movie: movie1,
  };

  private navigationKey: string = 'MovieDetailsContainer';

  private onScreenshotPress = (index: number) => {
  };

  private onBuyTicketPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Payment',
    });
  };

  public render(): React.ReactNode {
    return (
      // <Movie
      //   movie={this.state.movie}
      //   onBuyTicket={this.onBuyTicketPress}
      //   onScreenshotPress={this.onScreenshotPress}
      // />
      <ContainerView>
        <View>
          <ImageBackground  resizeMode={'contain'} // or cover
          style={{ 
          aspectRatio: 4/3  }} source={imageWhiskyMap1.imageSource}></ImageBackground>
        </View>
        <View>
          <ImageBackground  resizeMode={'cover'} // or cover
          style={{ 
          aspectRatio: 4/3  }} source={imageWhiskyMap2.imageSource}></ImageBackground>
        </View>
    </ContainerView>
    );
  }
}
