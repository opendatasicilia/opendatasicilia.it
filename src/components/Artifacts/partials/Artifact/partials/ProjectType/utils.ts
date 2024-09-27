export const getColor = (type: string) => {
  switch (type) {
    case "project":
      return "bg-dark";
    case "dataset":
      return "bg-primary";
    case "map":
    case "table":
    case "chart":
    case "dashboard":
      return "bg-secondary";
    case "site":
      return "bg-info";
    default:
      return "bg-primary";
  }
};
