import React from "react";
import { formState } from "../Form/Form";

type confirmData = {
  data: formState;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  handleClickNext: (
    setCounter: React.Dispatch<React.SetStateAction<number>>,
    counter: number
  ) => void;
};

const ConfirmData = ({
  data,
  setCounter,
  counter,
  handleClickNext,
}: confirmData) => {
  return (
    <>
      <div>
        <label>name</label>
        <br />
        <label>{data.fieldName.name}</label>
        <br />
        <label>lastname</label>
        <br />
        <label>{data.fieldLastname.lastname}</label>
        <br />
        <label>birthday</label>
        <br />
        <label>{data.fieldBirthday.birthday}</label>
        <br />
        <label>gender</label>
        <br />
        <label>{data.fieldGender.gender}</label>
        <br />
        <label>username</label>
        <br />
        <label>{data.fieldUsername.username}</label>
        <br />
        <label>password</label>
        <br />
        <label>{"*".repeat(data.fieldPassword.password.length)}</label>
        <br />
        <label>email</label>
        <br />
        <label>{data.fieldEmail.email}</label>
        <br />
        <label>phone number</label>
        <br />
        <label>{data.fieldPostalCode.postalCode.slice(2)}</label>
        <label>{data.fieldPhoneNumber.number}</label>
        <br />
        <br />
      </div>
      {counter === 3 && (
        <div>
          <button type="button" onClick={() => handleClickNext(setCounter, -1)}>
            update
          </button>
          <button type="submit">send</button>
        </div>
      )}
    </>
  );
};

export default ConfirmData;
