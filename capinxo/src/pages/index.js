import * as React from "react"

const IndexPage = () => {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", backgroundColor: "#f4f4f9" }}>
      <h1 style={{ color: "#663399" }}>Meu Novo Design Gatsby! 🚀</h1>
      <p style={{ fontSize: "18px", color: "#333" }}>
        Editado diretamente pelo VS Code Online no GitHub.
      </p>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>Página Inicial</title>
