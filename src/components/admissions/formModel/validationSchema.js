/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";
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

export default [
  Yup.object().shape({
    [surname.name]: Yup.string().required(`${surname.requiredErrorMsg}`),
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .email(`Enter an email address in the format "username@domain.com"`)
      .required(`${email.requiredErrorMsg}`),
    [dateOfBirth.name]: Yup.string()
      .nullable()
      .required(`${dateOfBirth.requiredErrorMsg}`),
    [gender.name]: Yup.string()
      .nullable(true)
      .required(`${gender.requiredErrorMsg}`),
    [age.name]: Yup.string().required(`${age.requiredErrorMsg}`),
    [placeOfBirth.name]: Yup.string().required(
      `${placeOfBirth.requiredErrorMsg}`
    ),
    [placeOfBirth.name]: Yup.string().required(
      `${placeOfBirth.requiredErrorMsg}`
    ),
    [phoneNumber.name]: Yup.string().required(
      `${phoneNumber.requiredErrorMsg}`
    ),
    [nationality.name]: Yup.string().required(
      `${nationality.requiredErrorMsg}`
    ),
    [stateOfOrigin.name]: Yup.string().required(
      `${stateOfOrigin.requiredErrorMsg}`
    ),
    [town.name]: Yup.string().required(`${town.requiredErrorMsg}`),
    [classCategory.name]: Yup.string().required(
      `${classCategory.requiredErrorMsg}`
    ),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
  }),
];
