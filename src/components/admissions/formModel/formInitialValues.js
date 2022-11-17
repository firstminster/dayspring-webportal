/* eslint-disable import/no-anonymous-default-export */
import admissionFormModel from "./admissionFormModel";

const {
  formField: {
    surname,
    firstName,
    middleName,
    email,
    dateOfBirth,
    gender,
    age,
    placeOfBirth,
    phoneNumber,
    nationality,
    stateOfOrigin,
    town,
    classCategory,
    address,
  },
} = admissionFormModel;

export default {
  [surname.name]: "",
  [firstName.name]: "",
  [middleName.name]: "",
  [email.name]: "",
  [dateOfBirth.name]: "",
  [gender.name]: "",
  [age.name]: "",
  [placeOfBirth.name]: "",
  [phoneNumber.name]: "",
  [nationality.name]: "",
  [stateOfOrigin.name]: "",
  [town.name]: "",
  [classCategory.name]: "",
  [address.name]: "",
};
