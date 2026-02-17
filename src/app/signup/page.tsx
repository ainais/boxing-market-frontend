import AuthForm from "@/components/auth/AuthForm";

/**
 * 회원가입 페이지입니다.
 * AuthForm 공통 컴포넌트를 signup 모드로 사용합니다.
 */
export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
