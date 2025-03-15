import { ReactNode } from "react";

function AuthFormWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white p-4 min-w-72 rounded-lg">
      {children}
    </div>
  )
}

export default AuthFormWrapper;