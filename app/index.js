module.exports.greet = (name) => {
  if (name === null) {
    return `Hello, my friend.`;
  }

  if (Array.isArray(name)) {
    let result = "";
    let newName = name.join(" ").split(",").join(" ").split(" ");
    let nameLower = newName.filter((item) => item !== item.toUpperCase());
    let nameUpper = newName.filter((item) => item === item.toUpperCase());
    if (name.join().includes('"')) {
      let res = "Hello, ";

      for (let i = 0; i < name.length; i++) {
        if (name[i].includes('"')) {
          console.log(name[i]);
          res += " and " + name[i].split('"').join("").split("").join("") + ".";
          console.log(res);
          continue;
        }
        res += name[i];
      }
      return res;
    }
    if (nameLower.length > 2) {
      for (let i = 0; i < nameLower.length; i++) {
        if (i === nameLower.length - 1) {
          result += ` and ${nameLower[i]}.`;
          continue;
        }
        result += ` ${nameLower[i]},`;
      }
    } else if (nameLower.length === 2) {
      for (let i = 0; i < nameLower.length; i++) {
        if (i === nameLower.length - 1) {
          result += ` and ${nameLower[i]}.`;
          continue;
        }
        result += ` ${nameLower[i]}`;
      }
      if (nameUpper.length === 1) {
        result += ` AND HELLO ${nameUpper}!`;
      }
    }
    return `Hello,${result}`;
  }

  if (name.toUpperCase() === name) {
    return `HELLO, ${name}!`;
  } else {
    return `Hello, ${name}.`;
  }
};
