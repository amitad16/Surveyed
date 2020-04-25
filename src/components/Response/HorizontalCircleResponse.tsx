import React from "react";

type QuesResponse = {
  id: string;
  identifier: string;
  title: string;
  description: string | null;
  handleResponseClick: (identifier: string) => void;
};

type Props = QuesResponse;

const HorizontalCircleResponse: React.FC<Props> = ({
  // id,
  identifier,
  title,
  description,
  handleResponseClick
}) => {
  function handleClick(): void {
    handleResponseClick(identifier);
  }

  return (
    <div
      className="HorizontalCircleResponse"
      style={{
        backgroundColor: "#eee",
        padding: "16px",
        display: "inline-block",
        margin: "4px",
        cursor: "pointer"
      }}
      onClick={handleClick}
    >
      <h4>{title}</h4>
      <small>{description}</small>
    </div>
  );
};

export default HorizontalCircleResponse;
