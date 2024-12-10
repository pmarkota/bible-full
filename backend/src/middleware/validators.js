import { body } from "express-validator";

export const validateSignUp = [
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 }),
  body("fullName").optional().trim().notEmpty(),
  body("faithBackground").optional().trim(),
  body("preferredBible").optional().trim(),
  body("languages").optional().isArray(),
];

export const validateSignIn = [
  body("email").isEmail().normalizeEmail(),
  body("password").notEmpty(),
];

export const validateProfileUpdate = [
  body("fullName").optional().trim(),
  body("avatarUrl").optional().isURL(),
  body("bio").optional().trim(),
  body("faithBackground").optional().trim(),
  body("preferredBible").optional().trim(),
  body("languages").optional().isArray(),
  body("notificationSettings").optional().isObject(),
  body("privacySettings").optional().isObject(),
];
