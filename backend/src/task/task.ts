import { Document } from 'mongoose';

export interface Task extends Document {
  readonly name: string;
}
