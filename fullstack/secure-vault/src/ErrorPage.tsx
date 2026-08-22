function ErrorPage() {
  return (
    <div className="bg-background text-foreground min-h-dvh flex items-center justify-center flex-col gap-4">
      <h1 className="text-4xl">Some thing Went Wrong</h1>
      <p className="text-lg">Try To Reload The Page</p>
    </div>
  );
}

export default ErrorPage;
