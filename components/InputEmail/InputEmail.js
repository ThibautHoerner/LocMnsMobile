import { Input } from "@rneui/base";
import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import InputEmailStyles from "./InputEmailStyles";

export default InputEmail = ({ control, errors }) => {
  const styles = { ...AppStyles(), ...InputEmailStyles() };

  const utilisateurs = [
    { id: 1, email: "Admin@a.com", password: "1234", },
    { id: 2, email: "Rambo@r.com", password: "1967", },
    { id: 3, email: "User@u.som", password: "kikou", },
  ];

  const validateEmail = (value) => {
    const isemailValid = utilisateurs.some((utilisateur) => utilisateur.email === value);
    if (!isemailValid) {
      return "Veuillez sélectionner un email valide.";
    }
    return true;
  };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          keyboardType="email-address"
          value={value}
          label="Email"
          errorStyle={{ color: "red" }}
          errorMessage={
            errors.email ? "Veuillez entrer une adresse email valide." : ""
          }
        />
      )}
      name="email"
      rules={{
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Veuillez entrer une adresse email valide.",
        },
        validate: validateEmail,
      }}
      defaultValue=""
    />
  );
};
