import React, { useState, useEffect } from "react";
import ConfirmData from "../ConfirmData/ConfirmData";
import FirstData from "../FirstData/FirstData";
import { HandleChangesForm } from "../HandleChangesForm/HandleChangesForm";
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
  const [sendForm, setSendForm] = useState<boolean>(false);

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setActive(active);
  }, [active]);

  const {
    //validations for data
    firstData,
    gender,
    birthday,
    secondData,
    confPassword,
    email,
    phone,
  } = ValidationsForm;

  const {
    // handle changes in data
    handleChangeName,
    handleChangeLastName,
    handleChangeBirthday,
    handleChangeGender,
    handleChangeUsername,
    handleChangePassword,
    handleChangeConfPassword,
    handleChangeEmail,
    handleChangePhoneNumber,
    // handle changes in counter
    handleClickNext,
    handleSubmit,
  } = HandleChangesForm;

  const renderComponent = (counter: number) => {
    switch (counter) {
      case 0:
        return (
          <FirstData
            validationInputText={firstData}
            validationBirthday={birthday}
            data={data}
            setActive={setActive}
            onChangeName={(e) => handleChangeName(e, setData, data, firstData)}
            onChangeLastName={(e) =>
              handleChangeLastName(e, setData, data, firstData)
            }
            onChangeBirthday={(e) =>
              handleChangeBirthday(e, setData, data, birthday)
            }
            onChangeGender={(e) => handleChangeGender(e, setData, data, gender)}
            handleClickNext={() => handleClickNext(setCounter, counter)}
          />
        );

      case 1:
        return (
          <SecondData
            validationInputText={secondData}
            validationConfPassword={confPassword}
            data={data}
            setActive={setActive}
            onChangeUsername={(e) =>
              handleChangeUsername(e, setData, data, secondData)
            }
            onChangePassword={(e) =>
              handleChangePassword(e, setData, data, secondData)
            }
            onChangeConfPassword={(e) =>
              handleChangeConfPassword(e, setData, data)
            }
            handleClickNext={() => handleClickNext(setCounter, counter)}
          />
        );

      case 2:
        return (
          <LastData
            validationEmail={email}
            validationPhoneNumber={phone}
            data={data}
            setActive={setActive}
            onChangeEmail={(e) => handleChangeEmail(e, setData, data, email)}
            onChangePhoneNumber={(e) =>
              handleChangePhoneNumber(e, setData, data, phone)
            }
            handleClickNext={() => handleClickNext(setCounter, counter)}
          />
        );
      case 3:
        return (
          <ConfirmData
            data={data}
            counter={counter}
            handleClickNext={handleClickNext}
            setCounter={setCounter}
          />
        );
      default:
        break;
    }
  };

  return (
    <div>
      <h1>sign up</h1>
      <form onSubmit={(e) => handleSubmit(e, setData, data, setSendForm)}>
        {renderComponent(counter)}
        {sendForm && <h1>Form submitted successfully</h1>}
      </form>
    </div>
  );
};

export default Form;
