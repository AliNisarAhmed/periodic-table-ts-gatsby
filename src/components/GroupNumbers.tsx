import React, { FocusEvent, useState, KeyboardEvent } from "react";
import Group from "./Group";

interface IProps {
  onMouseEnterGroup: (period: number) => void;
  onMouseLeaveGroup: () => void;
}

const groups = Array.from({ length: 18 }, (x, i) => i + 1);

// The numbers up top, along the x-axis
const GroupNumbers: React.FC<IProps> = ({
  onMouseEnterGroup,
  onMouseLeaveGroup,
}) => {
  // This represents the group number currently active by keyboard
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
    setFocusedNumber(0);
  }

  function onBlurHandler(e: FocusEvent<HTMLDivElement>) {
    setFocusedNumber(null);
    onMouseLeaveGroup();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const { key } = e;
    if (key === "ArrowRight") {
      const newValue = (focusedNumber % groups.length) + 1;
      setFocusedNumber(newValue);
      onMouseEnterGroup(newValue);
    } else if (key === "ArrowLeft") {
      const newValue =
        focusedNumber === 0 || focusedNumber === 1
          ? groups.length
          : focusedNumber - 1;
      setFocusedNumber(newValue);
      onMouseEnterGroup(newValue);
    } else if (key === "Escape") {
      setFocusedNumber(0);
      onMouseLeaveGroup();
    }
  }
};

export default GroupNumbers;
