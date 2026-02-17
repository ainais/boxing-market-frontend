import AuthForm from "@/components/auth/AuthForm";

/**
 * 로그인 페이지입니다.
 * AuthForm 공통 컴포넌트를 login 모드로 사용합니다.
 */
export default function LoginPage() {
  return <AuthForm mode="login" />;
}
