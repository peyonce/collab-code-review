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
          id?: string;
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
       
      profiles: {
        Row: {
          id: string;
          user_id: string;
          bio: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          bio?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          bio?: string | null;
        };
      };
       
    };
    Views: {
      
    };
    Functions: {
      
    };
    Enums: {
       
    };
  };
}
