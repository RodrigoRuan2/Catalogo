let imgTemps = ["https://cdn.myanimelist.net/images/anime/8/77831.jpg", "https://cdn.myanimelist.net/images/anime/2/83188.jpg",
"https://cdn.myanimelist.net/images/anime/1758/141268.jpg", "https://cdn.myanimelist.net/images/anime/1626/135844.jpg",
"https://cdn.myanimelist.net/images/anime/1638/119321.jpg"]

let nomeTemps = ["Konosuba temporada 1", "Konosuba temporada 2", "Konosuba temporada 3", "Konosuba ova 1","Filme 1"]

let linkTemps = ["https://animefire.plus/animes/kono-subarashii-sekai-ni-shukufuku-wo-todos-os-episodios",
"https://animefire.plus/animes/kono-subarashii-sekai-ni-shukufuku-wo-2-todos-os-episodios",
"https://animefire.plus/animes/kono-subarashii-sekai-ni-shukufuku-wo-3-todos-os-episodios",
"https://animefire.plus/animes/kono-subarashii-sekai-ni-bakuen-wo-todos-os-episodios",
"https://animefire.plus/animes/kono-subarashii-sekai-ni-shukufuku-wo-kurenai-densetsu-todos-os-episodios"]

for (let i = 0; i < imgTemps.length; i++) {
    document.write(`<div class='itens'><a href="${linkTemps[i]}" target='_blank'><img class='${(i === 6) ? "Konosuba ova 1" : "poster"}' src="${imgTemps[i]}"><h2 class='nomes'>${nomeTemps[i]}</h2></a></div>`);
}
