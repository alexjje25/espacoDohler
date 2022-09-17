import { RecuperarSenhaView } from "../../styles/layouts/recuperar-senha/Recuperar-senha"



export default function RecuperarSenha () {
    return(

        <RecuperarSenhaView>
        <section>
            <div className='container'>
                <div className='wrap'>
                        <h2>Recuperar Senha</h2>
                        <p>Informe seu e-mail abaixo</p>
                        <input placeholder="E-MAIL" type="text" />
                        <button>RECUPERAR</button>
                        <u>Voltar para o inicio</u>
                </div>
            </div>
        </section>
        </RecuperarSenhaView>

    )
}