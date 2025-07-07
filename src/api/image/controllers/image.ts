/**
 * A set of functions called "actions" for `image`
 */

import { Context, Next } from 'koa';
import { errors } from '@strapi/utils';
const { ValidationError } = errors;

export default {
  listImagesByHash: async (ctx: Context, next: Next) => {
    try {
      const { hashes } = ctx.request.body;

      if (!Array.isArray(hashes))
        throw new ValidationError('hashes must be an array');
      if (hashes.length > 50)
        throw new ValidationError('too many parameters');

      const files = await strapi.query('plugin::upload.file').findMany({
        where: {
          hash: {
            $in: hashes
          },
          mime: {
            $startsWith: 'image/'
          }
        }
      });

      return files;
    } catch (err) {
      ctx.body = { "message": "Internal server error" };
      ctx.status = 500;
      strapi.log.error(`listImagesByHash error: ${err}`);
      throw err;
    }
  }
};
