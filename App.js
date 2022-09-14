import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { forwardRef, useState } from 'react'
import Axios from 'axios'

const Item = () => {
  return (
    <View style={styles.item}>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} style={styles.profpict}></Image>
      <View style={styles.bio}>
        <Text style={styles.nama}>Nama Lengkap</Text>
        <Text style={styles.email}>Email</Text>
        <Text style={styles.bidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  )
}

const App = () => {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [bidang, setBidang] = useState("")

  const submit = () => {
    const data = {
      nama,
      email,
      bidang
    }
    console.log('data before send: ', data)

    Axios.post('http://192.168.137.1:3000/users/', data)
    .then(res => {
      console.log('res: ', res)
      setNama("")
      setEmail("")
      setBidang("")
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic CRUD</Text>
      <Text style={styles.subtitle}>Masukkan anggota</Text>
      <TextInput placeholder='Nama Lengkap' style={styles.input} value={nama} onChangeText={(value) => setNama(value)}></TextInput>
      <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={(value) => setEmail(value)}></TextInput>
      <TextInput placeholder='Bidang' style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.textButton}>SIMPAN</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 18
  },

  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    marginVertical: 10,
    paddingHorizontal: 25
  },

  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginVertical: 20,
    borderRadius: 15
  },

  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },

  line: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50
  },

  item: {
    flexDirection: 'row',
    marginVertical: 10
  },

  profpict: {
    height: 100,
    width: 100,
    borderRadius: 50
  },

  bio: {
    marginLeft: 20,
    flex: 1
  },

  nama: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },

  email: {
    fontSize: 16,
    marginBottom: 5
  },

  bidang: {
    fontSize: 12
  },

  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
})