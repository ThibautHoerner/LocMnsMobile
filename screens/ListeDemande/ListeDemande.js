import ListeDemandeStyles from "./ListeDemandeStyles";
import AppStyles from "../../AppStyles";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Image, Icon } from "react-native-elements";

export default ({ navigation }) => {
    const styles = { ...AppStyles(), ...ListeDemandeStyles() };

    const demandes = [
        { id: 1, titre: "pc", description: "SSD, 1To", nomImage: "https://dlcdnwebimgs.asus.com/gain/bb59f0d4-ce53-4b45-bc4a-10ff76c8fac4/w800" },
        { id: 2, titre: "usb", description: "64Gb", nomImage: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/usb-flash-drives/cruzer-glide-usb-2-0/gallery/cruzer-glide-usb-2-0-angle-open2.png.wdthumb.1280.1280.webp" },
        { id: 3, titre: "écran", description: "Acer OLED", nomImage: "https://image.darty.com/informatique/accessoire_bureau/ecran_plat/lenovo_l27i-30_s2106114922115A_135113509.jpg" },
    ];

    const onAjoutDemande = () => {
        navigation.navigate("FormulaireDemande");
    };

    return (
        <View style={[styles.container, styles.centered, { padding: 5 }]}>
            <FlatList
                style={{ width: "100%" }}
                data={demandes}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#f2f2f2",
                            padding: 16,
                            marginBottom: 16,
                            borderRadius: 5,
                            flexDirection: "row", // Aligner l'image et le texte horizontalement
                            alignItems: "center", // Centrer verticalement l'image et le texte
                        }}
                    >
                        <Image
                            source={{ uri: item.nomImage}}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                marginRight: 16,
                            }}
                        />
                        
                        <Text>{item.titre}</Text>
                    </TouchableOpacity>
                )}
            ></FlatList>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    backgroundColor: "#007BFF",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 4, //ombre portée
                }}
                title="+"
                onPress={onAjoutDemande}
                >
                    <Icon name="add" size={24} color="#fff"></Icon>
            </TouchableOpacity>
        </View>
    );
};