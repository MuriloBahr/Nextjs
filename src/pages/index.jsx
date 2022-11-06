import Link from 'next/link'
import styles from '../styles/Navegador.module.css'
import Navegador from '../components/Navegador'

export default function Initial(){
    return (
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
                height: '100vh'

            }}>
            <Navegador texto='Estiloso' destino='/estiloso'/>
            <Navegador texto='Exemplo' destino='/exemplo'/>
            <Navegador texto='Navegador #01' destino='/nav'/>
            <Navegador texto='Navegador #02' destino='/cliente/145'/>
            <Navegador texto='Componente com Estado' destino='/estado'/>
            <Navegador texto='Integração com API #01' destino='/integracao'/>
            <Navegador texto='Conteudo Estatico #01' destino='/estatico'/>
        </div>
    )
}