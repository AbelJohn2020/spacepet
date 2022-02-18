import React, { useState } from "react";
import Icons from "../Icons/Icons";

type inputText = {
  onClickText: React.MouseEventHandler<HTMLDivElement> | undefined;
  setActive: (
    value: React.SetStateAction<
      | ""
      | "birthday"
      | "number"
      | "name"
      | "lastname"
      | "male"
      | "female"
      | "email"
      | "username"
      | "password"
      | "confPassword"
      | "postal"
      | undefined
    >
  ) => void;
  nameText: string;
  typeText: string;
  placeholderText: string;
  textValue: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameIcon: string;
};

type inputPassword = {
  onClickText: React.MouseEventHandler<HTMLDivElement> | undefined;
  setActive: (
    value: React.SetStateAction<
      | ""
      | "birthday"
      | "number"
      | "name"
      | "lastname"
      | "male"
      | "female"
      | "email"
      | "username"
      | "password"
      | "confPassword"
      | "postal"
      | undefined
    >
  ) => void;
  nameText: string;
  typeText: string;
  placeholderText: string;
  textValue: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Inputs = ({
  setActive,
  onClickText,
  nameText,
  typeText,
  placeholderText,
  textValue,
  onChangeText,
  nameIcon,
}: inputText) => {
  return (
    <div
      className="box-input"
      onClick={onClickText}
      onBlur={() => setActive("")}
    >
      <input
        className="text-input"
        name={nameText}
        type={typeText}
        placeholder={placeholderText}
        value={textValue}
        onChange={onChangeText}
        autoComplete="off"
      />
      <div className="box-icon">
        <Icons type={nameIcon} color="#495057" size="16px" />
      </div>
    </div>
  );
};

export const Password = ({
  setActive,
  onClickText,
  nameText,
  placeholderText,
  textValue,
  onChangeText,
}: inputPassword) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="box-input"
      onClick={onClickText}
      onBlur={() => setActive("")}
    >
      <input
        className="text-input"
        name={nameText}
        type={show ? "text" : "password"}
        placeholder={placeholderText}
        value={textValue}
        onChange={onChangeText}
      />
      <div onClick={() => setShow(!show)} className="password box-icon">
        {/* <div> */}
        <Icons
          type={show ? "showPassword" : "password"}
          color="#495057"
          size="16px"
        />
      </div>
    </div>
  );
};
