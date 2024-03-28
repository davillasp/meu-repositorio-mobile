function menuShow( ){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    }
}

//vai fazer uma criptografia mudando as letras de lugar 
function cripto() {

    //aquilo que vai ser mandado para textarea,sera tranformado em valor 
    let text = document.getElementById('text').value
    //falou do tor que uma criptografia fatiada 
    let split = text.split("")
    //splt e a quantidade de fatias
    let chars = split.length
    //e uma array que e uma dominate 
    const pre = ['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r']

    const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
    //ele mudar as letras de lugar com base na arrey
    let rslt = document.getElementById('result')

    for (i = 0; i < chars; i++) {
        //ele sempre começa em 0 e todo valor que receber ele altera 
        let index = pre.indexOf(split[i])

        if (index === -1) {
            split[i] = split [i]
        } else {

            split[i] = pos[index]

        }
        const toString = split.join('')

        rslt.innerText = toString

        //console.log(split[i])
    }

}
// ficar de olho  nas letras maioscula e minusculas, dar espaco no (=)