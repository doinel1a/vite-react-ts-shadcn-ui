import { useEffect, useRef } from 'react';

import type { DependencyList, RefObject } from 'react';

interface IPosition {
  x: number;
  y: number;
}

interface IScrollProperties {
  prevPos: IPosition;
  currPos: IPosition;
}

type ElementReference = RefObject<HTMLElement | undefined>;

const isBrowser = typeof globalThis !== 'undefined';
const zeroPosition = { x: 0, y: 0 };

const getClientRect = (element?: HTMLElement) => element?.getBoundingClientRect();

const getScrollPosition = ({
  element,
  useWindow,
  boundingElement
}: {
  element?: ElementReference;
  boundingElement?: ElementReference;
  useWindow?: boolean;
}) => {
  if (!isBrowser) {
    return zeroPosition;
  }

  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY };
  }

  const targetPosition = getClientRect(element?.current ?? document.body);
  const containerPosition = getClientRect(boundingElement?.current);

  if (!targetPosition) {
    return zeroPosition;
  }

  return containerPosition
    ? {
        x: (containerPosition.x || 0) - (targetPosition.x || 0),
        y: (containerPosition.y || 0) - (targetPosition.y || 0)
      }
    : { x: targetPosition.left, y: targetPosition.top };
};

/// useScrollPosition hook
/// @param effect: Effect to run on scroll
/// @param deps: For effects to fire on selected dependencies change.
/// @param element: Get scroll position for a specified element by reference.
/// @param useWindow: Use window.scroll instead of document.body.getBoundingClientRect() to detect scroll position.
/// @param wait: The timeout in ms. Good for performance.
/// @param boundingElement: Only works with useWindow set to false, Just pass the element reference and the boundingElement - (parent container) reference and track their corresponding position, boundingElement should be scrollable with overflow hidden or whatever
/// @returns prevPos and currPos.
export const useScrollPosition = (
  effect: (properties: IScrollProperties) => void,
  deps?: DependencyList,
  element?: ElementReference,
  useWindow?: boolean,
  wait?: number,
  boundingElement?: ElementReference
): void => {
  const position = useRef(getScrollPosition({ useWindow, boundingElement }));

  let throttleTimeout: NodeJS.Timeout | undefined = undefined;

  const callBack = () => {
    const currentPos = getScrollPosition({ element, useWindow, boundingElement });
    effect({ prevPos: position.current, currPos: currentPos });
    position.current = currentPos;
    throttleTimeout = undefined;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (wait) {
        throttleTimeout ??= globalThis.setTimeout(callBack, wait);
      } else {
        callBack();
      }
    };

    if (boundingElement) {
      boundingElement.current?.addEventListener('scroll', handleScroll, {
        passive: true
      });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (boundingElement) {
        boundingElement.current?.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }

      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, deps);
};

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
  boundingElement: false
};
