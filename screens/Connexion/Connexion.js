import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";

export default ({ handleLogin }) => {
    const styles = { ...AppStyles(), ...ConnexionStyles() };

    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    return (
        <View style={[styles.container, styles.centered, styles.safeArea]}>
            
            <InputEmail control={control} errors={errors}></InputEmail>
            <InputPassword control={control} errors={errors}></InputPassword>

            <Button title="CONNEXION" onPress={handleSubmit(handleLogin)} />
          
        </View>
    );
};
