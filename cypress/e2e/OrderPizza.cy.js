

describe("SANITY CHECK", ()=> {
  it("opens the app", () => {
    cy.visit("http://localhost:5173/");
    cy.url.should("contain","http://localhost:5173/")
  })
});

describe("SUCCESS", ()=> {
  it("opens the 'OrderPizza' page", ()=> {
    //arrange
    cy.get('[data-cy="route-OrderPizza"]').as('OrderPizzaLink');
    //act
    cy.get("@OrderPizzaLink").click();
    //assert
    cy.url().should("contain", "OrderPizza");
  })

  it("starts with disabled submit button", ()=> {
    //arrange
    cy.get('[data-cy="route-OrderPizza"]').as('OrderPizzaLink');
    //act
    cy.get("@OrderPizzaLink").click();
    //assert
    cy.get('[data-cy="submit-orderPizza-form"]').should("be.disabled");
  });

  it("submits form", ()=> {
    //arrange
    cy.get('[data-cy="route-OrderPizza"]').as('OrderPizzaLink');
    cy.get("@OrderPizzaLink").click();
    //act
    cy.get('[data-cy="input-size"]').first().check();
    cy.get('[data-cy="input-dough"]').first().check();
    cy.get('[data-cy="checkbox-1"]').check();
    cy.get('[data-cy="checkbox-2"]').check();
    cy.get('[data-cy="checkbox-3"]').check();
    cy.get('[data-cy="checkbox-4"]').check();
    cy.get('[data-cy="input-username"]').type("yildiz");
    cy.get('[data-cy="input-orderNote"]').type("siparis notum");
    cy.get('[data-cy="submit-orderPizza-form"]').click();
    //assert
    cy.url().should("contain", "/success");
  });
})


describe("FAIL", ()=> {
  it.only("throws 5 errors if size and dough is not checked, min 4 max 10 ek malzeme are not checked, min 3 characters isim and orderNote are not written", ()=> {
    //arrange
    cy.get('[data-cy="route-OrderPizza"]').as('OrderPizzaLink');
    cy.get("@OrderPizzaLink").click();
    //act
    cy.get('[data-cy="input-size"]').first().check();
    cy.get('[data-cy="input-size"]').first().uncheck();
    cy.get('[data-cy="input-dough"]').first().check();
    cy.get('[data-cy="input-dough"]').first().uncheck();
    cy.get('[data-cy="checkbox-1"]').check();
    cy.get('[data-cy="checkbox-1"]').uncheck();
    cy.get('[data-cy="checkbox-2"]').check();
    cy.get('[data-cy="checkbox-2"]').uncheck();
    cy.get('[data-cy="checkbox-3"]').check();
    cy.get('[data-cy="checkbox-3"]').uncheck();
    cy.get('[data-cy="checkbox-4"]').check();
    cy.get('[data-cy="checkbox-4"]').uncheck();
    cy.get('[data-cy="input-username"]').type("yil");
    cy.get('[data-cy="input-orderNote"]').type("y");
    cy.get('[data-cy="submit-orderPizza-form"]').click();
    //assert
    cy.get('[data-cy="errors"]').should("have.length",5)
    cy.contains("Please choose at least 4 and at most 10 options.").should("be.visible");
  });
})


