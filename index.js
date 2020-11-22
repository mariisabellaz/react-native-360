import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-360';

import styled from 'styled-components';

const Content = styled.div`
    border: 1px solid #000;
    background-image: url('https://www.google.com/search?q=panoramic+images&sxsrf=ACYBGNQiurIPbIGCT1TQCHQlerF2ZUHCeg:1565412432751&tbm=isch&source=iu&ictx=1&fir=V_h4vfgWiEZeFM%253A%252CwHX9SggnlAqgEM%252C_&vet=1&usg=AI4_-kRWVvFKlpy17zrYHYxBhGPMz_xXyA&sa=X&ved=2ahUKEwiXtOzfv_fjAhXXHbkGHSVbBfwQ9QEwBHoECAcQDA#imgrc=V_h4vfgWiEZeFM:&vet=1');
    width: 1000'
    height: 600'
    justify-content: center;
    alignItems: center;
`;

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.viewRow}>
          <View style={styles.greetingBox}/>
          <View style={styles.greetingBox}/>
        </View>
        <View>
          <View style={styles.viewRow}>
            <View style={styles.greetingBox}/>
            <View style={styles.greetingBox}/>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewRow:{
    flexDirection: "row",
  },
  panel: {
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    width: 200,
    height: 200,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
