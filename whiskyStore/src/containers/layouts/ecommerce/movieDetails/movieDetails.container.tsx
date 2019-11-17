import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { movie1 } from '@src/core/data/movie';
import { Movie as MovieModel } from '@src/core/model';
import { Movie } from './movieDetails.component';
import {
  ContainerView,
} from '@src/components/common';
import {img_map01, img_map02} from '@src/assets/images/'
import { Image, View, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
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

  private onTouch_Back = ()=>{
    this.props.navigation.goBack();
  }

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
          aspectRatio: 4/3  }} source={img_map01.imageSource}>
             <TouchableOpacity onPress={() => this.onTouch_Back()} >
            {/* <Image source={ArrowIosBackFill}></Image> */}
            <Ionicons name="ios-arrow-back" size={24}  style = {{paddingTop:10, paddingLeft:10,  color: 'white'}}/>
          </TouchableOpacity>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground  resizeMode={'cover'} // or cover
          style={{ 
          aspectRatio: 4/3  }} source={img_map02.imageSource}></ImageBackground>
          
        </View>
    </ContainerView>
    );
  }
}
