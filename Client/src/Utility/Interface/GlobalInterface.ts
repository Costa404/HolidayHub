export interface FormDataSignup {
  email: string;
  password: string;
  name: string;
  phone: string;
  confirmPassword: string;
  username: string;
}

export interface FormDataRoleAndPosition {
  role: string;
  jobPosition: string;
}
export interface BothFormDataSignup
  extends FormDataSignup,
    FormDataRoleAndPosition {}

// =====================

// new type interface

// =====================
export interface InputFieldProps {
  type: string;
  id: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  isSubmitted?: boolean;
  required?: boolean;
  feedbackMessage?: string;
  label: string;
  style?: React.CSSProperties;
  className?: string;
}

// =====================

// new type interface

// =====================

export interface ActionButtonProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  to?: string;
}
// =====================

// new type interface

// =====================
export interface UserType {
  userid?: number;
  username: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  jobposition: string;
}

export interface CurrentUser {
  userid: number;
  username: string;
  email: string;
  role: string;
  jobPosition: string;
  phone: string;
  name: string;
}

export interface CurrentUserContextType {
  currentUser: CurrentUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUser | null>>;
}

// =====================

// new type holidays

// =====================
export interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
  isOnline: boolean;
  handleLogout: () => void;
}

// =====================

// Holidays

// =====================

export interface Holiday {
  id: number;
  userid: number;
  username: string;
  startDate: string;
  endDate: string;
}

export interface UserHolidays {
  id: number;
  userid: number;
  username: string;
  holidays: Holiday[];
}
