export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json; }
  | Json[];

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          body: string | null;
          createdAt: string | null;
          id: number;
          isDone: boolean | null;
          priority: string | null;
          title: string | null;
          updatedAt: string | null;
        };
        Insert: {
          body?: string | null;
          createdAt?: string | null;
          id?: number;
          isDone?: boolean | null;
          priority?: string | null;
          title?: string | null;
          updatedAt?: string | null;
        };
        Update: {
          body?: string | null;
          createdAt?: string | null;
          id?: number;
          isDone?: boolean | null;
          priority?: string | null;
          title?: string | null;
          updatedAt?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never
    };
    Functions: {
      [_ in never]: never
    };
    Enums: {
      [_ in never]: never
    };
  };
}