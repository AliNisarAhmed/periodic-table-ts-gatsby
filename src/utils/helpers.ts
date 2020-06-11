import { IElement } from "./types";
import { filter, compose, partition, flatten, complement } from "ramda";

export function getPhysicalStateClass(temp: number, { melt, boil }: IElement): string {
  if (typeof melt === 'number' && temp < melt) {
    return `solid`;
  } else if (
    typeof boil === 'number' &&
    typeof melt === 'number' &&
    temp >= melt &&
    temp < boil) {
    return `liquid`
  } else if (typeof boil === 'number' && temp >= boil) {
    return `gas`
  } else {
    return `unknown`;
  }
}

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

export enum ArrowDirection {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft'
}

export function getNextElement(
  elements: IElement[],
  focusedElement: number | null,
  dir: ArrowDirection): IElement | null {

  const currentElement = elements.find(e => e.number === focusedElement);

  if (currentElement) {

    const elementsWithSameX = centrifuge(elements, 'xpos', currentElement.xpos);
    const elementsWithSameY = centrifuge(elements, 'ypos', currentElement.ypos);

    const xIndex = elementsWithSameX.findIndex(
      e => e.number === currentElement.number
    );

    const yIndex = elementsWithSameY.findIndex(
      e => e.number === currentElement.number
    )

    if (dir === 'ArrowDown') {

      const newIndex = getNewNextIndex(xIndex, elementsWithSameX);
      return elementsWithSameX[newIndex];

    } else if (dir === 'ArrowUp') {

      const newIndex = getNewPreviousIndex(xIndex, elementsWithSameX);
      return elementsWithSameX[newIndex];

    } else if (dir === 'ArrowRight') {

      const newIndex = getNewNextIndex(yIndex, elementsWithSameY);
      return elementsWithSameY[newIndex];

    } else if (dir === 'ArrowLeft') {

      const newIndex = getNewPreviousIndex(yIndex, elementsWithSameY);
      return elementsWithSameY[newIndex];

    } else {
      return null;
    }

  } else {
    return null;
  }
}

function getNewPreviousIndex(index: number, arr: any[]): number {
  return index - 1 >= 0
    ? (index - 1) % arr.length
    : arr.length - 1;
}

function getNewNextIndex(index: number, arr: any[]): number {
  return (index + 1) % arr.length;
}

function isInnerTransitionElem(elem: IElement): boolean {
  return elem.group === 'actinoid' || elem.group === 'lanthanoid';
}

// returns the elements with same x pos,
// but with lanthanides and actinides "centrifuged" to the end of the array
function centrifuge(elements: IElement[], posType: keyof IElement, pos: number): IElement[] {
  const filterByPos = filter<IElement, 'array'>(e => e[posType] === pos);
  const segregate = partition(complement(isInnerTransitionElem));
  return compose(flatten, segregate, filterByPos)(elements);
}

