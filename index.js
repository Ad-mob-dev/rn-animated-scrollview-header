import {
  Animated,
  StyleSheet,
  ViewPropTypes,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import React, {useRef} from 'react';
import PropTypes from 'prop-types';

function ScrollingHeaderView(props) {
  const {
    data,
    backgroundImage,
    renderHeader,
    renderItems,
    headerMaxHeight,
    headerMinHeight,
    headerStyles,
    scrollViewStyles,
  } = props

  const scrollY = useRef(new Animated.Value(0)).current
  const animatedHeight = scrollY.interpolate({
    inputRange: [headerMinHeight, headerMaxHeight],
    outputRange: [headerMaxHeight, headerMinHeight],
    extrapolate: 'clamp',
  })
  return (
    <>
      {/*Animated Header View*/}
      <Animated.View style={[headerStyles, {height: animatedHeight}]}>
        {/* Header Background Image */}
        <Animated.Image
          style={StyleSheet.absoluteFillObject}
          source={{
            uri: backgroundImage,
          }}
        />
        {/* Render Header Items */}
        {renderHeader?.()}
      </Animated.View>

      {/* Animated Scroll View*/}
      <Animated.ScrollView
        contentContainerStyle={[{...scrollViewStyles}]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {/* ScrollView Item Renderer */}
        {data && data.map((item, index) => renderItems?.(item, index))}
      </Animated.ScrollView>
    </>
  )
}

ScrollingHeaderView.defaultProps = {
  backgroundImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsC4B-RvkaYKIEnW8a1z4kt4y0rs0sfSWKhxN-ujkBOmZOb-qWmuLUmWQ6NWeL9_davMk&usqp=CAU',
  data: [
    {
      id: 1,
      title: 'Adeel',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 2,
      title: 'Lubna',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
    },
    {
      id: 3,
      title: 'Asad',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 3,
      title: 'Saba',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
    },
    {
      id: 4,
      title: 'Daniyal',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 5,
      title: 'Hammad',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 6,
      title: 'Minahil',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
    },
    {
      id: 7,
      title: 'Akrima',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 8,
      title: 'Irtiza',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 9,
      title: 'Muween',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 10,
      title: 'Hassan',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 11,
      title: 'Ahsan',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 12,
      title: 'Ali',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 13,
      title: 'Usama',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 14,
      title: 'Afsha',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
    },
    {
      id: 15,
      title: 'Mustafa',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },

    {
      id: 16,
      title: 'Owais',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 17,
      title: 'Basit',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 18,
      title: 'Mohsin',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
    {
      id: 19,
      title: 'Athar',
      image:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png',
    },
  ],
  headerMaxHeight: 200,
  headerMinHeight: 50,
  scrollViewStyles: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyles: {
    zIndex: 15,
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  renderItems: (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          alert(item.title)
        }}
        style={{
          padding: 10,
          margin: 5,
          borderWidth: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '95%',
        }}
        key={index}>
        {item.image ? (
          <Image
            source={{uri: item.image}}
            resizeMode={'contain'}
            style={{width: 50, height: 50}}
          />
        ) : null}
        <Text style={{marginLeft: 10, fontWeight: '900'}}>{item.title}</Text>

        {item.image ? (
          <Text
            style={{
              marginLeft: 10,
              fontWeight: '900',
              fontSize: 20,
              position: 'absolute',
              right: 15,
            }}>
            >
          </Text>
        ) : null}
      </TouchableOpacity>
    )
  },
  renderHeader: () => {
    return (
      <Text style={{color: 'white', fontSize: 25, padding: 10}}>Header</Text>
    )
  },
}

ScrollingHeaderView.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  data: PropTypes.array,
  headerStyles: ViewPropTypes.style,
  headerMaxHeight: PropTypes.number,
  headerMinHeight: PropTypes.number,
  renderHeader: PropTypes.func,
  renderItems: PropTypes.func,
}

export default ScrollingHeaderView;
