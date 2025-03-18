import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
} from 'react-native';
import ProfileCard from './ProfileCard';
import ItemCard from './ItemCard';
import gatinha from './assets/gatinha.png';
import icon from './assets/icon.png';

export default function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { id: 1, title: 'oioi', content: 'eu mrm' },
      { id: 2, title: 'Título 2', content: 'Conteúdo 2' },
      { id: 3, title: 'Título 3', content: 'Conteúdo 3' },
      { id: 4, title: 'Título 4', content: 'Conteúdo 4' },
      { id: 5, title: 'Título 5', content: 'Conteúdo 5' },
    ]);
  }, []);

  function handleDecrementCounter() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView>
        <SafeAreaView>

          {/* Aula 01 - Exercício de props com infos e imagens */}
          <View style={styles.section}>
            <ProfileCard nome="João" idade="50" job="Dev" imageUrl={icon} />
            <ProfileCard nome="Gabi" idade="19" job="Dev" imageUrl={gatinha} />
          </View>

          {/* Aula 02 - Trabalhando com Text, Input, Imagem, Botão e TouchableOpacity */}
          <View style={styles.section}>
            <TextInput
              style={styles.textInput}
              placeholder="Informe aqui o seu email"
              keyboardType="email-address"
              autoFocus
            />
            <TextInput
              style={styles.textInput}
              placeholder="Informe aqui a sua senha"
              secureTextEntry
            />

            <Image source={gatinha} style={styles.image} />

            <Button title="Clique aqui" onPress={() => alert('Clicou')} />

            <TouchableOpacity style={styles.touchable} onPress={() => alert('Clicou')}>
              <Text style={styles.touchableText}>Pressione aqui</Text>
            </TouchableOpacity>
          </View>

          {/* Trabalhando com Switch e ActivityIndicator */}
          <View style={styles.section}>
            <Switch
              value={isTrue}
              onValueChange={() => setIsTrue(!isTrue)}
              trackColor={{ false: 'red', true: 'green' }}
              thumbColor={'blue'}
            />
            <ActivityIndicator size="large" color="green" />
          </View>

          {/* FlatList para exibir itens de maneira eficiente */}
          <View style={styles.section}>
            <FlatList
              data={[{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }]}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <Text style={styles.listItem}>Item {item.key}</Text>
              )}
              keyboardShouldPersistTaps="handled"
              scrollEnabled={false}
            />
          </View>

          {/* Contador */}
          <View style={styles.section}>
            <Text style={styles.counterText}>Contador: {count}</Text>
            <Button title="Incrementar" onPress={() => setCount(count + 1)} />
            <Button title="Decrementar" onPress={handleDecrementCounter} />
          </View>

          {/* FlatList com dados dinâmicos */}
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemCard title={item.title} content={item.content} />
            )}
          />

          {/* Modal */}
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>abrir modal</Text>
          </TouchableOpacity>

          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <Text>Isso é um modal</Text>
              <Button title="Fechar Modal" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>

          <StatusBar style="dark" />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  textInput: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginVertical: 10,
  },
  touchable: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  counterText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
