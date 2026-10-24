import { z } from 'zod';
import { ADDABLE_TYPES, ARTICLES, LEVELS, POS } from './types';

/** Kiểm dữ liệu client gửi lên server action (action là endpoint công khai). */
export const draftSchema = z.object({
  type: z.enum(ADDABLE_TYPES),
  german: z.string().max(300),
  article: z.enum(ARTICLES).nullable(),
  plural: z.string().max(100),
  vietnamese: z.string().max(500),
  example_de: z.string().max(600),
  example_vi: z.string().max(600),
  grammar_note_vi: z.string().max(1000),
  pos: z.enum(POS).nullable(),
});

export const levelSchema = z.enum(LEVELS);
export const uuidSchema = z.uuid();
