let data0 = {
    photo: 'kepek/kezdo.jpg',
    title: 'Kaprun',
    description: 'Kapruni víztározó'
};
let data1 = {
    photo: 'kepek/kep1.jpg',
    title: 'Kaprun',
    description: 'Kapruni víztározó'
};
let data2 = {
    photo: 'kepek/kep2.jpg',
    title: 'Kaprun',
    description: 'Kapruni víztározó'
};
let data3 = {
    photo: 'kepek/kep3.jpg',
    title: 'Kaprun',
    description: 'Kapruni víztározó'
};
let data4 = {
    photo: 'kepek/kep4.jpg',
    title: 'Kaprun',
    description: 'Kapruni víztározó'
};
let data5 = {
    photo: 'kepek/kep5.jpg',
    title: 'Kaprun',
    description: 'Kapruni víztározó'
};

let currentPhoto = 0;
let imagesData = [data0, data1, data2, data3, data4, data5]

$('#photo').attr('src', imagesData[currentPhoto].photo);

let loadPhoto = (photoNumber = 0) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    // ...
}
loadPhoto(currentPhoto);


$('#right-arrow').click(() => {
    if (currentPhoto < imagesData.length) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
    if ((currentPhoto <= imagesData.length) && currentPhoto!=0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length;
    }
    loadPhoto(currentPhoto);
})

