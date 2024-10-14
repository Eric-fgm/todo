/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequestHandler } from 'express';
import type { ZodSchema } from 'zod';

type RequestValidation<TParams, TQuery, TBody> = {
  params?: ZodSchema<TParams>;
  query?: ZodSchema<TQuery>;
  body?: ZodSchema<TBody>;
};

export const validateRequest: <TParams = any, TQuery = any, TBody = any>(
  schemas: RequestValidation<TParams, TQuery, TBody>,
) => RequestHandler<TParams, any, TBody, TQuery> =
  (schemas) => (req, res, next) => {
    for (const key of ['params', 'query', 'body'] as const) {
      const schema = schemas[key];
      if (schema) {
        const parsed = schema.safeParse(req[key]);
        if (!parsed.success) {
          res
            .status(400)
            .json({
              error: { message: 'Bad Request', issues: parsed.error.issues },
            });
          return;
        }
      }
    }
    return next();
  };
