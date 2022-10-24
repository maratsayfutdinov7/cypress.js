describe('Авторизация', function () {
   it('Проверка работы авторизации:', function () {
        
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('tm045se@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('98test.acc.block');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');    
   })
})

