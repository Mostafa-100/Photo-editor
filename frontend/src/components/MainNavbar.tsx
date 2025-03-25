import Container from "./Container";
import Logo from "./project-navbar/Logo";
import UserMenu from "./project-navbar/UserMenu";

function MainNavbar() {
  return (
    <nav className="bg-neutral-100 py-1">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 items-center">
            <Logo />
            <span className="font-bold text-xl">Image AI</span>
          </div>
          <div>
            <UserMenu />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default MainNavbar;