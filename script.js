/// Основное задание
const url = 'https://jsonplaceholder.typicode.com/users';

const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

const usersData = await getData(url);

const contactBox = document.querySelector('.contacts')

usersData.forEach(e => {
    const contact = document.createElement('section');
    contact.id = e.id;
    contact.classList.add('contact');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact__info');

    const contactName = document.createElement('h2');
    contactName.textContent = 'Имя: ' + e.name;
    contactName.classList.add('contact__name');

    const contactPhone = document.createElement('p');
    contactPhone.textContent = 'Телефон: ' + e.phone.split(' ')[0];
    contactPhone.classList.add('contact__phone');

    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'Почта: ' + e.email;
    contactEmail.classList.add('contact__email');

    const contactSite = document.createElement('p');
    contactSite.textContent = 'Сайт: ' + e.website;
    contactSite.classList.add('contact__site');

    contactInfo.appendChild(contactName);
    contactInfo.appendChild(contactPhone);
    contactInfo.appendChild(contactEmail);
    contactInfo.appendChild(contactSite);

    const contactInfoAdditional = document.createElement('div');
    contactInfoAdditional.classList.add('contact__info_additional');

    const contactAdress = document.createElement('div');
    contactAdress.classList.add('contact__adress');

    const contactAdressDisc = document.createElement('p');
    contactAdressDisc.textContent = 'Место жительства:';
    contactAdressDisc.classList.add('contact__desc');

    const contactAdressSity = document.createElement('p');
    contactAdressSity.textContent = 'Город: ' + e.address.city;
    contactAdressSity.classList.add('contact__phone');

    const contactAdressStreet = document.createElement('p');
    contactAdressStreet.textContent = 'Улица: ' + e.address.street;
    contactAdressStreet.classList.add('contact__email');

    const contactAdressZipcode = document.createElement('p');
    contactAdressZipcode.textContent = 'Индекс: ' + e.address.zipcode;
    contactAdressZipcode.classList.add('contact__site');

    contactAdress.appendChild(contactAdressDisc);
    contactAdress.appendChild(contactAdressSity);
    contactAdress.appendChild(contactAdressStreet);
    contactAdress.appendChild(contactAdressZipcode);

    const contactCompany = document.createElement('div');
    contactCompany.classList.add('contact__company');

    const contactCompanyDisc = document.createElement('p');
    contactCompanyDisc.textContent = 'Место работы:';
    contactCompanyDisc.classList.add('contact__desc');

    const contactCompanyName = document.createElement('p');
    contactCompanyName.textContent = 'Название: ' + e.company.name;
    contactCompanyName.classList.add('contact__company_name');

    const contactCompanyBs = document.createElement('p');
    contactCompanyBs.textContent = 'Цель: ' + e.company.bs;
    contactCompanyBs.classList.add('contact__company_bs');

    const contactCompanyCatchPhrase = document.createElement('p');
    contactCompanyCatchPhrase.textContent = 'Описание: ' + e.company.catchPhrase;
    contactCompanyCatchPhrase.classList.add('contact__company_catch-phrase');

    contactCompany.appendChild(contactCompanyDisc);
    contactCompany.appendChild(contactCompanyName);
    contactCompany.appendChild(contactCompanyBs);
    contactCompany.appendChild(contactCompanyCatchPhrase);
    contactInfoAdditional.appendChild(contactAdress);
    contactInfoAdditional.appendChild(contactCompany);

    const deleteButton = document.createElement('img');
    deleteButton.src = './img/delete.png';
    deleteButton.alt = 'delete';
    deleteButton.classList.add('delete');

    contact.appendChild(contactInfo);
    contact.appendChild(contactInfoAdditional);
    contact.appendChild(deleteButton);

    contactBox.appendChild(contact);

    localStorage.setItem(e.id, JSON.stringify(e));
});

const exitCrosses = document.querySelectorAll('.delete');
exitCrosses.forEach(item => item.addEventListener('click', function (e) {
    localStorage.removeItem(e.target.closest('.contact').id);
    e.target.closest('.contact').remove();
}));



/// Собаки
const body = document.querySelector('.dog-container')

const newDog = async (url) => {
    const dogData = await getData('https://dog.ceo/api/breeds/image/random');
    const dogImg = document.createElement('img');
    dogImg.classList.add('dog-img');
    dogImg.src = dogData.message;
    dogImg.alt = 'dog';
    body.appendChild(dogImg);
}

let timerId = setInterval(() => newDog(), 3000);
setTimeout(() => clearInterval(timerId), 30000);