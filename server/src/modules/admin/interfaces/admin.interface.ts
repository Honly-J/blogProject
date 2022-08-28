import { Document } from 'mongoose';
export interface Admin extends Document {
  readonly userName: string;
  readonly password?: string;
  readonly role?: string;
}
