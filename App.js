import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button, Alert, StatusBar } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <StatusBar animated backgroundColor="yellow" barStyle="dark-content"/>

      <ImageBackground
        source={{uri: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}}
        style={styles.imgBG}>

          <View style={styles.content}>

            <View style={styles.header}>
          
              <Text>AMD VS INTEL</Text>
          
            </View>

            <View style={styles.mainContent}>

              <View styles={styles.imgContent1}>

                <Image 
                  source={{uri: "https://qwords.com/blog/wp-content/uploads/2020/05/AMD-VS-Intel-768x336.jpg"}} style={styles.img1}/>
              
              </View>

              <ScrollView style={styles.Text}>

                <Text>

                  1. Kecepatan
                
                </Text>

                <Text>

                  Apabila dilihat dari sisi kecepatan, telah didapatkan sebuah fakta menarik berdasarkan tes benchmark tentang AMD dan Intel.
                  Intel diklaim jauh lebih cepat jika dibandingkan dengan processor AMD. Walaupun tidak kalah jauh, akan tetapi mutlak bahwa
                  Intel memiliki kecepatan yang lebih baik ketimbang AMD. {"\n"}{"\n"}
                  
                </Text>

                <Text>

                  2. Grafis game
                
                </Text>
                
                <Text>

                  Sekarang ini ada begitu banyak sekali pilihan game menarik yang bisa dimainkan via perangkat komputer seperti halnya laptop. 
                  Salah satunya adalah game FPS yang kabarnya bisa dimainkan di semua jenis laptop. Contoh dari game first person shooter 
                  tersebut di antaranya Destiny 2, Counter-Strike, Rage 2, Call of Duty, Far Cry 5 dan sebagainya. {"\n"}{"\n"}
                
                </Text>
                
                <Text>

                  3. Virus
                
                </Text>
                
                <Text>

                  Sebelum virus menjangkiti perangkat laptop Anda, processor AMD bakal lebih dulu tahu. Sayang sekali, Intel belum mempunyai 
                  teknologi mutakhir seperti processor AMD. Hal ini memberikan kesimpulan bahwa AMD jauh lebih unggul dibanding Intel dari sisi 
                  pendeteksi virus. {"\n"}{"\n"}
                
                </Text>

              </ScrollView>
              
                <Separator/>
              
            </View>

            <View style={styles.komentar}>

              <TextInput placeholder="Masukan nama" style={styles.textInput}/>
             
              <Text>{"\n"}</Text>
             
              <TextInput placeholder="Masukan komenter"style={styles.textInput}/>
             
              <View style={styles.button}>
             
                <Button title="Kirim"/>
             
              </View>

            </View>

          </View>

      </ImageBackground>

    </View>

  );

}

const Separator = () => (

  <View style={styles.separator}/>

);

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },

  header: {

    alignItems: "center",

  },

  imgBG: {

    resizeMode: "cover",

  },

  imgContent1: {

    width: 350,
    height: 100,

  },

  img1: {

    marginTop: 20,
    width: 350,
    height: 100,
    resizeMode: "cover",
    alignItems: "center",
    borderRadius: 5,

  },

  content: {

    padding: 20,
    margin: 20,
    marginTop: 20,
    fontWeight : "bold",
    fontSize : 25,
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "justify", 

  },

  Text: {

    marginTop:30,

  },

  separator: {

    marginVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,

  },

  komentar: {

    alignItems: "center",
    width: 250,
    height: 100,
    marginTop: 10,
    marginLeft: 50,

  },

  textInput: {

    borderColor: "black",
    borderBottomWidth: 2,

  },

  button: {

    marginTop: 15,

  }

});
