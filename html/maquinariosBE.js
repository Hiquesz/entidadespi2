var formCadastro = document.getElementById("formCadastro")
if (formCadastro){
    formCadastro.addEventListener("submit", function(event){
        event.preventDefault()
        cadastrarMaquinario(event)
        return false
    })
}

function cadastrarMaquinario(form){
    form.preventDefault();
    console.log({
        nome: form.target.nome.value,
    })
    const maquinario = {
        nome: form.target.nome.value,
    }
    
    fetch('http://localhost:3000/Maquinarios', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(maquinario)
    }).then(resposta => {
        if(resposta.status != 200 && resposta.status != 201){
            alert('Erro ao cadastrar Maquinario!')
        }else{
            alert('Maquinario cadastrado com sucesso')
            form.target.reset()
            atualizarMaquinarios()
        }
    })
}

var formUpdate = document.getElementById("formUpdate")
formUpdate?.addEventListener("submit", function (event) {
    event.preventDefault()
    atualizarMaquinarios(event)
})
function atualizarMaquinarios(){
    var listaMaquinarios = document.getElementById('listaMaquinarios')
    if(listaMaquinarios){
        listaMaquinarios.innerHTML = ''
    }
    }
        const maquinario = fetch('http://localhost:3000/Maquinarios')
        .then(resposta => resposta.json())
        .then(maquinarios => {
            maquinarios.forEach(maquinario => {
                const li = document.createElement('li')
                li.textContent = `${maquinario.nome} - Criado em: ${new Date(maquinario.createdAt).toLocaleDateString()} - Atualizado em: ${new Date(maquinario.updatedAt).toLocaleDateString()}`

                const botaoExcluir = document.createElement('button')
                botaoExcluir.textContent = 'Excluir'
                botaoExcluir.className = 'button is-danger'
                botaoExcluir.addEventListener('click', () => deleteMaquinario(maquinario.id))
                li.appendChild(botaoExcluir)

                const botaoAtualizar = document.createElement('button')
                botaoAtualizar.textContent = 'Atualizar'
                botaoAtualizar.className = 'button is-warning'
                botaoAtualizar.addEventListener('click', () => showMaquinario(maquinario))
                li.appendChild(botaoAtualizar)

                document.getElementById('listaMaquinarios').appendChild(li)
        })
    })

function atualizarMaquinarios(form){
    const maquinario = {
        nome: form.target.nomeUpdate.value
    }
        fetch(`http://localhost:3000/Maquinarios/${form.target.idUpdate.value}` ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(maquinario)
        }).then(resposta => {
            if(resposta.status != 200) {
                alert('Erro ao atualizar maquinario!')
            }else{
                alert('Sucesso ao atualizar maquinario!')
            }
            form.target.reset()
            atualizarMquinario()
            document.getElementById('btnUpdate').disabled = false
        })
    }

function deleteMaquinario(id) {
    fetch(`http://localhost:3000/Maquinarios/${id}`,{
        method: 'DELETE'
    }).then(resposta => {
        if(resposta.status != 200){
            alert('Erro ao excluir Maquinario!')
        }
        alert('Maquinario excluído com sucesso')
        atualizarMaquinarios()
    })
}

atualizarMaquinarios()

function showMaquinario(maquinario) {
    document.getElementById('nomeUpdate'). value = maquinario.nome
    document.getElementById('idUpdate'). value = maquinario.id
    document.getElementById('btnUpdate'). disabled = false

}