import { Database } from "./database";

export {};

declare global {
  type Contact = Database["public"]["Tables"]["contacts"]["Row"];
}
