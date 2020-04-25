import React, { useState } from "react";

type Props = {
  inputType: string | undefined;
  inputPlaceholder: string | undefined;
  submitBtnText: string | null;
  handleSubmitClick: (response: string) => void;
};

const InputResponse: React.FC<Props> = ({
  inputType,
  inputPlaceholder,
  submitBtnText,
  handleSubmitClick
}) => {
  const [response, setResponse] = useState("");

  function onValueChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    let { value } = target;
    setResponse(value);
  }

  function handleSubmit(): void {
    handleSubmitClick(response);
  }

  return (
    <form className="InputResponse" onSubmit={handleSubmit}>
      <input
        className="InputResponse__input"
        value={response}
        type={inputType}
        placeholder={inputPlaceholder}
        onChange={onValueChange}
      />

      {!submitBtnText ? (
        <button type="submit">-></button>
      ) : (
        <button type="submit">{submitBtnText}</button>
      )}
    </form>
  );
};

export default InputResponse;
