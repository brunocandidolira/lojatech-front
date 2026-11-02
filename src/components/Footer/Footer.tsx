




export function Footer(){

    return(
        <footer className="mt-16 bg-purple-900 px-6 py-10 text-white">
           <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
           <div>
              <h2>
                LojaTech
              </h2>

              <p className="mt-3 text-sm text-gray-300">
                Tecnologia e inovação em um só lugar.
              </p>
           </div>
            
            <div>
                <h3 className="mb-3 font-semibold">
                    Links Úteis
                </h3>

                <p>Sobre nós</p>
                <p>Política de privacidade</p>
                <p>Termos de uso</p>
            </div>
        
        <div>
            <h3 className="mb-3 font-semibold">

                <p>Entre em contato</p>
                <p>Central de ajuda</p>
            </h3>
        </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-purple-700 pt-6 text-center text-sm text-gray-300">
            © 2026 LojaTech. Todos os direitos reservados.
        </div>
        </footer>
    )

}