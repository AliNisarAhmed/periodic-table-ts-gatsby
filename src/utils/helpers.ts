export function setPeriodHighlightClassName(highlightedPeriod: number | null, currentPeriod: number): string {
  if (highlightedPeriod === null) {
    return '';
  } else {
    if (highlightedPeriod === currentPeriod) {
      return 'highlightPeriod';
    } else {
      return 'dim';
    }
  }
}

export function setGroupHighlightClassName(highlightedGroup: number | null, currentGroup: number): string {
  if (highlightedGroup === null) {
    return '';
  } else {
    if (highlightedGroup === currentGroup) {
      return 'highlightedgroup';
    } else {
      return 'dim';
    }
  }
}