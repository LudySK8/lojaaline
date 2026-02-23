const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-[#FDFBF7]">
      
      <form className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md mx-4 border border-gray-100">
        
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 tracking-tight">
          Entrar na sua conta
        </h1>

        <div className="space-y-4">
          <div>
            <input 
              placeholder="E-mail" 
              type="email" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <input 
              placeholder="Senha" 
              type="password" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <button className="w-full mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-orange-200 cursor-pointer">
          Entrar
        </button>

        <div className="mt-8 text-center space-y-3">
          <p className="text-sm text-gray-500 hover:text-orange-600 cursor-pointer transition-colors font-medium">
            Esqueceu sua senha?
          </p> 
          
          <div className="pt-2 border-t border-gray-50">
            <p className="text-sm text-gray-600">
              Não tem conta? {" "}
              <a href="/cadastro" className="text-orange-600 font-bold hover:underline">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>

      </form>
    </div>
  );
}

export default Login;