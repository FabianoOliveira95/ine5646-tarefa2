const descriptions = new Description();

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
    $('#listicle-body').append(borderCollie._createDogItem());

    // ------------------- 2 - Poodle -------------------- //

    const pDescription = descriptions._poodleDescription();
    const poodle = new Dog('2', 'Poodle', pDescription, 'images/poodle.jpg');
    $('#listicle-body').append(poodle._createDogItem());

    // ------------------- 3 - Pastor Alemão -------------------- //

    const paDescription = descriptions._pastorAlemaoDescription();
    const pastorAlemao = new Dog('3', 'Pastor Alemão', paDescription, 'images/germanshepherd.jpg');
    $('#listicle-body').append(pastorAlemao._createDogItem());

    // ------------------- 4 - Golden Retriever -------------------- //

    const grDescription = descriptions._goldenRetrieverDescription();
    const goldenRetriever = new Dog('4', 'Golden Retriever', grDescription, 'images/goldenretriever.jpg');
    $('#listicle-body').append(goldenRetriever._createDogItem());

    // ------------------- 5 - Doberman -------------------- //

    const dDescription = descriptions._dobermanDescription();
    const doberman = new Dog('5', 'Doberman', dDescription, 'images/doberman.jpg');
    $('#listicle-body').append(doberman._createDogItem());

    // ------------------- 6 - Pastor de Shetland -------------------- //

    const psDescription = descriptions._pastorShetlandDescription();
    const pastorShetland = new Dog('6', 'Pastor de Shetland', psDescription, 'images/shetland.jpg');
    $('#listicle-body').append(pastorShetland._createDogItem());

    // ------------------- 7 - Labrador Retriever -------------------- //

    const lrDescription = descriptions._labradorRetrieverDescription();
    const labrador = new Dog('7', 'Labrador Retriever', lrDescription, 'images/labrador.jpeg');
    $('#listicle-body').append(labrador._createDogItem());

    // ------------------- 8 - Papillon -------------------- //

    const pplDescription = descriptions._papillonDescription();
    const papillon = new Dog('8', 'Papillon', pplDescription, 'images/papillon.jpg');
    $('#listicle-body').append(papillon._createDogItem());

    // ------------------- 9 - Rottweiler -------------------- //

    const rDescription = descriptions._rottweilerDescription();
    const rottweiler = new Dog('9', 'Rottweiler', rDescription, 'images/rottweiler.jpg');
    $('#listicle-body').append(rottweiler._createDogItem());

    // ------------------- 10 - Australian Cattle Dog -------------------- //

    const acdDescription = descriptions._cattleDescription();
    const cattleDog = new Dog('10', 'Australian Cattle Dog', acdDescription, 'images/cattle.jpg');
    $('#listicle-body').append(cattleDog._createDogItem());
}