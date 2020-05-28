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