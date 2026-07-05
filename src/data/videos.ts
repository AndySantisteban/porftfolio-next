export interface Video {
  /** ID de YouTube — con esto se derivan thumbnail y URL */
  id: string;
  title: string;
}

export const videos: Video[] = [
  {
    id: "gYvHu6ngvAM",
    title: "Autenticación con React Native y REST API con Golang, JWT, Docker y MySQL",
  },
  { id: "cqed0QybadY", title: "Calculadora de edad con Flutter" },
  { id: "CSdKTBVn-nU", title: "Calculadora de tiempo y fecha con Date Pickers y React Native" },
  { id: "yJ7NLardkuI", title: "Calculadora en Flutter" },
  { id: "BajmgVQWA4g", title: "CheckBox Spinner Activity y Product Item Activity" },
  { id: "0ftj2KDrx28", title: "Calculadora de precios" },
];
