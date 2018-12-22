export const truncate = (content = "", limit = 0) => {
  return `${content.substring(0, limit)}...`;
};
