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
  [fatherName.name]: "",
  [fatherOccupation.name]: "",
  [fatherReligion.name]: "",
  [fatherPhoneNumber.name]: "",
  [motherName.name]: "",
  [motherOccupation.name]: "",
  [motherReligion.name]: "",
  [motherPhoneNumber.name]: "",
  [denominationName.name]: "",
  [denominationAddress.name]: "",
  [parentsBornAgain.name]: "",
  [objectionPreaching.name]: "",
  [enrollmentReason.name]: "",
  [pastorName.name]: "",
};
