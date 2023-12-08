/* eslint-disable react-native/no-inline-styles */
import React, {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PeriodicData from '../../jsons/PeriodicTableJSON.json';

enum Category {
  AlkaliMetal = 'alkali metal',
  DiatomicNonmetal = 'diatomic nonmetal',
}

const convert = (array: any[]) => {
  const object: {[key: string]: any} = {};
  array.forEach(item => {
    object[item.number] = item;
  });
  return object;
};

const PeriodicTable = () => {
  const elements = PeriodicData.elements;
  console.log('elements', elements);
  const arrayToObjectByNumber = convert(elements);
  console.log('arrayToObjectByNumber', arrayToObjectByNumber);

  const {width, height} = useWindowDimensions();
  const NONE = 0;
  const groups = [
    [1, 3, 11, 19, 37, 55, 87, 119],
    [NONE, 4, 12, 20, 38, 56, 88, 120],
    [NONE, NONE, NONE, 21, 39, 57, 89, 121],
    [NONE, NONE, NONE, 22, 40, 72, 104, NONE],
    [NONE, NONE, NONE, 23, 41, 73, 105, NONE],
    [NONE, NONE, NONE, 24, 42, 74, 106],
    [NONE, NONE, NONE, 25, 43, 75, 107],
    [NONE, NONE, NONE, 26, 44, 76, 108],
    [NONE, NONE, NONE, 27, 45, 77, 109],
    [NONE, NONE, NONE, 28, 46, 78, 110],
    [NONE, NONE, NONE, 29, 47, 79, 111],
    [NONE, NONE, NONE, 30, 48, 80, 112],
    [NONE, 5, 13, 31, 49, 81, 113],
    [NONE, 6, 14, 32, 50, 82, 114],
    [NONE, 7, 15, 33, 51, 83, 115],
    [NONE, 8, 16, 34, 52, 84, 116],
    [NONE, 9, 17, 35, 53, 85, 117],
    [2, 10, 18, 36, 54, 86, 118],
  ];

  const itemStyleByCategory = category => {
    switch (category) {
      case Category.AlkaliMetal: {
        return 'red';
      }
      case Category.DiatomicNonmetal: {
        return 'yellow';
      }
    }
  };

  const renderGroup = (items: any) => {
    return (
      <>
        {items.map((number: any) =>
          number === NONE || !arrayToObjectByNumber[number] ? (
            <View style={{paddingHorizontal: 3, paddingVertical: 5}}>
              <View
                style={{
                  width: width / 4.9,
                  height: height / 10,
                  padding: 5,
                }}
              />
            </View>
          ) : (
            <View style={{paddingHorizontal: 3, paddingVertical: 5}}>
              <TouchableOpacity
                style={{
                  width: width / 4.9,
                  height: height / 10,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  padding: 5,

                  borderColor: `#${arrayToObjectByNumber[number]['cpk-hex']}`,
                }}>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'space-between',
                    paddingVertical: 5,
                  }}>
                  <Text style={{fontSize: 12, color: '#fff'}}>
                    {arrayToObjectByNumber[number]?.number}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}>
                    {arrayToObjectByNumber[number]?.symbol}
                  </Text>
                  <Text style={{fontSize: 12, color: '#fff'}}>
                    {arrayToObjectByNumber[number]?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#141313'}}>
      <ScrollView horizontal>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 16}}>
            {groups.map((items, index) => (
              <View key={index}>
                <View
                  style={{
                    marginBottom: 20,
                    backgroundColor: '#0a0909',
                    padding: 5,
                    borderTopLeftRadius: index === 0 ? 4 : 0,
                    borderBottomLeftRadius: index === 0 ? 4 : 0,
                    borderTopRightRadius: index === 17 ? 4 : 0,
                    borderBottomRightRadius: index === 17 ? 4 : 0,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    {index + 1}
                  </Text>
                </View>
                {renderGroup(items)}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PeriodicTable;
