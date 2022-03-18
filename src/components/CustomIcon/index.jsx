import { FaSortAlphaDown } from "react-icons/fa";

export function Icon({ setOrdenar, ordenar }) {
  return (
    <FaSortAlphaDown
      size="12px"
      style={{
        right: "15px",
        top: "15px",
        position: "absolute",
        cursor: "pointer",
      }}
      onClick={() => {
        setOrdenar(!ordenar);
      }}
    />
  );
}
