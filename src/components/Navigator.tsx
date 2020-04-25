import React from "react";

type Props = {
  continueBtnText: string | null;
  maximumSelections: number;
  handleNextClicked: () => void;
  handleBackClicked: () => void;
};

const Navigator: React.FC<Props> = ({
  continueBtnText,
  maximumSelections,
  handleBackClicked,
  handleNextClicked
}) => {
  return (
    <div className="Navigator">
      <button type="button" onClick={handleBackClicked}>
        Previous
      </button>
      {maximumSelections > 1 && (
        <button type="button" onClick={handleNextClicked}>
          {continueBtnText || "Continue"}
        </button>
      )}
    </div>
  );
};

export default Navigator;
