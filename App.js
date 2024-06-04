// import { useState, useEffect, useLayoutEffect } from 'react';
// import { TouchableOpacity, View, Text, TextInput } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import tw, { useDeviceContext } from 'twrnc';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import MasonryList from '@react-native-seoul/masonry-list'
// import { useSearchNotesQuery, useAddNoteMutation, useDeleteNoteMutation, useUpdateNoteMutation } from './db';

// function HomeScreen({ navigation }) {
//   const { data: searchData, error, isLoading, refetch } = useSearchNotesQuery("");
//   const [ addNote, { data: addNoteData, error: addNoteError }] = useAddNoteMutation();
  
//   // useEffect(() => {
//   //   // if (addNoteData != undefined) {
//   //     if (addNoteData) {
//   //     // console.log(addNoteData.title);
//   //     console.log("New note created:", addNoteData);
//   //     refetch();
//   //     navigation.navigate("Edit", {data: addNoteData});
//   //   }
//   // }, [addNoteData]);

//   useFocusEffect(
//     React.useCallback(() => {
//       refetch();
//     }, [])
//   );

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress = {() => navigation.navigate("Edit", { data: item })}>
//       <View style={tw`w-[98%] mb-0.5 mx-auto bg-pink-300 rounded-sm px-1`}>
//         <Text style={tw`text-white`}>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   )

//   return (
//     <View style={tw`flex-1 items-center justify-center bg-white-400`}>
//       {searchData ? 
//         <MasonryList
//           style={tw`px-0.5 pt-0.5 pb-20`}
//           data={searchData}
//           numColumns={2}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//         />  
//         : <></>
//       }
//       <TouchableOpacity onPress={() => { addNote({title: "New Note", content: "content"}); }} style={tw`bg-pink-500 rounded-full absolute bottom-[5%] right-8 mx-auto items-center flex-1 justify-center w-12 h-12`}>
//         <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function EditScreen({ route, navigation }) {
//   const { data } = route.params;
//   const [ deleteNote ] = useDeleteNoteMutation();
//   const [ text, setText ] = useState(data.content);
//   const [ updateNote ] = useUpdateNoteMutation();

//   useLayoutEffect(() => {
//     navigation.setOptions({ title: data.title });
//     }, [navigation, data.title]);

//     const saveNote = () => {
//       updateNote({ id: data.id, content: text }).then(() => {
//         navigation.goBack();
//       });
//     };
  
//     const deleteItem = () => {
//       deleteNote({ id: data.id }).then(() => {
//         navigation.goBack();
//       });
//     };

//   //   useEffect(() => {
//   //     const debounceSave = setTimeout(() => {
//   //       console.log("Updating note:", data.id, text)
//   //       updateNote({ id: data.id, content: text });
//   //       // navigation.goBack();
//   //     }, 1000);
  
//   //     return () => clearTimeout(debounceSave);
//   //   }, [text, updateNote, data.id]);

//   // // const deleteItem = () => {
//   // //   deleteNote(data);
//   // //   navigation.goBack();
//   // // };
//   // const deleteItem = async () => {
//   //   try {
//   //     await deleteNote({ id: data.id });
//   //     navigation.goBack();
//   //   } catch (error) {
//   //     console.error("Error deleting note:", error);
//   //   }
//   // };

//   // return (
//   //   <View style={tw`flex-1 items-center justify-center bg-white-400`}>
//   //     <TouchableOpacity onPress={deleteItem} style={tw`bg-pink-500 rounded-full absolute bottom-[5%] right-8 mx-auto items-center flex-1 justify-center w-12 h-12`}>
//   //       <Text style={tw`text-white text-center text-3xl mt--1`}>🗑️</Text>
//   //     </TouchableOpacity>
//   //   </View>
//   // );
//   return (
//     <View style={tw`flex-1 p-4 bg-white`}> {}
//       <TextInput
//         style={tw`text-lg border-b border-gray-300 mb-4`}
//         placeholder="Title"
//         value={data.title}
//         editable={true} 
//       />
//       <TextInput
//         style={tw`text-base border-b border-gray-300 mb-4`}
//         placeholder="Content"
//         value={text}
//         onChangeText={setText}
//         multiline
//       />
//       <View style={tw`flex-row justify-between`}>
//         <TouchableOpacity onPress={deleteItem} style={tw`bg-red-500 rounded-full items-center justify-center w-12 h-12`}>
//           <Text style={tw`text-white text-center text-3xl mt--1`}>🗑️</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => updateNote({ id: data.id, content: text })} style={tw`bg-green-500 rounded-full items-center justify-center w-12 h-12`}>
//           <Text style={tw`text-white text-center text-3xl mt--1`}>💾</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   useDeviceContext(tw);

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen
//             options={{
//               headerStyle: tw`bg-pink-300 border-0`,
//               headerTintColor: '#fff',
//               headerTitleStyle: tw`font-bold`,
//               headerShadowVisible: false, // gets rid of border on device
//             }}
//             name="Notes"
//             component={HomeScreen}
//           />
//           <Stack.Screen
//             options={{
//               headerStyle: tw`bg-pink-300 border-0`,
//               headerTintColor: '#fff',
//               headerTitleStyle: tw`font-bold`,
//               headerShadowVisible: false, // gets rid of border on device
//             }}
//             name="Edit"
//             component={EditScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './store';
import MasonryList from '@react-native-seoul/masonry-list';
import { useSearchNotesQuery, useAddNoteMutation, useDeleteNoteMutation, useUpdateNoteMutation } from './db';

// HomeScreen Component
function HomeScreen({ navigation }) {
  const { data: searchData, error, isLoading, refetch } = useSearchNotesQuery("");

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  useEffect(() => {
    if (error) {
      console.error("Error fetching notes:", error);
    }
  }, [error]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Edit", { data: item })}>
      <View style={tw`w-[98%] mb-0.5 mx-auto bg-pink-300 rounded-sm px-1`}>
        <Text style={tw`text-white`}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 items-center justify-center bg-white-400`}>
      {isLoading ? <Text>Loading...</Text> : null}
      {searchData ? (
        <MasonryList
          style={tw`px-0.5 pt-0.5 pb-20`}
          data={searchData}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>No Notes Found</Text>
      )}
      <TouchableOpacity 
        onPress={() => { 
          navigation.navigate("Edit", { data: null }); // Navigate to EditScreen with null data to add a new note
        }} 
        style={tw`bg-pink-500 rounded-full absolute bottom-[5%] right-8 mx-auto items-center flex-1 justify-center w-12 h-12`}
      >
        <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// EditScreen Component
function EditScreen({ route, navigation }) {
  const { data } = route.params;
  const [deleteNote] = useDeleteNoteMutation();
  const [text, setText] = useState(data.content);
  const [updateNote] = useUpdateNoteMutation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: data.title });
  }, [navigation, data.title]);

  const saveNote = () => {
    updateNote({ id: data.id, content: text }).then(() => {
      navigation.goBack();
    }).catch(err => {
      console.error("Error updating note:", err);
    });
  };

  const deleteItem = () => {
    deleteNote({ id: data.id }).then(() => {
      navigation.goBack();
    }).catch(err => {
      console.error("Error deleting note:", err);
    });
  };

  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      <TextInput
        style={tw`text-lg border-b border-gray-300 mb-4`}
        placeholder="Title"
        value={data.title}
        editable={true}
      />
      <TextInput
        style={tw`text-base border-b border-gray-300 mb-4`}
        placeholder="Content"
        value={text}
        onChangeText={setText}
        multiline
      />
      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity onPress={deleteItem} style={tw`bg-red-500 rounded-full items-center justify-center w-12 h-12`}>
          <Text style={tw`text-white text-center text-3xl mt--1`}>🗑️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={saveNote} style={tw`bg-green-500 rounded-full items-center justify-center w-12 h-12`}>
          <Text style={tw`text-white text-center text-3xl mt--1`}>💾</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Main App Component
const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerStyle: tw`bg-pink-300 border-0`,
              headerTintColor: '#fff',
              headerTitleStyle: tw`font-bold`,
              headerShadowVisible: false,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: tw`bg-pink-300 border-0`,
              headerTintColor: '#fff',
              headerTitleStyle: tw`font-bold`,
              headerShadowVisible: false,
            }}
            name="Edit"
            component={EditScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
