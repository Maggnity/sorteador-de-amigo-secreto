import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import styles from "./Rodape.module.scss";

export const Rodape = () => {
    
    const participantes = useListaDeParticipantes();
    const navegarPara = useNavigate();
    const iniciar = () => {
        navegarPara('/sorteio');
    }
    return (
        <footer className={styles.rodapeConfiguracoes}>
            <button 
                className={styles.botao}
                disabled={participantes.length < 3} 
                onClick={iniciar}
            >
                Iniciar brincadeira
            </button>
        </footer>
    );
}