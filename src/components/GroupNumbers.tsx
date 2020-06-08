import React, { FocusEvent, useState, KeyboardEvent } from "react";
import Group from "./Group";

interface IProps {
  onMouseEnterGroup: (period: number) => void;
  onMouseLeaveGroup: () => void;
}

const groups = Array.from({ length: 18 }, (x, i) => i + 1);

const GroupNumbers: React.FC<IProps> = ({
  onMouseEnterGroup,
  onMouseLeaveGroup,
}) => {
  const [focusedNumber, setFocusedNumber] = useState<number | null>(null);

  return (
    <div
      className="groupNumbers"
      tabIndex={2}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onKeyDown={handleKeyDown}
    >
      {groups.map(p => (
        <Group
          value={p}
          onMouseEnterGroup={onMouseEnterGroup}
          onMouseLeaveGroup={onMouseLeaveGroup}
          key={p}
          focusedNumber={focusedNumber}
        />
      ))}
    </div>
  );

  function onFocusHandler(e: FocusEvent<HTMLDivElement>) {
    console.log("onFocus");
    setFocusedNumber(1);
  }

  function onBlurHandler(e: FocusEvent<HTMLDivElement>) {
    console.log("onBlur");
    setFocusedNumber(null);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const { key } = e;
    if (key === "ArrowRight") {
      const newValue = (focusedNumber + 1) % (groups.length + 1) || 1;
      setFocusedNumber(newValue);
    } else if (key === "ArrowLeft") {
      const newValue =
        (focusedNumber - 1) % (groups.length + 1) || groups.length;
      setFocusedNumber(newValue);
    }
  }
};

export default GroupNumbers;
