import React from "react";
import Icons from "../Icons/Icons";

type labels = {
  textLabel: string;
  validationLabel: string | undefined;
  blankSpaxe: string;
};

type birthday = {
  textLabel: string;
  validationLabel: string | undefined;
  blankSpaxe: string;
};

type password = {
  textLabel: string;
  blankSpaxe: boolean | null;
  password: string;
  confPassword: string;
};

export const Labels = ({ textLabel, validationLabel, blankSpaxe }: labels) => {
  return (
    <div className="box-label">
      <label htmlFor={textLabel} className="label">
        {textLabel}
      </label>
      {validationLabel === "safe-field" && (
        <Icons type="check" color="green" size="16px" />
      )}
      {blankSpaxe.length >= 4 && validationLabel !== "safe-field" && (
        <Icons type="invalid" color="red" size="16px" />
      )}
    </div>
  );
};

export const LabelsBirdthday = ({
  textLabel,
  validationLabel,
  blankSpaxe,
}: birthday) => {
  return (
    <div className="box-label">
      <label htmlFor={textLabel} className="label">
        {textLabel}
      </label>
      {validationLabel === "safe-field" && (
        <Icons type="check" color="green" size="16px" />
      )}
      {blankSpaxe !== "" && validationLabel === "invalid-field" && (
        <Icons type="invalid" color="red" size="16px" />
      )}
    </div>
  );
};

export const LabelsConfPassword = ({
  textLabel,
  blankSpaxe,
  password,
  confPassword,
}: password) => {
  return (
    <div className="box-label">
      <label htmlFor={textLabel} className="label">
        {textLabel}
      </label>
      {password === confPassword && confPassword.length > 3 && (
        <Icons type="check" color="green" size="16px" />
      )}
      {(blankSpaxe === null || password !== confPassword) &&
        confPassword.length > 3 && (
          <Icons type="invalid" color="red" size="16px" />
        )}
    </div>
  );
};
