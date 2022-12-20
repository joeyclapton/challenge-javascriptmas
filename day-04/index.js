function whisper(string) {
  const SHH = "shh...";
  const stringLower = `${SHH} ${string.toLowerCase()}`;
  const lastCharacterIsExclamation = stringLower.endsWith("!");

  if (lastCharacterIsExclamation) {
    const stringLowerWithoutExclamation = stringLower.slice(
      0,
      stringLower.length - 1
    );

    return stringLowerWithoutExclamation;
  } else {
    return stringLower;
  }
}

console.log(whisper("The KITTENS are SLEEPING!"));
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
