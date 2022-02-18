import React from "react";
import { formState } from "../Form/Form";
import { Inputs, Password } from "../Inputs/Inputs";
import { Labels, LabelsConfPassword } from "../Labels/Labels";

type secondData = {
  validationInputText: (
    inputValue: string
  ) => "no-Uppercase" | "no-lowercase" | "no-numbers" | "safe-field";
  validationConfPassword: (
    inputValue: string,
    password: string
  ) => "safe-field" | "invalid-field";
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
  onChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeConfPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickNext: () => void;
};

const SecondData = ({
  validationInputText,
  validationConfPassword,
  data,
  setActive,
  onChangeUsername,
  onChangePassword,
  onChangeConfPassword,
  handleClickNext,
}: secondData) => {
  return (
    <>
      <div>
        <Labels
          textLabel="username"
          validationLabel={validationInputText(data.fieldUsername.username)}
          blankSpaxe={data.fieldUsername.username}
        />
        <Inputs
          setActive={setActive}
          onClickText={() => setActive("username")}
          nameText="username"
          typeText="text"
          placeholderText="username"
          textValue={data.fieldUsername.username}
          onChangeText={onChangeUsername}
          nameIcon="user"
        />

        {data.fieldUsername.username === "" &&
          data.fieldUsername.valid === null && (
            <p className="validation-message">Obligatory field</p>
          )}

        {data.fieldUsername.username.length >= 7 &&
          validationInputText(data.fieldUsername.username) ===
            "no-Uppercase" && (
            <p className="validation-message">A capital letter required</p>
          )}

        {data.fieldUsername.username.length >= 7 &&
          validationInputText(data.fieldUsername.username) ===
            "no-lowercase" && (
            <p className="validation-message">A lowercase letter is required</p>
          )}
        {data.fieldUsername.username.length >= 7 &&
          validationInputText(data.fieldUsername.username) === "no-numbers" && (
            <p className="validation-message">A number is required</p>
          )}
        {data.fieldUsername.username.length < 7 &&
          data.fieldUsername.username.length > 0 && (
            <p className="validation-message">Minimum characters: 7</p>
          )}
      </div>

      <div>
        <Labels
          textLabel="password"
          validationLabel={validationInputText(data.fieldPassword.password)}
          blankSpaxe={data.fieldPassword.password}
        />
        <Password
          setActive={setActive}
          onClickText={() => setActive("password")}
          nameText="password"
          typeText="text"
          placeholderText="password"
          textValue={data.fieldPassword.password}
          onChangeText={onChangePassword}
        />
        {data.fieldPassword.password === "" &&
          data.fieldPassword.valid === null && (
            <p className="validation-message">Obligatory field</p>
          )}

        {data.fieldPassword.password.length >= 7 &&
          validationInputText(data.fieldPassword.password) ===
            "no-Uppercase" && (
            <p className="validation-message">A capital letter required</p>
          )}

        {data.fieldPassword.password.length >= 7 &&
          validationInputText(data.fieldPassword.password) ===
            "no-lowercase" && (
            <p className="validation-message">A lowercase letter is required</p>
          )}
        {data.fieldPassword.password.length >= 7 &&
          validationInputText(data.fieldPassword.password) === "no-numbers" && (
            <p className="validation-message">A number is required</p>
          )}
        {data.fieldPassword.password.length < 7 &&
          data.fieldPassword.password.length > 0 && (
            <p className="validation-message">Minimum characters: 7</p>
          )}
      </div>

      <div>
        <LabelsConfPassword
          textLabel="confirm password"
          blankSpaxe={data.fieldConfirmPassword.valid}
          password={data.fieldPassword.password}
          confPassword={data.fieldConfirmPassword.confPassword}
        />
        <Password
          setActive={setActive}
          onClickText={() => setActive("confPassword")}
          nameText="confirm password"
          typeText="text"
          placeholderText="confirm password"
          textValue={data.fieldConfirmPassword.confPassword}
          onChangeText={onChangeConfPassword}
        />
        {data.fieldConfirmPassword.confPassword === "" &&
          data.fieldConfirmPassword.valid === false && (
            <p className="validation-message">Obligatory field</p>
          )}

        {data.fieldConfirmPassword.confPassword.length > 0 &&
          data.fieldConfirmPassword.confPassword !==
            data.fieldPassword.password &&
          (data.fieldConfirmPassword.valid === false ||
            data.fieldConfirmPassword.valid === null) && (
            <p className="validation-message">Password is not the same</p>
          )}
      </div>
      {validationInputText(data.fieldUsername.username) === "safe-field" &&
      validationInputText(data.fieldPassword.password) === "safe-field" &&
      validationConfPassword(
        data.fieldConfirmPassword.confPassword,
        data.fieldPassword.password
      ) === "safe-field" ? (
        <button type="button" onClick={handleClickNext}>
          next
        </button>
      ) : (
        <button type="button" disabled>
          next
        </button>
      )}
    </>
  );
};

export default SecondData;
