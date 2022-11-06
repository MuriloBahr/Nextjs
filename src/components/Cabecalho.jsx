import Link from "next/link"
import Layout from '../components/Layout'
export default function Cabeçalho(props){
    return(
        <Layout titulo='Usando Componentes'>
            <h1>{props.titulo}</h1>
            <Link href='/'>Voltar</Link>
        </Layout>
    )
}