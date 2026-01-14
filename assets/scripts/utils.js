export default "12345-ABCDE";
export const applicationName = "MyAwesomeApp";
export const version = "1.0.0";
export function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}
