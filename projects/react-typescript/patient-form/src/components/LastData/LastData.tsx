import React from "react";
import { formState } from "../Form/Form";
import { Inputs } from "../Inputs/Inputs";
import { Labels } from "../Labels/Labels";

type lastData = {
  validationPhoneNumber: (
    inputValue: string
  ) => "safe-field" | "invalid-number";
  data: formState;
  setActive: React.Dispatch<
    React.SetStateAction<
      | ""
      | "number"
      | "name"
      | "lastname"
      | "male"
      | "female"
      | "email"
      | "username"
      | "password"
      | "confPassword"
      | "birthday"
      | "postal"
      | undefined
    >
  >;
  validationEmail: (
    inputValue: string
  ) =>
    | "safe-field"
    | "invalid-email"
    | "spaces"
    | "need-at-sign"
    | "need-full-stop"
    | undefined;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LastData = ({
  validationPhoneNumber,
  validationEmail,
  data,
  setActive,
  onChangeEmail,
  onChangePhoneNumber,
}: lastData) => {
  return (
    <>
      <div>
        <Labels
          textLabel="email"
          validationLabel={validationEmail(data.fieldEmail.email)}
          blankSpaxe={data.fieldEmail.email}
        />
        <Inputs
          setActive={setActive}
          onClickText={() => setActive("email")}
          nameText="email"
          typeText="text"
          placeholderText="email"
          textValue={data.fieldEmail.email}
          onChangeText={onChangeEmail}
          nameIcon="email"
        />

        {data.fieldEmail.email.length > 24 &&
          validationEmail(data.fieldEmail.email) === "invalid-email" && (
            <p className="validation-message">Invalid email</p>
          )}
        {data.fieldEmail.email.length > 16 &&
          validationEmail(data.fieldEmail.email) === "need-full-stop" && (
            <p className="validation-message">need "."</p>
          )}
        {data.fieldEmail.email.length >= 8 &&
          validationEmail(data.fieldEmail.email) === "need-at-sign" && (
            <p className="validation-message">need "@"</p>
          )}
        {data.fieldEmail.email.length >= 4 &&
          validationEmail(data.fieldEmail.email) === "spaces" && (
            <p className="validation-message">No spaces in this field!</p>
          )}
      </div>
      <div>
        <label>code</label>
        <h1>{data.fieldPostalCode.postalCode}</h1>
      </div>
      <div>
        <Labels
          textLabel="phone"
          validationLabel={validationPhoneNumber(data.fieldPhoneNumber.number)}
          blankSpaxe={data.fieldPhoneNumber.number}
        />
        <Inputs
          setActive={setActive}
          onClickText={() => setActive("number")}
          nameText="phone"
          typeText="text"
          placeholderText="phone number"
          textValue={data.fieldPhoneNumber.number}
          onChangeText={onChangePhoneNumber}
          nameIcon="phone"
        />
      </div>
    </>
  );
};

export default LastData;
