var formCadastro = document.getElementById("formCadastro")
if (formCadastro){
    formCadastro.addEventListener("submit", function(event){
        event.preventDefault()
        cadastrarFerramenta(event)
        return false
    })
}
function test(){
    console.log('oii')
}
function cadastrarFerramenta(form){
    form.preventDefault();
    console.log({
        nome: form.target.nome.value,
        quantidade: form.target.quantidade.value,
        arq2d: form.target.arq2d.value,
        arq3d: form.target.arq3d.value,
    })
    const ferramenta = {
        nome: form.target.nome.value,
        quantidade: form.target.quantidade.value,
        arq2d: form.target.arq2d.value,
        arq3d: form.target.arq3d.value
    }
    
    fetch('http://localhost:3000/Ferramentas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(ferramenta)
    }).then(resposta => {
        if(resposta.status != 200 && resposta.status != 201){
            alert('Erro ao cadastrar Ferramenta!')
        }else{
            alert('Ferramenta cadastrado com sucesso')
            form.target.reset()
            atualizarFerramentas()
        }
    })
}

var formUpdate = document.getElementById("formUpdate")
formUpdate?.addEventListener("submit", function (event) {
    event.preventDefault()
    atualizarFerramenta(event)
})
function atualizarFerramentas(){
    var listaFerramentas = document.getElementById('listaFerramentas')
    if(listaFerramentas){
        listaFerramentas.innerHTML = ''
    }
    }
        const ferramentas = fetch('http://localhost:3000/Ferramentas')
        .then(resposta => resposta.json())
        .then(ferramentas => {
            ferramentas.forEach(ferramenta => {
                const li = document.createElement('li')
                li.textContent = `${ferramenta.nome} - ${ferramenta.quantidade} - ${ferramenta.arq2d} - ${ferramenta.arq3d} - Criado em: ${new Date(ferramenta.createdAt).toLocaleDateString()} - ${new Date(ferramenta.updatedAt).toLocaleDateString()}`

                const botaoExcluir = document.createElement('button')
                botaoExcluir.textContent = 'Excluir'
                botaoExcluir.className = 'button is-danger'
                botaoExcluir.addEventListener('click', () => deleteFerramenta(ferramenta.id))
                li.appendChild(botaoExcluir)

                const botaoAtualizar = document.createElement('button')
                botaoAtualizar.textContent = 'Atualizar'
                botaoAtualizar.className = 'button is-warning'
                botaoAtualizar.addEventListener('click', () => showFerramenta(ferramenta))
                li.appendChild(botaoAtualizar)

                document.getElementById('listaFerramentas').appendChild(li)
        })
    })

function atualizarFerramenta(form){
    const ferramenta = {
        nome: form.target.nomeUpdate.value,
        quantidade: form.target.quantidadeUpdate.value,
        arq2d: form.target.arq2dUpdate.value,
        arq3d: form.target.arq3dUpdate.value,
    }
        fetch(`http://localhost:3000/Ferramentas/${form.target.idUpdate.value}` ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ferramenta)
        }).then(resposta => {
            if(resposta.status != 200) {
                alert('Erro ao atualizar Ferramenta!')
            }else{
                alert('Sucesso ao atualizar Ferramenta!')
            }
            form.target.reset()
            atualizarFerramenta()
            document.getElementById('btnUpdate').disabled = false
        })
    }

function deleteFerramenta(id) {
    fetch(`http://localhost:3000/Ferramentas/${id}`,{
        method: 'DELETE'
    }).then(resposta => {
        if(resposta.status != 200){
            alert('Erro ao excluir Ferramentas!')
        }
        alert('Ferramentas excluído com sucesso')
        atualizarFerramentas()
    })
}

atualizarFerramentas()

function showFerramenta(ferramenta) {
    document.getElementById('nomeUpdate'). value = ferramenta.nome
    document.getElementById('quantidadeUpdate'). value = ferramenta.quantidade
    document.getElementById('arq2dUpdate'). value = ferramenta.arq2d
    document.getElementById('arq3dUpdate'). value = ferramenta.arq3d
    document.getElementById('idUpdate'). value = ferramenta.id
    document.getElementById('btnUpdate'). disabled = false

}
