     export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// ======================
// 🗃️ Supabase Database Schema
// ======================

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string;
          email: string;
          created_at: string;
        };
        Insert: {
          id?: never;  // id auto-generated
          name: string;
          email: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          created_at?: string;
        };
      };

      profile: {
        Row: {
          id: string;
          user_id: string;
          bio: string | null;
        };
        Insert: {
          id?: never;
          user_id: string;
          bio: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          bio?: string | null;
        };
      };

      projects: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: never;
          name: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;  // Allow id in update type
          name?: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };

    Views: {};
    Functions: {};
    Enums: {};
  };
}

// ==========================
// 🔁 Type Utilities
// ==========================

export type RowOf<
  TableName extends keyof Database['public']['Tables']
> = Database['public']['Tables'][TableName]['Row'];

export type InsertOf<
  TableName extends keyof Database['public']['Tables']
> = Database['public']['Tables'][TableName]['Insert'];

export type UpdateOf<
  TableName extends keyof Database['public']['Tables']
> = Database['public']['Tables'][TableName]['Update'];

// ===== Export project types for easy import =====

export type Project = RowOf<'projects'>;
export type ProjectInsertInput = InsertOf<'projects'>;
export type ProjectUpdateInput = UpdateOf<'projects'>;
