import { Request } from 'express';
import get from 'lodash/get';

export function getId(req: Request): number | undefined {
  const id = parseInt(get(req, 'params.id'));

  if (isNaN(id)) {
    return undefined;
  }

  return id;
}
