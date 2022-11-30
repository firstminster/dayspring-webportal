/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";
import admissionFormModel from "./admissionFormModel";

const {
  formField: {
    surname,
    firstName,
    // middleName,
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

    fatherName,
    fatherOccupation,
    fatherReligion,
    fatherPhoneNumber,
    motherName,
    motherOccupation,
    motherReligion,
    motherPhoneNumber,
    denominationName,
    denominationAddress,
    parentsBornAgain,
    objectionPreaching,
    enrollmentReason,
    pastorName,
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
      .nullable()
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
    [classCategory.name]: Yup.string()
      .nullable()
      .required(`${classCategory.requiredErrorMsg}`),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
    [fatherName.name]: Yup.string().required(`${fatherName.requiredErrorMsg}`),
    [fatherOccupation.name]: Yup.string().required(
      `${fatherOccupation.requiredErrorMsg}`
    ),
    [fatherReligion.name]: Yup.string().required(
      `${fatherReligion.requiredErrorMsg}`
    ),
    [fatherPhoneNumber.name]: Yup.string().required(
      `${fatherPhoneNumber.requiredErrorMsg}`
    ),
    [motherName.name]: Yup.string().required(`${motherName.requiredErrorMsg}`),
    [motherOccupation.name]: Yup.string().required(
      `${motherOccupation.requiredErrorMsg}`
    ),
    [motherReligion.name]: Yup.string().required(
      `${motherReligion.requiredErrorMsg}`
    ),
    [motherPhoneNumber.name]: Yup.string().required(
      `${motherPhoneNumber.requiredErrorMsg}`
    ),
    [denominationName.name]: Yup.string().required(
      `${denominationName.requiredErrorMsg}`
    ),
    [denominationAddress.name]: Yup.string().required(
      `${denominationAddress.requiredErrorMsg}`
    ),
    [parentsBornAgain.name]: Yup.string()
      .nullable()
      .required(`${parentsBornAgain.requiredErrorMsg}`),
    [objectionPreaching.name]: Yup.string().required(
      `${objectionPreaching.requiredErrorMsg}`
    ),
    [enrollmentReason.name]: Yup.string().required(
      `${enrollmentReason.requiredErrorMsg}`
    ),
    [pastorName.name]: Yup.string().required(`${pastorName.requiredErrorMsg}`),
  }),
];
