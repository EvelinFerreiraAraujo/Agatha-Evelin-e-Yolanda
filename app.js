function criaCartao(categoria, pergunta, resposta, imagem) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

       cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
                ${imagem ? `<div class="cartao__imagem"><img src="${imagem}" alt="Imagem do álbum"></div>` : ''}
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
criaCartao(
    'Álbum de fotos', 
    'Minhas memórias!', 
    '',
    'https://ci3.googleusercontent.com/mail-img-att/AGAZnRoD8e31fz4L-uWnApcqjlnjrkXkgZesBrEdwQHvpF-0XLoSCdybrqLUWzAoL34cJJwKNIJudBbiL4VkC5OvTg_lKbnkgZgI9dCIWkR6MEFKd4NLBxRvwAb52Djay5VDVgtelQmkrOyGFyfhxuZYKdaQMswjz1qJc_hQgjoLz3rhykmXWqiJLwm897q1PG4gJztxnQHsQyKtR19y1qD9Fqbq-7u6KxtPb-7xqwsXJWd5HFMqqynYR0hQiTegqeoCr_7co179C2WhLWneeJc4L-un3D6LEJIZrD0g8Inw1SqCjAGAlVVcaGK0CfHd23wN29qIgiyAVlXnS7YxnuZcKJbnKda9tf7U87qGhTC7B81r8nirhDomF_Aqb1DCXwdzrZOLcZzgoGbxVVg0m2a9gYhGErs0Aiy3of6Bb_qdh7Cgb3bjm1HrR1sNGV68l3DZXLhS0N5vxloakFrXWJwg-dHaRF02ePQm3zrvqeqNhGVOYNBj4ei8Fxvt941zuLT3ZQ_HxXXp3cG2EosoLs34NWYbDMAUOMWN17wlISbr1NATLYyDiAg5KjYd7aIq96usacbT2YXUDfqRSOtoA6P7mBvFnLqQh4tlXZJeHRULg9Djc7MFCrnc_UKbjfdD0NA2eNfQlCMsubp9vQz0Lvyhe3LXwhZvz9pnhVMN_Z1fJTjRSYNyieLDX_xlHxHP7UKLOwOXif5Xot0RLOzO32nVFp9nDhUETVVAc382zW7HqzaTxQ2yyCSs7Y5ANEdpv2pTVvulTlDzqL6J1AxfRTyDvEezDJwPp0Y1vp6A7Pzmae33HMV3MieM7in5C-FIJvWxSrnMOQZxWrE9cD0jTomXAWzzbSnws5nkBXSEVbf7sJ3B_y18vrOUWc4ejHVNxJ0PqsfIR0VJO-mmtl9Dl1wkLQxE_2PGqD5Vk4vvGdYB1Gm_ZQEQnVZzySuZve2RTh5IUD2BBMaLX5yNxa7nwEfI_YYOgPdnZkKo_fd6bKf7smVSLPhqwgbHdhLWX0r53Wg8-oYgMhJ9wnriaHkhZMDsfA=s0-l75-ft'
);
