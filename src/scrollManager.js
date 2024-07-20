let scrollPositions = {};

export function saveScrollPosition(path, position) {
  scrollPositions[path] = position;
}

export function getScrollPosition(path) {
  return scrollPositions[path] || 0;
}
