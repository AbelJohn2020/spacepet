import React from "react";
import { formState } from "../Form/Form";
import { Inputs } from "../Inputs/Inputs";
import { Labels, LabelsBirdthday } from "../Labels/Labels";

type firstData = {
  validationInputText: (
    inputValue: string
  ) => "no-numbers" | "no-characters" | "safe-field" | undefined;
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
  validationBirthday: (inputValue: string) => "safe-field" | "invalid-field";
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBirthday: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGender: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickNext: () => void;
};

const FirstData = ({
  validationInputText,
  data,
  setActive,
  validationBirthday,
  onChangeName,
  onChangeLastName,
  onChangeBirthday,
  onChangeGender,
  handleClickNext,
}: firstData) => {
  return (
    <>
      <div>
        <Labels
          textLabel="name"
          validationLabel={validationInputText(data.fieldName.name)}
          blankSpaxe={data.fieldName.name}
        />
        <Inputs
          setActive={setActive}
          onClickText={() => setActive("name")}
          nameText="name"
          typeText="text"
          placeholderText="name"
          textValue={data.fieldName.name}
          onChangeText={onChangeName}
          nameIcon=""
        />
      </div>

      <div>
        <Labels
          textLabel="lastname"
          validationLabel={validationInputText(data.fieldLastname.lastname)}
          blankSpaxe={data.fieldLastname.lastname}
        />
        <Inputs
          setActive={setActive}
          onClickText={() => setActive("lastname")}
          nameText="lastname"
          typeText="text"
          placeholderText="lastname"
          textValue={data.fieldLastname.lastname}
          onChangeText={onChangeLastName}
          nameIcon=""
        />
      </div>

      <div>
        <LabelsBirdthday
          textLabel="birthday"
          validationLabel={validationBirthday(data.fieldBirthday.birthday)}
          blankSpaxe={data.fieldBirthday.birthday}
        />
        <Inputs
          setActive={setActive}
          onClickText={() => setActive("birthday")}
          nameText="birthday"
          typeText="date"
          placeholderText=""
          textValue={data.fieldBirthday.birthday}
          onChangeText={onChangeBirthday}
          nameIcon=""
        />
        {data.fieldBirthday.birthday === "" &&
          data.fieldBirthday.valid === null && (
            <p className="validation-message">Obligatory field</p>
          )}
      </div>

      <div>
        <Labels
          textLabel="gender"
          validationLabel={validationInputText(data.fieldGender.gender)}
          blankSpaxe={data.fieldGender.gender}
        />
        <div>
          <Inputs
            setActive={setActive}
            onClickText={() => setActive("male")}
            nameText="gender"
            typeText="radio"
            placeholderText=""
            textValue="male"
            onChangeText={onChangeGender}
            nameIcon=""
          />
          <label>male</label>
        </div>

        <div>
          <Inputs
            setActive={setActive}
            onClickText={() => setActive("female")}
            nameText="gender"
            typeText="radio"
            placeholderText=""
            textValue="female"
            onChangeText={onChangeGender}
            nameIcon=""
          />
          <label>female</label>
        </div>
      </div>
      {validationInputText(data.fieldName.name) === "safe-field" &&
      validationInputText(data.fieldLastname.lastname) === "safe-field" &&
      validationBirthday(data.fieldBirthday.birthday) === "safe-field" &&
      validationInputText(data.fieldGender.gender) === "safe-field" ? (
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

export default FirstData;
