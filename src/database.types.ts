  export type Json = string | number | null | { [key: string] : Json |undefined} | Json[];

  export interface Database {
    public:{
      Tables:{
        users:{
          Row:{
            id: string;
            name: string;
            email: string;
            created_at: string;
          };
          Insert:{
            id?: never;
            name: string;
            email: string;
            created_at?: string;
          };
          update:{
            id?: string;
            name?: never;
            email?: string;
            created_at?: string;
          };
        };
        profile:{
          Row:{
            id: string;
            users: string;
            bio: string | null
          };
          Insert:{
            id: never;
            user_id: string;
            bio:string | null;
          };
          update:{
            id?: never;
            user_id?: string;
            bio?: string | null;
          };
        };

        projects:{
          Row: {
            id: string;
            description: string | null;
            created_at: string;
            updated_at: string;
          };
          Insert:{
            id?: never;
            name: string;
            descriptio?: string | null;
            created_at?: string;

            updated_at?: string;

          };
          update:{
            id?: never;
            name?: string;
            description?: string | null;
            updated_at?: string;
          };
        };
      };
      View: {};
      Function: {};
      Enums: {};
    };
  }

  export type RowOf<TableName extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][TableName]['Row'];

  export type InsertOf<TableName extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][TableName]['Insert'];

  export type updatedOf<TableName extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][TableName]['update'];