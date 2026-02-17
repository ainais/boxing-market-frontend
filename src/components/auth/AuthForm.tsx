import Link from "next/link";

/**
 * 로그인/회원가입 공용 폼 레이아웃 컴포넌트입니다.
 *
 * 설계 의도:
 * - 인증 화면 UI 일관성 유지
 * - 필드/버튼 구성 중복 최소화
 * - mode만 바꿔 로그인/회원가입 화면을 동일 구조로 재사용
 */
export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";

  return (
    <section className="auth-wrap">
      <h1>{isLogin ? "로그인" : "회원가입"}</h1>
      <p>
        {isLogin
          ? "구매 내역과 배송 상태를 확인하려면 로그인하세요."
          : "복싱마켓 회원이 되어 상품 알림과 빠른 주문 기능을 이용하세요."}
      </p>

      <form className="auth-form">
        {!isLogin && (
          <label>
            이름
            <input type="text" name="name" placeholder="홍길동" />
          </label>
        )}

        <label>
          이메일
          <input type="email" name="email" placeholder="you@example.com" />
        </label>

        <label>
          비밀번호
          <input type="password" name="password" placeholder="비밀번호 입력" />
        </label>

        {!isLogin && (
          <label>
            비밀번호 확인
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 재입력"
            />
          </label>
        )}

        <button type="submit">{isLogin ? "로그인" : "회원가입"}</button>
      </form>

      <div className="auth-link-row">
        {isLogin ? (
          <>
            <span>계정이 없나요?</span>
            <Link href="/signup">회원가입</Link>
          </>
        ) : (
          <>
            <span>이미 계정이 있나요?</span>
            <Link href="/login">로그인</Link>
          </>
        )}
      </div>
    </section>
  );
}
