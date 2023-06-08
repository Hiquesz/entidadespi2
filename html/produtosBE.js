var formCadastro = document.getElementById("formCadastro")
if (formCadastro){
    formCadastro.addEventListener("submit", function(event){
        event.preventDefault()
        cadastrarProduto(event)
        return false
    })
}
function test(){
    console.log('oii')
}
function cadastrarProduto(form){
    form.preventDefault();
    console.log({
        nome: form.target.nome.value,
        arq2d: form.target.arq2d.value,
        arq3d: form.target.arq3d.value,
        desc: form.target.desc.value,
    })
    const produto = {
        nome: form.target.nome.value,
        arq2d: form.target.arq2d.value,
        arq3d: form.target.arq3d.value,
        desc: form.target.desc.value,
    }
    
    fetch('http://localhost:3000/Produtos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(produto)
    }).then(resposta => {
        if(resposta.status != 200 && resposta.status != 201){
            alert('Erro ao cadastrar Produto!')
        }else{
            alert('Produto cadastrado com sucesso')
            form.target.reset()
            atualizarProdutos()
        }
    })
}

var formUpdate = document.getElementById("formUpdate")
formUpdate?.addEventListener("submit", function (event) {
    event.preventDefault()
    atualizarProduto(event)
})
function atualizarProdutos(){
    var listaProdutos = document.getElementById('listaProdutos')
    if(listaProdutos){
        listaProdutos.innerHTML = ''
    }
    }
        const produtos = fetch('http://localhost:3000/Produtos')
        .then(resposta => resposta.json())
        .then(produtos => {
            produtos.forEach(produto => {
                const li = document.createElement('li')
                li.textContent = `${produto.nome} - ${produto.arq2d} - ${produto.arq3d} - ${produto.desc} - ${produto.imagem}`

                const botaoExcluir = document.createdElement('button')
                botaoExcluir.textContent = 'Excluir'
                botaoExcluir.classname = 'btn btn-danger m-1'
                botaoExcluir.addEventListener('click', () => deleteProduto(produto.id))
                li.appendChild(botaoExcluir)

                const botaoAtualizar = document.createdElement('button')
                botaoAtualizar.textContent = 'Atualizar'
                botaoAtualizar.className = 'btn btn-warning m-1'
                botaoAtualizar.addEventListener('click', () => showProduto(produto))
                li.appendChild(botaoAtualizar)

                document.getElementById('listaProdutos').appendChild(li)
        })
    })

function atualizarProduto(form){
    const produto = {
        nome: form.target.nomeUpdate.value,
        arq2d: form.target.arq2dUpdate.value,
        arq3d: form.target.arq3dUpdate.value,
        desc: form.target.descUpdate.value,
        imagem: form.target.imagemUpdate.value
    }
        fetch(`http://localhost:3000/Produtos/${form.target.idUpdate.value}` ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        }).then(resposta => {
            if(resposta.status != 200) {
                alert('Erro ao atualizar produto!')
            }else{
                alert('Sucesso ao atualizar produto!')
            }
            form.target.reset()
            atualizarProduto()
            document.getElementById('btnUpdate').disabled = false
        })
    }

function deleteProduto(id) {
    fetch(`http://localhost:3000/Produtos/${id}`,{
        method: 'DELETE'
    }).then(resposta => {
        if(resposta.status != 200){
            alert('Erro ao excluir roduto!')
        }
        alert('Produto excluído com sucesso')
        atualizarProdutos()
    })
}

atualizarProdutos()

function showProduto(produto) {
    document.getElementById('nomeUpdate'). value = produto.nome
    document.getElementById('arq2dUpdate'). value = produto.arq2d
    document.getElementById('arq3dUpdate'). value = produto.arq3d
    document.getElementById('descUpdate'). value = produto.desc
    document.getElementById('imagemUpdate'). value = produto.imagem
    document.getElementById('idUpdate'). value = produto.id
    document.getElementById('btnUpdate'). disabled = false

}
