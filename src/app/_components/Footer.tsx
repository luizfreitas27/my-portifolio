export function Footer() {
  return (
    <footer className="w-full border-t mt-10 py-6 px-4 text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} Luiz Freitas. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
