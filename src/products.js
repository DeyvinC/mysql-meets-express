const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '34.67.146.233',
    user: 'root',
    password: 'BuildingSoFlo',
    database: 'Commerce'
});

// const query = `SELECT * FROM Products`;

// connection.query(query, (err,results,field) => {

//     if(err){
//         console.log(err)
//     }

//     console.log(results)
// })
// const getAllProducts = async () => {
//     const query = `SELECT * FROM Products`
//     const [results, fields] = await connection.promise().query(query)
//     console.log(results)
//     return results;
// }
// getAllProducts()
//connection.end();

const createProduct = async (product) => {
    const insertQuery = `INSERT INTO Products(Description, SKU, UserId) 
    VAlUES ('${product.description}', '${product.sku}', '${product.userId}')`

    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)

    return results
}

createProduct({
    description: 'Deyvin new product',
    sku: 'Deyvin1234',
    userId: 1
});

connection.end();