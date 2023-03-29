import { z } from "zod";

const loginSchema = z.object({
  email: z.string().max(45),
  password: z.string().max(120),
});

export default loginSchema