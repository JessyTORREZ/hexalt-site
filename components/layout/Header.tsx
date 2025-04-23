import BurgerButtonWrapper from "@components/layout/BurgerButtonWrapper";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-end">
      <BurgerButtonWrapper />
    </header>
  );
}
