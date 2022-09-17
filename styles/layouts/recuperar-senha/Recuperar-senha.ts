import styled from 'styled-components';

export const RecuperarSenhaView = styled.main`
    width: 100%;
    background-image: url('/fundoespa.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;  
    height: 100vh;

section{

    .container{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100vh;
        margin-top: -40px; 
        margin-left: 40px;   
        
        .wrap{
            display: flex;
            justify-content: center;
            align-items: center;

            flex-direction: column;
            background-color: transparent;
            height: inherit;
            backdrop-filter: blur(10px);
            width: 400px;

            h2{
                color: #2d0382;
                font-family: Roboto;
            }
            p{
                font-family: Roboto;
                color: #2d0382;
                font-weight: 300;
                font-size: 13px;
                margin-top: -10px;
            }
            u{
                color: #2d0382;
                margin-top: 20px;
            }
            input{
                width: 80%;
                height: 40px;
                border: none;
                border-radius: 3px;
                margin-top: 20px;
            }
            button{
                background: #2d0382;
                width: 80%;
                height: 40px;

                margin-top: 17px;
                color: white;
                border-radius: 47px;
                border: none;
                font-family: Roboto;
                font-weight: 600;
            }

        }
    }
    @media (max-width: 739px)
    {
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 0;
        }
    }
}
`;
