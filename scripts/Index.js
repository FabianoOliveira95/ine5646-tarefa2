const descriptions = new Description();
const dogs = [];

$(document).ready(function () {

    $('#listicle-body').hide();

    $('#btnShowDogList').click(function(){
        createDogs();
        $('#btnShowDogList').hide();
        $('#listicle-body').show();
    });
});

function createDogs(){

    // ------------------- 1 - Border Collie -------------------- //

    const bcDescription = descriptions._borderCollieDescription();
    const borderCollie = new Dog('1', 'Border Collie', bcDescription, 'images/bordercollie.jpg');
    dogs.push(borderCollie);
    $('#listicle-body').append(borderCollie._createDogItem());

    // ------------------- 2 - Poodle -------------------- //

    const pDescription = descriptions._poodleDescription();
    const poodle = new Dog('2', 'Poodle', pDescription, 'images/poodle.jpg');
    dogs.push(poodle);
    $('#listicle-body').append(poodle._createDogItem());

    // ------------------- 3 - Pastor Alemão -------------------- //

    const paDescription = descriptions._pastorAlemaoDescription();
    const pastorAlemao = new Dog('3', 'Pastor Alemão', paDescription, 'images/germanshepherd.jpg');
    dogs.push(pastorAlemao);
    $('#listicle-body').append(pastorAlemao._createDogItem());

    // ------------------- 4 - Golden Retriever -------------------- //

    const grDescription = descriptions._goldenRetrieverDescription();
    const goldenRetriever = new Dog('4', 'Golden Retriever', grDescription, 'images/goldenretriever.jpg');
    dogs.push(goldenRetriever);
    $('#listicle-body').append(goldenRetriever._createDogItem());

    // ------------------- 5 - Doberman -------------------- //

    const dDescription = descriptions._dobermanDescription();
    const doberman = new Dog('5', 'Doberman', dDescription, 'images/doberman.jpg');
    dogs.push(doberman);
    $('#listicle-body').append(doberman._createDogItem());

    // ------------------- 6 - Pastor de Shetland -------------------- //

    const psDescription = descriptions._pastorShetlandDescription();
    const pastorShetland = new Dog('6', 'Pastor de Shetland', psDescription, 'images/shetland.jpg');
    dogs.push(pastorShetland);
    $('#listicle-body').append(pastorShetland._createDogItem());

    // ------------------- 7 - Labrador Retriever -------------------- //

    const lrDescription = descriptions._labradorRetrieverDescription();
    const labrador = new Dog('7', 'Labrador Retriever', lrDescription, 'images/labrador.jpeg');
    dogs.push(labrador);
    $('#listicle-body').append(labrador._createDogItem());

    // ------------------- 8 - Papillon -------------------- //

    const pplDescription = descriptions._papillonDescription();
    const papillon = new Dog('8', 'Papillon', pplDescription, 'images/papillon.jpg');
    dogs.push(papillon);
    $('#listicle-body').append(papillon._createDogItem());

    // ------------------- 9 - Rottweiler -------------------- //

    const rDescription = descriptions._rottweilerDescription();
    const rottweiler = new Dog('9', 'Rottweiler', rDescription, 'images/rottweiler.jpg');
    dogs.push(rottweiler);
    $('#listicle-body').append(rottweiler._createDogItem());

    // ------------------- 10 - Australian Cattle Dog -------------------- //

    const acdDescription = descriptions._cattleDescription();
    const cattleDog = new Dog('10', 'Australian Cattle Dog', acdDescription, 'images/cattle.jpg');
    dogs.push(cattleDog);
    $('#listicle-body').append(cattleDog._createDogItem());
}

// ----------------------- LIKE/DISLIKE FUNCTIONS ------------------------ //

// ----------------------- BORDER COLLIE ---------------------------- //

function green1() {
    $('.green1').toggleClass('green');
    
    if(dogs[0].hasLike == false) {
        dogs[0].hasLike = true;
        $('.up1').html(1);
        dogs[0].hasDislike = false;
        $('.down1').html(0);
        $('.red1').removeClass('red');
    } else {
        dogs[0].hasLike = false;
        $('.up1').html(0);
    }
}

function red1() {
    $('.red1').toggleClass('red');
    if(dogs[0].hasDislike == true) {
        dogs[0].hasDislike = false;
        $('.down1').html(0);
    } else {
        dogs[0].hasDislike = true;
        $('.down1').html(1);
        dogs[0].hasLike = false;
        $('.up1').html(0);
        $('.green1').removeClass('green');
    }
}

// ----------------------- POODLE ---------------------------- //

function green2() {
    $('.green2').toggleClass('green');
    
    if(dogs[1].hasLike == false) {
        dogs[1].hasLike = true;
        $('.up2').html(1);
        dogs[1].hasDislike = false;
        $('.down2').html(0);
        $('.red2').removeClass('red');
    } else {
        dogs[1].hasLike = false;
        $('.up2').html(0);
    }
}

function red2() {
    $('.red2').toggleClass('red');
    if(dogs[1].hasDislike == true) {
        dogs[1].hasDislike = false;
        $('.down2').html(0);
    } else {
        dogs[1].hasDislike = true;
        $('.down2').html(1);
        dogs[1].hasLike = false;
        $('.up2').html(0);
        $('.green2').removeClass('green');
    }
}

// ----------------------- PASTOR ALEMÃO ---------------------------- //

function green3() {
    $('.green3').toggleClass('green');
    
    if(dogs[2].hasLike == false) {
        dogs[2].hasLike = true;
        $('.up3').html(1);
        dogs[2].hasDislike = false;
        $('.down3').html(0);
        $('.red3').removeClass('red');
    } else {
        dogs[2].hasLike = false;
        $('.up3').html(0);
    }
}

function red3() {
    $('.red3').toggleClass('red');
    if(dogs[2].hasDislike == true) {
        dogs[2].hasDislike = false;
        $('.down3').html(0);
    } else {
        dogs[2].hasDislike = true;
        $('.down3').html(1);
        dogs[2].hasLike = false;
        $('.up3').html(0);
        $('.green3').removeClass('green');
    }
}

// ----------------------- GOLDEN RETRIEVER ---------------------------- //

function green4() {
    $('.green4').toggleClass('green');
    
    if(dogs[3].hasLike == false) {
        dogs[3].hasLike = true;
        $('.up4').html(1);
        dogs[3].hasDislike = false;
        $('.down4').html(0);
        $('.red4').removeClass('red');
    } else {
        dogs[3].hasLike = false;
        $('.up4').html(0);
    }
}

function red4() {
    $('.red4').toggleClass('red');
    if(dogs[3].hasDislike == true) {
        dogs[3].hasDislike = false;
        $('.down4').html(0);
    } else {
        dogs[3].hasDislike = true;
        $('.down4').html(1);
        dogs[3].hasLike = false;
        $('.up4').html(0);
        $('.green4').removeClass('green');
    }
}

// ----------------------- DOBERMAN ---------------------------- //

function green5() {
    $('.green5').toggleClass('green');
    
    if(dogs[4].hasLike == false) {
        dogs[4].hasLike = true;
        $('.up5').html(1);
        dogs[4].hasDislike = false;
        $('.down5').html(0);
        $('.red5').removeClass('red');
    } else {
        dogs[4].hasLike = false;
        $('.up5').html(0);
    }
}

function red5() {
    $('.red5').toggleClass('red');
    if(dogs[4].hasDislike == true) {
        dogs[4].hasDislike = false;
        $('.down5').html(0);
    } else {
        dogs[4].hasDislike = true;
        $('.down5').html(1);
        dogs[4].hasLike = false;
        $('.up5').html(0);
        $('.green5').removeClass('green');
    }
}

// ----------------------- PASTOR DE SHETLAND ---------------------------- //

function green6() {
    $('.green6').toggleClass('green');
    
    if(dogs[5].hasLike == false) {
        dogs[5].hasLike = true;
        $('.up6').html(1);
        dogs[5].hasDislike = false;
        $('.down6').html(0);
        $('.red6').removeClass('red');
    } else {
        dogs[5].hasLike = false;
        $('.up6').html(0);
    }
}

function red6() {
    $('.red6').toggleClass('red');
    if(dogs[5].hasDislike == true) {
        dogs[5].hasDislike = false;
        $('.down6').html(0);
    } else {
        dogs[5].hasDislike = true;
        $('.down6').html(1);
        dogs[5].hasLike = false;
        $('.up6').html(0);
        $('.green6').removeClass('green');
    }
}

// ----------------------- LABRADOR RETRIEVER ---------------------------- //

function green7() {
    $('.green7').toggleClass('green');
    
    if(dogs[6].hasLike == false) {
        dogs[6].hasLike = true;
        $('.up7').html(1);
        dogs[6].hasDislike = false;
        $('.down7').html(0);
        $('.red7').removeClass('red');
    } else {
        dogs[6].hasLike = false;
        $('.up7').html(0);
    }
}

function red7() {
    $('.red7').toggleClass('red');
    if(dogs[6].hasDislike == true) {
        dogs[6].hasDislike = false;
        $('.down7').html(0);
    } else {
        dogs[6].hasDislike = true;
        $('.down7').html(1);
        dogs[6].hasLike = false;
        $('.up7').html(0);
        $('.green7').removeClass('green');
    }
}

// ----------------------- PAPILLON ---------------------------- //

function green8() {
    $('.green8').toggleClass('green');
    
    if(dogs[7].hasLike == false) {
        dogs[7].hasLike = true;
        $('.up8').html(1);
        dogs[7].hasDislike = false;
        $('.down8').html(0);
        $('.red8').removeClass('red');
    } else {
        dogs[7].hasLike = false;
        $('.up8').html(0);
    }
}

function red8() {
    $('.red8').toggleClass('red');
    if(dogs[7].hasDislike == true) {
        dogs[7].hasDislike = false;
        $('.down8').html(0);
    } else {
        dogs[7].hasDislike = true;
        $('.down8').html(1);
        dogs[7].hasLike = false;
        $('.up8').html(0);
        $('.green8').removeClass('green');
    }
}

// ----------------------- ROTTWEILER ---------------------------- //

function green9() {
    $('.green9').toggleClass('green');
    
    if(dogs[8].hasLike == false) {
        dogs[8].hasLike = true;
        $('.up9').html(1);
        dogs[8].hasDislike = false;
        $('.down9').html(0);
        $('.red9').removeClass('red');
    } else {
        dogs[8].hasLike = false;
        $('.up9').html(0);
    }
}

function red9() {
    $('.red9').toggleClass('red');
    if(dogs[8].hasDislike == true) {
        dogs[8].hasDislike = false;
        $('.down9').html(0);
    } else {
        dogs[8].hasDislike = true;
        $('.down9').html(1);
        dogs[8].hasLike = false;
        $('.up9').html(0);
        $('.green9').removeClass('green');
    }
}

// ----------------------- AUSTRALIAN CATTLE DOG ---------------------------- //

function green10() {
    $('.green10').toggleClass('green');
    
    if(dogs[9].hasLike == false) {
        dogs[9].hasLike = true;
        $('.up10').html(1);
        dogs[9].hasDislike = false;
        $('.down10').html(0);
        $('.red10').removeClass('red');
    } else {
        dogs[9].hasLike = false;
        $('.up10').html(0);
    }
}

function red10() {
    $('.red10').toggleClass('red');
    if(dogs[9].hasDislike == true) {
        dogs[9].hasDislike = false;
        $('.down10').html(0);
    } else {
        dogs[9].hasDislike = true;
        $('.down10').html(1);
        dogs[9].hasLike = false;
        $('.up10').html(0);
        $('.green10').removeClass('green');
    }
}