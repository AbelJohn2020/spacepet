import React from "react";
import { formState } from "../Form/Form";

export const HandleChangesForm = {
  // handle changes in data.
  handleChangeName: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    firstData: (
      inputValue: string
    ) => "no-numbers" | "no-characters" | "safe-field" | undefined
  ) {
    if (firstData(e.currentTarget.value) === "safe-field") {
      setData({
        ...data,
        fieldName: {
          ...data.fieldName,
          name: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldName: { ...data.fieldName, name: e.currentTarget.value },
      });
    }
  },

  handleChangeLastName: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    firstData: (
      inputValue: string
    ) => "no-numbers" | "no-characters" | "safe-field" | undefined
  ) {
    if (firstData(e.currentTarget.value) === "safe-field") {
      setData({
        ...data,
        fieldLastname: {
          ...data.fieldLastname,
          lastname: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldLastname: {
          ...data.fieldLastname,
          lastname: e.currentTarget.value,
        },
      });
    }
  },

  handleChangeBirthday: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    birthday: (inputValue: string) => "safe-field" | "invalid-field"
  ) {
    if (birthday(e.target.value) === "safe-field") {
      setData({
        ...data,
        fieldBirthday: {
          ...data.fieldBirthday,
          birthday: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldBirthday: {
          ...data.fieldBirthday,
          birthday: e.currentTarget.value,
        },
      });
    }
  },

  handleChangeGender: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    gender: (inputValue: string) => "safe-field" | "invalid-field"
  ) {
    if (gender(e.currentTarget.value) === "safe-field") {
      setData({
        ...data,
        fieldGender: {
          ...data.fieldGender,
          gender: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldGender: { ...data.fieldGender, gender: e.currentTarget.value },
      });
    }
  },

  handleChangeUsername: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    secondData: (
      inputValue: string
    ) => "no-Uppercase" | "no-lowercase" | "no-numbers" | "safe-field"
  ) {
    if (secondData(e.currentTarget.value) === "safe-field") {
      setData({
        ...data,
        fieldUsername: {
          ...data.fieldUsername,
          username: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldUsername: {
          ...data.fieldUsername,
          username: e.currentTarget.value,
        },
      });
    }
  },

  handleChangePassword: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    secondData: (
      inputValue: string
    ) => "no-Uppercase" | "no-lowercase" | "no-numbers" | "safe-field"
  ) {
    if (secondData(e.currentTarget.value) === "safe-field") {
      setData({
        ...data,
        fieldPassword: {
          ...data.fieldPassword,
          password: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldPassword: {
          ...data.fieldPassword,
          password: e.currentTarget.value,
        },
      });
    }
  },

  handleChangeConfPassword: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState
  ) {
    if (
      data.fieldConfirmPassword.confPassword.length > 4 &&
      data.fieldPassword.password === e.target.value
    ) {
      setData({
        ...data,
        fieldConfirmPassword: {
          ...data.fieldConfirmPassword,
          confPassword: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldConfirmPassword: {
          ...data.fieldConfirmPassword,
          confPassword: e.currentTarget.value,
        },
      });
    }
  },

  handleChangeEmail: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    email: (
      inputValue: string
    ) =>
      | "safe-field"
      | "invalid-email"
      | "spaces"
      | "need-at-sign"
      | "need-full-stop"
      | undefined
  ) {
    if (email(e.target.value) === "safe-field") {
      setData({
        ...data,
        fieldEmail: {
          ...data.fieldEmail,
          email: e.currentTarget.value.replace(/^[A-Z]*$/, ""),
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldEmail: {
          ...data.fieldEmail,
          email: e.currentTarget.value.replace(/^[A-Z]*$/, ""),
        },
      });
    }
  },

  handleChangePhoneNumber: function (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<formState>>,
    data: formState,
    phone: (inputValue: string) => "safe-field" | "invalid-number"
  ) {
    if (phone(e.target.value) === "safe-field") {
      setData({
        ...data,
        fieldPhoneNumber: {
          ...data.fieldPhoneNumber,
          number: e.currentTarget.value.replace(/\D/, ""),
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldPhoneNumber: {
          ...data.fieldPhoneNumber,
          number: e.currentTarget.value.replace(/\D/, ""),
        },
      });
    }
  },

  // handle changes in counter
  handleClickNext: function (
    setCounter: React.Dispatch<React.SetStateAction<number>>,
    counter: number
  ) {
    setCounter(counter + 1);
  },
};
