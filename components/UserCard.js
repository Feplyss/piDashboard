import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

const UserCard = (props) => {
  var user = props.user;
  var senacCoin = props.senacCoin;
  var level = props.level;
  return (
    <Card>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: 'data:image/png;base64,' + user.foto}} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.nomeCompleto}</Text>
          <Text>Senac Coins: {senacCoin.saldo}</Text>
          <Text>Nível: {level}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserCard;
