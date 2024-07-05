export const getImageAltName = (src: string): string => {
   const altName = src.slice(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
   return altName;
 };