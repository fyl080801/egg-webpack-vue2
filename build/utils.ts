import * as path from 'path';

export const assetsPath = (_path) => {
  return path.join('static', _path);
};

export const joinPath = (base, _path) => {
  return path.join(base, _path);
};
