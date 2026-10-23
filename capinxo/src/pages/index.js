import React, { useState } from "react"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css" // Ajuste o caminho do CSS se necessário

const IndexPage = () => {
  // Estado para armazenar o histórico de mensagens
  const [mensagens, setMensagens] = useState([
    { id: 1, remetente: "bot", texto: "rapaz✋" }
  ])
  
  // Estado para armazenar o texto que o usuário está digitando
  const [inputUsuario, setInputUsuario] = useState("")

  // Função executada ao enviar o formulário
  const manipularEnvio = (e) => {
    e.preventDefault()
    
    // Evita enviar mensagens vazias
    if (!inputUsuario.trim()) return

    // 1. Adiciona a mensagem do usuário na tela
    const novaMensagemUsuario = {
      id: Date.now(),
      remetente: "user",
      texto: inputUsuario
    }

    setMensagens(prev => [...prev, novaMensagemUsuario])
    setInputUsuario("") // Limpa o campo de texto

    // 2. Simula uma resposta automática do Bot após 1 segundo
    setTimeout(() => {
      const respostaBot = {
        id: Date.now() + 1,
        remetente: "bot",
        texto: "nao🦄"
      }
      setMensagens(prev => [...prev, respostaBot])
    }, 5000)
  }

  return (
    <Layout>
      <div className={styles.textCenter}>
        <div>
          <h2> <b>Cusco Chatbot </b></h2>

          {/* Container do Chat */}
          <div id="chat-container" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
            <div style={{ height: "200px", overflowY: "auto", marginBottom: "10px" }}>
              {mensagens.map((msg) => ( <div key={msg.id} className={msg.remetente === "bot" ? "msg-bot" : "msg-user"} style={{backgroundColor: msg.remetente === "bot" ? "#f1f1f1" : "#0070f3", color: msg.remetente === "bot" ? "#333" : "#fff", padding: "8px 12px", borderRadius: "5px", marginBottom: "8px", width: "fit-content", marginLeft: msg.remetente === "user" ? "auto" : "0"}} > {msg.texto} </div> ))} </div>

            {/* Formulário de Input */}
            <form id="chat-form" onSubmit={manipularEnvio} style={{ display: "flex", gap: "5px" }}>
              <input  type="text" value={inputUsuario} onChange={(e) => setInputUsuario(e.target.value)} placeholder="Chore sua mensagem..." style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />

              <button type="submit" style={{ padding: "8px 15px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}> Enviar </button>


            </form>
          </div>
          
          <b style={{ marginTop: "20px" }}> Edit <code>src/pages/index.js</code> to update this page. </b>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
