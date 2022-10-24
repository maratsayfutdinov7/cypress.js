describe('Форма логина и пароля', function () {
   it('Проверка логики восстановления пароля:', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     

   })
})

describe('Позитивный кейс авторизации', function () {
   it('Проверка авторизации:', function () {
        
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     
   })
})

describe('Проверка негативного кейса', function () {
   it('Авторизация неверный пароль:', function () {
        
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio923');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     
   })
})


describe('Проверка негативного кейса', function () {
   it('Авторизация неверный логин:', function () {
        
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.german.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     
   })
})


