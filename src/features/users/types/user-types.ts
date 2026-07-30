import { UserRole } from "@/types/user";

export interface ProfileUpdatePayload {
  phone_number?: string;
  emergency_contact?: string;
  address?: string;
  bank_account_number?: string;
  bank_name?: string;
  ifsc_swift_code?: string;
  pan_ssn?: string;
}

export interface UserListParams {
  page?: number;
  limit?: number;
  search?: string;
  department_id?: string;
  role?: UserRole;
}
