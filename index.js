const pattern = /^-?(?!0\d)\d{6}$/;

const stringsToCheck = ['123456', '-123456', '-12345', '023456', '-000016'];

stringsToCheck.forEach(string => {
   if (pattern.test(string)) {
      console.log(`'${string}' -> так`);
   } else {
      console.log(`'${string}' -> ні`);
   }
});