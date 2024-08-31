export const truncateStringToWord = (str: string, length: number) => {
  //Credits: bbeckford at https://stackoverflow.com/a/41267747
  if (str.length <= length) {
    return str;
  }
  str = str.slice(0, length + 1);
  if (/[^\s]+$/.test(str)) {
    str = str.replace(/[^\s]+$/, "");
  }
  str = str.replace(/[^\w]+$/, "");
  const ellipsis = str.length > 0 ? "..." : "";
  return str + ellipsis;
};

export const getLorem = () =>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales tincidunt risus vel tempus. Nunc lobortis faucibus enim in iaculis. Nulla urna metus, gravida faucibus varius eu, imperdiet et leo. Proin finibus, lectus convallis consequat posuere, quam ex rhoncus lectus, consequat hendrerit odio velit nec purus. ";

const wordCount = (str: string) => str.split(" ").length;

export const getReadingTime = (str: string) => Math.round(wordCount(str) / 225);
