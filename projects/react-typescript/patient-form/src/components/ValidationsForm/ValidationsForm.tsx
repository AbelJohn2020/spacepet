export const ValidationsForm = {
  // validations for data
  firstData: function (inputValue: string) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specialCharacters = [
      "+",
      "-",
      "&&",
      "||",
      "!",
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      "^",
      "~",
      "*",
      "?",
      ":",
    ];

    const getArray = inputValue.split("");
    const areThereNumbers = numbers.map((number) => getArray.includes(number));
    const areThereCharacters = specialCharacters.map((character) =>
      getArray.includes(character)
    );

    const validNumbers = areThereNumbers.filter((element) => element === true);
    const validCharacters = areThereCharacters.filter(
      (element) => element === true
    );

    if (validNumbers?.length > 0) {
      return "no-numbers";
    } else if (validCharacters?.length > 0) {
      return "no-characters";
    } else if (inputValue.length > 2) {
      return "safe-field";
    }
  },

  gender: function (inputValue: string) {
    switch (inputValue) {
      case "female":
        return "safe-field";
      case "male":
        return "safe-field";
      default:
        return "invalid-field";
    }
  },

  birthday: function (inputValue: string) {
    const date = new Date().toLocaleDateString();
    const newDate = date.split("/");
    const updateDate = newDate.map((element: string) =>
      element > "2000" ? (Number(element) - Number("18")).toString() : element
    );
    const limitDate = newDate.map((element: string) =>
      element > "2000" ? (Number(element) - Number("120")).toString() : element
    );
    const local = `${updateDate[2]}-${updateDate[1]}-${updateDate[0]}`;
    const limit = `${limitDate[2]}-${limitDate[1]}-${limitDate[0]}`;

    if (
      new Date(limit) < new Date(inputValue) &&
      new Date(inputValue) < new Date(local)
    ) {
      return "safe-field";
    } else {
      return "invalid-field";
    }
  },

  secondData: function (inputValue: string) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alpha.split("");
    const mayusAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const mayusAlphabet = mayusAlpha.split("");

    const getArray = inputValue.split("");
    const areThereNumbers = numbers.map((number) => {
      return getArray.includes(number);
    });

    const areThereLetters = alphabet.map((letter) => {
      return getArray.includes(letter);
    });

    const areThereMayusLetters = mayusAlphabet.map((letter) => {
      return getArray.includes(letter);
    });

    const validNumbers = areThereNumbers.filter((element) => element === true);
    const validAphabet = areThereLetters.filter((element) => element === true);
    const validMayus = areThereMayusLetters.filter(
      (element) => element === true
    );

    if (validMayus?.length === 0) {
      return "no-Uppercase";
    } else if (validAphabet?.length === 0) {
      return "no-lowercase";
    } else if (validNumbers?.length === 0) {
      return "no-numbers";
    } else {
      return "safe-field";
    }
  },

  confPassword: function (inputValue: string, password: string) {
    if (inputValue.length > 4 && password === inputValue) {
      return "safe-field";
    } else {
      return "invalid-field";
    }
  },

  email: function (inputValue: string) {
    const getArray = inputValue.split("");
    const findAtSign = inputValue.split("@");
    const divideArrAtSing = findAtSign.length === 2 && findAtSign[1].split("");

    const firstElement = "@";
    const secondElement = ".";
    const thirdElement = " ";

    const getFirstNewArr = getArray.map((element) => {
      return element.includes(firstElement);
    });

    const getSecondNewArr =
      divideArrAtSing &&
      divideArrAtSing?.map((element) => {
        return element.includes(secondElement);
      });

    const getThirdNewArr = getArray.map((element) => {
      return element.includes(thirdElement);
    });

    const filterFirstArr = getFirstNewArr.filter((element) => element === true);
    const filterSecondArr =
      getSecondNewArr && getSecondNewArr.filter((element) => element === true);
    const filterThirdArr = getThirdNewArr.filter((element) => element === true);

    if (
      filterFirstArr?.length === 1 &&
      filterSecondArr &&
      filterSecondArr?.length === 1 &&
      filterThirdArr?.length === 0
    ) {
      return "safe-field";
    } else if (
      filterThirdArr?.length > 0 &&
      filterFirstArr?.length === 1 &&
      filterSecondArr &&
      filterSecondArr?.length === 1
    ) {
      return "invalid-email";
    } else if (filterThirdArr?.length > 0) {
      return "spaces";
    } else if (filterFirstArr?.length === 0) {
      return "need-at-sign";
    } else if (filterSecondArr && filterSecondArr?.length === 0) {
      return "need-full-stop";
    } else {
      return undefined;
    }
  },

  phone: function (inputValue: string) {
    const getArrPhone = inputValue.split("");

    if (getArrPhone.length === 9) {
      return "safe-field";
    } else {
      return "invalid-number";
    }
  },
};

// const postals = [
//   {country: "anguila", code: "AIA", postal: "+1264", location: "caribbean"},
//   {country: "argentina", code: "ARG", postal: "+54", location: "south america"},
//   {country: "aruba", code: "ABW", postal: "+297", location: "south america"},
//   {country: "bahamas", code: "BHS", postal: "+1", location: "caribbean"},
//   {country: "barbados", code: "BRB", postal: "+1", location: "caribbean"},
//   {country: "belice", code: "BLZ", postal: "+501", location: "central america"},
//   {country: "bermudas", code: "BMU", postal: "+1", location: "caribbean"},
//   {country: "bolivia", code: "BOL", postal: "+591", location: "south america"},
//   {country: "brasil", code: "BRA", postal: "+55", location: "south america"},
//   {country: "canada", code: "CAN", postal: "+1", location: "north america"},
//   {country: "chile", code: "CHL", postal: "+56", location: "north america"},
//   {country: "colombia", code: "COL", postal: "+57", location: "north america"},
//   {country: "costa rica", code: "CRI", postal: "+506", location: "central america"},
//   {country: "cuba", code: "CUB", postal: "+53", location: "caribbean"},
//   {country: "curacao", code: "CUW", postal: "+599", location: "south america"},
//   {country: "dominica", code: "DMA", postal: "+1", location: "caribbean"},
//   {country: "ecuador", code: "ECU", postal: "+593", location: "south america"},
//   {country: "el salvador", code: "SLV", postal: "+503", location: "central america"},
//   {country: "estados unidos", code: "USA", postal: "+1", location: "north america"},
//   {country: "groenlandia", code: "GRL", postal: "+299", location: "north america"},
//   {country: "guadalupe", code: "GLP", postal: "+590", location: "caribbean"},
//   {country: "guatemala", code: "GTM", postal: "+502", location: "central america"},
//   {country: "guyana", code: "GUY", postal: "+592", location: "south america"},
//   {country: "haiti", code: "HTI", postal: "+509", location: "caribbean"},
//   {country: "honduras", code: "HND", postal: "+504", location: "central america"},
//   {country: "islas caiman", code: "CYM", postal: "+1-345", location: "caribbean"},
//   {country: "islas malvinas", code: "FLK", postal: "+500", location: "caribbean"},
//   {country: "islas virgenes britanicas", code: "VGB", postal: "+1284", location: "caribbean"},
//   {country: "jamaica", code: "JAM", postal: "+1", location: "caribbean"},
//   {country: "mexico", code: "MEX", postal: "+52", location: "north america"},
//   {country: "montserrat", code: "MSR", postal: "+1664", location: "caribbean"},
//   {country: "nicaragua", code: "NIC", postal: "+505", location: "central america"},
//   {country: "panama", code: "PAN", postal: "+507", location: "central america"},
//   {country: "paraguay", code: "PRY", postal: "+595", location: "south america"},
//   {country: "peru", code: "PER", postal: "+51", location: "south america"},
//   {country: "puerto rico", code: "PRI", postal: "+1", location: "caribbean"},
//   {country: "republica dominicana", code: "DOM", postal: "+1", location: "caribbean"},
//   {country: "san bartolome", code: "BLM", postal: "+1", location: "caribbean"},
//   {country: "san cristobal y nevis", code: "KNA", postal: "+590", location: "caribbean"},
//   {country: "san martin", code: "MAF", postal: "+1599", location: "caribbean"},
//   {country: "san pedro y miquelon", code: "SPM", postal: "+508", location: "north america"},
//   {country: "san vicente y las granadinas", code: "VCT", postal: "+1", location: "caribbean"},
//   {country: "santa lucia", code: "LCA", postal: "+1", location: "caribbean"},
//   {country: "surinam", code: "SUR", postal: "+597", location: "south america"},
//   {country: "trinidad y tobago", code: "TTO", postal: "+1", location: "south america"},
//   {country: "uruguay", code: "URY", postal: "+598", location: "south america"},
//   {country: "venezuela", code: "VEN", postal: "+58", location: "south america"},
// ]
