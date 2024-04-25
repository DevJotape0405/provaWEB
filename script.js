const estado = ""

async function getEstado(nome) {
  
    try {
      const estado = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        return estado(nome)
      const jsonData = await nome.json()
  
      generateInfoSection(jsonData.nome)
    } catch (error) {
      console.error(error)
    }
  }

  console.log (estado.nome)