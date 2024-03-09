export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      campaigns: {
        Row: {
          created_at: string
          id: string
          name: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      contacts: {
        Row: {
          birth_date: string | null
          campaign_id: string | null
          company_name: string | null
          company_website: string | null
          contact_email: string | null
          created_at: string
          description: string | null
          first_name: string | null
          id: string
          industry: string | null
          interests: string | null
          job_title: string | null
          last_name: string | null
          location: string | null
          metadata: Json | null
          person_linkedin_url: string | null
          phone: string | null
          problem: string | null
          reviews: string | null
          selected_opener: string | null
          solution: string | null
          user_id: string | null
        }
        Insert: {
          birth_date?: string | null
          campaign_id?: string | null
          company_name?: string | null
          company_website?: string | null
          contact_email?: string | null
          created_at?: string
          description?: string | null
          first_name?: string | null
          id?: string
          industry?: string | null
          interests?: string | null
          job_title?: string | null
          last_name?: string | null
          location?: string | null
          metadata?: Json | null
          person_linkedin_url?: string | null
          phone?: string | null
          problem?: string | null
          reviews?: string | null
          selected_opener?: string | null
          solution?: string | null
          user_id?: string | null
        }
        Update: {
          birth_date?: string | null
          campaign_id?: string | null
          company_name?: string | null
          company_website?: string | null
          contact_email?: string | null
          created_at?: string
          description?: string | null
          first_name?: string | null
          id?: string
          industry?: string | null
          interests?: string | null
          job_title?: string | null
          last_name?: string | null
          location?: string | null
          metadata?: Json | null
          person_linkedin_url?: string | null
          phone?: string | null
          problem?: string | null
          reviews?: string | null
          selected_opener?: string | null
          solution?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contacts_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contacts_created_by_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_contacts_openers_fkey"
            columns: ["selected_opener"]
            isOneToOne: false
            referencedRelation: "openers"
            referencedColumns: ["id"]
          }
        ]
      }
      openers: {
        Row: {
          contact_id: string | null
          created_at: string
          id: string
          one_opener: string | null
          selected_opener: number | null
          source_url: string | null
          summary_data: string | null
          three_opener: string | null
          two_opener: string | null
        }
        Insert: {
          contact_id?: string | null
          created_at?: string
          id?: string
          one_opener?: string | null
          selected_opener?: number | null
          source_url?: string | null
          summary_data?: string | null
          three_opener?: string | null
          two_opener?: string | null
        }
        Update: {
          contact_id?: string | null
          created_at?: string
          id?: string
          one_opener?: string | null
          selected_opener?: number | null
          source_url?: string | null
          summary_data?: string | null
          three_opener?: string | null
          two_opener?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_openers_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          }
        ]
      }
      templates: {
        Row: {
          campaign_id: string | null
          content: string | null
          created_at: string
          id: string
          name: string | null
          recommendation: string | null
          recommendation_state: number | null
          subject: string | null
        }
        Insert: {
          campaign_id?: string | null
          content?: string | null
          created_at?: string
          id?: string
          name?: string | null
          recommendation?: string | null
          recommendation_state?: number | null
          subject?: string | null
        }
        Update: {
          campaign_id?: string | null
          content?: string | null
          created_at?: string
          id?: string
          name?: string | null
          recommendation?: string | null
          recommendation_state?: number | null
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "templates_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          business_name: string | null
          created_at: string
          first_name: string | null
          id: string
          industry: string | null
          last_name: string | null
          payment_method: Json | null
          problem: string | null
          product_service: boolean | null
          solution: string | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          business_name?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          industry?: string | null
          last_name?: string | null
          payment_method?: Json | null
          problem?: string | null
          product_service?: boolean | null
          solution?: string | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          business_name?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          industry?: string | null
          last_name?: string | null
          payment_method?: Json | null
          problem?: string | null
          product_service?: boolean | null
          solution?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
