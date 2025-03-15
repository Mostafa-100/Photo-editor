import { ReactNode } from "react";

function LoginCover({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen background bg-[url(/login-wallaper.jpg)] grid place-items-center">
      {children}
    </div>
  )
}

export default LoginCover;