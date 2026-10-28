import React, { useState } from 'react'

// Estilos CSS incorporados diretamente no componente para simplificar a visualização
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    margin: 0,
    padding: '20px',
    boxSizing: 'border-box',
  },
  chatCard: {
    width: '100%',
    maxWidth: '450px',
    height: '500px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#2c9bc7',
    color: '#ffffff',
    padding: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20px',
  },
  messagesBox: {
    flex: 1,
    padding: '16px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: '10px 14px',
    borderRadius: '16px',
    fontSize: '14px',
    lineHeight: '1.4',
  },
  botBubble: {
    backgroundColor: '#e9ecef',
    color: '#212529',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: '4px',
  },
  userBubble: {
    backgroundColor: '#0d6efd',
    color: '#ffffff',
    alignSelf: 'flex-end',
    borderBottomRightRadius: '4px',
  },
  inputArea: {
    display: 'flex',
    padding: '12px',
    borderTop: '1px solid #dee2e6',
    backgroundColor: '#fafafa',
  },
  inputField: {
    flex: 1,
    padding: '10px 14px',
    border: '1px solid #ced4da',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '14px',
  },
  sendButton: {
    marginLeft: '8px',
    padding: '10px 18px',
    backgroundColor: '#0d6efd',
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}

export default function IndexPage() {
  // Estado para armazenar o histórico de mensagens
  const [mensagens, setMensagens] = useState([
{ id: 1, remetente: 'bot', texto: 'Olá! 🤖 Eu sou o Eugine. Se precisar de Preços, Requisitos minimos, saber sobre Jogos ou, até mesmo, encontrar o menor preço, me chame!' },
  ])

  // Estado para armazenar o valor do campo de texto
  const [textoEntrada, setTextoEntrada] = useState('')

  // Função disparada ao enviar a mensagem
  const handleEnviar = (e) => {
    e.preventDefault()
    if (!textoEntrada.trim()) return

    const novaMensagemUsuario = {
      id: Date.now(),
      remetente: 'usuario',
      texto: textoEntrada,
    }

    // Adiciona a mensagem do usuário no histórico
    setMensagens((prev) => [...prev, novaMensagemUsuario])

    const textoFormatado = textoEntrada.toLowerCase().trim()
    setTextoEntrada('')

    // Simulação da resposta do Bot (Pode ser substituída por uma chamada de API)
    setTimeout(() => {
      const respostaBot = {
        id: Date.now() + 1, //tlk o time de 1 segundo pra simular o silício pensando
        remetente: 'bot',
        texto: `Você pesquisou por: ${textoFormatado}. Aguarde a integração com a API para ver mais informações a respeito.`,
      }
      setMensagens((prev) => [...prev, respostaBot])
    }, 600)
  }

  return (
    <main style={styles.container}>
      <div style={styles.chatCard}>
        {/* Cabeçalho */}
        <div style={styles.header}>
          Eugine - Jogos&Games
        </div>

        {/* Caixa de Mensagens */}
        <div style={styles.messagesBox}>
          {mensagens.map((msg) => (
            <div key={msg.id} style={{...styles.messageBubble, ...(msg.remetente === 'bot' ? styles.botBubble : styles.userBubble),}}> {msg.texto}
            </div>
          ))}
        </div>

        {/* Formulário de Envio */}
        <form onSubmit={handleEnviar} style={styles.inputArea}>
          <input
            type="text"
            placeholder="Jogos, preços, requisitos mínimos? Pergunte!"
            value={textoEntrada}
            onChange={(e) => setTextoEntrada(e.target.value)}
            style={styles.inputField}
          />
          <button type="submit" style={styles.sendButton}>
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}

// Configuração opcional de Head / Título da página no Gatsby
export const Head = () => <title>Eugine Chat</title>