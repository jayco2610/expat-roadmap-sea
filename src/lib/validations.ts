import { z } from "zod";

export const profileSchema = z.object({
  displayName: z.string().min(2).max(80),
  bio: z.string().max(2000).optional(),
  city: z.string().min(2).max(80),
  country: z.string().min(2).max(80),
  languages: z.string().optional(),
  interests: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().max(40).optional(),
  telegram: z.string().max(80).optional(),
  contactVisibility: z.enum(["PUBLIC", "MEMBERS", "PRIVATE"]),
  showEmail: z.coerce.boolean(),
  showPhone: z.coerce.boolean(),
  showTelegram: z.coerce.boolean(),
  avatarUrl: z.string().url().optional().or(z.literal("")),
});

export const eventSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(10).max(5000),
  city: z.string().min(2).max(80),
  location: z.string().min(2).max(200),
  startsAt: z.string().min(1),
  endsAt: z.string().optional(),
  capacity: z.coerce.number().int().positive().optional().or(z.literal("")),
});

export const housingSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(10).max(5000),
  city: z.string().min(2).max(80),
  address: z.string().min(5).max(200),
  priceMonth: z.coerce.number().int().positive(),
  currency: z.string().length(3).default("USD"),
  propertyType: z.enum(["ROOM", "APARTMENT", "HOUSE", "COLIVING"]),
  availableFrom: z.string().optional(),
});

export const jobSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(10).max(5000),
  city: z.string().min(2).max(80),
  kind: z.enum(["JOB", "SERVICE"]),
  compensation: z.string().max(120).optional(),
  remote: z.coerce.boolean(),
});
