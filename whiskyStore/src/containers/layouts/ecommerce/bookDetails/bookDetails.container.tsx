import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  Book,
  Comment,
  Profile,
} from '@src/core/model';
import { book1 } from '@src/core/data/book';
import { comments } from '@src/core/data/comment';
import {
  profile1,
  profile2,
  profile3,
  profile4,
} from '@src/core/data/profile';
import { BookDetails } from './bookDetails.component';
import { View, ImageBackground } from 'react-native';
import {
    imageWhiskyCustom1,
    imageWhiskyCustom2,
    imageWhiskyCustom3,
    imageWhiskyCustom4,
    imageWhiskyCustom5,
    imageWhiskyCustom6,
} from '@src/assets/images/'
const profiles: Profile[] = [
  profile1,
  profile2,
  profile3,
  profile4,
];
import {
  ContainerView,
} from '@src/components/common';
interface State {
  book: Book;
  comments: Comment[];
  currentCommentText: string;
}

export class BookDetailsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    book: book1,
    comments: comments,
    currentCommentText: '',
  };
  private navigationKey: string = 'BookDetailsContainer';

  private onBuyBookPress = (): void => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Payment',
    });
  };

  private onCommentReplyMorePress = (index: number) => {

  };

  private onCommentLikePress = (index: number) => {

  };

  private onCommentMorePress = (index: number) => {

  };

  private onCommentTextChange = (text: string) => {
    this.setState({ currentCommentText: text });
  };

  private onCommentSubmit = () => {
    const commentsCopy: Comment[] = this.state.comments;
    commentsCopy.push({
      author: profiles[Math.floor(Math.random() * profiles.length)],
      text: this.state.currentCommentText,
      likesCount: 1,
      date: 'Today 10:36 pm',
    });
    this.setState({
      comments: commentsCopy,
      currentCommentText: '',
    });
  };


  public render(): React.ReactNode {
    return (
      // <BookDetails
      //   book={this.state.book}
      //   comments={this.state.comments}
      //   currentCommentText={this.state.currentCommentText}
      //   onBuyBook={this.onBuyBookPress}
      //   onCommentTextChange={this.onCommentTextChange}
      //   onCommentSubmit={this.onCommentSubmit}
      //   onCommentLikePress={this.onCommentLikePress}
      //   onCommentMorePress={this.onCommentMorePress}
      //   onCommentReplyMorePress={this.onCommentReplyMorePress}
      // />
      <ContainerView>
        <ImageBackground  resizeMode={'contain'} // or cover
          style={{ aspectRatio: 4/3 }} source={imageWhiskyCustom1.imageSource}></ImageBackground>
        <ImageBackground  resizeMode={'contain'} // or cover
          style={{ aspectRatio: 4/3 }} source={imageWhiskyCustom2.imageSource}></ImageBackground>
        <ImageBackground  resizeMode={'contain'} // or cover
          style={{ aspectRatio: 4/3 }} source={imageWhiskyCustom3.imageSource}></ImageBackground>
        <ImageBackground  resizeMode={'contain'} // or cover
          style={{ aspectRatio: 4/3 }} source={imageWhiskyCustom4.imageSource}></ImageBackground>
        <ImageBackground  resizeMode={'contain'} // or cover
          style={{ aspectRatio: 4/3 }} source={imageWhiskyCustom5.imageSource}></ImageBackground>
        <ImageBackground  resizeMode={'contain'} // or cover
          style={{ aspectRatio: 4/3 }} source={imageWhiskyCustom6.imageSource}></ImageBackground>
      </ContainerView>
    );
  }
}
