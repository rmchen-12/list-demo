export function findIndexOverHeight(list, offset) {
  let currentHeight = 0;
  for (let i = 0; i < list.length; i++) {
    const { height } = list[i];
    currentHeight += height;

    if (currentHeight > offset) {
      return i;
    }
  }

  return list.length - 1;
}

export function sumHeight(list, start = 0, end = list.length) {
  let height = 0;
  for (let i = start; i < end; i++) {
    height += list[i].height;
  }

  return height;
}

export function exchangeList(list, index, dir) {
  if (dir === 'up') {
    if (index === 0) return;
    list.splice(index - 1, 0, list[index]);
    list.splice(index + 1, 1);
  } else if (dir === 'down') {
    if (index === list.length - 1) return;
    list.splice(index + 2, 0, list[index]);
    list.splice(index, 1);
  }
}

export function exchangeDom(dom1, dom2) {
  const parent = dom1.parentNode;
  var newNode = document.createElement('div');
  parent.insertBefore(newNode, dom2);
  parent.insertBefore(dom2, dom1);
  parent.insertBefore(dom1, newNode);
  parent.removeChild(newNode);
}

export function throttle(fn, wait) {
  let timer, lastApply;

  return function (...args) {
    const now = Date.now();
    if (!lastApply) {
      fn.apply(this, args);
      lastApply = now;
      return;
    }

    if (timer) return;
    const remain = now - lastApply > wait ? 0 : wait;

    timer = setTimeout(() => {
      fn.apply(this, args);
      lastApply = Date.now();
      timer = null;
    }, remain);
  };
}
