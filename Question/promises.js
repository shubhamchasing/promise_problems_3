/*

    All rejected promises should return code and reason.
    { code: 400, reason: "BadRequest" }
    All Ids [cartItemId, userId, offerId] should be 10 digit random Number.
    All file operations should happen inside a promise. 


    products.json   // Contains all available products.
    cart.json       // Contains all selected cart items for a particular user
    offers.json     // Contains all the offers.


   { "_cartItemId": quantity }   // cartItem
    
    Q.  Create login function . Should return a promise.
        Signature: Takes 2 argument username, optional type argument with default value - 0 
        type - 1 (Admins)
        type - 0 (Normal/Guest user)
        Should return a 10 digit unique user id and a userType.
        Should throw an error if username is greater than 8 characters or is undefined.

    Q.  Write a request to add Item to cart. The method should return a promise .

        The item passed to the function should be picked from products.json
        you should not end up removing the existing items.

        Signature: 
            should take a cartItem to add 
            cartItem could be 1 single or an array of items.

        Result: use the generated profile Id to add to cart.json. (use file write method)

    Q.  Write a method to help user find the most expensive item with discount 
        and add that item to cart with quantity 1.

    Q.  Write a method to help user to extract all items with its name and price information to another file 
        with each information in a separate line so that he can pass that information to his friend .

    Q. Perform all the top operations for 1 more user. 

    Q.  Write a method to allow only admins users to add Item/Items to Catalog (products.json).
        Signature - The argument passed could be an array of productItems or just a productItem
            "32490320403294032432": {                           
            "name": "Washing Machine"          
        }

        or 

        [
            { 
                "32490320403294032432": {
                "name": "Washing Machine"
                }
            }
        ]


        Method always appends data to products.json.
        Once data is added to products.json.. it is mandatory to provide corresponding price details 
        for those productIds (For price.json)

        if Any required field in either of the data format is missing.
        Throw an error 400, Bad request.



*/