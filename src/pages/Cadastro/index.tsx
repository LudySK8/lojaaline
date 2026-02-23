const Cadastro = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-[#FDFBF7]">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md mx-4 border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 tracking-tight">Criar Conta</h1>

                <div className="space-y-4">
                    <div>
                        <input 
                            placeholder="Nome Completo" 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="Email" 
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
                    <div>
                        <input 
                            placeholder="Confirme a Senha" 
                            type="password" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-gray-400"
                        />
                    </div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl transition-colors duration-200 font-medium">Cadastrar</button>
                    <p className="text-center text-gray-600 mt-4">Já possui uma conta? <a href="/login" className="text-orange-500 hover:underline">Faça login</a></p>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;