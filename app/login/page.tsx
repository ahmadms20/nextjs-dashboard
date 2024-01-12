import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-8">
      <div className="w-full p-6 bg-white rounded-lg sm:max-w-md lg:max-w-xl">
        <LoginForm />
      </div>
    </main>
  );
}