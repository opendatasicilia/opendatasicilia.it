export const getColor = (type: string) => {
  switch (type) {
    case "project":
    case "site":
      return "text-white bg-primary";
    case "dataset":
      return "text-white bg-dark";
    case "map":
    case "table":
    case "chart":
    case "dashboard":
      return "text-black bg-thirdiary";
    default:
      return "text-white bg-primary";
  }
};
