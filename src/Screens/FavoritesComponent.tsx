import React from 'react';
import { View, FlatList } from 'react-native';
import { STYLES } from '../Styles';
import { PhotoItemView } from '../View/PhotoItemView';
import { PhotoModel } from '../Types/models';
import { DefaultFlatListType } from '../Types';
import { FormTextBoxProps, TextBox } from '../View/TextBox';
import { BaseHeaderView } from '../View/BaseHeaderView';
import { EmptyView } from '../View/EmptyView';

export type favoritesComponentProps = {
  formBoxProperties: FormTextBoxProps;
  favorites: PhotoModel[];
  isSearch: boolean;
  filteredItems: Array<PhotoModel>;
};

const FavoritesComponent: React.FC<favoritesComponentProps> = ({ formBoxProperties, favorites, isSearch, filteredItems }) => {
  const _renderItem = ({ item }: DefaultFlatListType<PhotoModel>) => {
    return <PhotoItemView isFilled={true} model={item} />;
  };

  return (
    <View style={STYLES.Layout.container}>
      <BaseHeaderView label={'Favorites'} />
      <View>
        <TextBox {...formBoxProperties} />
      </View>
      <View style={[STYLES.MP.mb_bottomNavigation]}>
        <FlatList
          numColumns={1}
          horizontal={false}
          bounces={true}
          ListEmptyComponent={<EmptyView message={'No Favorite Items!'} />}
          data={isSearch ? filteredItems : favorites}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default FavoritesComponent;
