import css from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function Estiloso(){
    return(
        <Layout>
            <div className={css.roxo}>
                <h1>Estilo Usando CSS Modulos</h1>
            </div>
        </Layout>
        
    )
}