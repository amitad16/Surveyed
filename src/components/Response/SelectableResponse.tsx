import React from "react";

import styles from "./Response.module.css";

type QuesResponse = {
  id: string;
  identifier: string;
  title: string;
  description: string | null;
};

type Props = {
  response: QuesResponse;
  response_display_type: "horizontal" | "vertical";
  response_display_shape?: "circle" | "rectangle";
  response_display_style?: React.CSSProperties;
  is_selected: boolean;
  handleResponseClick: (identifier: string) => void;
};

const SelectableResponse: React.FC<Props> = ({
  response,
  response_display_style,
  response_display_shape,
  is_selected,
  handleResponseClick
}) => {
  function handleClick(): void {
    handleResponseClick(response.identifier);
  }

  function getClassNameFromDisplayShape(
    response_display_shape: "circle" | "rectangle" = "circle"
  ): string {
    let shapeCircle = styles.SelectableResponse__circle;
    let shapeRect = styles.SelectableResponse__rect;

    switch (response_display_shape) {
      case "circle":
        return shapeCircle;
      case "rectangle":
        return shapeRect;
      default:
        return shapeCircle;
    }
  }

  return (
    <div
      className={`${styles.SelectableResponse} ${getClassNameFromDisplayShape(
        response_display_shape
      )} ${is_selected ? "selected" : ""}`}
      style={response_display_style}
      onClick={handleClick}
    >
      <h4>{response.title}</h4>
      <small>{response.description}</small>
    </div>
  );
};

export default SelectableResponse;
