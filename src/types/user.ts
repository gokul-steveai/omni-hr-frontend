export type UserRole = "super_admin" | "hr_manager" | "department_lead" | "employee";

export interface DepartmentInfo {
  id: string;
  name: string;
}

export interface DesignationInfo {
  id: string;
  title: string;
}

export interface UserProfileData {
  id?: string;
  phone_number?: string | null;
  emergency_contact?: string | null;
  address?: string | null;
  bank_account_number?: string | null;
  bank_name?: string | null;
  ifsc_swift_code?: string | null;
  pan_ssn?: string | null;
  joining_date?: string | null;
}

export interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: UserRole;
  is_active: boolean;
  department?: DepartmentInfo | null;
  designation?: DesignationInfo | null;
  profile?: UserProfileData | null;
}
