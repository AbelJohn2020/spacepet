import React, { useState, useEffect } from "react";
import FirstData from "../FirstData/FirstData";
import LastData from "../LastData/LastData";
import SecondData from "../SecondData/SecondData";
import { ValidationsForm } from "../ValidationsForm/ValidationsForm";

export type formState = {
  fieldName: { name: string; valid: boolean | null };
  fieldLastname: { lastname: string; valid: boolean | null };
  fieldBirthday: { birthday: string; valid: boolean | null };
  fieldGender: { gender: string; valid: boolean | null };
  fieldUsername: { username: string; valid: boolean | null };
  fieldPassword: { password: string; valid: boolean | null };
  fieldConfirmPassword: { confPassword: string; valid: boolean | null };
  fieldEmail: { email: string; valid: boolean | null };
  fieldPostalCode: { postalCode: string; valid: boolean | null };
  fieldPhoneNumber: { number: string; valid: boolean | null };
};

export type postals = {
  country: string;
  code: string;
  postal: string;
  location: string;
}[];

const Form = () => {
  const [data, setData] = useState<formState>({
    fieldName: { name: "", valid: false },
    fieldLastname: { lastname: "", valid: false },
    fieldBirthday: { birthday: "", valid: false },
    fieldGender: { gender: "", valid: false },
    fieldUsername: { username: "", valid: false },
    fieldPassword: { password: "", valid: false },
    fieldConfirmPassword: { confPassword: "", valid: false },
    fieldEmail: { email: "", valid: false },
    fieldPostalCode: { postalCode: "PE(+51)", valid: true },
    fieldPhoneNumber: { number: "", valid: false },
  });

  const [active, setActive] = useState<
    | "name"
    | "lastname"
    | "male"
    | "female"
    | "email"
    | "username"
    | "password"
    | "confPassword"
    | "number"
    | "birthday"
    | "postal"
    | ""
  >();

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setActive(active);
  }, [active]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.firstData(e.currentTarget.value) === "safe-field") {
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
  };

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.firstData(e.currentTarget.value) === "safe-field") {
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
  };

  const handleChangeBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.birthday(e.target.value) === "safe-field") {
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
  };

  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.gender(e.currentTarget.value) === "safe-field") {
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
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.secondData(e.currentTarget.value) === "safe-field") {
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
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.secondData(e.currentTarget.value) === "safe-field") {
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
  };

  const handleChangeConfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.email(e.target.value) === "safe-field") {
      setData({
        ...data,
        fieldEmail: {
          ...data.fieldEmail,
          email: e.currentTarget.value,
          valid: true,
        },
      });
    } else {
      setData({
        ...data,
        fieldEmail: {
          ...data.fieldEmail,
          email: e.currentTarget.value,
        },
      });
    }
  };

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ValidationsForm.phone(e.target.value) === "safe-field") {
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
  };

  const handleClickNext = () => {
    setCounter(counter + 1);
  };

  console.log(data);
  return (
    <div>
      <h1>sign up</h1>
      <form>
        {counter === 0 && (
          <FirstData
            validationInputText={ValidationsForm.firstData}
            validationBirthday={ValidationsForm.birthday}
            data={data}
            setActive={setActive}
            onChangeName={handleChangeName}
            onChangeLastName={handleChangeLastName}
            onChangeBirthday={handleChangeBirthday}
            onChangeGender={handleChangeGender}
            handleClickNext={handleClickNext}
          />
        )}
        {counter === 1 && (
          <SecondData
            validationInputText={ValidationsForm.secondData}
            validationConfPassword={ValidationsForm.confPassword}
            data={data}
            setActive={setActive}
            onChangeUsername={handleChangeUsername}
            onChangePassword={handleChangePassword}
            onChangeConfPassword={handleChangeConfPassword}
            handleClickNext={handleClickNext}
          />
        )}

        {counter === 2 && (
          <LastData
            validationEmail={ValidationsForm.email}
            validationPhoneNumber={ValidationsForm.phone}
            data={data}
            setActive={setActive}
            onChangeEmail={handleChangeEmail}
            onChangePhoneNumber={handleChangePhoneNumber}
          />
        )}

        {counter === 2 &&
          (ValidationsForm.email(data.fieldEmail.email) === "safe-field" &&
          ValidationsForm.phone(data.fieldPhoneNumber.number) ===
            "safe-field" ? (
            <button type="submit">create</button>
          ) : (
            <button type="submit" disabled>
              create
            </button>
          ))}
      </form>
    </div>
  );
};

export default Form;
