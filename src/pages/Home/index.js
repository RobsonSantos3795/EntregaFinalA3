import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import './index.css';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title></C.Title>
      
      
      <div className="catalogo">
        <h1>Escolha de Plataforma</h1>
        <br/>
        <p className="subtitulo"> Escolha aqui a plataforma de sua preferência!</p>
        <br/><br/>

        <div className="plataforma">
        <div className="completo1">
        <label className="label1">Selecione sua plataforma desejada para download: </label>
        <input type="text" placeholder="Nome para download"/>
        <button className="amarelo">DOWNLOAD</button>
        </div>

        <br/><br/>

        <div className="completo2">
        <label className="label2">Selecione a plataforma que deseja excluir: </label>
        <input type="text" placeholder="Nome para excluir plataforma"/>
        <button className="vermelho">DELETE</button>
        </div>
        </div>

        <br/><br/>
        
        <div className="menu">
        <label>Epic Games Launcher:  </label>
        <select id="quantidade">
                    <option selected disabled value=""></option>
                    <option>The Sims 4</option>
                    <option>Resident Evil 4</option>
                    <option>Pes 2019</option>
                    <option>Bomba Patch 2024</option>
                    <option>Minicreft</option>
                </select>
      

        <label>Steam:  </label>
        <select id="quantidade">
                    <option selected disabled value=""></option>
                    <option>Formula 1 2024</option>
                    <option>Counter Strick</option>
                    <option>Good Of War 3 </option>
                    <option>Sonic 2020</option>
                    <option>Mario 2024</option>
                </select>
        

        <label>Microsoft Games:  </label>
        <select id="quantidade">
                    <option selected disabled value=""></option>
                    <option>Selent Hills</option>
                    <option>Agony</option>
                    <option>Dragon Ball Gt 2024</option>
                    <option>Fifa 2020</option>
                    <option>Call Of Duty</option>
                </select>

        <label>EA Games:  </label>
        <select id="quantidade">
                    <option selected disabled value=""></option>
                    <option>Corrida de moto x 2021</option>
                    <option>Hitman 2020</option>
                    <option>Street Fight</option>
                    <option>Ufc 5</option>
                    <option>Mortal Kombat</option>
                </select>
        </div>

        <p className="texto">
            Aqui na Big Gamers, Você tem acesso a todas as plataformas já com seu cadastro
             criado atravez do seu primeiro cadastro na Big Gamers, da página incial
            , independetemente de qualquer plataforma escolhida 
            aqui seu primeiro cadastro já vale para todas as plataformas,
            isso sim é bom , sabe porque? Porque aqui você não precisa criar para cada plataforma um cadastro,
            aqui basta um único cadastro para quantidade ilimitada de plataformas , ou seja ,
            a plataforma escolhida pelo jogador reconhece seu login selecionado e basta um único cadastro na Big Gamers que já
            estará logado.
        </p>


        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Deslogar
      </Button>
        
        </div>

    </C.Container>
  );
};

export default Home;
